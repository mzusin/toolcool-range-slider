## Origin at Center Plugin

<div data-examples="origin-at-center"></div>

The library also has an **Origin at Center Plugin**. This plugin makes the origin of the pointer always in the center.

Download the latest [tcrs-origin-center.min.js](https://github.com/toolcool-org/toolcool-range-slider/blob/main/dist/plugins/tcrs-origin-center.min.js) script from GitHub and add it to the HTML before the **toolcool-range-slider.min.js** script.

Use the **origin-at-center="true"** attribute to enable the plugin.

```html
<tc-range-slider 
  value="60"
  origin-at-center="true"
  generate-labels="true">
</tc-range-slider>

<!-- The plugin should be included before the core library. -->
<script src="tcrs-generated-labels.min.js"></script>
<script src="tcrs-origin-center.min.js"></script>
<script src="toolcool-range-slider.min.js"></script>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider 
        value="60"
        origin-at-center="true"
        generate-labels="true"></tc-range-slider>
</div>

The plugin is also available on the [jsDelivr CND](https://www.jsdelivr.com/package/npm/toolcool-range-slider):

```html
<!-- The plugin should be included before the core library. -->
<script 
  src="https://cdn.jsdelivr.net/npm/toolcool-range-slider/dist/plugins/tcrs-origin-center.min.js"></script>
```

The plugin has an API:

```js
const $slider = document.getElementById('slider-1');
$slider.originCenterEnabled = true; // or false
```

TypeScript example:

```typescript
import { IOriginCenterPlugin } from 'toolcool-range-slider';

const $slider = document.getElementById('slider-1') as IOriginCenterPlugin;
$slider.originCenterEnabled = true; // or false
```

> :pushpin: An example page with the change event source code can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/31-origin-at-center.html).
