import path from 'path';
import fs from 'fs';
import fse from 'fs-extra';
import { compileClientSideCSS } from './client-side/css-provider.js';
import { compileClientSideScripts } from './client-side/js-provider.js';
import { configureMarkdown, initMarkDown } from './markdown-config.js'; // https://highlightjs.org
import emoji from 'markdown-it-emoji'; // https://github.com/markdown-it/markdown-it-emoji
import markdownItAnchor from 'markdown-it-anchor'; // https://github.com/valeriangalliat/markdown-it-anchor
import { loadConfig, renderPages } from './render/pages-provider.js';
import { collectSideMenuData, getPagesList } from './render/side-menu-provider.js';
import { getTimeStamp } from './common-provider.js';
import { renderSpecialPages } from './render/special-pages-provider.js';
import { renderSitemap } from './render/sitemap-provider.js';
import slugify from '@sindresorhus/slugify';

export const DATA_FOLDER = path.join(process.cwd(), './src/docs/data');
export const OUTPUT_FOLDER = path.join(process.cwd(), './docs');

// markdown -------------------
const md = initMarkDown();
md.use(emoji);
md.use(markdownItAnchor, {
  slugify: s => slugify(s),
  permalink: markdownItAnchor.permalink.linkInsideHeader({
    symbol: `
      <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24">
    <path stroke="none" d="M0 0h24v24H0z"/>
    <path d="M10 14a3.5 3.5 0 0 0 5 0l4-4a3.5 3.5 0 0 0-5-5l-.5.5"/>
    <path d="M14 10a3.5 3.5 0 0 0-5 0l-4 4a3.5 3.5 0 0 0 5 5l.5-.5"/>
    </svg>
    `,
    placement: 'before'
  })
});
configureMarkdown(md);

const init = async () => {
  const sourceRootPath = path.join(DATA_FOLDER, './pages');
  const targetRootPath = path.join(OUTPUT_FOLDER, './pages');

  const cssTimeStamp = getTimeStamp();
  const jsTimeStamp = getTimeStamp();

  // empty destination folders
  fse.emptyDirSync(targetRootPath);
  fse.emptyDirSync(path.join(OUTPUT_FOLDER, './css'));
  fse.emptyDirSync(path.join(OUTPUT_FOLDER, './js'));

  // load layout
  const layoutPath = path.join(DATA_FOLDER, './layouts/page-layout.html');
  const layout = fs.readFileSync(layoutPath, 'utf8');

  // load config files
  const mainConfig = loadConfig(path.join(DATA_FOLDER, './config.json'));
  const pagesConfig = loadConfig(path.join(DATA_FOLDER, './pages/pages-config.json'));

  // collect side menu data
  const sideMenuMap = new Map();
  collectSideMenuData(sourceRootPath, null, sideMenuMap);

  // pages list is used for prev / next section at the bottom of the pages
  const pagesList = getPagesList(sideMenuMap);

  // render all pages in the given folder recursively - markdown to html
  renderPages(sourceRootPath, targetRootPath, {
    layout,
    sideMenuMap,
    pagesConfig,
    cssTimeStamp,
    jsTimeStamp,
    pagesList,
    mainConfig,
  }, md);

  // render all pages like index.html
  const specialPagesLayoutPath = path.join(DATA_FOLDER, './layouts/special-page-layout.html');
  const specialPagesLayout = fs.readFileSync(specialPagesLayoutPath, 'utf8');

  renderSpecialPages(
    path.join(DATA_FOLDER, './special-pages'),
    path.join(OUTPUT_FOLDER),
    {
      layout: specialPagesLayout,
      cssTimeStamp,
      jsTimeStamp,
      mainConfig,
    }
  );

  // render sitemap
  renderSitemap(
    path.join(OUTPUT_FOLDER),
    pagesList
  );

  compileClientSideScripts(jsTimeStamp);
  await compileClientSideCSS(cssTimeStamp);
};

await init();