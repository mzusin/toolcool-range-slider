## Basic Usage

Download the latest [toolcool-range-slider.min.js](https://github.com/toolcool-org/toolcool-range-slider/blob/main/dist/toolcool-range-slider.min.js) script:

Add the following html to the page:
```html
<toolcool-range-slider></toolcool-range-slider>

<script type="text/javascript" src="toolcool-range-slider.min.js"></script>
```

Or alternatively:

```html
<tc-range-slider></tc-range-slider>

<script type="text/javascript" src="toolcool-range-slider.min.js"></script>
```

You can control the range slider by referencing the `toolcool-range-slider` HTML tag.

```html
<toolcool-range-slider id="slider-1"></toolcool-range-slider>

<script type="text/javascript" src="toolcool-range-slider.min.js"></script>

<script>
    // get the reference
    const $slider = document.getElementById('slider-1');
    
    // change value
    $slider.value = 50;
    
    // or 
    // $slider.setAttribute('value', '50');
    
    // get value
    console.log($slider.value);

    // listen to the change event
    $slider.addEventListener('change', (evt) => {
      const value = Math.round(evt.detail.value);
      console.log(value);
    });
</script>
```

The value label can also be automatically bound using the **value-label** attribute:

```html
<toolcool-range-slider value-label=".value-1"></toolcool-range-slider>

<div class="value-1"></div>

<script type="text/javascript" src="toolcool-range-slider.min.js"></script>
```

Range slider **with two pointers** can be created by adding the **value2** parameter:

```html
<toolcool-range-slider min="0" max="100" value="30" value2="60"></toolcool-range-slider>
```

It's also possible to use **value1** instead of value:

```html
<toolcool-range-slider min="0" max="100" value1="30" value2="60"></toolcool-range-slider>
```

> **value1** is just an alias of the **value** property.

Two pointers range slider API example:

```html
<toolcool-range-slider id="slider-1" value1="10" value2="50"></toolcool-range-slider>

<script type="text/javascript" src="toolcool-range-slider.min.js"></script>

<script>
    // get the reference
    const $slider = document.getElementById('slider-1');
    
    // change values
    $slider.value = 60;
    $slider.value2 = 70;

    // or 
    // $slider.setAttribute('value', '60');
    // $slider.setAttribute('value2', '70');
    
    // get values
    console.log($slider.value);
    console.log($slider.value2);

    // listen to the change event
    $slider.addEventListener('change', (evt) => {
      console.log(evt.detail.value);
      console.log(evt.detail.value2);
    });
</script>
```

:star: **It's also possible to generate min, max, and value labels automatically.**  [Click here for more details.](#automatically-generated-labels)

:pushpin: More examples with automatic label binding can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/8-automatic-labels-binding.html).

:pushpin: Examples with js binding can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/1-basic.html).