## Range dragging

It's possible to enable range dragging for a multi-pointer slider using the **range-dragging** property.

Two-pointer slider example:

```html
<tc-range-slider
  value1="30"
  value2="60"
  range-dragging="true"></tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
        value1="30"
        value2="60"
        range-dragging="true"></tc-range-slider>
</div>

Three-pointer slider example:

```html
<tc-range-slider
  value1="30"
  value2="50"
  value3="70"
  range-dragging="true"></tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
        value1="30"
        value2="50"
        value3="70"
        range-dragging="true"></tc-range-slider>
</div>

There is also a corresponding API:

```js
const $slider = document.querySelector('#slider');
$slider.rangeDragging = true; // or false
```
