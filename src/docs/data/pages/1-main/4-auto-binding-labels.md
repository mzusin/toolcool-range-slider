## AutoBinding Labels

<div data-examples="auto-binding-values"></div>

Range slider values can be automatically printed to HTML using **Binding Labels Plugin**.

Download the latest [tcrs-binding-labels.min.js](https://github.com/toolcool-org/toolcool-range-slider/blob/main/dist/plugins/tcrs-binding-labels.min.js) script from GitHub and add it to the HTML before the **toolcool-range-slider.min.js** script.

Use the **value-label** attribute to specify the path to the label. The path can point to any HTML element.

```html
<tc-range-slider value-label="#value-1"></tc-range-slider>
<div id="value-1"></div>

<!-- The plugin should be included before the core library. -->
<script src="tcrs-binding-labels.min.js"></script>
<script src="toolcool-range-slider.min.js"></script>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider value-label="#value-1"></tc-range-slider>
    <div id="value-1" class="mt-6 text-xs justify-center leading-5 bg-slate-400/10 rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-slate-400/20 w-24"></div>
</div>

The plugin is also available on the [jsDelivr CND](https://www.jsdelivr.com/package/npm/toolcool-range-slider):

```html
<tc-range-slider value-label="#value-1"></tc-range-slider>
<div id="value-1"></div>

<!-- The plugin should be included before the core library. -->
<script 
  src="https://cdn.jsdelivr.net/npm/toolcool-range-slider/dist/plugins/tcrs-binding-labels.min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/toolcool-range-slider/dist/toolcool-range-slider.min.js"></script>
```

In bundlers like [Webpack](https://webpack.js.org/) and [esbuild](https://esbuild.github.io/) you can use it like this:

```js
import 'toolcool-range-slider/dist/plugins/tcrs-binding-labels.min.js';
import 'toolcool-range-slider';

// any code here...
```

You can display labels for multiple points in the same way:

```html
<tc-range-slider 
  value1="10"
  value2="20"
  value3="80"
  value4="90"
  
  value1-label=".value-1"
  value2-label=".value-1"
  value3-label=".value-1"
  value4-label=".value-1">
</tc-range-slider>

<div class="value-1"></div>
<div class="value-2"></div>
<div class="value-3"></div>
<div class="value-4"></div>

<script src="tcrs-binding-labels.min.js"></script>
<script src="toolcool-range-slider.min.js"></script>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider 
      value1="10"
      value2="20"
      value3="80"
      value4="90"
      value1-label=".value-1"
      value2-label=".value-2"
      value3-label=".value-3"
      value4-label=".value-4">
    </tc-range-slider>
    <div class="value-1 mt-6 text-xs justify-center leading-5 bg-slate-400/10 rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-slate-400/20 w-24"></div>
    <div class="value-2 mt-6 text-xs justify-center leading-5 bg-slate-400/10 rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-slate-400/20 w-24"></div>
    <div class="value-3 mt-6 text-xs justify-center leading-5 bg-slate-400/10 rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-slate-400/20 w-24"></div>
    <div class="value-4 mt-6 text-xs justify-center leading-5 bg-slate-400/10 rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-slate-400/20 w-24"></div>
</div>

> **value-label**, **value0-label**, and **value1-label** are aliases of each other and refer to the first value.

Label paths can also be defined via the API as follows:

```html
<tc-range-slider id="slider-2" value-label=".value-21"></tc-range-slider>

<div class="value-21"></div>
<div class="value-22"></div>

<script src="tcrs-binding-labels.min.js"></script>
<script src="toolcool-range-slider.min.js"></script>
<script>
  // get the reference
  const $slider = document.getElementById('slider-2');
  
  // change label path via API
  $slider.valueLabel = '.value-22';
  
  // or change it via attribute
  $slider.setAttribute('value-label', '.value-22');
</script>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider value-label=".value-21" id="slider-2"></tc-range-slider>
    <div class="value-21 mt-6 text-xs justify-center leading-5 bg-slate-400/10 rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-slate-400/20 w-24" style="min-height: 1.7rem"></div>
    <div class="value-22 mt-6 text-xs justify-center leading-5 bg-slate-400/10 rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-slate-400/20 w-24"></div>
</div> 

TypeScript example:

```typescript
const $slider2 = document.getElementById('slider-2') as RangeSlider;

($slider2 as IBindingLabelsPlugin).valueLabel = '.value-22';
```

> :pushpin: An example page with the source code can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/7-automatic-labels-binding-plugin.html).