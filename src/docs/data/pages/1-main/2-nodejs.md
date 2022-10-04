## Node.js & JavaScript Bundlers

Range slider may also be included as a [node module](https://www.npmjs.com/package/toolcool-range-slider) using npm:

```js
npm i toolcool-range-slider
```

or with Yarn:

```js
yarn add toolcool-range-slider
```

And then you can include it in your application like this:

```js
import 'toolcool-range-slider';
```

> NPM package can fe found [here](https://www.npmjs.com/package/toolcool-range-slider).

You can also include [additional plugins](/pages/plugins.html), for example:

```js
import 'toolcool-range-slider/dist/plugins/tcrs-storage.min.js';
import 'toolcool-range-slider';

// any code here...
```

> **Important**: the plugin script should be included BEFORE the core script.

> You can find an example project of slider with Webpack 5 [here](https://github.com/toolcool-org/toolcool-range-slider-webpack-5).
