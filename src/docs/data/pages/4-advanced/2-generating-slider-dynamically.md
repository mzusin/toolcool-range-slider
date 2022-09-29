## Generating slider dynamically

<div data-examples="created-slider-dynamically"></div>

The slider can be created dynamically as follows:

```html
<div class="wrapper" id="wrapper"></div>

<script src="tcrs-generated-labels.min.js"></script>
<script src="toolcool-range-slider.min.js"></script>

<script>
  const $wrapper = document.getElementById('wrapper');

  const $slider = document.createElement('tc-range-slider');
  $slider.setAttribute('min', '-100');
  $slider.setAttribute('max', '100');
  $slider.setAttribute('value1', '10');
  $slider.setAttribute('value2', '50');
  $slider.setAttribute('generate-labels', 'true');
  $wrapper.append($slider);
</script>
```

<div class="my-12 flex flex-col items-center p-4" 
    id="slider-box-1"
    style="border: 2px dashed #efefef">
    <button id="create-slider-btn-1" type="button" class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 mt-8 mx-2">Create Slider</button>
</div> 

> :pushpin: An example page with the source code can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/22-gererate-slider-dynamically.html).
