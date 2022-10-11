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
    html += `<div class="text-xl my-4">${ sectionTitle }</div>`;

    // find all section links and sort them in alphanumeric order
    // before removing the beginning number with dash
    const links = Array.from(sideMenuMap.get(section));
    links.sort((item1, item2) => {
      return item1.localeCompare(item2, undefined, {
        numeric: true,
        sensitivity: 'base'
      });
    });

    for(const link of links){
      const codeName = removeNumberOnStart(link);
      const isActive = activeItem === codeName;

      // check if page titles appears in pages-config.json
      // otherwise remove dashes and apply title case
      const pagesConfigValue = pagesConfig[`${ link }.md`];
      const title = pagesConfigValue ? pagesConfigValue.title : toTitleCase(codeName);

      html += `<a href="/pages/${ codeName }.html" title="" class="mb-2 ${ isActive ? 'text-blue-500 bg-slate-100 px-4 py-2 rounded-md' : 'text-slate-500' }">${ title }</a>`;
    }
  }

  return html;
};