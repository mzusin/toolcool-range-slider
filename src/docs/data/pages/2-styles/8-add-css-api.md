## Add CSS API

It is possible to dynamically add CSS as a plain string using the **addCSS** API:

```html
<tc-range-slider id="slider-1"></tc-range-slider>

<script src="toolcool-range-slider.min.js"></script>
<script>
  const $slider1 = document.getElementById('slider-1');

  $slider1.addCSS(`
    .panel-fill{
        background: green;
    }
  `);
</script>
```

> :pushpin: An example page with the source code can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/29-add-css-api.html).
