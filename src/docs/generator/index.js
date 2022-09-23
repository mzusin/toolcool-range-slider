import path from 'path';
import fs from 'fs';
import fse from 'fs-extra';
import { compileClientSideCSS } from './client-side/css-provider.js';
import { compileClientSideScripts } from './client-side/js-provider.js';
import { configureMarkdown, initMarkDown } from './markdown-config.js'; // https://highlightjs.org
import emoji from 'markdown-it-emoji'; // https://github.com/markdown-it/markdown-it-emoji
// import classy from 'markdown-it-classy'; // https://github.com/andrey-p/markdown-it-classy
import { loadPagesConfig, renderPages } from './render/pages-provider.js';
import { collectSideMenuData, renderSideMenu } from './render/side-menu-provider.js';
import { getTimeStamp } from './common-provider.js';
import { renderSpecialPages } from './render/special-pages-provider.js';

// markdown -------------------
const md = initMarkDown();
// md.use(classy);
md.use(emoji);
configureMarkdown(md);

const init = async () => {
  const sourceRootPath = path.join(process.cwd(), './src/docs/data/pages');
  const targetRootPath = path.join(process.cwd(), './docs/pages');

  const cssTimeStamp = getTimeStamp();
  const jsTimeStamp = getTimeStamp();

  // empty destination folders
  fse.emptyDirSync(targetRootPath);
  fse.emptyDirSync(path.join(process.cwd(), './docs/css'));
  fse.emptyDirSync(path.join(process.cwd(), './docs/js'));

  // load layout
  const layoutPath = path.join(process.cwd(), './src/docs/data/layouts/page-layout.html');
  const layout = fs.readFileSync(layoutPath, 'utf8');

  // load pages config
  const pagesConfig = loadPagesConfig();

  // collect side menu data
  const sideMenuMap = new Map();
  collectSideMenuData(sourceRootPath, null, sideMenuMap);

  // render all pages in the given folder recursively - markdown to html
  renderPages(sourceRootPath, targetRootPath, {
    layout,
    sideMenuMap,
    pagesConfig,
    cssTimeStamp,
    jsTimeStamp,
  }, md);

  // render all pages like index.html
  const specialPagesLayoutPath = path.join(process.cwd(), './src/docs/data/layouts/special-page-layout.html');
  const specialPagesLayout = fs.readFileSync(specialPagesLayoutPath, 'utf8');

  renderSpecialPages(
    path.join(process.cwd(), './src/docs/data/special-pages'),
    path.join(path.join(process.cwd(), './docs')),
    {
      layout: specialPagesLayout,
      cssTimeStamp,
      jsTimeStamp,
    }
  );

  compileClientSideScripts(jsTimeStamp);
  await compileClientSideCSS(cssTimeStamp);
};

await init();