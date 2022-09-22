import path from 'path';
import fs from 'fs';
import fse from 'fs-extra';
import MarkdownIt from 'markdown-it'; // https://github.com/markdown-it/markdown-it
import classy from 'markdown-it-classy'; // https://github.com/andrey-p/markdown-it-classy
import { compileClientSideCSS } from './css-provider.js';
import { compileClientSideScripts } from './js-provider.js';
import hljs from'highlight.js'; // https://highlightjs.org

const md = new MarkdownIt({
  html: true, // Enable HTML tags in source
  xhtmlOut: true, // Use '/' to close single tags (<br />).
  breaks: false, // Convert '\n' in paragraphs into <br>
  langPrefix: 'language-',  // CSS language prefix for fenced blocks. Can be
                              // useful for external highlighters.
  linkify: true, // Autoconvert URL-like text to links

  // Enable some language-neutral replacement + quotes beautification
  // For the full list of replacements, see https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.js
  typographer: true,

  // Highlighter function. Should return escaped HTML,
  // or '' if the source string is not changed and should be escaped externally.
  // If result starts with <pre... internal wrapper is skipped.
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
          hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
          '</code></pre>';
      } catch (__) {}
    }

    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
  }
});

// md.use(classy);

// https://github.com/markdown-it/markdown-it/blob/master/docs/examples/renderer_rules.md
// https://markdown-it.github.io/
const proxy = (tokens, idx, options, env, self) => self.renderToken(tokens, idx, options);
const defaultBulletListOpenRenderer = md.renderer.rules.bullet_list_open || proxy;

md.use((mdInstance) => {
  md.renderer.rules.heading_open = function(tokens, idx, options, env, self) {
    // Make your changes here ...
    tokens[idx].attrJoin('class', 'text-3xl mb-4');
    // ... then render it using the existing logic
    return defaultBulletListOpenRenderer(tokens, idx, options, env, self)
  };
});

const changeExtension = (filePath, newExtension) => {
  const basename = path.basename(filePath, path.extname(filePath));
  return path.join(path.dirname(filePath), basename + newExtension);
};

/**
 * render all pages in the given folder recursively - markdown to html
 * @param {string} sourceRootPath
 * @param {string} targetRootPath
 * @param {object} data
 */
const render = (sourceRootPath, targetRootPath, data) => {

  const items = fs.readdirSync(sourceRootPath);

  // loop through all the nested files and folders
  for (const item of items) {

    if(item === '.DS_Store') continue;

    // get the absolute file / folder path
    const sourceItemPath = path.join(sourceRootPath, item);
    const targetItemPath = path.join(targetRootPath, item);

    console.log(`Working on ${ sourceItemPath }`);

    const stat = fs.statSync( sourceItemPath );

    // in case it's a file
    if(stat.isFile()){

      const ext = path.extname(item);

      if(ext === '.md'){
        const markdown = fs.readFileSync(sourceItemPath, 'utf8');
        const html = md.render(markdown);
        const result = data.layout.replace('{% page-content %}', html);

        // write the output HTML to the destination
        fs.writeFileSync(changeExtension(targetItemPath, '.html'), result, 'utf8');
      }
    }

    // in case it's a folder - > render recursively
    else{
      render(sourceItemPath, targetItemPath, data);
    }
  }
};

const init = async () => {
  const sourceRootPath = path.join(process.cwd(), './src/docs/data/pages');
  const targetRootPath = path.join(process.cwd(), './docs/pages');

  // empty destination folder
  fse.emptyDirSync(targetRootPath);

  // load layout
  const layoutPath = path.join(process.cwd(), './src/docs/data/layouts/page-layout.html');
  const layout = fs.readFileSync(layoutPath, 'utf8');

  // render all pages in the given folder recursively - markdown to html
  render(sourceRootPath, targetRootPath, {
    layout,
  });

  compileClientSideScripts();
  await compileClientSideCSS();
};

await init();