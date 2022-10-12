import esbuild from 'esbuild';
import path from 'path';
import { getRoot } from '../common-provider.js';

/**
 * compile client side javascript
 * @param {number} jsTimeStamp
 */
export const compileClientSideScripts = (jsTimeStamp) => {
  esbuild
    .build({
      entryPoints: [path.join(process.cwd(), './src/docs/client-side/js/index.tsx')],
      bundle: true,
      sourcemap: 'linked', // external
      minify: true,
      target: ['es6'],
      outfile: `./docs/js/index.${ jsTimeStamp }.js`,
      loader: {
        '.png': 'text',
        '.svg': 'dataurl',
      },
    })
    .then(() => {
      // console.log('Done.');
    })
    .catch(() => process.exit(1));
};