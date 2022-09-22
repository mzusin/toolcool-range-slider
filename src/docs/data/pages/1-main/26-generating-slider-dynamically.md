## Generating slider dynamically

The slider can be created dynamically as follows:

```html
<div class="wrapper" id="wrapper"></div>

<script src="toolcool-range-slider.min.js"></script>

<script>
  const $wrapper = document.getElementById('wrapper');

  const $slider = document.createElement('toolcool-range-slider');
  $slider.setAttribute('min', '-100');
  $slider.setAttribute('max', '100');
  $slider.setAttribute('value1', '10');
  $slider.setAttribute('value2', '50');
  $slider.setAttribute('slider-width', '100%');
  $slider.setAttribute('generate-labels', 'true');
  $wrapper.append($slider);
</script>
```

Another option is to use the API instead of attributes:

```html
<div class="wrapper" id="wrapper"></div>

<script src="toolcool-range-slider.min.js"></script>

<script>
  const $wrapper = document.getElementById('wrapper');

  const $slider= document.createElement('toolcool-range-slider');
  $wrapper.append($slider);

  $slider.min = -100;
  $slider.max = 100;
  $slider.value1 = 10;
  $slider.value2 = 50;
  $slider.sliderWidth = '100%';
  $slider.generateLabels = true;
</script>
```