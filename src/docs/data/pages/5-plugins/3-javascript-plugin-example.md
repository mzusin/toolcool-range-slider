# JavaScript Plugin Example

As an example, let's recreate the [Binding Labels Plugin](/pages/auto-binding-labels.html). It gets the path to some HTML element and prints the value of the slider in it. The content of the element must be constantly updated.

Let's start with a minimal slider template from [here](/pages/javascript-plugins.html):

```js
/**
 * Required: init ToolCool Range Slider plugins namespace if not defined yet
 */
window.tcRangeSliderPlugins = window.tcRangeSliderPlugins || [];

const ExamplePlugin = () => {
  
  return {
    
    /**
     * Required: unique plugin name
     */
    get name() {
      return 'My Plugin';
    },

    /**
     * Optional: plugin initialization
     */
    init: (
      _$component,
      _requestUpdate,
      _setters,
      _getters
    ) => {
      console.log('plugin initialization');
    },

    /**
     * Optional:
     * this will be called each time
     * range slider perform updates
     */
    update: (data) => {
      console.log(data);
    },

    /**
     * Optional: release resources
     */
    destroy: () => {
      console.log('destroy');
    },
  };
};

/**
 * Required: add current plugin to the plugins list.
 */
window.tcRangeSliderPlugins.push(ExamplePlugin);
```

The HTML markup should be as follows:

```html
<!-- the slider -->
<tc-range-slider 
  value="50" 
  label="#my-label"></tc-range-slider>

<!-- this label will contain the slider value -->
<div id="my-label"></div>

<script>
  // Here should be the content of our plugin
  // ...
</script>

<!-- the core script -->
<script src="toolcool-range-slider.min.js"></script>
```

> **Note**: the plugin script should be included BEFORE the core script.


Now let's get the label attribute that is passed in by the user. We can do this task in the **init** hook:

```js
const labelPath = _$component?.getAttribute(`label`) ?? '';
const $labelElement = document.querySelector(labelPath);
```

The label element should be stored in a local variable for future use: 

```js
const ExamplePlugin = () => {
  
  let $labelElement;
  
  return {
    
    get name() {
      return 'My Plugin';
    },

    init: (
      _$component,
      _requestUpdate,
      _setters,
      _getters
    ) => {
      const labelPath = _$component?.getAttribute(`label`) ?? '';
      $labelElement = document.querySelector(labelPath);
    },

    update: (data) => {
      console.log(data);
    },

    destroy: () => {
      console.log('destroy');
    },
  };
};
```

Now let's use an **update** hook to change the value of the label each time the slider is updated:

```js
const ExamplePlugin = () => {
  
  let $labelElement;
  
  return {
    
    get name() {
      return 'My Plugin';
    },

    init: (
      _$component,
      _requestUpdate,
      _setters,
      _getters
    ) => {
      const labelPath = _$component?.getAttribute(`label`) ?? '';
      $labelElement = document.querySelector(labelPath);
    },

    update: (data) => {
      if($labelElement){
        $labelElement.textContent = data.values[0];
      }
    },

    destroy: () => {
      console.log('destroy');
    },
  };
};
```

> A complete list of data properties is available [here](/pages/plugin-data-interface.html).

Let's also update the content of the label on page load:

```js
const ExamplePlugin = () => {
  
  let $labelElement;
  
  return {
    
    get name() {
      return 'My Plugin';
    },

    init: (
      _$component,
      _requestUpdate,
      _setters,
      _getters
    ) => {
      const labelPath = _$component?.getAttribute(`label`) ?? '';
      $labelElement = document.querySelector(labelPath);

      if($labelElement){
        $labelElement.textContent = _getters.getValues()[0];
      }
    },

    update: (data) => {
      if($labelElement){
        $labelElement.textContent = data.values[0];
      }
    },

    destroy: () => {
      console.log('destroy');
    },
  };
};
```

Finally, let's clear the label when the slider is destroyed:

```js
const ExamplePlugin = () => {
  
  let $labelElement;
  
  return {
    
    get name() {
      return 'My Plugin';
    },

    init: (
      _$component,
      _requestUpdate,
      _setters,
      _getters
    ) => {
      const labelPath = _$component?.getAttribute(`label`) ?? '';
      $labelElement = document.querySelector(labelPath);

      if($labelElement){
        $labelElement.textContent = _getters.getValues()[0];
      }
    },

    update: (data) => {
      if($labelElement){
        $labelElement.textContent = data.values[0];
      }
    },

    destroy: () => {
      if($labelElement){
        $labelElement.textContent = '';
      }
    },
  };
};
```

You can find the source code for several plugins [here](https://github.com/toolcool-org/toolcool-range-slider/tree/main/src/plugins).

