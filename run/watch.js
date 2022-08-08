import settings from './settings.js';
import esbuild from 'esbuild';

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

esbuild
    .build(settings)
    .then(result => {
        console.log('Watching...');
    })
    .catch(() => process.exit(1));