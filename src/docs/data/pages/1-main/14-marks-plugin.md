## Marks Plugin

<div data-examples="marks-tooltip"></div>

Range slider library has a standalone **Marks Plugin**. This allows to generate points along the slider.

Download the latest [tcrs-marks.min.js](https://github.com/toolcool-org/toolcool-range-slider/blob/main/dist/plugins/tcrs-marks.min.js) script from GitHub and add it to the HTML before the **toolcool-range-slider.min.js** script.

And then add the **marks="true"** attribute to see it in action. Check out the following basic example:

```html
<tc-range-slider
  marks="true"
  marks-count="11"
  marks-values-count="31"

  value="50"
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
      value="50"
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

| HTML Property       | Default Value | API Property      |
|---------------------|---------------|-------------------|
| marks               | true          | marksEnabled      |
| marks-count         | 11            | marksCount        | 
| marks-values-count  | 11            | marksValuesCount  | 

 
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
$slider.movingTooltip = true; // or false
$slider.marksCount = 11;
$slider.marksValuesCount = 11;
```

TypeScript example:

```typescript
import { IMarksPlugin } from 'toolcool-range-slider';

const $slider = document.getElementById('slider-1') as IMarksPlugin;

$slider.movingTooltip = true; // or false
$slider.marksCount = 11;
$slider.marksValuesCount = 11;
```

> :pushpin: An example page with the source code can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/33-marks-plugin.html).

