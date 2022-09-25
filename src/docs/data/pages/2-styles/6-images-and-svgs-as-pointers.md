## Images and SVGs as pointers

Images and SVG can be used as pointers using **pointer-bg**, **pointer-bg-hover**, and **pointer-bg-focus** attributes, like this:

```html
<toolcool-range-slider
  min="0"
  max="100"
  value1="50"
  value2="60"
  
  slider-width="400px"
  slider-height="0.5rem"
  
  pointer-width="1.5rem"
  pointer-height="1.5rem"
  
  slider-bg="#6AD3BA"
  slider-bg-hover="#3F8A8A"
  slider-bg-fill="#378c8a"
  
  pointer-bg="#fff url(image.png) no-repeat 50% 50%"
  pointer-bg-hover="#c6f7eb url(image.png) no-repeat 50% 50%"
  pointer-bg-focus="#c6f7eb url(image.png) no-repeat 50% 50%">
</toolcool-range-slider>
```

:pushpin: Example page can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/23-pointers-images-and-svg.html).