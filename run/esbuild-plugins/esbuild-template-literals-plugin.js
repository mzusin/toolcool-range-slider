import fs from 'fs';

/**
 * this plugin load template literals as string and also minifies them
 */
const esbuildTemplateLiteralsPlugin = {
  name: 'tLiterals',
  setup(build) {
    build.onLoad({ filter: /\.html.js$/ }, async (args) => {
      const source = await fs.promises.readFile(args.path, 'utf8');

      let uglified = source.replace(/(\r\n|\n|\r)/gm, ' ');
      uglified = uglified.replace(/\s\s+/g, ' ');

      return {
        contents: uglified,
        loader: 'js',
      };
    });
  },
};

export default esbuildTemplateLiteralsPlugin;
