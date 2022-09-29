## Animation on Panel Click

<div data-examples="animation"></div>  

By default, the library has an animation when the slider panel is clicked. This is a [CSS transition animation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) which value is **0.3s**.

This value can be changed using the **animate-onclick** property:

```html
<tc-range-slider 
  animate-onclick="2s"
  
  value="50"
  generate-labels="true"
  round="0"></tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider 
        animate-onclick="2s"
        value="50"
        generate-labels="true" 
        round="0"></tc-range-slider>
</div>

It's possible to disable the animation by passing **false**:
 
```html
<tc-range-slider 
  animate-onclick="false"
  
  value="50"
  generate-labels="true"
  round="0"></tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider 
        animate-onclick="false"
        value="50"
        generate-labels="true" 
        round="0"></tc-range-slider>
</div>

The value of the **animate-onclick** property is specified in seconds, ms, etc. and is the same as the css [transition-duration](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration) property.

There is also a corresponding API:

```js
const $slider = document.querySelector('#slider');
$slider.animateOnClick = '0.3s'; 

// or

$slider.animateOnClick = false; // disable
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
        id="slider-13"
        value1="30"
        value2="70"
        generate-labels="true"
        round="0"></tc-range-slider>
    <div class="flex flex-col gap-4 items-center mt-8">
        <button id="animation-2s-btn" type="button" class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 mx-2 justify-center">Animation 2s</button>
        <button id="animation-disable-btn" type="button" class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 mx-2 justify-center">Disable Animation</button>
        <button id="animation-reset-btn" type="button" class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 mx-2 justify-center">Reset</button>
    </div> 
</div>

> :pushpin: An example page with the source code can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/14-animation-on-click.html).