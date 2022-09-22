import esbuild from "esbuild";

export const compileClientSideScripts = () => {
  esbuild
    .build({
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
    })
    .then(result => {
      // console.log('Done.');
    })
    .catch(() => process.exit(1));
};