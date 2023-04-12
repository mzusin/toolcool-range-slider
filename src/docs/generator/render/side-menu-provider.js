import fs from 'fs';
import path from 'path';
import { removeNumberOnStart, toTitleCase } from '../common-provider.js';

export const getPagesList = (sideMenuMap) => {
  if(!sideMenuMap) return [];

  const res = [];

  const arr = Array.from(sideMenuMap);
  arr.sort((item1, item2) => {
    return item1[0].localeCompare(item2[0], undefined, {
      numeric: true,
      sensitivity: 'base'
    });
  });

  for(const item of arr){
    const list = Array.from(item[1]);
    list.sort((item1, item2) => {
      return item1.localeCompare(item2, undefined, {
        numeric: true,
        sensitivity: 'base'
      });
    });
    for(const link of list){
      res.push(link);
    }
  }

  return res;
};

export const collectSideMenuData = (sourceRootPath, parent, sideMenuMap) => {

  const items = fs.readdirSync(sourceRootPath);

  // loop through all the nested files and folders
  for (const item of items) {

    if(item === '.DS_Store') continue;

    // get the absolute file / folder path
    const sourceItemPath = path.join(sourceRootPath, item);

    const stat = fs.statSync( sourceItemPath );

    if(stat.isFile()){
      const ext = path.extname(item);

      if(ext === '.md'){
        const set = sideMenuMap.get(parent ?? 'root') ?? new Set();
        set.add(item.replace(ext, ''));
        sideMenuMap.set(parent, set);
      }
    }
    else{
      collectSideMenuData(sourceItemPath, item, sideMenuMap);
    }
  }
};

/**
 * render side menu html
 * @param {Map<string, Set<string>>} sideMenuMap
 * @param {string} activeItem
 * @param {object} pagesConfig
 * @returns {string}
 */
export const renderSideMenu = (
    sideMenuMap,
    activeItem,
    pagesConfig
) => {

  let html = '';

  const sections = Array.from(sideMenuMap.keys());

  // sort sections (folders) in the alphanumeric order
  // before removing the beginning number with dash
  sections.sort((item1, item2) => {
    return item1.localeCompare(item2, undefined, {
      numeric: true,
      sensitivity: 'base'
    });
  });

  for(const section of sections){
    // check if section title appears in pages-config.json
    // otherwise remove dashes and apply title case
    const sectionConfigValue = pagesConfig[`${ section }`];
    const sectionTitle = sectionConfigValue ? sectionConfigValue.title : toTitleCase(removeNumberOnStart(section));

    // find all section links and sort them in alphanumeric order
    // before removing the beginning number with dash
    const links = Array.from(sideMenuMap.get(section));
    links.sort((item1, item2) => {
      return item1.localeCompare(item2, undefined, {
        numeric: true,
        sensitivity: 'base'
      });
    });
    const hasLinks = links.length > 0;

    const arrow = hasLinks ? `
        <svg data-arrow xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="#626e7f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="ml-2 rotate-90" viewBox="0 0 24 24">
          <path stroke="none" d="M0 0h24v24H0z"/>
          <path d="m7 7 5 5-5 5m6-10 5 5-5 5"/>
        </svg>
` : '';

    // add title html --------
    html += `<div class="text-xl my-4 flex items-center ${ hasLinks ? 'cursor-pointer' : '' }" ${ hasLinks ? 'data-collapsible-title data-opened="true"' : ''}>
        ${ sectionTitle } ${ arrow }
    </div>`;

    if(hasLinks){
      html += '<div class="flex flex-col" data-links>';

      for(let i= 0; i<links.length; i++){
        const link = links[i];
        const codeName = removeNumberOnStart(link);
        const isActive = activeItem === codeName;
        const isLastLink = i === links.length - 1;

        // check if page titles appears in pages-config.json
        // otherwise remove dashes and apply title case
        const pagesConfigValue = pagesConfig[`${ link }.md`];
        const title = pagesConfigValue ? pagesConfigValue.title : toTitleCase(codeName);

        html += `<a href="/pages/${ codeName }.html" title="" class="pl-3 border-l border-slate-150 ${ isLastLink ? '' : 'pb-2' } ${ isActive ? 'text-sky-500' : 'text-slate-500' }">${ title }</a>`;
      }

      html += '</div>';
    }
  }

  return html;
};