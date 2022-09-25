## Step

<div data-examples="step"></div> 

You can adjust the slide step using the **step** attribute. By default, the step is undefined, but can be any positive integer:

```html
<tc-range-slider
  step="10"
  generate-labels="true" 
  value="50"
  round="0"></tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider 
      step="10"
      generate-labels="true" 
      value="50"
      round="0"></tc-range-slider>
</div>

```html
<tc-range-slider
  min="10"
  max="50"
  step="1"
  generate-labels="true" 
  round="0"></tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
      min="10"
      max="50"
      step="1"
      generate-labels="true" 
      round="0"></tc-range-slider>
</div>

```html
<tc-range-slider
  min="-100"
  max="100"
  step="5"
  generate-labels="true"
  round="0"></tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
      min="-100"
      max="100"
      step="5"
      generate-labels="true" 
      round="0"></tc-range-slider>
</div>

```html
<tc-range-slider
  min="-100"
  max="100"
  step="5"
  value1="0"
  value2="50"
  generate-labels="true"
  round="0"></tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
      min="-100"
      max="100"
      step="5"
      value1="0"
      value2="50"
      generate-labels="true" 
      round="0"></tc-range-slider>
</div>

Step can also be changed programmatically:

```html
<script>
    // get the reference
    const $slider = document.getElementById('slider-1');
    
    // change step
    $slider.step = 10;
    
    // or 
    // $slider.setAttribute('step', '10');
</script>
```

Or with TypeScript:

```typescript
<script>
    // get the reference
    const $slider = document.getElementById('slider-1') as RangeSlider;

    // get step value 
    const step: TStep = $slider.step;
    console.log(step);
    
    // change step 
    $slider.step = 10;
    
    // or 
    // $slider.setAttribute('step', '10');
</script>
``` 

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
      id="slider-6"
      value1="40"
      value2="60"
      generate-labels="true"></tc-range-slider>
    <div class="flex items-center">
        <button id="step-btn" type="button" class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 mt-8 mx-2">Change step to 10</button>
        <button id="step-reset" type="button" class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:ring-gray-600 mt-8 mx-2">Reset to undefined</button>
    </div>
</div>
