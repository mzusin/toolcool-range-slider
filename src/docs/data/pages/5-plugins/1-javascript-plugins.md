# JavaScript Plugins

The library has a plugin API that allow you to inject code into various parts of the system. There are several ready-made plugins such as [Auto Generated Labels plugin](/pages/auto-generated-labels.html), [AutoBinding Labels plugin](/pages/auto-binding-labels.html), and [Storage plugin](/pages/storage.html). 

Here is the minimal plugin template:

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

> **Important**: the plugin script should be included BEFORE the core script.