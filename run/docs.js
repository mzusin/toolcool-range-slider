import esbuild from 'esbuild';

const settings = {
  entryPoints: ['./src/docs/client-side/js/index.tsx'],
  bundle: true,
  sourcemap: 'linked', // external
  minify: true,
  target: ['es6'],
  outfile: './docs/js/index.js',
  loader: {
    '.png': 'text',
    '.svg': 'dataurl',
  },
  banner: {
    js: `/* 
Tool Cool Range Slider Documentation
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
