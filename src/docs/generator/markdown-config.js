import MarkdownIt from 'markdown-it'; // https://github.com/markdown-it/markdown-it
import hljs from 'highlight.js';

const HTML_REPLACEMENTS = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
};

const replaceUnsafeChar = (ch) => {
  return HTML_REPLACEMENTS[ch];
};

const escapeHtml = (str) => {
  if (/[&<>"]/.test(str)) {
    return str.replace(/[&<>"]/g, replaceUnsafeChar);
  }
  return str;
};

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
          return `<pre class="hljs p-4 mb-4 rounded-md shadow-xl overflow-auto whitespace-pre-wrap text-base"><code>${ hljs.highlight(str, { language: lang, ignoreIllegals: true }).value.trim() }</code></pre>`;
        }
        catch (__) {
          // ...
        }
      }

      return '<pre class="hljs"><code>' + escapeHtml(str) + '</code></pre>';
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
  const strong_open = md.renderer.rules.strong_open || proxy;
  const blockquote_open = md.renderer.rules.blockquote_open || proxy;
  const table_open = md.renderer.rules.table_open || proxy;
  const thead_open = md.renderer.rules.thead_open || proxy;
  const tbody_open = md.renderer.rules.tbody_open || proxy;
  const tr_open = md.renderer.rules.tr_open || proxy;
  const th_open = md.renderer.rules.th_open || proxy;
  const td_open = md.renderer.rules.td_open || proxy;
  const bullet_list_open = md.renderer.rules.bullet_list_open || proxy;
  // const code_block = md.renderer.rules.code_block || proxy;

  md.use(() => {

    // <ul>
    md.renderer.rules.bullet_list_open = function(tokens, idx, options, env, self) {
      tokens[idx].attrJoin('class', 'list-disc mb-10 ml-2 pl-2 leading-8');
      return bullet_list_open(tokens, idx, options, env, self)
    };

    // <table>
    md.renderer.rules.table_open = function(tokens, idx, options, env, self) {
      tokens[idx].attrJoin('class', 'border-collapse text-sm text-slate-800 table-auto w-full mb-10 mt-4 shadow-sm rounded border border-slate-100');
      return table_open(tokens, idx, options, env, self)
    };

    // <thead>
    md.renderer.rules.thead_open = function(tokens, idx, options, env, self) {
      tokens[idx].attrJoin('class', 'text-left');
      return thead_open(tokens, idx, options, env, self)
    };

    // <tbody>
    md.renderer.rules.tbody_open = function(tokens, idx, options, env, self) {
      tokens[idx].attrJoin('class', 'bg-slate-50');
      return tbody_open(tokens, idx, options, env, self)
    };

    // <tr>
    md.renderer.rules.tr_open = function(tokens, idx, options, env, self) {
      tokens[idx].attrJoin('class', 'border-slate-200 border-b last:border-0');
      return tr_open(tokens, idx, options, env, self)
    };

    // <th>
    md.renderer.rules.th_open = function(tokens, idx, options, env, self) {
      tokens[idx].attrJoin('class', 'px-6 py-4 border-b font-medium text-slate-400 text-base');
      return th_open(tokens, idx, options, env, self)
    };

    // <td>
    md.renderer.rules.td_open = function(tokens, idx, options, env, self) {
      tokens[idx].attrJoin('class', 'px-6 py-2');
      return td_open(tokens, idx, options, env, self)
    };

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
      tokens[idx].attrJoin('class', 'text-blue-500');
      return link_open(tokens, idx, options, env, self)
    };

    // <b>
    md.renderer.rules.strong_open = function(tokens, idx, options, env, self) {
      tokens[idx].attrJoin('class', 'font-bold');
      return strong_open(tokens, idx, options, env, self)
    };

    // <blockquote>
    md.renderer.rules.blockquote_open = function(tokens, idx, options, env, self) {
      tokens[idx].attrJoin('class', 'bg-gray-100 pt-4 px-4 flex my-10 border-l-4 border-blue-300 rounded');
      return blockquote_open(tokens, idx, options, env, self)
    };

    // <code> ??
    /*md.renderer.rules.code_block = function(tokens, idx, options, env, self) {
      tokens[idx].attrJoin('class', 'mb-4');
      return code_block(tokens, idx, options, env, self)
    };*/
  });
};