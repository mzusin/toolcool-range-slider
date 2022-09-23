## Pointer Shapes

[![Tool Cool Pointer Shapes](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/img/preview/pointer-shapes.png?raw=true)](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/7-pointer-shapes.html)

There are also several predefined pointer shapes that can be defined using the **pointer-shape** attribute. For example, **triangle** pointer shape:

```html
<toolcool-range-slider
  min="0"
  max="100"
  value="10"
  pointer-shape="triangle"
  pointer-width="2rem"
  pointer-height="2rem"
  pointer-bg="#d7067d"
  pointer-bg-hover="#0b94c7"
  pointer-bg-focus="#0b94c7"
  slider-width="400px"
  slider-bg="#6787cd"></toolcool-range-slider>
```

It's also possible to define a different shape for the second pointer:

```html
<toolcool-range-slider
  min="0"
  max="100"
  value="10"
  
  pointer-shape="triangle"
  pointer2-shape="star"
  
  pointer-width="2rem"
  pointer-height="2rem"
  pointer-bg="#d7067d"
  pointer-bg-hover="#0b94c7"
  pointer-bg-focus="#0b94c7"
  slider-width="400px"
  slider-bg="#6787cd"></toolcool-range-slider>
```

There are the following pointer shapes:

| Property             | 
|----------------------|
| triangle            |
| star      |
| rhombus       |
| trapezoid          |
| parallelogram     |
| right-arrow     |

Change via API:

```js
const $slider = document.querySelector('#slider');
$slider.pointerShape = 'rhombus';
```
