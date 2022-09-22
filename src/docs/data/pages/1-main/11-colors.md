## Colors

Color and other styles can be customized with the following attributes:

```html
<toolcool-range-slider
        slider-width="400px"
        slider-height="0.5rem"
        pointer-width="1.5rem"
        pointer-height="1.5rem"
        slider-bg="#6AD3BA"
        slider-bg-hover="#3F8A8A"
        pointer-border-hover="1px solid #79D6C0"
        pointer-border-focus="1px solid #79D6C0"></toolcool-range-slider>


<toolcool-range-slider
          slider-width="400px"
          slider-height="0.5rem"
          pointer-width="1.5rem"
          pointer-height="1.5rem"
          pointer-bg="#6AD3BA"
          pointer-bg-hover="#50BDA3"
          pointer-shadow="none"
          pointer-shadow-hover="none"
          pointer-border="0"
          pointer-border-hover="1px solid #3F8A8A"
          pointer-border-focus="1px solid #3F8A8A"></toolcool-range-slider>
```

The list of attributes and default values:

| HTML Attribute        | Default Value                   | API Property       |
|-----------------------|---------------------------------|--------------------|
| slider-bg             | #4d69ad                         | sliderBg           |
| slider-bg-hover       | #5f79b7                         | sliderBgHover      |
| slider-bg-fill        | #000                            | sliderBgFill       |
| pointer-bg            | #fff                            | pointerBg          |
| pointer-bg-hover      | #dcdcdc                         | pointerBgHover     |
| pointer-bg-focus      | #dcdcdc                         | pointerBgFocus     |
| pointer-shadow        | 0 0 2px rgba(0, 0, 0, 0.6)      | pointerShadow      |
| pointer-shadow-hover  | 0 0 2px rgb(0, 0, 0)            | pointerShadowHover |
| pointer-shadow-focus  | 0 0 2px rgb(0, 0, 0)            | pointerShadowFocus |
| pointer-border        | 1px solid hsla(0, 0%, 88%, 0.5) | pointerBorder      |
| pointer-border-hover  | 1px solid hsla(0, 0%, 88%, 0.5) | pointerBorderHover |
| pointer-border-focus  | 1px solid hsl(201, 72%, 59%)    | pointerBorderFocus |
| pointer2-bg           | inherits from pointer1          | pointerBg          |
| pointer2-bg-hover     | inherits from pointer1          | pointerBgHover     |
| pointer2-bg-focus     | inherits from pointer1          | pointerBgFocus     |
| pointer2-shadow       | inherits from pointer1          | pointerShadow      |
| pointer2-shadow-hover | inherits from pointer1          | pointerShadowHover |
| pointer2-shadow-focus | inherits from pointer1          | pointerShadowFocus |
| pointer2-border       | inherits from pointer1 )        | pointerBorder      |
| pointer2-border-hover | inherits from pointer1          | pointerBorderHover |
| pointer2-border-focus | inherits from pointer1          | pointerBorderFocus |

API:

```html
<toolcool-range-slider id="slider-1"></toolcool-range-slider>
<script type="text/javascript" src="toolcool-range-slider.min.js"></script>

<script>
    // get the reference
    const $slider = document.getElementById('slider-1');
    
    // change properties
    $slider.sliderBg = '#efefef';
    $slider.sliderBgHover = '#ddd';
    $slider.sliderBgFill = '#ccc';
    
    $slider.pointerBg = '#6AD3BA';
    $slider.pointerBgHover = '#6AD3BA';
    $slider.pointerBgFocus = '#6AD3BA';

    $slider.pointerShadow = 'none';
    $slider.pointerShadowHover = 'none';
    $slider.pointerShadowFocus = 'none';

    $slider.pointerBorder = '1px solid #3F8A8A';
    $slider.pointerBorderHover = '1px solid #3F8A8A';
    $slider.pointerBorderFocus = '1px solid #3F8A8A';

    // or 
    // $slider.setAttribute('sliderBg', '#efefef');
    // ...
</script>
```

:pushpin: [An example](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/5-dark-mode.html) of a customized slider on a dark background:

[![Dark Mode - Range Slider](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/img/preview/dark-mode-preview.png?raw=true)](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/5-dark-mode.html)