## Width, Height, & Border Radius

<div data-examples="width-height-border-radius"></div>

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


The slider radius can be changed using the **slider-radius** attribute like this:

```html
<tc-range-slider
  slider-radius="0"

  value="50"
  slider-height="0.9rem"
  generate-labels="true"></tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
       slider-radius="0"
       value="50"
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

> :pushpin: An example page with the source code can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/2-width-height.html).

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
    $slider.sliderWidth = '200px';
    $slider.sliderHeight = '0.7rem';
    $slider.sliderRadius = 0;
    
    $slider.pointerWidth = '1.8rem';
    $slider.pointerHeight = '1.8rem';
    $slider.pointerRadius = 0;

    $slider.pointer2Width = '1.3rem';
    $slider.pointer2Height = '1.3rem';
    $slider.pointer2Radius = '1rem';

    // or 
    // $slider.setAttribute('slider-width', '200px');
    // ...
</script>
```
   
<div class="my-12 flex flex-col items-center">
    <tc-range-slider
      id="slider-9"
      value1="40"
      value2="60"
      generate-labels="true"></tc-range-slider>
    <div class="flex items-center">
        <button id="styles-btn" type="button" class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 mt-8 mx-2">Change Styles</button>
        <button id="styles-reset" type="button" class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:ring-gray-600 mt-8 mx-2">Reset</button>
    </div>
</div>

