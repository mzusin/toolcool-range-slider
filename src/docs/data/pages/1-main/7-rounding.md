## Rounding

<div data-examples="rounding"></div> 

You can control the number of decimal places using the **round** attribute. Its default value is **two**. In the example below, we set it to zero:

```html
<tc-range-slider generate-labels="true" round="0"></tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider generate-labels="true" round="0"></tc-range-slider>
</div>

It can be any positive integer, for example five:

```html
<tc-range-slider generate-labels="true" round="5"></tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider generate-labels="true" round="5"></tc-range-slider>
</div>

Rounding can also be changed programmatically:

```html
<script>
    // get the reference
    const $slider = document.getElementById('slider-1');
    
    // set properties
    $slider.round = 0;
    
    // or 
    // $slider.setAttribute('round', '0');
</script>
```

Or with TypeScript:

```typescript
<script>
    // get the reference
    const $slider = document.getElementById('slider-1') as RangeSlider;
    
    // set properties
    $slider.round = -200;
    
    // or 
    // $slider.setAttribute('round', '0');
</script>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
      id="slider-5"
      value1="40"
      value2="60"
      generate-labels="true"></tc-range-slider>
    <div class="flex items-center">
        <button id="rounding-btn" type="button" class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 mt-8 mx-2">Change round to 0</button>
        <button id="rounding-reset" type="button" class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:ring-gray-600 mt-8 mx-2">Reset</button>
    </div>
</div>