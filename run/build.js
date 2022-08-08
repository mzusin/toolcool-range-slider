import settings from './settings.js';
import esbuild from 'esbuild';

esbuild
    .build(settings)
    .then(result => {
        console.log('Done.');
    })
    .catch(() => process.exit(1));