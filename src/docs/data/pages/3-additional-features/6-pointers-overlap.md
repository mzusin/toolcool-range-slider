## Pointers Overlap

<div data-examples="pointers-overlap"></div>

In the two pointer range slider, pointer overlap can be enabled using **pointers-overlap** attribute:

```html
<tc-range-slider 
  pointers-overlap="true" 
  value1="30" 
  value2="50"
  value3="70"
  generate-labels="true"
  round="0">
</tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
        pointers-overlap="true" 
        value1="30" 
        value2="50"
        value3="70"
        generate-labels="true"
        round="0"></tc-range-slider>
</div>

There is also a corresponding API:

```js
const $slider = document.querySelector('#slider');
$slider.pointersOverlap = true;
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
        id="slider-20"
        value1="30" 
        value2="70"
        generate-labels="true"
        round="0"></tc-range-slider>
    <div class="flex items-center">
        <button id="pointers-overlap-toggle-btn" type="button" class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 mt-8 mx-2">Enable Pointers Overlap</button>
    </div>
</div> 

> :pushpin: An example page with the source code can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/16-two-pointers-min-max-distance.html).