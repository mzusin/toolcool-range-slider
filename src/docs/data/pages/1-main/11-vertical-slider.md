## Vertical Slider

<div data-examples="vertical"></div>  

Vertical slider can be achieved using the **type** attribute as following:

```html
<tc-range-slider 
  type="vertical"
  value1="30"
  value2="70"></tc-range-slider>
```
 
<div class="my-12 flex flex-col items-center">
    <tc-range-slider
        type="vertical"
        value1="30"
        value2="70"
        generate-labels="true"></tc-range-slider>
</div>

It accepts all the same attributes as the horizontal slider. The default height of a vertical slider is **300px** unless the height attribute is provided.
  
It is also possible to **reverse the direction** and slide from bottom to top using the **btt** attribute:

```html
<toolcool-range-slider 
  type="vertical" 
  btt="true"
  value1="30"
  value2="70"
  generate-labels="true">
</toolcool-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
        type="vertical"
        value1="30"
        value2="70"
        btt="true"
        generate-labels="true"></tc-range-slider>
</div>

Slider type can also be changed via the API:

```js
const $slider = document.querySelector('#slider');
$slider.type = 'vertical'; // or horizontal
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
        id="slider-14"
        theme="glass"
        css-links="/js/index.{% js-hash %}.css"
        value1="30"
        value2="70"
        pointer-width="1.5rem"
        pointer-height="1.5rem"
        generate-labels="true"
        round="0"></tc-range-slider>
    <div class="flex flex-col gap-4 items-center mt-8">
        <button id="vertical-btn" type="button" class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 mx-2 justify-center">Make Vertical</button>
        <button id="horizontal-btn" type="button" class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 mx-2 justify-center">Make Horizontal</button>
    </div> 
</div>   

The **bottom to top** attribute can also be change programmatically:

```js
const $slider = document.querySelector('#slider');
$slider.btt = true; // or false
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider 
        id="slider-14_2"
        type="vertical"
        theme="glass"
        css-links="/js/index.{% js-hash %}.css"
        value1="30"
        value2="70"
        pointer-width="1.5rem"
        pointer-height="1.5rem"
        generate-labels="true"
        round="0"></tc-range-slider>
    <div class="flex flex-col gap-4 items-center mt-8">
        <button id="btt-btn" type="button" class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 mx-2 justify-center">Make Bottom to Top</button>
        <button id="ttb-btn" type="button" class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 mx-2 justify-center">Make Top to Bottom</button>
    </div> 
</div>  

> :pushpin: An example page with the source code can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/4-vertical-sliders.html).

> :pushpin: Bottom to top example page can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/11-bottom-to-top.html).
