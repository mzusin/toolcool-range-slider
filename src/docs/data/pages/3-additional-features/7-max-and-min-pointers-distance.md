## Maximum & Minimum Pointers Distance

In the multi-pointers range slider, it's possible to define the minimum required distance between the pointers using **pointers-min-distance** attribute:

```html
<tc-range-slider
  pointers-min-distance="10"

  value1="30"
  value2="60"
  
  generate-labels="true"
  round="0"></tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
        pointers-min-distance="10"
        value1="30"
        value2="60"
        generate-labels="true"
        round="0"></tc-range-slider>
</div>

It is also possible to define the maximum distance between the pointers using the **pointers-max-distance** attribute:

```html
<tc-range-slider
  pointers-max-distance="50"

  value1="30"
  value2="60"
  
  generate-labels="true"
  round="0"></tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
        pointers-max-distance="50"
        value1="30"
        value2="60"
        generate-labels="true"
        round="0"></tc-range-slider>
</div>

There is also a corresponding API properties:

```js
const $slider = document.querySelector('#slider');
$slider.pointersMinDistance = 5;
$slider.pointersMaxDistance = 50;
```

> Please note that the provided distances should **be >= 0**;

> **pointers-min-distance** and **pointers-max-distance** properties have no effect if [pointers overlap](/pages/pointers-overlap.html) is enabled.

The properties have the following default values:

| Property              | Default Value | API Property        |
|-----------------------|---------------|---------------------|
| pointers-max-distance | 0             | pointersMinDistance |
| pointers-max-distance | Infinity      | pointersMaxDistance | 


> :pushpin: An example page with the source code can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/15-two-pointers-overlap.html).

