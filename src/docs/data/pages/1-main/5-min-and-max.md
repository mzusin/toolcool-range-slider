## Range: min & max

<div data-examples="min-max"></div> 

The slider range can be defined using the **min** and **max** attributes. 

These attributes are optional, their default values are **0** and **100** respectively.

```html
<tc-range-slider generate-labels="true"></tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider generate-labels="true"></tc-range-slider>
</div>

The minimum and maximum can be any number:

```html
<tc-range-slider 
  min="10" 
  max="50" 
  generate-labels="true"></tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider min="10" max="50" generate-labels="true"></tc-range-slider>
</div>

They can also be negative:

```html
<tc-range-slider 
  min="-500" 
  max="-100" 
  value1="-400"
  value2="-200"
  generate-labels="true"></tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider 
      min="-500" 
      max="-100" 
      value1="-400"
      value2="-200"
      generate-labels="true"></tc-range-slider>
</div>

Or any other combination:

```html
<tc-range-slider
  min="-500"
  max="500"
  value1="-400"
  value2="-200"
  value3="0"
  value4="200"
  round="0"
  generate-labels="true"></tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
      min="-500"
      max="500"
      value1="-400"
      value2="-200"
      value3="0"
      value4="200"
      round="0"
      generate-labels="true"></tc-range-slider>
</div>

Properties can also be changed programmatically:

```html
<script>
    // get the reference
    const $slider = document.getElementById('slider-1');
    
    // set properties
    $slider.min = -200;
    $slider.max = 200;
    
    // or 
    // $slider.setAttribute('min', '-200');
    // ...
</script>
```

Or with TypeScript:

```typescript
<script>
    // get the reference
    const $slider = document.getElementById('slider-1') as RangeSlider;
    
    // set properties
    $slider.min = -200;
    $slider.max = 200;
    
    // or 
    // $slider.setAttribute('min', '-200');
    // ...
</script>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
      id="slider-4"
      min="-500"
      max="500"
      value1="0"
      generate-labels="true"></tc-range-slider>
    <div class="flex items-center">
        <button id="set-min-max-btn" type="button" class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 mt-8 mx-2">Change min & max</button>
        <button id="set-min-max-btn-reset" type="button" class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:ring-gray-600 mt-8 mx-2">Reset</button>
    </div>
</div>