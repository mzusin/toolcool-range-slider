## Basic Usage

Download the latest [toolcool-range-slider.min.js](https://github.com/toolcool-org/toolcool-range-slider/blob/main/dist/toolcool-range-slider.min.js) script from GitHub and add the following HTML to the page:
  
```html
<tc-range-slider></tc-range-slider>

<script src="toolcool-range-slider.min.js"></script>
```

<div class="my-12 flex justify-center">
    <tc-range-slider></tc-range-slider>
</div>

**tc-range-slider** is an alias for **toolcool-range-slider**:

```html
<toolcool-range-slider></toolcool-range-slider>

<script src="toolcool-range-slider.min.js"></script>
```

The library is also available on the [jsDelivr CND](https://www.jsdelivr.com/package/npm/toolcool-range-slider):

```html
<tc-range-slider></tc-range-slider>

<script src="https://cdn.jsdelivr.net/npm/toolcool-range-slider/dist/toolcool-range-slider.min.js"></script>
```

The initial value is defined using the **value** attribute:

```html
<tc-range-slider value="50"></tc-range-slider>

<script src="toolcool-range-slider.min.js"></script>
```

<div class="my-12 flex justify-center">
    <tc-range-slider value="50"></tc-range-slider>
</div>

You can add more pointers using the **value2**, **value3**, and so on attributes. Note that **value**, **value0**, and **value1** are synonymous and refer to the first value.

```html
<tc-range-slider value1="20" value2="30" value3="40"></tc-range-slider>

<script src="toolcool-range-slider.min.js"></script>
```

<div class="my-12 flex justify-center">
    <tc-range-slider value1="20" value2="50" value3="80"></tc-range-slider>
</div>



