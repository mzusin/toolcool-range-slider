## Accessibility via ARIA-attributes

The range slider has the following accessibility attributes for each pointer:

| Attribute        | Value                              |
|------------------|------------------------------------|
| role             | slider                             |
| aria-orientation | **vertical** or **horizontal**     |
| aria-valuemin    | **minimum** value for this pointer |
| aria-valuemax    | **maximum** value for this pointer |
| aria-valuenow    | the current pointer value          |
| aria-valuetext   | the current pointer value          |


It's also possible to provide **aria-label** properties using **aria-label1** and **aria-label2** attributes:

```html
<toolcool-range-slider value1="10" value2="30" aria-label1="lower" aria-label2="upper"></toolcool-range-slider>
```

Or using API:


```js
const $slider = document.querySelector('#slider');
$slider.ariaLabel1 = 'lower';
$slider.ariaLabel2 = 'upper';
```