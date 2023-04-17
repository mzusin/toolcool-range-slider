import fs from 'fs';
import path from 'path';
import fse from 'fs-extra';
import { changeExtension, removeNumberOnStart, toTitleCase } from '../common-provider.js';
import { renderSideMenu } from './side-menu-provider.js';
import { setMacros } from './macros-provider.js';

export const loadConfig = (configPath) => {
  const content = fs.readFileSync(configPath, 'utf8');
  let json = null;

  try{
    json = JSON.parse(content);
  }
  catch (ex){
    // ...
  }

  return json;
};

const renderPrevNext = (pagesList, currentPage, pagesConfig) => {
  if(!pagesList || !currentPage) return '';
  //console.log(sideMenuMap, currentPage, sideMenuMap[currentPage]);

  const index = pagesList.findIndex(item => removeNumberOnStart(item) === currentPage);
  if(index === -1) return '';

  let html = '';
  html += `<div class="w-800 max-w-full mx-auto grid ${ (index > 0 && index < pagesList.length - 1 ) ? 'lg:grid-cols-2': '' } gap-8 items-center text-slate-500">`;

  if(index > 0){

    const link = pagesList[index - 1];
    const prev = removeNumberOnStart(link);
    let title = pagesConfig[`${ link }.md`] ? pagesConfig[`${ link }.md`].title : toTitleCase(prev);

    html += `
<div class="flex justify-between items-start border border-slate-200 dark:border-slate-600 rounded p-4">
  <a href="/pages/${ prev }.html" title="" class="mr-4 hover:text-blue-500">
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24">
    <path stroke="none" d="M0 0h24v24H0z"/>
    <path d="M5 12h14M5 12l6 6m-6-6 6-6"/>
  </svg>
  </a>
  <div class="flex flex-col items-end justify-center">
    <div class="mb-2 text-sm text-slate-300">Previous</div>
    <a href="/pages/${ prev }.html" title="" class="hover:text-blue-500">${ title }</a>
  </div>
</div>      
    `;
  }

  if(index < pagesList.length - 1){
    const link = pagesList[index + 1];
    const next = removeNumberOnStart(link);
    let title = pagesConfig[`${ link }.md`] ? pagesConfig[`${ link }.md`].title : toTitleCase(next);

    html += `
<div class="flex justify-between items-start border border-slate-200 dark:border-slate-600 rounded p-4">
  
  <div class="flex flex-col justify-center">
    <div class="mb-2 text-sm text-slate-300">Next</div>
    <a href="/pages/${ next }.html" title="" class="hover:text-blue-500">${ title }</a>
  </div>
  
  <a href="/pages/${ next }.html" title="" class="mr-4 hover:text-blue-500">
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24">
     <path stroke="none" d="M0 0h24v24H0z"/>
     <path d="M5 12h14m-6 6 6-6m-6-6 6 6"/>
  </svg>
  </a>
</div>  
    `;
  }

  html += '</div>';

  return html;
};

/**
 * render all pages in the given folder recursively - markdown to html
 * @param {string} sourceRootPath
 * @param {string} targetRootPath
 * @param {object} data
 * @param {object} md
 */
export const renderPages = (sourceRootPath, targetRootPath, data, md) => {

  const items = fs.readdirSync(sourceRootPath);

  // loop through all the nested files and folders
  for (const item of items) {

    if(item === '.DS_Store') continue;

    // get the absolute file / folder path
    const sourceItemPath = path.join(sourceRootPath, item);
    const targetItemPath = path.join(targetRootPath, removeNumberOnStart(item));

    // console.log(`Working on ${ sourceItemPath }`);

    const stat = fs.statSync( sourceItemPath );

    // in case it's a file
    if(stat.isFile()){

      const ext = path.extname(item);

      if(ext === '.md'){
        const markdown = fs.readFileSync(sourceItemPath, 'utf8');
        const html = md.render(markdown);

        const current = removeNumberOnStart(item).replace('.md', '');

        // render side menu HTML - pass there the current page to mark it as active
        const sideMenuHTML = renderSideMenu(
          data.sideMenuMap,
          current,
          data.pagesConfig
        );

        let result = data.layout.replace('{% page-content %}', html);
        result = result.replaceAll('{% side-menu %}', sideMenuHTML);
        result = setMacros(result, data);

        // render prev / next section
        const prevNextHTML = renderPrevNext(data.pagesList, current, data.pagesConfig);
        result = result.replaceAll('{% prev-next %}', prevNextHTML);

        // write the output HTML to the destination
        const targetFilePath = changeExtension(targetItemPath, '.html');
        fse.ensureFileSync(targetFilePath);
        fs.writeFileSync(targetFilePath, result, 'utf8');
      }
    }

    // in case it's a folder - > render recursively
    else{
      renderPages(sourceItemPath, targetRootPath, data, md);
    }
  }
};