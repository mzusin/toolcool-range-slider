import path from 'path';
import fs from 'fs';
import uglifyjs from 'uglify-js';

const esbuildUglifyJsPlugin = {
  name: 'uglify-js',
  setup(build) {
    build.onEnd((result) => {
      const dirname = process.cwd();
      const sourceAbsPath = path.join(dirname, build.initialOptions.outfile);
      const code = fs.readFileSync(sourceAbsPath, 'utf-8');
      const uglified = uglifyjs.minify(code, {
        warnings: true,
        compress: {
          passes: 2,
        },
      }); // https://github.com/mishoo/UglifyJS

      if (uglified.warnings) {
        console.log('Warnings:');
        console.log(uglified.warnings);
      }

      if (uglified.error) {
        console.log('Errors:');
        console.log(uglified.error);
      }

      console.log(uglified.code);

      fs.writeFileSync(sourceAbsPath, uglified.code, 'utf8');
    });
  },
};

export default esbuildUglifyJsPlugin;
