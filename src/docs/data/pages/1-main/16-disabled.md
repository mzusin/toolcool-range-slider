## Disabled range slider or one pointer

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

It's also possible to disable only one pointer:

```html
<toolcool-range-slider pointer1-disabled="true" value1="10" value2="20"></toolcool-range-slider>
<toolcool-range-slider pointer2-disabled="true" value1="10" value2="20"></toolcool-range-slider>
```

Or using API:

```js
const $slider1 = document.getElementById('slider-1');
$slider1.pointer1Disabled = true;
$slider1.pointer2Disabled = true;
```
