## List of individual values and text data

It is also possible (but not required) to provide a list of numeric or text data instead of **min** and **max** properties.

ABC example:

```html
<toolcool-range-slider
  data="a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z"></toolcool-range-slider>
```

Geometric progression:

```html
<toolcool-range-slider
data="2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192"></toolcool-range-slider>
```

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