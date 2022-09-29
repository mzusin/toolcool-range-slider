## Right to Left Slider

<div data-examples="rtl"></div>

The range slider also supports right to left (RTL) using **rtl** attribute as follows:

```html
<tc-range-slider
  rtl="true"
  
  value1="30"
  value2="70"
  
  generate-labels="true">
</tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
        rtl="true"
        value1="30"
        value2="70"
        generate-labels="true"></tc-range-slider>
</div>

This option can also be changed programmatically:

```html
<script>
    // get the reference
    const $slider = document.getElementById('slider-1');

    // set properties
    $slider.rtl = true; // or false

    // or 
    // $slider.setAttribute('rtl', 'true');
</script>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
      id="slider-15"
      value1="40"
      value2="60"
      theme="target"
      css-links="/js/index.{% js-hash %}.css"
      generate-labels="true"></tc-range-slider>
    <div class="flex items-center">
        <button id="rtl-btn" type="button" class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 mt-8 mx-2">Right to Left</button>
        <button id="ltr-btn" type="button" class="roup inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 mt-8 mx-2">Left to Right</button>
    </div>
</div> 

Or with TypeScript:

```typescript
<script>
    // get the reference
    const $slider = document.getElementById('slider-1') as RangeSlider;
    
    // set properties
    $slider.rtl = true; // or false
    
    // or 
    // $slider.setAttribute('rtl', 'true');
</script>
```

> :pushpin: An example page with the change event source code can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/10-right-to-left.html).
