import pcssPlugin from './esbuild-plugins/esbuild-pcss-plugin.js';
import esbuildCopyPlugin from './esbuild-plugins/esbuild-copy-plugin.js';
import fs from 'fs';
import path from 'path';

const packageJson = fs.readFileSync(path.join(process.cwd(), './package.json'), 'utf-8');
let version = '1.0.1';

try {
  const parsed = JSON.parse(packageJson);
  version = parsed.version;
} catch (ex) {}

export default {
  entryPoints: ['./src/index.ts'],
  bundle: true,
  sourcemap: 'external',
  minify: true,
  target: ['es6'],
  outfile: './examples/js/toolcool-range-slider.min.js',
  loader: {
    '.png': 'text',
    '.svg': 'dataurl',
    '.pcss': 'text',
  },
  plugins: [pcssPlugin, esbuildCopyPlugin],
  banner: {
    js: `// Tool Cool Range Slider v${version}, MIT License - https://github.com/toolcool-org/toolcool-range-slider`,
  },
};
