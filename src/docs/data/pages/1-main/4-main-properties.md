## Main Properties

Range slider has the following main properties: **min**, **max**, **value**, **value1**, **value2**, and **step**. All properties are optional, including **step**. Usage examples:

```html
<toolcool-range-slider></toolcool-range-slider>

<toolcool-range-slider min="10" max="50"></toolcool-range-slider>

<toolcool-range-slider min="-100" max="100" value="50"></toolcool-range-slider>

<toolcool-range-slider min="0" max="100" value="50"></toolcool-range-slider>

<toolcool-range-slider min="100" max="200" value="150" step="10" round="0"></toolcool-range-slider>

<toolcool-range-slider value1="10" value2="20"></toolcool-range-slider>

<toolcool-range-slider min="-200" max="200" value1="-50" value2="100"></toolcool-range-slider>
```

The properties have the following default values:

| Property | Default Value | Description                                                        |
|----------|---------------|--------------------------------------------------------------------|
| min      | 0             | The minimum value.                                                 |
| max      | 100           | The maximum value.                                                 |
| value    | 0             | Current slider value.                                              |
| value1   | 0             | Alias for the value property (used in a slider with two pointers). |
| value2   | undefined     | Second pointer value.                                              |
| step     | undefined     | Slide step.                                                        |
| round    | 2             | The maximum number of decimal places.                              |

:pushpin: If no value is specified, it will be equal to the minimum value.

:pushpin: To create a 2 pointer range slider, specify value1 and value2.

Each property can also be changed programmatically:

```html
<toolcool-range-slider id="slider-1"></toolcool-range-slider>

<script type="text/javascript" src="toolcool-range-slider.min.js"></script>

<script>
    // get the reference
    const $slider = document.getElementById('slider-1');
    
    // set properties
    $slider.min = -200;
    $slider.max = 200;
    $slider.value = 50; // or $slider.value1 = 50;
    $slider.value2 = 150;
    $slider.step = 10;
    $slider.round = 0;

    // or 
    // $slider.setAttribute('min', '-200');
    // ...
</script>
```