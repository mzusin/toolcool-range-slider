## Automatically generated labels

It's possible to generate min, max, and value labels automatically using **generate-labels="true"** attribute:

```html
<toolcool-range-slider generate-labels="true"></toolcool-range-slider>
```

If this attribute is specified, the **minimum**, **maximum**, and **value** label are automatically generated.

You can provide custom html for all or part of the labels:

```html
<toolcool-range-slider generate-labels="true">
  <div slot="min-label"><label class="min-label"></label> px</div>
  <div slot="max-label"><label class="max-label"></label> px</div>
  <div slot="value-label"><label class="value-label"></label> px</div>
</toolcool-range-slider>
```

In case of 2 pointers range slider **value2-label** slot and label should be added:

```html
<toolcool-range-slider generate-labels="true">
  <div slot="min-label"><label class="min-label"></label> px</div>
  <div slot="max-label"><label class="max-label"></label> px</div>
  <div slot="value-label"><label class="value-label"></label> px</div>
  <div slot="value2-label"><label class="value2-label"></label> px</div>
</toolcool-range-slider>
```

This way you can add CSS classes, inline styles, or any HTML structure instead of the standard range slider labels.

:exclamation: Please make sure you keep slot names with one of the following values: **min-label**, **max-label**, **value-label**, **value2-label**.

:exclamation: It's also important, that the labels have one of the following classes: **min-label**, **max-label**, **value-label**, **value2-label**. These classes are used as placeholders for min, max, and value (value1), value2.

Other than that, the HTML structure can be changed in any way.

It is also possible to enable or disable generated labels programmatically:

```html
<toolcool-range-slider id="slider-1"></toolcool-range-slider>

<script type="text/javascript" src="toolcool-range-slider.min.js"></script>

<script>
    // get the reference
    const $slider = document.getElementById('slider-1');
    
    // change the setting
    $slider.generateLabels = true; // or false

    // or 
    // $slider.setAttribute('generateLabels', 'true');
</script>
```

:pushpin: Example page can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/19-generate-labels.html).