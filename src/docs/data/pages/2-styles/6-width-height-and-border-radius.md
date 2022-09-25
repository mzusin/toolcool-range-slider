## Width, Height, and Border Radius

By default, the slider width is **100%** and the height is **0.25 rem**. These values can be changed using the **slider-width** and **slider-height** properties:

```html
<tc-range-slider
       slider-width="290px"
       slider-height="0.9rem"
       generate-labels="true"></tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
       slider-width="290px"
       slider-height="0.9rem"
       generate-labels="true"></tc-range-slider>
</div>

Pointer width, height, and border-radius can be change using **pointer-width**, **pointer-height**, and **pointer-radius** properties:

```html
<tc-range-slider
        value1="30"
        value2="60"
        pointer-width="35px"
        pointer-height="35px"
        pointer-radius="5px"></tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
        value1="30"
        value2="60"
        pointer-width="35px"
        pointer-height="35px"
        pointer-radius="5px"></tc-range-slider>
</div>

You can also specify different styles for different pointers:

```html
<tc-range-slider
  value1="10"
  value2="40"
  value3="80"
  
  pointer1-width="10px"
  pointer1-height="10px"
  pointer1-radius="0"
  
  pointer2-width="20px"
  pointer2-height="20px"
  pointer2-radius="5px"
  
  pointer3-width="30px"
  pointer3-height="30px"
  pointer3-radius="100%"></tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
        value1="10"
        value2="40"
        value3="80"
        pointer1-width="10px"
        pointer1-height="10px"
        pointer1-radius="0"
        pointer2-width="20px"
        pointer2-height="20px"
        pointer2-radius="5px"
        pointer3-width="30px"
        pointer3-height="30px"
        pointer3-radius="100%"></tc-range-slider>
</div>


| HTML Property   | Default Value           | API Property   |
|-----------------|-------------------------|----------------|
| slider-width    | 300px                   | sliderWidth    |
| slider-height   | 0.25rem                 | sliderHeight   | 
| slider-radius   | 1rem                    | sliderRadius   |
| pointer-width   | 1rem                    | pointerWidth   |
| pointer-height  | 1rem                    | pointerHeight  |
| pointer-radius  | 100%                    | pointerRadius  | 
| pointer2-width  | inherits pointer-width  | pointer2Width  |
| pointer2-height | inherits pointer-height | pointer2Height |
| pointer3-radius | inherits pointer-radius | pointer2Radius | 
| pointer3-width  | inherits pointer-width  | pointer3Width  |
| pointer3-height | inherits pointer-height | pointer3Height |
| pointer3-radius | inherits pointer-radius | pointer3Radius | 
| etc...          | ...                     | ...            | 

Each property can also be changed via the API:

```html
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
    // $slider.setAttribute('slider-width', '300px');
    // ...
</script>
```