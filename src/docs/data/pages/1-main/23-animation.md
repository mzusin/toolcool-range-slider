## Animation on panel click

It's possible to enable animation on panel click with the **animate-onclick** property:

```html
<toolcool-range-slider animate-onclick="0.3s"></toolcool-range-slider>
```

The value of the **animate-onclick** property is specified in seconds, ms, etc. and is the same as the css [transition-duration](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration) property.

There is also a corresponding API:

```js
const $slider = document.querySelector('#slider');
$slider.animateOnClick = '0.3s'; 

// or

$slider.animateOnClick = undefined; // disable
```

:pushpin: The page with example can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/18-animation-on-click.html).