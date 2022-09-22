## Storage

The range slider library also supports local and session storage. It's used to save the selected slider value between different pages and page reloads.

```html
<toolcool-range-slider storage="session-storage" storage-key="tc-range-slider-1"></toolcool-range-slider>
<toolcool-range-slider storage="local-storage" storage-key="tc-range-slider-2"></toolcool-range-slider>
```

The difference between **local** and **session storage** is that session storage keeps the value only during the current session, while the local storage keeps it until the user clears the browser cache.

> In case of **2 pointers range slider**, the second key will have **-2** suffix. For example, if storage-key="test", then the **value2** key will be **"test-2"**.

Change via API:

```js
const $slider = document.querySelector('#slider');
$slider.storage = 'local-storage'; // 'session-storage'
$slider.storageKey = 'storage-key';

console.log($slider.storage); // 'local-storage'
console.log($slider.storageKey); // 'storage-key';
console.log($slider.storageKey2); // 'storage-key-2';
```

:pushpin: The page with examples can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/13-storage.html).