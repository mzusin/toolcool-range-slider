## Range: Values List

<div data-examples="data"></div> 

Instead of specifying a minimum and maximum to define the slider range, it's possible to provide a list of individual values. The provided elements can be **numbers**, **texts**, or any combination of these.

ABC example:

```html
<tc-range-slider
  data="a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z"
  value="d"
  generate-labels="true">
</tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
      data="a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z"
      value="d"
      generate-labels="true"></tc-range-slider>
</div>

Geometric progression example:

```html
<tc-range-slider
  generate-labels="true"
  data="2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192">
</tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
      generate-labels="true"
      data="2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192">
    </tc-range-slider>
</div>


> In the case where numeric and textual data is mixed, we assume that all data is textual.

The data can also be set or changed via the API:

```html
<tc-range-slider id="slider-1"></tc-range-slider>

<script src="toolcool-range-slider.min.js"></script>

<script>
    // get the reference
    const $slider = document.getElementById('slider-1');
    
    // change data
    $slider.data = [10, 20, 30];
    
    // or

    $slider.data = ['red', 'green', 'blue'];

    // or 
    // $slider.setAttribute('data', '10, 20, 30');
</script>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
      id="slider-8"
      value="50"
      data="0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100"
      generate-labels="true"></tc-range-slider>
    <div class="flex items-center">
        <button id="data-btn" type="button" class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 mt-8 mx-2">Change</button>
        <button id="data-reset" type="button" class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:ring-gray-600 mt-8 mx-2">Reset</button>
    </div>
</div>

Typescript Example:

```typescript
<script>
    // get the reference
    const $slider = document.getElementById('slider-1') as RangeSlider;
    
    // change data
    $slider.data = ['red', 'green', 'blue', 'yellow', 'pink', 'brown'];
</script>
```

> :pushpin: An example page with the source code can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/12-data.html).