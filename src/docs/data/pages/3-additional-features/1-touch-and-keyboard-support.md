## Touch & Keyboard Support

The library supports touch screens and also handles the following keys:

**Horizontal slider:**

| Key             | Function                     |
|-----------------|------------------------------|
| left arrow      | goes one step to the left    |
| right arrow     | goes one step to the right   |
| up arrow        | jumps to the min value       |
| down arrow      | jumps to the max value       |
| mousewheel up   | goes one step to the left    |
| mousewheel down | goes one step to the right   |

**Horizontal slider in right-to-left mode:**

| Key             | Function                   |
|-----------------|----------------------------|
| left arrow      | goes one step to the left  |
| right arrow     | goes one step to the right |
| up arrow        | jumps to the max value     |
| down arrow      | jumps to the min value     |
| mousewheel up   | goes one step to the left  |
| mousewheel down | goes one step to the right |

**Vertical slider:**

| Key             | Function                 |
|-----------------|--------------------------|
| left arrow      | jumps to the min value   |
| right arrow     | jumps to the max value   |
| up arrow        | goes one step up         |
| down arrow      | goes one step down       |
| mousewheel up   | goes one step up         |
| mousewheel down | goes one step down       |


**Vertical slider in bottom-to-top mode:**

| Key             | Function               |
|-----------------|------------------------|
| left arrow      | jumps to the max value |
| right arrow     | jumps to the min value |
| up arrow        | goes one step up       |
| down arrow      | goes one step down     |
| mousewheel up   | goes one step up       |
| mousewheel down | goes one step down     |

It's possible to disable keyboard support with **keyboard-disabled** attribute:

```html
<tc-range-slider keyboard-disabled="true"></tc-range-slider>
```

Or via API:

```js
const $slider1 = document.getElementById('slider-1');
$slider1.keyboardDisabled = true;
```

> :pushpin: An example page with the source code can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/20-keyboard-disabled.html).