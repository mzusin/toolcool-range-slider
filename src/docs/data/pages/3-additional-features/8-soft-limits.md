## Soft Limits

<div data-examples="soft-limits"></div>

It's possible to enable soft limits to the range slider. This means that the edges of the slider are disabled, for example, if the value of the slider is less than 20 or greater than 80, then the slider value is reset:

```html
<tc-range-slider
  id="slider"
   
  value1="30"
  value2="60"
  
  round="0"></tc-range-slider> 

<script src="toolcool-range-slider.min.js"></script>

<script>
  const $slider = document.getElementById('slider');

  $slider.addEventListener('onMouseUp', () => {

    if($slider.value1 !== undefined && $slider.value1 < 20) {
      $slider.value1 = 20;
    }

    if($slider.value2 !== undefined && $slider.value2 > 80) {
      $slider.value2 = 80;
    }
  });
</script>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
      id="slider-21"
      value1="30"
      value2="60"
      round="0"></tc-range-slider>
</div> 

> :pushpin: An example page with the source code can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/17-soft-limits.html).
