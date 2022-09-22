## Soft limits

It's possible to enable soft limits to the range slider. This means that the edges of the slider are disabled, for example, if the value of the slider is less than 20 or greater than 80, then the slider value is reset:

```html
<toolcool-range-slider
  id="slider"
  animate-onclick="0.3s"
  generate-labels="true"
  round="0"
  value="30"
  value2="60"
  slider-width="100%"
  slider-height="7px"></toolcool-range-slider>

<script src="toolcool-range-slider.min.js"></script>
<script>
  const $slider = document.getElementById('slider');

  $slider.addEventListener('mouseup', (evt) => {
    if($slider.value < 20) {
      $slider.value = 20;
    }

    if($slider.value2 > 80) {
      $slider.value2 = 80;
    }
  });
</script>
```

:pushpin: The page with this example can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/30-soft-limits.html).