import { removeNumberOnStart } from '../common-provider.js';
import fs from 'fs';
import path from 'path';

export const renderSitemap = (rootPath, pagesList) => {
  let siteMap = 'https://range-slider.toolcool.org\n';

  for(const link of pagesList){
    const formatted = `https://range-slider.toolcool.org/pages/${ removeNumberOnStart(link) }.html\n`;
    siteMap += formatted;
  }

  const targetFilePath = path.join(rootPath, 'sitemap.txt')
  fs.writeFileSync(targetFilePath, siteMap, 'utf8');
};