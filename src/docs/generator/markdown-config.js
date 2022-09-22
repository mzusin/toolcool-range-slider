import MarkdownIt from 'markdown-it'; // https://github.com/markdown-it/markdown-it
import hljs from 'highlight.js';

export const initMarkDown = () => {
  return new MarkdownIt({
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
    highlight: (str, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return `<pre class="hljs p-4 mb-4 rounded-md shadow-xl"><code>${ hljs.highlight(str, { language: lang, ignoreIllegals: true }).value }</code></pre>`;
        }
        catch (__) {}
      }

      return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
    }
  });
};

export const configureMarkdown = (md) => {

  // https://github.com/markdown-it/markdown-it/blob/master/docs/examples/renderer_rules.md
  // https://markdown-it.github.io/
  const proxy = (tokens, idx, options, env, self) => self.renderToken(tokens, idx, options);

  const heading_open = md.renderer.rules.heading_open || proxy;
  const paragraph_open = md.renderer.rules.paragraph_open || proxy;
  const link_open = md.renderer.rules.link_open || proxy;
  // const code_block = md.renderer.rules.code_block || proxy;

  md.use((mdInstance) => {
    // <h1>
    md.renderer.rules.heading_open = function(tokens, idx, options, env, self) {
      tokens[idx].attrJoin('class', 'text-3xl mb-8');
      return heading_open(tokens, idx, options, env, self)
    };

    // <p>
    md.renderer.rules.paragraph_open = function(tokens, idx, options, env, self) {
      tokens[idx].attrJoin('class', 'mb-4');
      return paragraph_open(tokens, idx, options, env, self)
    };

    // <a>
    md.renderer.rules.link_open = function(tokens, idx, options, env, self) {
      tokens[idx].attrJoin('class', 'text-blue-600 underline');
      return link_open(tokens, idx, options, env, self)
    };

    // <code> ??
    /*md.renderer.rules.code_block = function(tokens, idx, options, env, self) {
      tokens[idx].attrJoin('class', 'mb-4');
      return code_block(tokens, idx, options, env, self)
    };*/
  });
};