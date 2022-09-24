import esbuild from "esbuild";

/**
 * compile client side javascript
 * @param {number} jsTimeStamp
 */
export const compileClientSideScripts = (jsTimeStamp) => {
  esbuild
    .build({
      entryPoints: ['./src/docs/client-side/js/index.tsx'],
      bundle: true,
      sourcemap: 'linked', // external
      minify: true,
      target: ['es6'],
      outfile: `./docs/js/index.${ jsTimeStamp }.js`,
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
    .then(() => {
      // console.log('Done.');
    })
    .catch(() => process.exit(1));
};