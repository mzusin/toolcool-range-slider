# Pointer Shapes Custom Themes

It's possible to create your own pointer shape themes for the slider. It can be done as follows: 

- Create a new CSS file **my-pointer-shapes.css**.
- Each CSS rule should start with **.shape-** prefix. 
- Add **pointer-shape** attribute to the slider. For example, if your CSS rule is **.shape-example**, then you need to pass **pointer-shape="example"** attribute to the slider.
- Add your CSS file to the slider using [css links](/pages/css-links.html).

## The complete example

my-pointer-shapes.css

```css
.shape-example{
    -webkit-clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
```

HTML markup:

```html
<tc-range-slider
  pointer-shape="example"
  css-links="my-pointer-shapes.css"
  value1="30"
  value2="60"></tc-range-slider>
```
