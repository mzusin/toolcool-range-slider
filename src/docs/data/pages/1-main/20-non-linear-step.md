## Non-linear step

The range slider supports the non-linear step function. For example, the slider below has a step of 5 if the value is less than 50, otherwise the step is 10:

```html
<toolcool-range-slider id="slider-1"></toolcool-range-slider>

<script src="toolcool-range-slider.min.js"></script>
<script>
    const $slider = document.getElementById('slider-1');
    $slider.step = (value, percent) => {
        return percent < 50 ? 5 : 10;
    };
</script>
```

Step function has the following type:

```js
(value: number | string) => number
```

It gets the **value** of the slider and returns the corresponding **step** value.

:pushpin: The page with examples can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/17-non-linear.html).