## Colors

<div data-examples="colors"></div>

The library allows to customize the appearance of the slider, including colors, hover and focus states, shadows.

To change the slider background colors use the following attributes: **slider-bg**, **slider-bg-hover**, and **slider-bg-fill**.

```html
<tc-range-slider
    value="50"
    slider-height="0.9rem"
    
    slider-bg="red"
    slider-bg-hover="silver" 
    slider-bg-fill="blue"></tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
        value="50"
        slider-height="0.9rem"
        slider-bg="red"
        slider-bg-hover="silver"
        slider-bg-fill="blue"></tc-range-slider>
</div>

| HTML Attribute  | Default Value | API Property  |
|-----------------|---------------|---------------|
| slider-bg       | #CBD5E1       | sliderBg      |
| slider-bg-hover | #94A3B8       | sliderBgHover |
| slider-bg-fill  | #47           | sliderBgFill  |


To change the pointer background colors use the following attributes: **pointer-bg**, **pointer-bg-hover**, and **pointer-bg-focus**.

```html
<tc-range-slider
    value="50"
    pointer-bg="silver"
    pointer-bg-hover="blue"
    pointer-bg-focus="red"></tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
        value="50"
        pointer-bg="silver"
        pointer-bg-hover="blue"
        pointer-bg-focus="red"></tc-range-slider>
</div>

| HTML Attribute    | Default Value | API Property    |
|-------------------|---------------|-----------------|
| pointer-bg        | #fff          | pointerBg       |
| pointer-bg-hover  | #dcdcdc       | pointerBgHover  |
| pointer-bg-focus  | #dcdcdc       | pointerBgFocus  |
| pointer2-bg       | #fff          | pointer2Bg      |
| pointer2-bg-hover | #dcdcdc       | pointer2BgHover |
| pointer2-bg-focus | #dcdcdc       | pointer2BgFocus |
| etc...            | ...           | ...             |


The pointer border can be customized using the following properties:

```html
<tc-range-slider
    value="50"
    pointer-border="1px solid red"
    pointer-border-hover="1px solid blue"
    pointer-border-focus="2px solid black"></tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
        value="50"
        pointer-border="1px solid red"
        pointer-border-hover="1px solid blue"
        pointer-border-focus="2px solid black"></tc-range-slider>
</div>

| HTML Attribute        | Default Value                   | API Property        |
|-----------------------|---------------------------------|---------------------|
| pointer-border        | 1px solid hsla(0, 0%, 88%, 0.5) | pointerBorder       |
| pointer-border-hover  | 1px solid #94A3B8               | pointerBorderHover  |
| pointer-border-focus  | 1px solid #94A3B8               | pointerBorderFocus  |
| pointer2-border       | 1px solid hsla(0, 0%, 88%, 0.5) | pointer2Border      |
| pointer2-border-hover | 1px solid #94A3B8               | pointer2BorderHover |
| pointer2-border-focus | 1px solid #94A3B8               | pointer2BorderFocus |
| etc...                | ...                             | ...                 |


The pointer shadow can be configured using **pointer-shadow**, **pointer-shadow-hover**, and **pointer-shadow-focus** attributes:

```html
<tc-range-slider
    value="50"
    pointer-shadow="0 0 5px blue"
    pointer-shadow-hover="0 0 5px red"
    pointer-shadow-focus="0 0 5px black"></tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
        value="50"
        pointer-shadow="0 0 5px blue"
        pointer-shadow-hover="0 0 5px red"
        pointer-shadow-focus="0 0 5px black"></tc-range-slider>
</div>

| HTML Attribute        | Default Value              | API Property        |
|-----------------------|----------------------------|---------------------|
| pointer-shadow        | 0 0 2px rgba(0, 0, 0, 0.8) | pointerShadow       |
| pointer-shadow-hover  | 0 0 2px rgb(0, 0, 0)       | pointerShadowHover  |
| pointer-shadow-focus  | 0 0 2px rgb(0, 0, 0)       | pointerShadowFocus  |
| pointer2-shadow       | 0 0 2px rgba(0, 0, 0, 0.8) | pointer2Shadow      |
| pointer2-shadow-hover | 0 0 2px rgb(0, 0, 0)       | pointer2ShadowHover |
| pointer2-shadow-focus | 0 0 2px rgb(0, 0, 0)       | pointer2ShadowFocus |
| etc...                | ...                        | ...                 |

By default, all pointers inherit the same styles. But it is possible to configure each pointer individually:

```html
<tc-range-slider
    value1="10"
    value2="50"
    value3="90"
    
    pointer1-bg="red"
    pointer1-border="none"
    
    pointer2-bg="green"
    pointer2-border="none"
    
    pointer3-bg="blue"
    pointer3-border="none"></tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
        value1="10"
        value2="50"
        value3="90"
        pointer1-bg="red"
        pointer1-border="none"
        pointer2-bg="green"
        pointer2-border="none"
        pointer3-bg="blue"
        pointer3-border="none"></tc-range-slider>
</div>

Each property can be changed via the API as follows:

```html
<tc-range-slider 
  id="slider-1"
  value1="10"
  value2="50"
  value3="90"></tc-range-slider>

<script src="toolcool-range-slider.min.js"></script>

<script>
    // get the reference
    const $slider = document.getElementById('slider-1');
    
    // change properties
    $slider.sliderBg = '#efefef';
    $slider.sliderBgHover = '#ddd';
    $slider.sliderBgFill = '#ccc';
    
    $slider.pointer1Bg = 'red';
    $slider.pointer2Bg = 'green';
    $slider.pointer3Bg = 'blue';

    $slider.pointer1Border = 'none';
    $slider.pointer2Border = 'none';
    $slider.pointer3Border = 'none';

    // or 
    // $slider.setAttribute('slider-bg', '#efefef');
    // ...
</script>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
      id="slider-10"
      value1="10"
      value2="50"
      value3="90"></tc-range-slider>
    <div class="flex items-center">
        <button id="color-btn" type="button" class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 mt-8 mx-2">Change Styles</button>
        <button id="color-reset" type="button" class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:ring-gray-600 mt-8 mx-2">Reset</button>
    </div>
</div>