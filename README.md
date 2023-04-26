# Tool Cool Range Slider

![GitHub package.json version](https://img.shields.io/github/package-json/v/mzusin/toolcool-range-slider)
[![npm](https://img.shields.io/npm/dw/toolcool-range-slider)](https://www.npmjs.com/package/toolcool-range-slider)
[![NPM](https://img.shields.io/badge/npm-range_slider-brightgreen)](https://www.npmjs.com/package/toolcool-range-slider)
[![](https://data.jsdelivr.com/v1/package/npm/toolcool-range-slider/badge)](https://www.jsdelivr.com/package/npm/toolcool-range-slider)

Responsive range slider library written in typescript and using web component technologies. Pure JavaScript without additional dependencies. It has a rich set of settings, including any number of  pointers (knobs), vertical and horizontal slider, touch, mousewheel and keyboard support, local and session storage, range dragging, and RTL support. The functionality of the library can be extended using plugins.


## Links
- [Website](https://toolcool-range-slider.mzsoft.org/)
- [Documentation](https://toolcool-range-slider.mzsoft.org/pages/basic-usage.html)

### Any Number of Pointers

The library supports [any number of pointers](https://toolcool-range-slider.mzsoft.org/pages/basic-usage.html) (knobs/handles): 
one-pointer range slider, two-pointers range slider, or as many as you need.

[![Range Slider](https://github.com/mzusin/toolcool-range-slider/blob/main/docs/videos/range-slider-1.gif?raw=true)](https://toolcool-range-slider.mzsoft.org/pages/basic-usage.html)

### Mobile Ready 
Responsive and mobile-ready range slider that looks good on any devices :iphone:. 
It supports [touch, mousewheel events, and keyboard](https://toolcool-range-slider.mzsoft.org/pages/touch-and-keyboard-support.html).


### Accessibility
It accessible via [ARIA-attributes](https://toolcool-range-slider.mzsoft.org/pages/accessibility.html) :shield:

[![Range Slider](https://github.com/mzusin/toolcool-range-slider/blob/main/docs/videos/range-slider-2.gif?raw=true)](https://toolcool-range-slider.mzsoft.org/pages/accessibility.html)


### Marks Plugin
Range slider library has a standalone [Marks Plugin](https://toolcool-range-slider.mzsoft.org/pages/marks-plugin.html). This allows to generate points along the slider:

[![Range Slider](https://github.com/mzusin/toolcool-range-slider/blob/main/docs/videos/range-slider-marks.gif?raw=true)](https://toolcool-range-slider.mzsoft.org/pages/marks-plugin.html)

### ES6 JavaScript & Typescript
The library is built with Typescript and does not use external dependencies :unlock:. The core is 28KB minified or 9KB compressed (GZip).

### Themes :art:

The library has additional [theme](https://toolcool-range-slider.mzsoft.org/pages/themes.html) plugins with a ready-made set of styles such as gradients, glass, pointer shapes and more. It's also possible to [develop your own theme](https://toolcool-range-slider.mzsoft.org/pages/css-themes.html) as an external plugin.

https://user-images.githubusercontent.com/106236790/192861157-6bc694ee-3970-4264-b44f-5991b1511c4a.mov


### Styles & Design
The library has multiple options for customizing :wrench: the appearance of the slider.
[Width, height, border radius](https://toolcool-range-slider.mzsoft.org/pages/width-height-and-border-radius.html), [colors](https://toolcool-range-slider.mzsoft.org/pages/colors.html), hover and focus, and other properties can be customized using the slider attributes.

[Images and SVGs](https://toolcool-range-slider.mzsoft.org/pages/images-and-svgs-as-pointers.html) can be used as pointers.

### Direction & Orientation
The library supports horizontal and [vertical orientation](https://toolcool-range-slider.mzsoft.org/pages/vertical-slider.html) :globe_with_meridians:. It also supports left to right and [right to left](https://toolcool-range-slider.mzsoft.org/pages/right-to-left-support.html) directions for a horizontal slider, and top to bottom and [bottom to top](https://toolcool-range-slider.mzsoft.org/pages/vertical-slider.html) for vertical sliders.

[![Range Slider](https://github.com/mzusin/toolcool-range-slider/blob/main/docs/img/readme/1.png?raw=true)](https://toolcool-range-slider.mzsoft.org/pages/list-of-individual-values-and-text-data.html)

[![Range Slider](https://github.com/mzusin/toolcool-range-slider/blob/main/docs/videos/range-slider-4.gif?raw=true)](https://toolcool-range-slider.mzsoft.org/pages/vertical-slider.html)

### Numbers, Text, or Range

The slider range can be defined by a minimum and maximum numbers. Another option is to provide a list of individual (discrete) values. Both [text :writing_hand: and numeric data](https://toolcool-range-slider.mzsoft.org/pages/list-of-individual-values-and-text-data.html) are supported.

[![Range Slider](https://github.com/mzusin/toolcool-range-slider/blob/main/docs/img/readme/4.png?raw=true)](https://toolcool-range-slider.mzsoft.org/pages/list-of-individual-values-and-text-data.html)

### Local & Session Storage

Local storage :floppy_disk: and session storage support as a [standalone plugin](https://toolcool-range-slider.mzsoft.org/pages/storage.html). The user selection will be saved and restored after page refresh or navigation from other pages.

[![Range Slider](https://github.com/mzusin/toolcool-range-slider/blob/main/docs/img/readme/2.png?raw=true)](https://toolcool-range-slider.mzsoft.org/pages/storage.html)

### Moving Tooltip Plugin

Range slider library has a standalone **Moving Tooltip Plugin**. The plugin adds a moving tooltip to each pointer. You can change the tooltip color, size, and distance to pointer.

[![Range Slider](https://github.com/mzusin/toolcool-range-slider/blob/main/docs/videos/moving-tooltip.gif?raw=true)](https://toolcool-range-slider.mzsoft.org/pages/moving-tooltip-plugin.html)

### Range Dragging
The library also supports [range dragging](https://toolcool-range-slider.mzsoft.org/pages/range-dragging.html):

[![Range Slider](https://github.com/mzusin/toolcool-range-slider/blob/main/docs/videos/range-dragging.gif?raw=true)](https://toolcool-range-slider.mzsoft.org/pages/moving-tooltip-plugin.html)

### Origin at Center
The library also has an [Origin at Center Plugin](https://toolcool-range-slider.mzsoft.org/pages/origin-at-center-plugin.html). This plugin makes the origin of the pointer always in the center.

[![Range Slider](https://github.com/mzusin/toolcool-range-slider/blob/main/docs/videos/origin-at-center.gif?raw=true)](https://toolcool-range-slider.mzsoft.org/pages/origin-at-center-plugin.html)

### Other Features
- Based on web component technologies.
- Allows programmatic attribute changes :computer:
- Simple dynamic rendering after ajax requests or delays.
- [Disabled/enabled](https://toolcool-range-slider.mzsoft.org/pages/disabled.html) range slider (including API).
- Possibility to disable only one pointer.
- [Non-linear](https://toolcool-range-slider.mzsoft.org/pages/non-linear-step.html) range slider :chart_with_downwards_trend:
- Optional [animation](https://toolcool-range-slider.mzsoft.org/pages/animation.html) on panel click.
- Works well with Bootstrap and other CSS frameworks :+1:
- No CSS conflicts due to web components.
- Automatically generated labels as a [standalone plugin](https://toolcool-range-slider.mzsoft.org/pages/auto-generated-labels.html).
- Any number of sliders on one page.
- Supports two (and more) [pointers overlap](https://toolcool-range-slider.mzsoft.org/pages/pointers-overlap.html), pointers [max and min distance](https://toolcool-range-slider.mzsoft.org/pages/max-and-min-pointers-distance.html).
- The functionality of the library can be extended using [plugins](https://toolcool-range-slider.mzsoft.org/pages/javascript-plugins.html).
- The range slide can be used in [React](https://toolcool-range-slider.mzsoft.org/pages/react-typescript.html) and other frameworks.
- Extensive API based on TypeScript.
[![Range Slider](https://github.com/mzusin/toolcool-range-slider/blob/main/docs/img/readme/3.png?raw=true)](https://toolcool-range-slider.mzsoft.org/pages/storage.html)


### Plugins
- [Binding Labels Plugin](https://toolcool-range-slider.mzsoft.org/pages/auto-binding-labels.html)
- [Auto Generated Labels Plugin](https://toolcool-range-slider.mzsoft.org/pages/auto-generated-labels.html)
- [Moving Tooltip Plugin](https://toolcool-range-slider.mzsoft.org/pages/moving-tooltip-plugin.html)
- [Storage Plugin](https://toolcool-range-slider.mzsoft.org/pages/storage.html)
- [Pointer Shapes CSS Plugin](https://toolcool-range-slider.mzsoft.org/pages/pointer-shapes.html)
- [Themes CSS Plugin](https://toolcool-range-slider.mzsoft.org/pages/themes.html)
- [Origin at Center Plugin](https://toolcool-range-slider.mzsoft.org/pages/origin-at-center-plugin.html)
- [Marks Plugin](https://toolcool-range-slider.mzsoft.org/pages/marks-plugin.html)

## License

[MIT license](https://github.com/mzusin/toolcool-range-slider/blob/main/LICENSE)

It can be used **for free** in any personal or commercial project :gift: 


[![Tool Cool Range Slider](https://github.com/mzusin/toolcool-range-slider/blob/main/examples/img/preview/toolcool-range-slider-preview-2.png?raw=true)](https://github.com/mzusin/toolcool-range-slider/blob/main/examples/3-styles.html)


## Other Projects
- [ミ☆ mzParticles ☆彡](https://github.com/mzusin/mz-particles) - TypeScript library for creating particle effects.
- [mzMath](https://github.com/mzusin/mz-math) - a collection of typescript-based math helpers. 
- [mzSVG](https://github.com/mzusin/mz-svg) - TypeScript-based library for managing SVG in the browser and Node.js.
- [React Input Number](https://github.com/mzusin/mz-react-input-number) - React component that provides a user-friendly interface for entering numerical values. 
- [Stripes Maker](https://github.com/mzusin/stripes-maker) - Node.js stripe pattern generator and maker. 
- [mzCanvas](https://github.com/mzusin/mz-canvas) - The TypeScript-based library for manipulating &lt;canvas> element and 2D graphics in the browser. 
- [Tool Cool Color Picker](https://github.com/mzusin/toolcool-color-picker) - color picker library written in typescript and using web component technologies.

