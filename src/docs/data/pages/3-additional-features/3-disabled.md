## Disable range slider completely or several pointers

<div data-examples="disabled"></div>

It's possible to disable the range slider using **disabled** attribute:

```html
<tc-range-slider 
  disabled="true" 
  
  generate-labels="true" 
  value1="30"
  value2="70">
</tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider 
        value1="30"
        value2="70"
        generate-labels="true" 
        disabled="true"></tc-range-slider>
</div>

This property can be toggled via APIs as follows:

```js
const $slider1 = document.getElementById('slider-1');
const $toggleButton = document.getElementById('toggle-btn');

$toggleButton.addEventListener('click', () => {
  $slider1.disabled = !$slider1.disabled;
});
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
      id="slider-16"
      value1="40"
      value2="60"
      generate-labels="true"></tc-range-slider>
    <div class="flex items-center">
        <button id="disabled-toggle-btn" type="button" class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 mt-8 mx-2">Toggle Disabled</button>
    </div>
</div> 

The default opacity of the range slider when disabled is **0.4**. This value can be change using css variable **--tc-range-slider-opacity**:

```html
<tc-range-slider
  disabled="true"
  style="--opacity: 0.15"

  value1="30"
  value2="70"
  generate-labels="true"></tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider 
        value1="30"
        value2="70"
        generate-labels="true" 
        style="--opacity: 0.15"
        disabled="true"></tc-range-slider>
</div>

It is also possible to disable only the first pointer:

```html
<tc-range-slider 
  pointer1-disabled="true"
  value1="30"
  value2="70"
  generate-labels="true">
</tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider 
      pointer1-disabled="true"
      value1="30"
      value2="70"
      generate-labels="true"></tc-range-slider>
</div>

Or disable just the second pointer:

```html
<tc-range-slider 
  pointer2-disabled="true"
  value1="30"
  value2="70"
  generate-labels="true">
</tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider 
      pointer2-disabled="true"
      value1="30"
      value2="70"
      generate-labels="true"></tc-range-slider>
</div>

Or disable the second and the third pointer:

```html
<tc-range-slider 
  pointer2-disabled="true"
  pointer3-disabled="true"
  
  value1="30"
  value2="50"
  value3="70"
  
  generate-labels="true">
</tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider 
      pointer2-disabled="true"
      pointer3-disabled="true"
      value1="30"
      value2="50"
      value3="70"
      generate-labels="true"></tc-range-slider>
</div>

This option can also be changed programmatically:

```js
const $slider1 = document.getElementById('slider-1');

$slider1.pointer1Disabled = true;
$slider1.pointer2Disabled = true;
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
      id="slider-17"
      value1="30"
      value2="70"
      pointer1-disabled="true"
      generate-labels="true"></tc-range-slider>
    <div class="flex items-center">
        <button id="disabled-pointers-toggle-btn" type="button" class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 mt-8 mx-2">Toggle Disabled</button>
    </div>
</div> 

> :pushpin: An example page with the change event source code can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/8-disabled-enabled.html).
