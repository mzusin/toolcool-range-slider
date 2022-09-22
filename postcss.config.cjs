const cssnano = require('cssnano');
const atImport = require('postcss-import');
const path = require('path');

const dependencies = [
    // { type : "dependency", file : path.resolve("/abs/path/to/file.ext") },
    { type : "dir-dependency", dir : path.resolve('/src') },
    { type : "dir-dependency", dir : path.resolve('/docs/pages') },
];

module.exports = {
    plugins: [
        atImport({}),
        require('tailwindcss')({

            // purge --------
            content: [
                './docs/**/*.html',
            ],
            theme: {

                // https://tailwindcss.com/docs/font-family
                fontFamily: {
                    roboto: '"Roboto",system-ui,-apple-system,"Segoe UI","Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'
                },
            },
            variants: {
                extend: {},
            },
            plugins: [
                ['postcss-add-dependencies', { dependencies : dependencies }],
            ],
        }),
        cssnano({ preset: 'default' }),
        require('autoprefixer'),
    ]
}