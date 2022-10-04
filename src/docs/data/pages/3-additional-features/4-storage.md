## Storage Plugin

The range slider library also supports local and session storage using a standalone **Storage Plugin**. It's used to save the selected slider value between different pages and page reloads.

Download the latest [tcrs-storage.min.js](https://github.com/toolcool-org/toolcool-range-slider/blob/main/dist/plugins/tcrs-storage.min.js) script from GitHub and add it to the HTML before the **toolcool-range-slider.min.js** script. Then use the **storage** and **storage-key** attributes to enable the plugin.

Session storage example:

```html
<tc-range-slider
  value1="30"
  value2="70"
  
  storage="session-storage" 
  storage-key="tc-range-slider-1"

  generate-labels="true">
</tc-range-slider>

<!-- The plugin should be included before the core library. -->
<script src="tcrs-storage.min.js"></script>
<script src="toolcool-range-slider.min.js"></script>
```

Change the value of the slider and then reload the page to see the plugin in action:

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
      id="slider-18"
      value1="30"
      value2="70"
      storage="session-storage" 
      storage-key="tc-range-slider-1"
      generate-labels="true"></tc-range-slider>
</div> 

The difference between **local** and **session storage** is that session storage keeps the value only during the current session, while the local storage keeps it until the user clears the browser cache.

Local storage example:

```html
<tc-range-slider
  storage="local-storage"
  storage-key="tc-range-slider-2">
</tc-range-slider>

<!-- The plugin should be included before the core library. -->
<script src="tcrs-storage.min.js"></script>
<script src="toolcool-range-slider.min.js"></script>

```

Storage properties can also be set programmatically:

```js
const $slider = document.querySelector('#slider');
$slider.storage = 'local-storage'; // 'session-storage'
$slider.storageKey = 'storage-key';
```

The plugin is also available on the [jsDelivr CND](https://www.jsdelivr.com/package/npm/toolcool-range-slider):

```html
<tc-range-slider
  storage="local-storage"
  storage-key="tc-range-slider-2">
</tc-range-slider>

<!-- The plugin should be included before the core library. -->
<script 
  src="https://cdn.jsdelivr.net/npm/toolcool-range-slider/dist/plugins/tcrs-storage.min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/toolcool-range-slider/dist/toolcool-range-slider.min.js"></script>
```

In bundlers like [Webpack](https://webpack.js.org/) and [esbuild](https://esbuild.github.io/) you can use it like this:

```js
import 'toolcool-range-slider/dist/plugins/tcrs-storage.min.js';
import 'toolcool-range-slider';

// any code here...
```

> :pushpin: An example page with the change event source code can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/9-storage.html).