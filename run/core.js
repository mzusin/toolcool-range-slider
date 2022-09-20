import esbuild from 'esbuild';
import pcssPlugin from './esbuild-plugins/esbuild-pcss-plugin.js';
import esbuildTemplateLiteralsPlugin from './esbuild-plugins/esbuild-template-literals-plugin.js';
import fs from 'fs';
import path from 'path';

const packageJson = fs.readFileSync(path.join(process.cwd(), './package.json'), 'utf-8');
let version = '1.0.1';

try {
  const parsed = JSON.parse(packageJson);
  version = parsed.version;
} catch (ex) {}

const settings = {
  entryPoints: ['./src/core/index.ts'],
  bundle: true,
  sourcemap: 'linked', // external
  minify: true,
  target: ['es6'],
  outfile: './dist/toolcool-range-slider.min.js',
  loader: {
    '.png': 'text',
    '.svg': 'dataurl',
  },
  plugins: [pcssPlugin, esbuildTemplateLiteralsPlugin],
  banner: {
    js: `/* 
Tool Cool Range Slider 
Version: ${version}
Documentation: https://github.com/toolcool-org/toolcool-range-slider 
License: MIT License        
Author: Tool Cool, toolcool.org@gmail.com>                          
*/`,
  },
};

const args = process.argv.slice(2);
const watch = args.length > 1 && args[1].trim().toLowerCase() === 'watch';

if(watch){
  // ------------- watch ---------------
  settings.watch = {
    onRebuild(error, result) {

      if (error){
        // console.error(error);
      }
      else {
        console.log('Succeeded.');
      }
    },
  };
}

esbuild
  .build(settings)
  .then(result => {
    console.log(watch ? 'Watching...' : 'Done.');
  })
  .catch(() => process.exit(1));
