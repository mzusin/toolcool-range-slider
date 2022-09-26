## Events

The range slider has the following events:

| Event            | Description                                                                           |
|------------------|---------------------------------------------------------------------------------------|
| change           | it is sent every time the value of the range slider changes                           |
| onMouseDown      | the native browser mousedown event                                                    |
| onMouseUp        | the native browser mouseup event                                                      |
| onPointerClicked | it is dispatched when the user clicks the range slide pointer (handler)               |
| onKeyDown        | the native browser keydown event  **(arrow left, arrow right, arrow up, arrow down)** |

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