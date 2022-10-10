## Images and SVGs as pointers

Images and SVG can be used as pointers using **pointer-bg**, **pointer-bg-hover**, and **pointer-bg-focus** attributes, like this:

```html
<tc-range-slider
  value1="30"
  value2="70"

  pointer-width="2rem"
  pointer-height="2rem"
  
  slider-bg="#6AD3BA"
  slider-bg-hover="#3F8A8A"
  slider-bg-fill="#378c8a"
  
  pointer-bg="#fff url(/path/image.png) no-repeat 50% 50%"
  pointer-bg-hover="#c6f7eb url(/path/image.png) no-repeat 50% 50%"
  pointer-bg-focus="#c6f7eb url(/path/image.png) no-repeat 50% 50%">
</tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
        value1="30"
        value2="70"
        pointer-width="2rem"
        pointer-height="2rem"
        slider-bg="#6AD3BA"
        slider-bg-hover="#3F8A8A"
        slider-bg-fill="#378c8a"
        pointer-bg="#fff url(/img/icons/paw.png) no-repeat 50% 50%"
        pointer-bg-hover="#c6f7eb url(/img/icons/paw.png) no-repeat 50% 50%"
        pointer-bg-focus="#c6f7eb url(/img/icons/paw.png) no-repeat 50% 50%">></tc-range-slider>
</div>

> You may use path to <u>image file</u> or path to <u>svg file</u> in the **pointer-bg** attributes.


If you need to disable all default styles, you can do it like this:

```html
<tc-range-slider
  value1="30"
  value2="70"

  pointer-width="2rem"
  pointer-height="2rem"
  
  slider-bg="#6AD3BA"
  slider-bg-hover="#3F8A8A"
  slider-bg-fill="#378c8a"
  
  pointer-bg="transparent url(/path/image.png) no-repeat 50% 50%"
  pointer-bg-hover="transparent url(/path/image.png) no-repeat 50% 50%"
  pointer-bg-focus="transparent url(/path/image.png) no-repeat 50% 50%"

  pointer-radius="0"
  pointer-border="none"
  pointer-border-hover="none"
  pointer-border-focus="none"
  pointer-shadow="none"
  pointer-shadow-hover="none"
  pointer-shadow-focus="none">
</tc-range-slider>
```

> :pushpin: An example page with the source code can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/19-pointers-images-and-svg.html).