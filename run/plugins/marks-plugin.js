import esbuild from 'esbuild';

const VERSION = '1.0.1';

const settings = {
  entryPoints: ['./src/plugins/marks-plugin/index.ts'],
  bundle: true,
  sourcemap: 'external',
  minify: true,
  target: ['es6'],
  outfile: './dist/plugins/tcrs-marks.min.js',
  banner: {
    js: `/* 
Tool Cool Range Slider - Marks Plugin
Version: ${ VERSION }
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
