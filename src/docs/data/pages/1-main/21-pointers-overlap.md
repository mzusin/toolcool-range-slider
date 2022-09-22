## Pointers overlap

In the two pointer range slider, pointer overlap can be enabled using **pointers-overlap** attribute:

```html
<toolcool-range-slider pointers-overlap="true" value1="10" value2="40" min="0" max="100"></toolcool-range-slider>
```

There is also a corresponding API property:

```js
const $slider = document.querySelector('#slider');
$slider.pointersOverlap = true;
```