## Predefined Styles (Themes)

[![Range Slider](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/img/preview/gradient-preview.png?raw=true)](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/6-gradient.html)

The slider has several optional predefined themes. Each theme defines a unique look-and-feel and can be used "as is" without defining each style parameter separately.

**All themes are fully optional and can be partially or completely replaced by custom styles, as described later in this documentation.**


The slider has the following themes:

| Theme Code Name | Example                                                                                                                                                                                                     |
|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| target          | [Example 1](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/3-styles.html), [Example 2](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/5-dark-mode.html) |
| glass           | [Example 1](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/3-styles.html), [Example 2](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/5-dark-mode.html) |
| rect            | [Example 1](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/3-styles.html), [Example 2](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/5-dark-mode.html) |
| circle          | [Example 1](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/3-styles.html), [Example 2](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/5-dark-mode.html) |
| gradient        | [Example](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/6-gradient.html)                                                                                                         |
| ruler           | [Example](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/3-styles.html)                                                                                                           |

Usage examples:

```html
<toolcool-range-slider
  slider-width="400px"
  slider-height="0.5rem"
  theme="rect"></toolcool-range-slider>
```

It's possible to combine themes together with custom properties like this:

```html
 <toolcool-range-slider
  slider-width="400px"
  slider-height="0.5rem"
  theme="rect"
  slider-bg="red"></toolcool-range-slider>
```

API:

```html
<toolcool-range-slider id="slider-1"></toolcool-range-slider>
<script type="text/javascript" src="toolcool-range-slider.min.js"></script>

<script>
    // get the reference
    const $slider = document.getElementById('slider-1');

    // change theme
    $slider.theme = 'rect';

    // or
    // $slider.setAttribute('theme', 'rect');
</script>
```