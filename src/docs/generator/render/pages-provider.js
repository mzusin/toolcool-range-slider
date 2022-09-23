import fs from 'fs';
import path from 'path';
import fse from 'fs-extra';
import { changeExtension, removeNumberOnStart } from '../common-provider.js';
import { renderSideMenu } from './side-menu-provider.js';

export const loadPagesConfig = () => {
  const configPath = path.join(process.cwd(), './src/docs/data/pages/pages-config.json');
  const content = fs.readFileSync(configPath, 'utf8');
  let json = null;

  try{
    json = JSON.parse(content);
  }
  catch (ex){}

  return json;
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

        // render side menu HTML - pass there the current page to mark it as active
        const sideMenuHTML = renderSideMenu(
          data.sideMenuMap,
          removeNumberOnStart(item).replace('.md', ''),
          data.pagesConfig
        );

        let result = data.layout.replace('{% page-content %}', html);
        result = result.replace('{% side-menu %}', sideMenuHTML);
        result = result.replace('{% css-hash %}', data.cssTimeStamp);
        result = result.replace('{% js-hash %}', data.jsTimeStamp);

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