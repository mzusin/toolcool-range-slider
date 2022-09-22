## Range dragging

It's possible to enable range dragging for a 2-pointer slider using the **range-dragging** property:

```html
<toolcool-range-slider range-dragging="true"></toolcool-range-slider>
```

There is also a corresponding API:

```js
const $slider = document.querySelector('#slider');
$slider.rangeDragging = true; // or false
```

:pushpin: The page with example can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/28-range-drag.html).