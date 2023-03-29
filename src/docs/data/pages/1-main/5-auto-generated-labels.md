## Auto Generated Labels

<div data-examples="auto-generated-labels"></div> 

Range slider min, max, and value labels can be automatically generated using **Generated Labels Plugin**. This plugin differs from **Binding Labels Plugin** in that it creates labels entirely by itself.

Download the latest [tcrs-generated-labels.min.js](https://github.com/mzusin/toolcool-range-slider/blob/main/dist/plugins/tcrs-generated-labels.min.js) script from GitHub and add it to the HTML before the **toolcool-range-slider.min.js** script.

Use the **generate-labels="true"** attribute to enable the plugin.

```html
<tc-range-slider 
  value="50"
  generate-labels="true"
  generate-labels-text-color="#5e7593"
  generate-labels-units="%">
</tc-range-slider>

<!-- The plugin should be included before the core library. -->
<script src="tcrs-generated-labels.min.js"></script>
<script src="toolcool-range-slider.min.js"></script>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider 
        value="50"
        generate-labels="true"
        generate-labels-text-color="#5e7593"
        generate-labels-units="%"></tc-range-slider>
</div>

The plugin is also available on the [jsDelivr CND](https://www.jsdelivr.com/package/npm/toolcool-range-slider):

```html
<tc-range-slider
  value="50"
  generate-labels="true"
  generate-labels-text-color="#5e7593"
  generate-labels-units="%">
</tc-range-slider>

<!-- The plugin should be included before the core library. -->
<script 
  src="https://cdn.jsdelivr.net/npm/toolcool-range-slider/dist/plugins/tcrs-generated-labels.min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/toolcool-range-slider/dist/toolcool-range-slider.min.js"></script>
```

In bundlers like [Webpack](https://webpack.js.org/) and [esbuild](https://esbuild.github.io/) you can use it like this:

```js
import 'toolcool-range-slider/dist/plugins/tcrs-generated-labels.min.js';
import 'toolcool-range-slider';

// any code here...
```

You can display labels for multiple points in the same way:

```html
<tc-range-slider
  generate-labels="true"
  
  value1="10"
  value2="20"
  value3="80"
  value4="90"
  
  value1-label=".value-1"
  value2-label=".value-1"
  value3-label=".value-1"
  value4-label=".value-1">
</tc-range-slider>

<script src="tcrs-generated-labels.min.js"></script>
<script src="toolcool-range-slider.min.js"></script>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider 
      generate-labels="true"
      value1="10"
      value2="20"
      value3="80"
      value4="90"
      value1-label=".value-1"
      value2-label=".value-2"
      value3-label=".value-3"
      value4-label=".value-4">
    </tc-range-slider>
</div>

It is also possible to enable or disable generated labels programmatically:

```html
<script>
    // get the reference
    const $slider = document.getElementById('slider-1');
    
    // change the setting
    $slider.generateLabels = true; // or false
    $slider.generateLabelsUnits = '%';
    $slider.generateLabelsTextColor = '#545454';

    // or 
    // $slider.setAttribute('generate-labels', 'true');
    // $slider.setAttribute('generate-labels-units', '%');
    // $slider.setAttribute('generate-labels-text-color', '#545454);
</script>
```

TypeScript version:

```html
<script>
    // get the reference
    const $slider = document.getElementById('slider-1') as IGeneratedLabelsPlugin;
    
    // change the setting
    $slider.generateLabels = true; // or false
    $slider.generateLabelsUnits = '%';
    $slider.generateLabelsTextColor = '#545454';
</script>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider 
        id="slider-3" 
        value1="30"
        value2="70"
        generate-labels="true"></tc-range-slider>
    <button id="toggle-gen-labels" type="button" class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 mt-8">Toggle Labels</button>
</div> 

<div class="my-12 flex flex-col items-center">
    <tc-range-slider 
        id="slider-4" 
        value1="30"
        value2="70"
        generate-labels="true"></tc-range-slider>
    <div class="flex items-center justify-center">
        <button id="toggle-gen-labels-units" type="button" class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 mt-8 mr-4">Toggle Units</button>
        <button id="toggle-gen-labels-colors" type="button" class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 mt-8">Toggle Colors</button>
    </div>
</div> 

> :pushpin: An example page can be found [here](https://github.com/mzusin/toolcool-range-slider/blob/main/examples/30-autogenerated-labels-plugin.html).

### Custom Formatting

<div class="my-12 flex flex-col items-center">
    <tc-range-slider 
        id="auto-gen-labels-slider-5" 
        value1="30"
        value2="70"
        generate-labels-text-color="#5e7593"
        generate-labels="true"></tc-range-slider>
</div> 

It's possible to define a custom formatting function to change the value of a label:

```html
<tc-range-slider
        id="slider"
        value1="30"
        value2="70"
        generate-labels="true"
        generate-labels-text-color="#5e7593"></tc-range-slider>

<script>
    // get the reference to the slider element
    const $slider = document.getElementById('slider');
    
    // set the formatting function - generateLabelsFormat
    $slider.generateLabelsFormat = (value) => {
        
        // Any custom code here.
        // The function should return string.
        if(value === undefined) return '';
        return `$${ Number(value).toFixed(2) }`;
    };
</script>
```

<br/>

The TypeScript definition of the **generateLabelsFormat** function is:
```js
generateLabelsFormat: (value: string | number | undefined) => string;
```

> :pushpin: An example page can be found [here](https://github.com/mzusin/toolcool-range-slider/blob/main/examples/35-autogenerated-labels-plugin-with-formatting.html).


