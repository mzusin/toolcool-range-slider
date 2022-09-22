import path from 'path';
import fs from 'fs';
import fse from 'fs-extra';
import MarkdownIt from 'markdown-it'; // https://github.com/markdown-it/markdown-it
import esbuild from 'esbuild';
import postcss from 'postcss';
import cssnano from 'cssnano';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const md = new MarkdownIt();

const changeExtension = (filePath, newExtension) => {
  const basename = path.basename(filePath, path.extname(filePath));
  return path.join(path.dirname(filePath), basename + newExtension);
};

const compileClientSideScripts = () => {
  esbuild
    .build({
      entryPoints: ['./src/docs/client-side/js/index.tsx'],
      bundle: true,
      sourcemap: 'linked', // external
      minify: true,
      target: ['es6'],
      outfile: './docs/js/index.js',
      loader: {
        '.png': 'text',
        '.svg': 'dataurl',
      },
      banner: {
        js: `/* 
Tool Cool Range Slider Documentation
Author: Tool Cool, toolcool.org@gmail.com>                          
*/`,
      },
    })
    .then(result => {
      console.log('Done.');
    })
    .catch(() => process.exit(1));
};

const compileClientSideCSS = async () => {
  // defined postcss handler
  const postcssHandler = postcss([
    // postcssImport({}),
    tailwindcss({

      // purge --------
      content: [
        './docs/**/*.html',
      ],
      theme: {

        // https://tailwindcss.com/docs/font-family
        fontFamily: {
          roboto: '"Roboto",system-ui,-apple-system,"Segoe UI","Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'
        },
      },
      variants: {
        extend: {},
      },
    }),
    cssnano({ preset: 'default' }),
    autoprefixer,
  ]);

  const cssSourcePath = path.join(process.cwd(), './src/docs/client-side/css/index.css');
  const css = fs.readFileSync(cssSourcePath, 'utf-8');
  const cssRes = await postcssHandler.process(css, {
    from: cssSourcePath
  });

  const cssTargetPath = path.join(process.cwd(), './docs/css/styles.css');
  fs.writeFileSync(cssTargetPath, cssRes.css, 'utf8');
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

init();