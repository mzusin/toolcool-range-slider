import path from 'path';
import fs from 'fs';
import fse from 'fs-extra';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

const changeExtension = (filePath, newExtension) => {
  const basename = path.basename(filePath, path.extname(filePath));
  return path.join(path.dirname(filePath), basename + newExtension);
};

/**
 * render all pages in the given folder recursively - markdown to html
 * @param {string} sourceRootPath
 * @param {string} targetRootPath
 * @param {object} data
 */
const render = (sourceRootPath, targetRootPath, data) => {

  const items = fs.readdirSync(sourceRootPath);

  // loop through all the nested files and folders
  for (const item of items) {

    if(item === '.DS_Store') continue;

    // get the absolute file / folder path
    const sourceItemPath = path.join(sourceRootPath, item);
    const targetItemPath = path.join(targetRootPath, item);

    console.log(`Working on ${ sourceItemPath }`);

    const stat = fs.statSync( sourceItemPath );

    // in case it's a file
    if(stat.isFile()){

      const ext = path.extname(item);

      if(ext === '.md'){
        const markdown = fs.readFileSync(sourceItemPath, 'utf8');
        const html = md.render(markdown);
        const result = data.layout.replace('{% page-content %}', html);

        // write the output HTML to the destination
        fs.writeFileSync(changeExtension(targetItemPath, '.html'), result, 'utf8');
      }
    }

    // in case it's a folder - > render recursively
    else{
      render(sourceItemPath, targetItemPath, data);
    }
  }
};

const init = () => {
  const sourceRootPath = path.join(process.cwd(), './src/docs/data/pages');
  const targetRootPath = path.join(process.cwd(), './docs/pages');

  // empty destination folder
  fse.emptyDirSync(targetRootPath);

  // load layout
  const layoutPath = path.join(process.cwd(), './src/docs/data/layouts/page-layout.html');
  const layout = fs.readFileSync(layoutPath, 'utf8');

  // render all pages in the given folder recursively - markdown to html
  render(sourceRootPath, targetRootPath, {
    layout,
  });
};

init();