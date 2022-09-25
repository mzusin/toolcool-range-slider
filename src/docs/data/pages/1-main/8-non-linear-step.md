## Non-linear Slider

<div data-examples="non-linear-step"></div>

The **step** property can also be defined as a **function**. This can be useful when you need to create non-linear slider behavior.

For example, the slider below has a step of 5 if the value is less than 50, otherwise the step is 10:

```html
<tc-range-slider id="slider-1" generate-labels="true"></tc-range-slider>

<script src="toolcool-range-slider.min.js"></script>
<script>
    const $slider = document.getElementById('slider-1');
    
    $slider.step = (value, percent) => {
        return percent < 50 ? 5 : 10;
    };
</script>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
      id="slider-7"
      generate-labels="true"></tc-range-slider>
</div>

Or with TypeScript:

```html
<tc-range-slider id="slider-1" generate-labels="true"></tc-range-slider>

<script src="toolcool-range-slider.min.js"></script>
<script>
    const $slider = document.getElementById('slider-1') as RangeSlider;
    
    $slider.step = (_value: string | number, _percent: number) => {
      return _percent < 50 ? 5 : 10;
    };
</script>
```
