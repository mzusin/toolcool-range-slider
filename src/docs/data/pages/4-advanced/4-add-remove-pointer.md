## Add/Remove Pointer API 

There is an API that allows to dynamically add or remove a slider pointer.

Let's say we have the following slider:

```html
<tc-range-slider id="slider-1"></tc-range-slider>
```

We can then add pointers using **addPointer** API:

```js
const $slider1 = document.getElementById('slider-1');
$slider1.addPointer(30);
$slider1.addPointer(50);
$slider1.addPointer(70);
```

And we can remove the last pointer using **removePointer** API:

```js
$slider1.removePointer();
```

> :pushpin: An example page with the source code can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/23-add-remove-pointer-api.html).




