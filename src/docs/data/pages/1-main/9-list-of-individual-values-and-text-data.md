## Range: Values List

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

It's also possible to define / change data via API:

```html
<toolcool-range-slider id="slider-1"></toolcool-range-slider>

<script type="text/javascript" src="toolcool-range-slider.min.js"></script>

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

:pushpin: Example page can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/16-data.html).