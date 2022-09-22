import fs from 'fs';
import path from 'path';
import fse from 'fs-extra';
import { changeExtension, removeNumberOnStart } from '../common-provider.js';

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

    console.log(`Working on ${ sourceItemPath }`);

    const stat = fs.statSync( sourceItemPath );

    // in case it's a file
    if(stat.isFile()){

      const ext = path.extname(item);

      if(ext === '.md'){
        const markdown = fs.readFileSync(sourceItemPath, 'utf8');
        const html = md.render(markdown);
        const result = data.layout.replace('{% page-content %}', html).replace('{% side-menu %}', data.sideMenuHTML);

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