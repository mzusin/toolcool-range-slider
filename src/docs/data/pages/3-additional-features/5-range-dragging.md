## Range Dragging

<div data-examples="range-dragging"></div>

It's possible to enable range dragging for a multi-pointer slider using the **range-dragging** property.

Two-pointer slider example:

```html
<tc-range-slider
  range-dragging="true"
  
  value1="30"
  value2="70"
  generate-labels="true"
  round="0"></tc-range-slider>
```
 
<div class="my-12 flex flex-col items-center">
    <tc-range-slider
        value1="30"
        value2="70"
        range-dragging="true"
        generate-labels="true"
        round="0"></tc-range-slider>
</div>

Three-pointer slider example:

```html
<tc-range-slider
  range-dragging="true"
  
  value1="30"
  value2="50"
  value3="70"
  
  generate-labels="true"
  round="0"></tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
        value1="30"
        value2="50"
        value3="70"
        range-dragging="true"
        generate-labels="true"
        round="0"></tc-range-slider>
</div>

It is possible to programmatically toggle range dragging via the API:

```js
const $slider = document.querySelector('#slider');
$slider.rangeDragging = true; // or false
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
      id="slider-19"
      value1="30"
      value2="50"
      value3="70"
      generate-labels="true"
      round="0"></tc-range-slider>
    <div class="flex items-center">
        <button id="range-dragging-toggle-btn" type="button" class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 mt-8 mx-2">Enable Range Dragging</button>
    </div>
</div> 

> :pushpin: An example page with the source code can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/18-range-drag.html).