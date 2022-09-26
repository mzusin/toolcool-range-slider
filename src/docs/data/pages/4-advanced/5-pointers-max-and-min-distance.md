## Pointers max and min distance

In the two pointer range slider, it's possible to define the minimum required distance between the pointers using **pointers-min-distance** attribute:

```html
<toolcool-range-slider
  generate-labels="true"
  round="0"
  value1="30"
  value2="60"
  pointers-min-distance="4"
  slider-width="100%"></toolcool-range-slider>
```

It is also possible to define the maximum distance between two pointers using the **pointers-max-distance** attribute:

```html
<toolcool-range-slider
  generate-labels="true"
  round="0"
  value1="30"
  value2="60"
  pointers-max-distance="50"
  slider-width="100%"></toolcool-range-slider>
```

There is also a corresponding API properties:

```js
const $slider = document.querySelector('#slider');
$slider.pointersMinDistance = 5;
$slider.pointersMaxDistance = 50;
```

> Please note that the provided distances should **be >= 0**;

> These properties (**pointers-min-distance** and **pointers-max-distance**) have no effect is [pointers overlap](#pointers-overlap) is enabled.

The properties have the following default values:

| Property | Default Value | API Property |
|----------|---------------|---------------|
| pointers-max-distance      | 0  |  pointersMinDistance |
| pointers-max-distance      | Infinity  | pointersMaxDistance | 


:pushpin: The page with examples can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/21-two-pointers-min-max-distance.html).