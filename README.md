# Tool Cool Range Slider

[![GitHub license](https://img.shields.io/github/license/toolcool-org/toolcool-range-slider)](https://github.com/toolcool-org/toolcool-range-slider/blob/main/LICENSE)
![GitHub package.json version](https://img.shields.io/github/package-json/v/toolcool-org/toolcool-range-slider)
[![npm](https://img.shields.io/npm/dw/toolcool-range-slider)](https://www.npmjs.com/package/toolcool-range-slider)
[![NPM](https://img.shields.io/badge/npm-range_slider-brightgreen)](https://www.npmjs.com/package/toolcool-range-slider)
[![](https://data.jsdelivr.com/v1/package/npm/toolcool-range-slider/badge)](https://www.jsdelivr.com/package/npm/toolcool-range-slider)
[![Featured on Openbase](https://badges.openbase.com/js/featured/toolcool-range-slider.svg?token=sUaswkA1YmMFk8F+JBWQZoWo4wGL7wZwyIaglD6kAlQ=)](https://openbase.com/js/toolcool-range-slider?utm_source=embedded&amp;utm_medium=badge&amp;utm_campaign=rate-badge)
[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Ftoolcool-org%2Ftoolcool-range-slider)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Ftoolcool-org%2Ftoolcool-range-slider)


Responsive range slider library written in typescript and using web component technologies. Pure JavaScript without additional dependencies. It has a rich set of settings, including one and two pointers, a vertical slider, touch, mousewheel and keyboard support, local and session storage, and RTL support.

[![Tool Cool Range Slider](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/img/preview/toolcool-range-slider-preview-2.png?raw=true)](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/3-styles.html)

- Responsive, touch, mousewheel, and keyboard support :iphone:
- Range slider with **one** or **two pointers**.
- Accessible via ARIA-attributes :shield:
- ES6 JavaScript + TypeScript.
- No dependencies :unlock:
- Predefined themes (optional) :art:
- Customizable with a large set of style attributes :wrench:
- Horizontal and vertical sliders support.
- Based on web component technologies.
- Allows programmatic attribute changes :computer:
- Bottom to top support.
- Simple dynamic rendering after ajax requests or delays.
- Disabled / enabled range slider (including API).
- Local storage and session storage support :floppy_disk:
- Supports a list of individual values (discrete values).
- Right to left (RTL) support :globe_with_meridians:
- Text data support :writing_hand:
- Non-linear range slider :chart_with_downwards_trend:
- Optional animation on panel click.
- Works well with Bootstrap and other CSS frameworks :+1:
- No CSS conflicts due to web components.
- Automatically generated labels (optional).
- Supports multiple sliders on one page.
- Supports two pointers **overlap**, pointers **max** and **min** distance.

## Table of contents
- [Basic usage](#basic-usage)
- [CDN](#cdn)
- [Node.js usage](#nodejs-usage)
- [Main Properties](#main-properties)
- [List of individual values](#list-of-individual-values)
- [Width, Height, and Border Radius](#width-height-and-border-radius)
- [Automatically generated labels](#automatically-generated-labels)
- [Predefined Styles (Themes)](#predefined-styles-themes)
- [Colors](#colors)
- [Vertical Slider](#vertical-slider)
- [Pointer Shapes](#pointer-shapes)
- [Touch & Keyboard Support](#touch--keyboard-support)
- [Events](#events)
- [Disabled](#disabled)
- [Storage](#storage)
- [RTL Support](#rtl-support)
- [Non-linear step](#non-linear-step)
- [Pointers overlap](#pointers-overlap)
- [Pointers max and min distance](#pointers-max-and-min-distance)
- [Animation on panel click](#animation-on-panel-click)
- [TypeScript Usage](#typescript-usage)
- [Usage with React and TypeScript](#usage-with-react-and-typescript)
- [License](#license)

## Basic Usage

Download the latest [toolcool-range-slider.min.js](https://github.com/toolcool-org/toolcool-range-slider/blob/main/dist/toolcool-range-slider.min.js) script:

Add the following html to the page:
```html
<toolcool-range-slider></toolcool-range-slider>

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

**value1** is just an alias of the **value** property.

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

## CDN

The ToolCool Range Slider is also available in the [jsDelivr CND](https://www.jsdelivr.com/package/npm/toolcool-range-slider):

```html
<toolcool-range-slider></toolcool-range-slider>

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/toolcool-range-slider/dist/toolcool-range-slider.min.js"></script>
```


## Node.js usage

Range slider may also be included as a [node module](https://www.npmjs.com/package/toolcool-range-slider) using npm:

`npm i toolcool-range-slider`

or with Yarn:

`yarn add toolcool-range-slider`

And then you can include it in your application like this:

```js
import 'toolcool-range-slider';
```

NPM package can fe found [here](https://www.npmjs.com/package/toolcool-range-slider).

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

| Property | Default Value | Description                                                           |
|----------|---------------|-----------------------------------------------------------------------|
| min      | 0             | The minimum value.                                                    |
| max      | 100           | The maximum value.                                                    |
| value    | 0             | Current slider value.                                                 |
| value1   | 0             | Alias for the value property (for use in a slider with two pointers). |
| value2   | undefined     | Second pointer value.                                                 |
| step     | undefined     | Slide step.                                                           |
| round    | 2             | The maximum number of decimal places.                                 |

:pushpin: If no value is specified, it will be equal to the minimum value.

:pushpin: To create a 2 pointer range slider, specify value1 and value2.

## List of individual values

It is also possible (but not required) to provide a list of numeric or text data instead of **min** and **max** properties.

ABC example:

```html
<toolcool-range-slider
  data="a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z"></toolcool-range-slider>
```

Geometric progression:

```html
<toolcool-range-slider
data="2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192"></toolcool-range-slider>
```

In the case where numeric and textual data is mixed, we assume that all data is textual.

:pushpin: Example page can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/16-data.html).

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
```

Default values table:

| Property     | Default Value |
|--------------|---------------|
| slider-width | 300px         |
| slider-height | 0.25rem       |
| slider-radius | 1rem          |
| pointer-width | 1rem          |
| pointer-height | 1rem          |
| pointer-radius | 100%          |

## Automatically generated labels

It's possible to generate min, max, and value labels automatically using **generate-labels="true"** attribute:

```html
<toolcool-range-slider generate-labels="true"></toolcool-range-slider>
```

If this attribute is specified, the **minimum**, **maximum**, and **value** label are automatically generated.

You can provide custom html for all or part of the labels:

```html
<toolcool-range-slider generate-labels="true">
  <div slot="min-label"><label class="min-label"></label> px</div>
  <div slot="max-label"><label class="max-label"></label> px</div>
  <div slot="value-label"><label class="value-label"></label> px</div>
</toolcool-range-slider>
```

In case of 2 pointers range slider **value2-label** slot and label should be added:

```html
<toolcool-range-slider generate-labels="true">
  <div slot="min-label"><label class="min-label"></label> px</div>
  <div slot="max-label"><label class="max-label"></label> px</div>
  <div slot="value-label"><label class="value-label"></label> px</div>
  <div slot="value2-label"><label class="value2-label"></label> px</div>
</toolcool-range-slider>
```

This way you can add CSS classes, inline styles, or any HTML structure instead of the standard range slider labels.

:exclamation: Please make sure you keep slot names with one of the following values: **min-label**, **max-label**, **value-label**, **value2-label**.

:exclamation: It's also important, that the labels have one of the following classes: **min-label**, **max-label**, **value-label**, **value2-label**. These classes are used as placeholders for min, max, and value (value1), value2.

Other than that, the HTML structure can be changed in any way.

:pushpin: Example page can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/19-generate-labels.html).

## Predefined Styles (Themes)

[![Range Slider](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/img/preview/gradient-preview.png?raw=true)](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/6-gradient.html)

The slider has several optional predefined themes. Each theme defines a unique look-and-feel and can be used "as is" without defining each style parameter separately. 

**All themes are fully optional and can be partially or completely replaced by custom styles, as described later in this documentation.**


The slider has the following themes:

| Theme Code Name | Example                                                                                                                                                                                               |
|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| target          | [Example 1](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/3-styles.html), [Example 2](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/5-dark-mode.html) |
| glass           | [Example 1](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/3-styles.html), [Example 2](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/5-dark-mode.html) |
| rect            | [Example 1](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/3-styles.html), [Example 2](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/5-dark-mode.html) |
| circle          | [Example 1](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/3-styles.html), [Example 2](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/5-dark-mode.html) |
| gradient        | [Example](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/6-gradient.html) |
| ruler           | [Example](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/3-styles.html)  |

Usage examples:

```html
<toolcool-range-slider
  slider-width="400px"
  slider-height="0.5rem"
  theme="rect"></toolcool-range-slider>
```

It's possible to combine themes together with custom properties like this:

```html
 <toolcool-range-slider
  slider-width="400px"
  slider-height="0.5rem"
  theme="rect"
  slider-bg="red"></toolcool-range-slider>
```

## Colors

Color and other styles can be customized with the following attributes:

```html
<toolcool-range-slider
        slider-width="400px"
        slider-height="0.5rem"
        pointer-width="1.5rem"
        pointer-height="1.5rem"
        slider-bg="#6AD3BA"
        slider-bg-hover="#3F8A8A"
        pointer-border-hover="1px solid #79D6C0"
        pointer-border-focus="1px solid #79D6C0"></toolcool-range-slider>


<toolcool-range-slider
          slider-width="400px"
          slider-height="0.5rem"
          pointer-width="1.5rem"
          pointer-height="1.5rem"
          pointer-bg="#6AD3BA"
          pointer-bg-hover="#50BDA3"
          pointer-shadow="none"
          pointer-shadow-hover="none"
          pointer-border="0"
          pointer-border-hover="1px solid #3F8A8A"
          pointer-border-focus="1px solid #3F8A8A"></toolcool-range-slider>
```

The list of attributes and default values:

| Property             | Default Value                   |
|----------------------|---------------------------------|
| slider-bg            | #4d69ad                         |
| slider-bg-hover      | #5f79b7                         |
| slider-bg-fill       | #000                            |
| pointer-bg           | #fff                            |
| pointer-bg-hover     | #dcdcdc                         |
| pointer-bg-focus     | #dcdcdc                         |
| pointer-shadow       | 0 0 2px rgba(0, 0, 0, 0.6)      |
| pointer-shadow-hover | 0 0 2px rgb(0, 0, 0)            |
| pointer-shadow-focus | 0 0 2px rgb(0, 0, 0)            |
| pointer-border       | 1px solid hsla(0, 0%, 88%, 0.5) |
| pointer-border-hover | 1px solid hsla(0, 0%, 88%, 0.5) |
| pointer-border-focus | 1px solid hsl(201, 72%, 59%)    |

:pushpin: [An example](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/5-dark-mode.html) of a customized slider on a dark background:

[![Dark Mode - Range Slider](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/img/preview/dark-mode-preview.png?raw=true)](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/5-dark-mode.html)

## Vertical Slider

![Tool Cool Vertical Slider](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/img/preview/vertical-slider-preview.png?raw=true)

Vertical slider can be achieved using the **type** attribute as following:

```html
<toolcool-range-slider type="vertical"></toolcool-range-slider>
```
It accepts all the same attributes as the horizontal slider. The default height of a vertical slider is **300px** unless the height attribute is provided.

It is also possible to reverse the direction and slide from bottom to top using the **btt** attribute:

```html
<toolcool-range-slider type="vertical" btt="true"></toolcool-range-slider>
```

## Pointer Shapes

[![Tool Cool Pointer Shapes](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/img/preview/pointer-shapes.png?raw=true)](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/7-pointer-shapes.html)

There are also several predefined pointer shapes that can be defined using the **pointer-shape** attribute. For example, **triangle** pointer shape:

```html
<toolcool-range-slider
  min="0"
  max="100"
  value="10"
  pointer-shape="triangle"
  pointer-width="2rem"
  pointer-height="2rem"
  pointer-bg="#d7067d"
  pointer-bg-hover="#0b94c7"
  pointer-bg-focus="#0b94c7"
  slider-width="400px"
  slider-bg="#6787cd"></toolcool-range-slider>
```

There are the following pointer shapes:

| Property             | 
|----------------------|
| triangle            |
| star      |
| rhombus       |
| trapezoid          |
| parallelogram     |
| right-arrow     |

## Touch & Keyboard Support

The library supports touch screens and also handles the following keys:


| Key         | Function                                                                       |
|-------------|--------------------------------------------------------------------------------|
| left arrow  | goes one step to the left in a horizontal slider or up in a vertical slider    |
| right arrow | goes one step to the right in a horizontal slider or down in a vertical slider |
| left up     | jumps to the min value                                                         |
| right down  | jumps to the max value                                                         |
| mousewheel  | the same as arrows                                                             |

## Events

The range slider has the following events:

| Event         | Description                                                                       |
|---------------|-----------------------------------------------------------------------------------|
| change      | it is sent every time the value of the range slider changes                       |
| onMouseDown          | the native browser mousedown event                                                |
| onMouseUp       | the native browser mouseup event                                                  |
| onPointerClicked     | it is dispatched when the user clicks the range slide pointer (handler)           |
| onKeyDown | the native browser keydown event  **(arrow left, arrow right, arrow up, arrow down)** |

Usage examples:

```js
const $slider1 = document.getElementById('slider-1');

// change event ------------
$slider1.addEventListener('change', (evt) => {
    const value = Math.round(evt.detail.value);
    $value1.textContent = value.toString();
    console.log(`Change event: ${ value }`)
});

// onMouseDown event ------------
$slider1.addEventListener('onMouseDown', (evt) => {
    const nativeEvent = evt.detail.nativeEvent;
    console.log('Native mousedown event:', nativeEvent)
});

// onMouseUp event ------------
$slider1.addEventListener('onMouseUp', (evt) => {
    const nativeEvent = evt.detail.nativeEvent;
    console.log('Native mouseup event:', nativeEvent);
});

// onPointerClicked event ------------
$slider1.addEventListener('onPointerClicked', (evt) => {
    const $pointer = evt.detail.$pointer;
    console.log('Pointer clicked event:', $pointer);
});

// onKeyDownEvent event ------------
$slider1.addEventListener('onKeyDown', (evt) => {
    const nativeEvent = evt.detail.nativeEvent;
    console.log('Native onKeyDown event:', nativeEvent);
});
```

In the case of **2 pointers range slider**, change event has value and value2 properties:

```js
const $slider1 = document.getElementById('slider-1');

// change event ------------
$slider1.addEventListener('change', (evt) => {
    console.log(evt.detail.value);
    console.log(evt.detail.value2);
});
```

:pushpin: The page with these examples can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/11-events.html).

## Disabled

It's possible to disable the range slider using **disabled** attribute:

```html
<toolcool-range-slider disabled="true"></toolcool-range-slider>
```

This property can be easily toggled via APIs as follows:

```js
const $slider1 = document.getElementById('slider-1');
const $toggleButton = document.getElementById('toggle-btn');

$toggleButton.addEventListener('click', () => {
  $slider1.disabled = !$slider1.disabled;
});
```

The default opacity of the range slider when disabled is **0.4**. This value can be change using css variable **--tc-range-slider-opacity**:

```html
<toolcool-range-slider
  disabled="true"
  style="--tc-range-slider-opacity: 0.1"></toolcool-range-slider>
```

:pushpin: The page with this example can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/12-disabled-enabled.html).


## Storage

The range slider library also supports local and session storage. It's used to save the selected slider value between different pages and page reloads.

```html
<toolcool-range-slider storage="session-storage" storage-key="tc-range-slider-1"></toolcool-range-slider>
<toolcool-range-slider storage="local-storage" storage-key="tc-range-slider-2"></toolcool-range-slider>
```

The difference between **local** and **session storage** is that session storage keeps the value only during the current session, while the local storage keeps it until the user clears the browser cache.

> In case of **2 pointers range slider**, the second key will have **-2** suffix. For example, if storage-key="test", then the **value2** key will be **"test-2"**.

:pushpin: The page with examples can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/13-storage.html).

## RTL support

The range slider also supports right to left (RTL) using **rtl** attribute as follows:

```html
<toolcool-range-slider rtl="true"></toolcool-range-slider>
```

```html
<toolcool-range-slider
  slider-width="100%"
  generate-labels="true"
  rtl="true"></toolcool-range-slider>
```

:pushpin: The page with examples can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/14-rtl.html).

## Non-linear step

The range slider supports the non-linear step function. For example, the slider below has a step of 5 if the value is less than 50, otherwise the step is 10:

```html
<toolcool-range-slider id="slider-1"></toolcool-range-slider>

<script src="toolcool-range-slider.min.js"></script>
<script>
    const $slider = document.getElementById('slider-1');
    $slider.step = (value) => {
        return value < 50 ? 5 : 10;
    };
</script>
```

Step function has the following type:

```js
(value: number | string) => number
```

It gets the **value** of the slider and returns the corresponding **step** value.

:pushpin: The page with examples can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/17-non-linear.html).

## Pointers overlap

In the two pointer range slider, pointer overlap can be enabled using **pointers-overlap** attribute:

```html
<toolcool-range-slider pointers-overlap="true" value1="10" value2="40" min="0" max="100"></toolcool-range-slider>
```

There is also a corresponding API property:

```js
const $slider = document.querySelector('#slider');
$slider.pointersOverlap = true;
```

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

> Please note that the provided distances should be >= 0;

The properties have the following default values:

| Property | Default Value | API Property |
|----------|---------------|---------------|
| pointers-max-distance      | 0  |  pointersMinDistance |
| pointers-max-distance      | Infinity  | pointersMaxDistance | 


:pushpin: The page with examples can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/21-two-pointers-min-max-distance.html).

## Animation on panel click

It's possible to enable animation on panel click with the **animate-onclick** property:

```html
<toolcool-range-slider animate-onclick="0.3s"></toolcool-range-slider>
```

The value of the **animate-onclick** property is specified in seconds, ms, etc. and is the same as the css [transition-duration](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration) property.

:pushpin: The page with example can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/18-animation-on-click.html).

## TypeScript Usage


```typescript
import 'toolcool-range-slider';
import RangeSlider from 'toolcool-range-slider';

// ...

const $slider = document.getElementById('slider-1') as RangeSlider;

$slider.addEventListener('change', (evt: Event) => {
    const customEvent = evt as CustomEvent;
    const value = Math.round(evt.detail.value);
    console.log(value);
});

$slider.value = 10;
```


## Usage with React and TypeScript

```typescript
import 'toolcool-range-slider';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'toolcool-range-slider': any;
        }
    }
}

const RangeSliderExample = () => {

    const rangeSliderRef = useRef<HTMLElement>();

    useEffect(() => {

        const slider = rangeSliderRef.current;

        const onChange = (evt: Event) => {
            const customEvent = evt as CustomEvent;
            const value = Math.round(evt.detail.value);
            console.log(value);
        };

        slider?.addEventListener('change', onChange);

        return () => {
          slider?.removeEventListener('change', onChange);
        };
    }, []);

    return (
        <toolcool-range-slider ref={ rangeSliderRef } />;
    )
};

export default RangeSliderExample;
```

## License

[MIT license](https://github.com/toolcool-org/toolcool-range-slider/blob/main/LICENSE)

It can be used **for free** in any personal or commercial project :gift: 

