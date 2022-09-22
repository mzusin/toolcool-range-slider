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

Enable or disable via API:

```js
const $slider = document.querySelector('#slider');
$slider.type = 'vertical'; // or horizontal
$slider.btt = true; // or false
```