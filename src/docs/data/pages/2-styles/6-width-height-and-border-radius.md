## Width, Height, and Border Radius

By default, the slider width is **100%** and the height is **0.25 rem**. These values can be changed using the **slider-width** and **slider-height** properties:

```html
<toolcool-range-slider
        slider-width="300px"
        slider-height="15px"
        slider-radius="0.5rem"></toolcool-range-slider>

<toolcool-range-slider
       slider-width="100%"
       slider-height="1rem"></toolcool-range-slider>
```

Pointer width, height, and border-radius can be change using **pointer-width**, **pointer-height**, and **pointer-radius** properties:

```html
<toolcool-range-slider
        pointer-width="35px"
        pointer-height="35px"
        pointer-radius="5px"></toolcool-range-slider>

<toolcool-range-slider
        value1="30"
        value2="60"
        pointer-width="35px"
        pointer-height="35px"
        pointer-radius="5px"></toolcool-range-slider>
```

It's also possible to make different styles for the second pointer:

```html
<toolcool-range-slider
        value1="30"
        value2="60"
        pointer-width="35px"
        pointer-height="35px"
        pointer-radius="5px"

        pointer2-width="45px"
        pointer2-height="45px"
        pointer2-radius="10px"></toolcool-range-slider>
```

Default values table:

| HTML Property   | Default Value           | API Property  |
|-----------------|-------------------------|---------------|
| slider-width    | 300px                   | sliderWidth   |
| slider-height   | 0.25rem                 | sliderHeight  | 
| slider-radius   | 1rem                    | sliderRadius  |
| pointer-width   | 1rem                    | pointerWidth  |
| pointer-height  | 1rem                    | pointerHeight |
| pointer-radius  | 100%                    | pointerRadius | 
| pointer2-width  | inherits pointer-width  | pointerWidth  |
| pointer2-height | inherits pointer-height | pointerHeight |
| pointer2-radius | inherits pointer-radius | pointerRadius | 

Each property can also be changed via the API:

```html
<toolcool-range-slider id="slider-1" value1="30" value2-60></toolcool-range-slider>

<script type="text/javascript" src="toolcool-range-slider.min.js"></script>

<script>
    // get the reference
    const $slider = document.getElementById('slider-1');
    
    // change properties
    $slider.sliderWidth = '300px';
    $slider.sliderHeight = '1rem';
    $slider.sliderRadius = 0;
    
    $slider.pointerWidth = '1rem';
    $slider.pointerHeight = '1rem';
    $slider.pointerRadius = '100%';

    $slider.pointer2Width = '2rem';
    $slider.pointer2Height = '2rem';
    $slider.pointer2Radius = '0';

    // or 
    // $slider.setAttribute('sliderWidth', '300px');
    // ...
</script>
```