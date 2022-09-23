import postcss from "postcss";
import tailwindcss from "tailwindcss";
import cssnano from "cssnano";
import autoprefixer from "autoprefixer";
import path from "path";
import fs from "fs";

/**
 * compile client side CSS
 * @param {number} cssTimeStamp
 * @returns {Promise<void>}
 */
export const compileClientSideCSS = async (cssTimeStamp) => {
  // defined postcss handler
  const postcssHandler = postcss([
    // postcssImport({}),
    tailwindcss({

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
    }),
    cssnano({ preset: 'default' }),
    autoprefixer,
  ]);

  const cssSourcePath = path.join(process.cwd(), './src/docs/client-side/css/index.css');
  const css = fs.readFileSync(cssSourcePath, 'utf-8');
  const cssRes = await postcssHandler.process(css, {
    from: cssSourcePath
  });

  const cssTargetPath = path.join(process.cwd(), `./docs/css/styles.${ cssTimeStamp }.css`);
  fs.writeFileSync(cssTargetPath, cssRes.css, 'utf8');
};