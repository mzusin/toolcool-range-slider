import fs from 'fs';
import path from 'path';
import { removeNumberOnStart, toTitleCase } from '../common-provider.js';

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
 * @returns {string}
 */
export const renderSideMenu = (sideMenuMap) => {
  let html = '';

  const sections = Array.from(sideMenuMap.keys());

  sections.sort((item1, item2) => {
    return item1.localeCompare(item2, undefined, {
      numeric: true,
      sensitivity: 'base'
    });
  });

  for(const section of sections){
    html += `<div class="text-xl mb-4">${ toTitleCase(removeNumberOnStart(section)) }</div>`;

    const links = Array.from(sideMenuMap.get(section));
    links.sort((item1, item2) => {
      return item1.localeCompare(item2, undefined, {
        numeric: true,
        sensitivity: 'base'
      });
    });

    for(const link of links){
      const codeName = removeNumberOnStart(link);
      html += `<a href="/pages/${ codeName }" title="" class="mb-2 text-blue-500 underline">${ toTitleCase(codeName) }</a>`;
    }
  }

  return html;
};