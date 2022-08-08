import path from 'path';
import fs from 'fs';

const esbuildCopyPlugin = {
    name: 'copy',
    setup(build) {
        build.onEnd(result => {
            const dirname = process.cwd();
            const sourceAbsPath = path.join(dirname, build.initialOptions.outfile);
            const fileName = path.basename(build.initialOptions.outfile);

            const distAbsPath = path.join(dirname, '/dist/', fileName);
            fs.cpSync(sourceAbsPath, distAbsPath,{
                recursive: true,
                force: true,
                dereference: true
            });

            const distAbsPathMap = path.join(dirname, '/dist/', `${ fileName }.map`);
            fs.cpSync(sourceAbsPath, distAbsPathMap,{
                recursive: true,
                force: true,
                dereference: true
            });

            const testAbsPath = path.join(dirname, '/test/', fileName);
            fs.cpSync(sourceAbsPath, testAbsPath,{
                recursive: true,
                force: true,
                dereference: true
            });

            const testAbsPathMap = path.join(dirname, '/test/', `${ fileName }.map`);
            fs.cpSync(sourceAbsPath, testAbsPathMap,{
                recursive: true,
                force: true,
                dereference: true
            });
        })
    },
};

export default esbuildCopyPlugin;