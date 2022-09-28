# Custom CSS Theme

It's possible to create your own CSS themes for the slider. It can be done as follows:

- Create a new CSS file **my-theme.css**.
- Each CSS rule should start with **.theme-** prefix. 
- Use the CSS variables from [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/src/core/app/styles.pcss) to change the look of the slider.
- Add **theme** attribute to the slider. For example, if your CSS rule is **.theme-example**, then you need to pass **theme="example"** attribute to the slider.
- Add your CSS file to the slider using [css links](/pages/css-links.html).

## The complete example

example.css

```css
.theme-example{
  --panel-bg: #D7DCDF;
  --panel-bg-hover: #ccd1d3;
  --panel-bg-fill: #47a4bc;

  --pointer-bg: #1aa4bc;
  --pointer-bg-hover: #0f7b8c;
  --pointer-bg-focus: #0f7b8c;

  --pointer-shadow: 0 0 0 3px #fff, 0 0 0 6px #1aa4bc;
  --pointer-shadow-hover: 0 0 0 3px #fff, 0 0 0 6px #0f7b8c;
  --pointer-shadow-focus: 0 0 0 3px #fff, 0 0 0 6px #0f7b8c;

  --pointer-border: 0;
  --pointer-border-hover: 0;
  --pointer-border-focus: 0;
}
```

HTML markup:

```html
<tc-range-slider
  theme="example"
  css-links="example.css"
  value1="30"
  value2="60"></tc-range-slider>
```
