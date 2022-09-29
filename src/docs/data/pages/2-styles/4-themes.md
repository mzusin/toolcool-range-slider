## Themes (Predefined Styles)

<div data-examples="themes"></div>

The slider has several predefined themes that can be loaded using a standalone plugin. Each theme defines a unique look-and-feel and can be used "as is" without defining each style parameter separately. The slider has the following themes: **target, glass, rect, circle, rainbow, ruler**.

To use themes, download the latest [tcrs-themes.min.css](https://github.com/toolcool-org/toolcool-range-slider/blob/main/dist/plugins/tcrs-themes.min.css) file from GitHub. Then use the [css-links](/pages/css-links.html) attribute to pass it to the slider:

```html
<tc-range-slider
  theme="target"
  css-links="tcrs-themes.min.css"
  value1="30"
  value2="60"></tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
        theme="target"
        

        value1="30"
        value2="60"></tc-range-slider>
</div>

```html
<tc-range-slider
  theme="glass"
  css-links="tcrs-themes.min.css"
  value1="30"
  value2="60"></tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
        theme="glass"
        css-links="/js/index.{% js-hash %}.css"
        value1="30"
        value2="60"></tc-range-slider>
</div>

```html
<tc-range-slider
  theme="rect"
  css-links="tcrs-themes.min.css"
  value1="30"
  value2="60"></tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
        theme="rect"
        css-links="/js/index.{% js-hash %}.css"
        value1="30"
        value2="60"></tc-range-slider>
</div>

```html
<tc-range-slider
  theme="circle"
  css-links="tcrs-themes.min.css"
  value1="30"
  value2="60"></tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
        theme="circle"
        css-links="/js/index.{% js-hash %}.css"
        value1="30"
        value2="60"></tc-range-slider>
</div>

```html
<tc-range-slider
  theme="rainbow"
  css-links="tcrs-themes.min.css"
  value1="30"
  value2="60"></tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
        theme="rainbow"
        css-links="/js/index.{% js-hash %}.css"
        value1="30"
        value2="60"></tc-range-slider>
</div>

```html
<tc-range-slider
  theme="ruler"
  css-links="tcrs-themes.min.css"
  value1="30"
  value2="60"></tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
        theme="ruler"
        css-links="/js/index.{% js-hash %}.css"
        value1="30"
        value2="60"></tc-range-slider>
</div>

All themes can be combined with standard style attributes such as **slider-bg**, **slider-bg-hover**, etc. For example, we can use the **target** theme and at the same time set other styles for the second pointer:

```html
<tc-range-slider
  theme="target"
  css-links="tcrs-themes.min.css"
  
  value1="30"
  value2="60"

  pointer2-bg="red"
  pointer2-bg-hover="red"
  pointer2-bg-focus="red"></tc-range-slider>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
      theme="target"
      css-links="/js/index.{% js-hash %}.css"
      value1="30"
      value2="60"
      pointer2-bg="red"
      pointer2-bg-hover="red"
      pointer2-bg-focus="red"></tc-range-slider>
</div>

Theme property can also be changed via the API:

```html
<tc-range-slider id="slider-1"></tc-range-slider>
<script src="toolcool-range-slider.min.js"></script>

<script>
    // get the reference
    const $slider = document.getElementById('slider-1');

    // change theme
    $slider.theme = 'rect';

    // or
    // $slider.setAttribute('theme', 'rect');
</script>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider
      id="slider-11"
      theme="target"
      css-links="/js/index.{% js-hash %}.css"
      value1="30"
      value2="70"></tc-range-slider>
    <div class="grid grid-cols-2 gap-4 items-center mt-8">
        <button id="glass-btn" type="button" class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 mx-2 justify-center">glass</button>
        <button id="rect-btn" type="button" class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 mx-2 justify-center">rect</button>
        <button id="circle-btn" type="button" class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 mx-2 justify-center">circle</button>
        <button id="rainbow-btn" type="button" class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 mx-2 justify-center">rainbow</button>
    </div>
</div>

TypeScript example:

```typescript
<script>
    // get the reference
    const $slider = document.getElementById('slider-1') as RangeSlider;

    // change theme
    $slider.theme = 'glass';

    // or
    // $slider.setAttribute('theme', 'glass');
</script>
```

> :pushpin: An example page with the source code can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/3-themes.html).

> :pushpin: An example with a dark background can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/5-dark-background.html).