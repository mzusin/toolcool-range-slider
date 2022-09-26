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


It's also possible to provide **aria-label** properties using **aria-label1**, **aria-label2**, ... attributes:

```html
<tc-range-slider 
  value1="10" 
  value2="50"
  value3="90"
  aria-label1="lower"
  aria-label2="middle"
  aria-label3="upper">
</tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider 
      value1="10" 
      value2="50"
      value3="90"
      aria-label1="lower"
      aria-label2="middle"
      aria-label3="upper">
    </tc-range-slider>
</div>
   
Or using API:


```js
const $slider = document.querySelector('#slider');

$slider.ariaLabel1 = 'lower';
$slider.ariaLabel2 = 'middle';
$slider.ariaLabel3 = 'upper';
```

TypeScript example:

```typescript
const $slider = document.querySelector('#slider') as RangeSlider;

$slider.ariaLabel1 = 'lower';
$slider.ariaLabel2 = 'middle';
$slider.ariaLabel3 = 'upper';
```