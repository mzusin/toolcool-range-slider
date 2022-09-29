## Pointer Shapes

<div data-examples="pointer-shapes"></div>

Range slider pointers can be shaped differently using the standalone **Pointer Shapes Plugin**.

To use the plugin, download the latest [tcrs-pointer-shapes.min.css](https://github.com/toolcool-org/toolcool-range-slider/blob/main/dist/plugins/tcrs-pointer-shapes.min.css) file from GitHub and pass it to the slider using the [css-links](/pages/css-links.html) attribute. Then add the **pointer-shape** attribute as follows:


```html
<tc-range-slider 
  pointer-shape="triangle"
  css-links="tcrs-themes.min.css"

  value1="30"
  value2="50"
  value3="70"
  
  pointer-width="35px"
  pointer-height="35px"
  
  pointer-bg="#b677d6"
  pointer-bg-hover="#763098"
  pointer-bg-focus="#763098"
>
</tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
        pointer-shape="triangle"
        css-links="/js/index.{% js-hash %}.css"
        value1="30"
        value2="50"
        value3="70"
        pointer-width="30px"
        pointer-height="30px"
        pointer-bg="#b677d6"
        pointer-bg-hover="#763098"
        pointer-bg-focus="#763098"></tc-range-slider>
</div>

You can also define different shapes for different pointers:

```html
<tc-range-slider
  pointer1-shape="triangle"
  pointer2-shape="star"
  pointer3-shape="trapezoid"
  css-links="tcrs-themes.min.css"
  
  value1="10"
  value2="50"
  value3="90"
  
  pointer1-width="30px"
  pointer1-height="30px"
  
  pointer2-width="45px"
  pointer2-height="45px"

  pointer3-width="30px"
  pointer3-height="30px"
  
  pointer-bg="#b677d6"
  pointer-bg-hover="#763098"
  pointer-bg-focus="#763098"></tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
        pointer1-shape="triangle"
        pointer2-shape="star"
        pointer3-shape="trapezoid"
        css-links="/js/index.{% js-hash %}.css"
        value1="10"
        value2="50"
        value3="90"
        pointer1-width="30px"
        pointer1-height="30px"
        pointer2-width="45px"
        pointer2-height="45px"
        pointer3-width="30px"
        pointer3-height="30px"
        pointer-bg="#b677d6"
        pointer-bg-hover="#763098"
        pointer-bg-focus="#763098"></tc-range-slider>
</div>

There are the following pointer shapes:

| Shapes        | 
|---------------|
| triangle      |
| star          |
| rhombus       |
| trapezoid     |
| parallelogram |
| right-arrow   |

```html
<tc-range-slider
  pointer1-shape="rhombus"
  pointer2-shape="parallelogram"
  css-links="tcrs-themes.min.css"
  
  value1="30"
  value2="60"
  
  pointer-width="35px"
  pointer-height="35px"
  
  pointer1-bg="#b677d6"
  pointer1-bg-hover="#763098"
  pointer1-bg-focus="#763098"
  
  pointer2-bg="#48b29e"
  pointer2-bg-hover="#2b8774"
  pointer2-bg-focus="#2b8774"></tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
        pointer1-shape="rhombus"
        pointer2-shape="parallelogram"
        css-links="/js/index.{% js-hash %}.css"
        value1="30"
        value2="60"
        pointer-width="35px"
        pointer-height="35px"
        pointer1-bg="#b677d6"
        pointer1-bg-hover="#763098"
        pointer1-bg-focus="#763098"
        pointer2-bg="#48b29e"
        pointer2-bg-hover="#2b8774"
        pointer2-bg-focus="#2b8774"></tc-range-slider>
</div>

```html
<tc-range-slider
  pointer1-shape="trapezoid"
  pointer2-shape="right-arrow"
  css-links="tcrs-themes.min.css"
  
  value1="30"
  value2="60"
  
  pointer-width="35px"
  pointer-height="35px"
  
  pointer1-bg="#b677d6"
  pointer1-bg-hover="#763098"
  pointer1-bg-focus="#763098"
  
  pointer2-bg="#48b29e"
  pointer2-bg-hover="#2b8774"
  pointer2-bg-focus="#2b8774"></tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
        pointer1-shape="trapezoid"
        pointer2-shape="right-arrow"
        css-links="/js/index.{% js-hash %}.css"
        value1="30"
        value2="60"
        pointer-width="35px"
        pointer-height="35px"
        pointer1-bg="#b677d6"
        pointer1-bg-hover="#763098"
        pointer1-bg-focus="#763098"
        pointer2-bg="#48b29e"
        pointer2-bg-hover="#2b8774"
        pointer2-bg-focus="#2b8774"></tc-range-slider>
</div>

Pointer shapes can also be changed via the API:

```js
const $slider = document.querySelector('#slider');
$slider.pointerShape = 'rhombus';

// $slider.pointer2Shape = 'rhombus';
// $slider.pointer3Shape = 'rhombus';
// ....

// or
// $slider.setAttribute('pointer1-shape', 'rect');
// $slider.setAttribute('pointer2-shape', 'rect');
// ...
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
        id="slider-12"
        pointer-shape="trapezoid"
        css-links="/js/index.{% js-hash %}.css"
        value1="30"
        value2="70"
        pointer-width="35px"
        pointer-height="35px"
        pointer1-bg="#b677d6"
        pointer1-bg-hover="#763098"
        pointer1-bg-focus="#763098"
        pointer2-bg="#48b29e"
        pointer2-bg-hover="#2b8774" 
        pointer2-bg-focus="#2b8774"></tc-range-slider>
    <div class="grid grid-cols-2 gap-4 items-center mt-8">
        <button id="shape-triangle-btn" type="button" class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 mx-2 justify-center">triangle</button>
        <button id="shape-star-btn" type="button" class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 mx-2 justify-center">star</button>
        <button id="shape-rhombus-btn" type="button" class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 mx-2 justify-center">rhombus</button>
        <button id="shape-trapezoid-btn" type="button" class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 mx-2 justify-center">trapezoid</button>
        <button id="shape-parallelogram-btn" type="button" class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 mx-2 justify-center">parallelogram</button>
        <button id="shape-right-arrow-btn" type="button" class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 mx-2 justify-center">right arrow</button>
    </div> 
</div>

> :pushpin: An example page with the source code can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/6-pointer-shapes.html).
