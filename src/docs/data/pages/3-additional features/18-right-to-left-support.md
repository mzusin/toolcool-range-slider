## Right to left support

The range slider also supports right to left (RTL) using **rtl** attribute as follows:

```html
<toolcool-range-slider rtl="true"></toolcool-range-slider>
```

```html
<toolcool-range-slider
  slider-width="100%"
  generate-labels="true"
  rtl="true"></toolcool-range-slider>
```

Enable or disable via API:

```js
const $slider = document.querySelector('#slider');
$slider.rtl = true; // or false
```

:pushpin: The page with examples can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/14-rtl.html).