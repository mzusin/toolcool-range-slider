import path from 'path';
import fs from 'fs';
import fse from 'fs-extra';
import { compileClientSideCSS } from './client-side/css-provider.js';
import { compileClientSideScripts } from './client-side/js-provider.js';
import { configureMarkdown, initMarkDown } from './markdown-config.js'; // https://highlightjs.org
import emoji from 'markdown-it-emoji'; // https://github.com/markdown-it/markdown-it-emoji
// import classy from 'markdown-it-classy'; // https://github.com/andrey-p/markdown-it-classy
import { renderPages } from './render/pages-provider.js';
import { collectSideMenuData, renderSideMenu } from './render/side-menu-provider.js';

// markdown -------------------
const md = initMarkDown();
// md.use(classy);
md.use(emoji);
configureMarkdown(md);

const init = async () => {
  const sourceRootPath = path.join(process.cwd(), './src/docs/data/pages');
  const targetRootPath = path.join(process.cwd(), './docs/pages');

  // empty destination folder
  fse.emptyDirSync(targetRootPath);

  // load layout
  const layoutPath = path.join(process.cwd(), './src/docs/data/layouts/page-layout.html');
  const layout = fs.readFileSync(layoutPath, 'utf8');

  // collect side menu data
  const sideMenuMap = new Map();
  collectSideMenuData(sourceRootPath, null, sideMenuMap);
  const sideMenuHTML = renderSideMenu(sideMenuMap);

  // render all pages in the given folder recursively - markdown to html
  renderPages(sourceRootPath, targetRootPath, {
    layout,
    sideMenuHTML,
  }, md);

  compileClientSideScripts();
  await compileClientSideCSS();
};

await init();