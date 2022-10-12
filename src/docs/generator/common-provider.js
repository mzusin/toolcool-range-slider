import path from 'path';
import appRoot from 'app-root-path';
import fs from 'fs';

export const changeExtension = (filePath, newExtension) => {
  const basename = path.basename(filePath, path.extname(filePath));
  return path.join(path.dirname(filePath), basename + newExtension);
};

export const removeNumberOnStart = (fileName) => {
  let result = fileName;

  const index = fileName.indexOf('-');
  if(index !== -1){
    result = result.substring(index + 1);
  }

  return result;
};

export const toTitleCase = (str) => {
  str = str.replaceAll('-', ' ');

  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
};

export const getTimeStamp = () => {
  return new Date().getTime();
};

export const getRoot = () => {
  const userRoot = appRoot.path;
  const docsModuleRoot = path.join(userRoot, 'node_modules/markdown-documentation-maker');
  return fs.existsSync(docsModuleRoot) ? docsModuleRoot : userRoot;
};