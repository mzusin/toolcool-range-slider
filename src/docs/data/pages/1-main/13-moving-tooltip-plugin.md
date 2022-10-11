## Moving Tooltip Plugin

<div data-examples="moving-tooltip"></div>

Range slider library has a standalone **Moving Tooltip Plugin**. The plugin adds a moving tooltip to each pointer. You can change the tooltip color, size, and distance to pointer.


Download the latest [tcrs-moving-tooltip.min.js](https://github.com/toolcool-org/toolcool-range-slider/blob/main/dist/plugins/tcrs-moving-tooltip.min.js) script from GitHub and add it to the HTML before the **toolcool-range-slider.min.js** script.

Check out the following basic example:

```html
<tc-range-slider
  value1="20"
  value2="50"
  value3="80"
  round="0"

  moving-tooltip="true"
  moving-tooltip-distance-to-pointer="40"
  moving-tooltip-width="35"
  moving-tooltip-height="30"
  moving-tooltip-bg="#721d82"
  moving-tooltip-text-color="#efefef"
  moving-tooltip-units="%">
</tc-range-slider>

<!-- The plugin should be included before the core library. -->
<script src="tcrs-moving-tooltip.min.js"></script>
<script src="toolcool-range-slider.min.js"></script>
```

<div class="my-24 flex flex-col items-center">
    <tc-range-slider 
      value1="20"
      value2="50"
      value3="80"
      round="0"
      moving-tooltip="true"
      moving-tooltip-distance-to-pointer="40"
      moving-tooltip-width="35"
      moving-tooltip-height="30"
      moving-tooltip-bg="#721d82"
      moving-tooltip-text-color="#efefef"
      moving-tooltip-units="%">
    </tc-range-slider>
</div>

The **moving-tooltip-distance-to-pointer** attribute can also be negative:

```html
<tc-range-slider
  value1="20"
  value2="50"
  value3="80"
  round="0"

  moving-tooltip="true"
  moving-tooltip-distance-to-pointer="-40"
  moving-tooltip-width="35"
  moving-tooltip-height="30"
  moving-tooltip-bg="#387ec7"
  moving-tooltip-text-color="#efefef"></tc-range-slider>
```

<div class="my-24 flex flex-col items-center">
    <tc-range-slider 
      value1="20"
      value2="50"
      value3="80"
      round="0"
      moving-tooltip="true"
      moving-tooltip-distance-to-pointer="-40"
      moving-tooltip-width="35"
      moving-tooltip-height="30"
      moving-tooltip-bg="#387ec7"
      moving-tooltip-text-color="#efefef">
    </tc-range-slider>
</div>

The plugin is also available on the [jsDelivr CND](https://www.jsdelivr.com/package/npm/toolcool-range-slider):

```html
<tc-range-slider
  value1="30"
  value2="50"
  value3="70"
  round="0"

  moving-tooltip="true"
  moving-tooltip-distance-to-pointer="40"
  moving-tooltip-width="35"
  moving-tooltip-height="30"
  moving-tooltip-bg="#721d82"
  moving-tooltip-text-color="#efefef"></tc-range-slider>

<!-- The plugin should be included before the core library. -->
<script 
  src="https://cdn.jsdelivr.net/npm/toolcool-range-slider/dist/plugins/tcrs-moving-tooltip.min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/toolcool-range-slider/dist/toolcool-range-slider.min.js"></script>
```

In bundlers like [Webpack](https://webpack.js.org/) and [esbuild](https://esbuild.github.io/) you can use it like this:

```js
import 'toolcool-range-slider/dist/plugins/tcrs-moving-tooltip.min.js';
import 'toolcool-range-slider';

// any code here...
```

| HTML Property                      | Default Value | Possible Values | API Property      |
|------------------------------------|---------------|-----------------|-------------------|
| moving-tooltip                     | true          | true or false   | movingTooltip     |
| moving-tooltip-distance-to-pointer | 40            | number          | distanceToPointer | 
| moving-tooltip-width               | 35            | number          | tooltipWidth      |
| moving-tooltip-height              | 30            | number          | tooltipHeight     |
| moving-tooltip-bg                  | #475569       | color           | tooltipBg         |
| moving-tooltip-text-color          | #fff          | color           | tooltipTextColor  | 
| moving-tooltip-units               | empty string  | text            | tooltipUnits      |
| moving-tooltip-units-type          | empty string  | "" or "prefix"  | tooltipUnitType   |



> :pushpin: You can add your own css customizations using [CSS Links](/pages/css-links.html) or using [addCSS](/pages/add-css-api.html) API.

The tooltip plugin settings can be changed using the API:

<div class="mt-24 mb-12 flex flex-col items-center">
    <tc-range-slider
      id="moving-tooltip-slider-1"
      value1="20"
      value2="50"
      value3="80"
      round="0"
      moving-tooltip="true"
      moving-tooltip-distance-to-pointer="40"
      moving-tooltip-width="35"
      moving-tooltip-height="30"
      moving-tooltip-bg="#227380"
      moving-tooltip-text-color="#fff"></tc-range-slider>
    <div class="flex items-center">
        <button id="moving-tooltip-toggle-btn" type="button" class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 mt-8 mx-2">Enable/Disable</button>
    </div>
</div>

```js
const $slider = document.getElementById('slider-1');
$slider.movingTooltip = true; // or false
$slider.distanceToPointer = 50; // px
$slider.tooltipWidth = 50; // px
$slider.tooltipHeight = 50; // px
$slider.tooltipBg = '#000';
$slider.tooltipTextColor = '#efefef';
$slider.tooltipUnits = '$';
$slider.tooltipUnitType = 'prefix';
```

TypeScript example:

```typescript
import { IMovingTooltipPlugin } from 'toolcool-range-slider';

const $slider = document.getElementById('slider-1') as IMovingTooltipPlugin;

$slider.movingTooltip = true; // or false
$slider.distanceToPointer = 50; // px
$slider.tooltipWidth = 50; // px
$slider.tooltipHeight = 50; // px
$slider.tooltipBg = '#000';
$slider.tooltipTextColor = '#efefef';
$slider.tooltipUnits = '$';
$slider.tooltipUnitType = 'prefix';
```

> :pushpin: An example page with the source code can be found [here](https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/28-moving-tooltip-plugin.html).

