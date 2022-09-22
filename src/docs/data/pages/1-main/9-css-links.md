## CSS Links

It's possible to provide the paths to CSS files using **css-links** attribute as follows:

```html
<toolcool-range-slider css-links="test-1.css"></toolcool-range-slider>
```

You can add more than one path by separating them with **;**

```html
<toolcool-range-slider css-links="test-1.css; test-2.css;"></toolcool-range-slider>
```

The CSS specificity of the loaded CSS rules will be higher than the specificity of the web component attributes.

:pushpin: Example page can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/31-external-css.html).