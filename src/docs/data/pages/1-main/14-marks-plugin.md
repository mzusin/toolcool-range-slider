## Marks Plugin

<div data-examples="marks-plugin"></div>

Range slider library has a standalone **Marks Plugin**. This allows to generate points along the slider.

Download the latest [tcrs-marks.min.js](https://github.com/toolcool-org/toolcool-range-slider/blob/main/dist/plugins/tcrs-marks.min.js) script from GitHub and add it to the HTML before the **toolcool-range-slider.min.js** script.

And then add the **marks="true"** attribute to see it in action. Check out the following basic example:

```html
<tc-range-slider
  marks="true"
  marks-count="11"
  marks-values-count="31"

  value1="30"
  value2="70"
  step="3.33"

  round="0"
  generate-labels="true">
</tc-range-slider>

<!-- The plugin should be included before the core library. -->
<script src="tcrs-marks.min.js"></script>
<script src="toolcool-range-slider.min.js"></script>
```
 
<div class="my-24 flex flex-col items-center">
    <tc-range-slider 
      marks="true"
      marks-count="31"
      marks-values-count="11"
      value1="30"
      value2="70"
      step="3.33"
      round="0"
      generate-labels="true"
      slider-width="400px">
    </tc-range-slider>
</div>

The plugin is also available on the [jsDelivr CND](https://www.jsdelivr.com/package/npm/toolcool-range-slider):

```html
<tc-range-slider
  value1="20"
  value2="50"
  value3="80"
  
  marks="true"
  marks-step="5">
</tc-range-slider>

<!-- The plugin should be included before the core library. -->
<script 
  src="https://cdn.jsdelivr.net/npm/toolcool-range-slider/dist/plugins/tcrs-marks.min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/toolcool-range-slider/dist/toolcool-range-slider.min.js"></script>
```

In bundlers like [Webpack](https://webpack.js.org/) and [esbuild](https://esbuild.github.io/) you can use it like this:

```js
import 'toolcool-range-slider/dist/plugins/tcrs-marks.min.js';
import 'toolcool-range-slider';

// any code here...
```

| HTML Property      | Default Value | API Property     |
|--------------------|---------------|------------------|
| marks              | true          | marksEnabled     |
| marks-count        | 11            | marksCount       | 
| marks-values-count | 11            | marksValuesCount | 
| marks-color        | #cbd5e1       | marksColor       | 
| marks-values-color | #475569       | markValuesColor  | 

  
> :pushpin: You can add your own css customizations using [CSS Links](/pages/css-links.html) or using [addCSS](/pages/add-css-api.html) API.

Example with different min/max:
  
```html
<tc-range-slider
  marks="true"
  marks-count="11"
  marks-values-count="11"

  min="-100"
  max="100"

  value="0"
  step="20"

  round="0"
  generate-labels="true">
</tc-range-slider>

<!-- The plugin should be included before the core library. -->
<script src="tcrs-marks.min.js"></script>
<script src="toolcool-range-slider.min.js"></script>
```

<div class="my-24 flex flex-col items-center">
    <tc-range-slider 
      marks="true"
      marks-count="11"
      marks-values-count="11"
      min="-100"
      max="100"
      value="0"
      step="20"
      round="0"
      generate-labels="true"
      slider-width="400px">
    </tc-range-slider>
</div>

```js
const $slider = document.getElementById('slider-1');
$slider.marksEnabled = true; // or false
$slider.marksCount = 11;
$slider.marksValuesCount = 11;
$slider.marksColor = '#ff0000';
$slider.markValuesColor = '#111';
```

TypeScript example:

```typescript
import { IMarksPlugin } from 'toolcool-range-slider';

const $slider = document.getElementById('slider-1') as IMarksPlugin;

$slider.marksEnabled = true; // or false
$slider.marksCount = 11;
$slider.marksValuesCount = 11;
$slider.marksColor = '#ff0000';
$slider.markValuesColor = '#111';
```

<div class="my-24 flex flex-col items-center">
    <tc-range-slider 
      id="marks-plugin-1"
      class="mb-10"
      min="-200"
      max="200"
      marks="true"
      marks-count="21"
      marks-values-count="9"
      marks-color="#F1768E"
      marks-values-color="#6C8B50"
      value1="-100"
      value2="0"
      value3="100"
      step="12.5"
      slider-width="400px"
      generate-labels="true">
    </tc-range-slider>
    <div class="flex items-center">
        <button id="marks-plugin-toggle-btn" type="button" class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 mt-8 mx-2">Enable/Disable</button>
    </div>
</div>

<hr class="my-10" />

More examples:

```html
<tc-range-slider
  marks="true"
  marks-count="9"
  marks-values-count="9"
  marks-color="#d7c114"
  marks-values-color="#8240bb"
  
  value="50"
  step="12.5"
  
  slider-width="400px"
  generate-labels="true">
</tc-range-slider>
```
  
<div class="my-24 flex flex-col items-center">
    <tc-range-slider 
      marks="true"
      marks-count="9"
      marks-values-count="9"
      marks-color="#d7c114"
      marks-values-color="#8240bb"
      value="50"
      step="12.5"
      slider-width="400px"
      generate-labels="true">
    </tc-range-slider>
</div>


```html
<tc-range-slider
  marks="true"
  marks-count="21"
  marks-values-count="11"
  value="50"
  step="5"
  round="0"
  slider-width="400px"
  generate-labels="true">
</tc-range-slider>
```

<div class="my-24 flex flex-col items-center">
    <tc-range-slider 
      marks="true"
      marks-count="21"
      marks-values-count="11"
      value="50"
      step="5"
      round="0"
      slider-width="400px"
      generate-labels="true">
    </tc-range-slider>
</div>

```html
<tc-range-slider
  marks="true"
  marks-count="31"
  marks-values-count="11"
  value="50"
  step="3.33"
  round="0"
  slider-width="400px"
  generate-labels="true">
</tc-range-slider>
```

<div class="my-24 flex flex-col items-center">
    <tc-range-slider 
      marks="true"
      marks-count="31"
      marks-values-count="11"
      value="50"
      step="3.33"
      round="0"
      slider-width="400px"
      generate-labels="true">
    </tc-range-slider>
</div>

Right to left example:

```html
<tc-range-slider
  marks="true"
  marks-count="11"
  marks-values-count="11"
  value="50"
  step="10"
  rtl="true"
  round="0"
  slider-width="400px"
  generate-labels="true">
</tc-range-slider>
```

<div class="my-24 flex flex-col items-center">
    <tc-range-slider 
      marks="true"
      marks-count="11"
      marks-values-count="11"
      value="50"
      step="10"
      rtl="true"
      round="0"
      slider-width="400px"
      generate-labels="true">
    </tc-range-slider>
</div>

ABC example:

```html
<tc-range-slider
  data="a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z"
  marks="true"
  marks-count="26"
  marks-values-count="25"
  value="d"
  slider-width="400px"
  generate-labels="true">
</tc-range-slider>
```

<div class="my-24 flex flex-col items-center">
    <tc-range-slider 
      data="a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z"
      marks="true"
      marks-count="26"
      marks-values-count="25"
      value="d"
      slider-width="400px"
      generate-labels="true">
    </tc-range-slider>
</div>

```html
<tc-range-slider
  data="a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z"
  marks="true"
  marks-count="26"
  marks-values-count="5"
  step="1"
  value="d"
  slider-width="400px"
  generate-labels="true">
</tc-range-slider>
```

<div class="my-24 flex flex-col items-center">
    <tc-range-slider 
      data="a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z"
      marks="true"
      marks-count="26"
      marks-values-count="5"
      step="1"
      value="d"
      slider-width="400px"
      generate-labels="true">
    </tc-range-slider>
</div>

```html
<tc-range-slider
  marks="true"
  marks-count="11"
  marks-values-count="11"
  value="50"
  step="10"
  round="0"
  type="vertical"
  generate-labels="true">
</tc-range-slider>
```

<div class="my-24 flex flex-col items-center">
    <tc-range-slider 
      marks="true"
      marks-count="11"
      marks-values-count="11"
      value="50"
      step="10"
      round="0"
      type="vertical"
      generate-labels="true">
    </tc-range-slider>
</div>

Bottom to top:

```html
<tc-range-slider
  marks="true"
  marks-count="11"
  marks-values-count="11"
  value="50"
  step="10"
  btt="true"
  round="0"
  type="vertical"
  generate-labels="true">
</tc-range-slider>
```

<div class="my-24 flex flex-col items-center">
    <tc-range-slider 
      marks="true"
      marks-count="11"
      marks-values-count="11"
      value="50"
      step="10"
      btt="true"
      round="0"
      type="vertical"
      generate-labels="true">
    </tc-range-slider>
</div>


> :pushpin: An example page with the source code can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/33-marks-plugin.html).

