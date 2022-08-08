import path from 'path';
import fs from 'fs';
import uglifyjs from 'uglify-js';

const esbuildUglifyJsPlugin = {
    name: 'uglify-js',
    setup(build) {
        build.onEnd(result => {
            const dirname = process.cwd();
            const sourceAbsPath = path.join(dirname, build.initialOptions.outfile);
            const code = fs.readFileSync(sourceAbsPath, 'utf-8');
            const uglified = uglifyjs.minify(code, ).code; // https://github.com/mishoo/UglifyJS
            fs.writeFileSync(sourceAbsPath, uglified, 'utf8');
        })
    },
};

export default esbuildUglifyJsPlugin;