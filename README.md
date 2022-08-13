# Tool Cool Range Slider

[![GitHub license](https://img.shields.io/github/license/toolcool-org/toolcool-range-slider)](https://github.com/toolcool-org/toolcool-range-slider/blob/main/LICENSE)
![GitHub package.json version](https://img.shields.io/github/package-json/v/toolcool-org/toolcool-range-slider)
[![npm](https://img.shields.io/npm/dw/toolcool-range-slider)](https://www.npmjs.com/package/toolcool-range-slider)
[![NPM](https://img.shields.io/badge/npm-range_slider-brightgreen)](https://www.npmjs.com/package/toolcool-range-slider)
[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Ftoolcool-org%2Ftoolcool-range-slider)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Ftoolcool-org%2Ftoolcool-range-slider)

Responsive range slider library written in typescript and using web component technologies. Pure JavaScript without additional dependencies. It has a rich set of settings, including a vertical slider, touch and keyboard support.

![Tool Cool Range Slider](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/img/preview/toolcool-range-slider-preview-1.png?raw=true)

- Responsive, touch and keyboard support.
- Accessible via ARIA-attributes.
- ES6 JavaScript + TypeScript.
- No dependencies.
- Predefined themes (optional).
- Customizable with a large set of style attributes.
- Horizontal and vertical sliders.
- Based on web component technologies.

## Table of contents
- [Basic usage](#basic-usage)
- [CDN](#cdn)
- [Node.js usage](#nodejs-usage)
- [Main Properties](#main-properties)
- [Width, Height, and Border Radius](#width-height-and-border-radius)
- [Predefined Styles (Themes)](#predefined-styles-themes)
- [Colors](#colors)
- [Vertical Slider](#vertical-slider)
- [Touch & Keyboard Support](#touch--keyboard-support)
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

## CDN

The ToolCool Range Slider is also available in the [jsDelivr CND](https://www.jsdelivr.com/package/npm/toolcool-range-slider):

```html
<toolcool-range-slider></toolcool-range-slider>

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/toolcool-range-slider/dist/toolcool-range-slider.min.js"></script>
```


## Node.js usage

[![Tool Cool Range Slider](https://nodei.co/npm/toolcool-range-slider.png)](https://npmjs.org/package/toolcool-range-slider)

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

[![Range Slider](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/img/preview/gradient-preview.png?raw=true)](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/6-gradient.html)

Range slider has the following main properties: **min**, **max**, **value**, and **step**. All properties are optional, including **step**. Usage examples:

```html
<toolcool-range-slider></toolcool-range-slider>

<toolcool-range-slider min="10" max="50"></toolcool-range-slider>

<toolcool-range-slider min="-100" max="100" value="50"></toolcool-range-slider>

<toolcool-range-slider min="0" max="100" value="50"></toolcool-range-slider>

<toolcool-range-slider min="100" max="200" value="150" step="10"></toolcool-range-slider>
```

The properties have the following default values:

| Property     | Default Value |
|--------------|---------------|
| min | 0             |
| max | 100           |
| value | 0             |
| step | undefined     |

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


## Predefined Styles (Themes)

The slider has several optional predefined themes. Each theme defines a unique look-and-feel and can be used "as is" without defining each style parameter separately. 

**All themes are fully optional and can be partially or completely replaced by custom styles, as described later in this documentation.**


The slider has the following themes:

| Theme Code Name | Example                                                                                                                                                                                                     |
|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| target          | [Example 1](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/3-styles.html), [Example 2](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/5-dark-mode.html) |
| glass           | [Example 1](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/3-styles.html), [Example 2](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/5-dark-mode.html)                                                                                                         |
| rect            | [Example 1](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/3-styles.html), [Example 2](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/5-dark-mode.html)                                                                                                         |
| circle          | [Example 1](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/3-styles.html), [Example 2](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/5-dark-mode.html)                                                                                                         |
| gradient        | [Example 1](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/6-gradient.html)                                                                                                       |

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
| slider-bg            | #2D4373                         |
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

[An example](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/5-dark-mode.html) of a customized slider on a dark background:

[![Dark Mode - Range Slider](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/img/preview/dark-mode-preview.png?raw=true)](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/5-dark-mode.html)

## Vertical Slider

![Tool Cool Vertical Slider](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/img/preview/vertical-slider-preview.png?raw=true)

Vertical slider can be achieved using the **type** attribute as following:

```html
<toolcool-range-slider type="vertical"></toolcool-range-slider>
```
It accepts all the same attributes as the horizontal slider.  The default height of a vertical slider is **300px** unless the height attribute is provided.

## Touch & Keyboard Support

The library supports touch screens and also handles the following keys:


| Key         | Function                                                                       |
|-------------|--------------------------------------------------------------------------------|
| left arrow  | goes one step to the left in a horizontal slider or up in a vertical slider    |
| right arrow | goes one step to the right in a horizontal slider or down in a vertical slider |
| left up     | jumps to the min value                                                         |
| right down  | jumps to the max value                                                         |

## TypeScript Usage


```typescript
import 'toolcool-range-slider';
import RangeSlider from 'toolcool-range-slider';

// ...

const $slider = document.getElementById('slider-1') as ColorPicker;

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

