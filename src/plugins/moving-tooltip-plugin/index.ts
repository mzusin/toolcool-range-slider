import { IPlugin, IPluginGetters, IPluginSetters, IPluginUpdateData } from '../../core/plugins/interfaces';
import RangeSlider from '../../core';
import { getBoolean, getNumber } from '../../core/domain/math-provider';

/**
 * Moving Tooltip Plugin.
 * Important: the plugin script should be included BEFORE the core script.
 */

/**
 * Required: init ToolCool Range Slider plugins namespace if not defined yet
 */
window.tcRangeSliderPlugins = window.tcRangeSliderPlugins || [];

const DISTANCE_TO_POINTER_DEFAULT = 40; // px
const DEFAULT_TOOLTIP_WIDTH = 35;
const DEFAULT_TOOLTIP_HEIGHT = 30;
const DEFAULT_TOOLTIP_BG = '#475569';
const DEFAULT_TOOLTIP_TEXT_COLOR = '#fff';
const DEFAULT_Z_INDEX = 20;

const MovingTooltipPlugin = () : IPlugin => {

  let $component: HTMLElement | null = null;
  let getters: IPluginGetters | null = null;

  let enabled = false;
  let distanceToPointer = DISTANCE_TO_POINTER_DEFAULT; // px
  let tooltipWidth = DEFAULT_TOOLTIP_WIDTH;
  let tooltipHeight = DEFAULT_TOOLTIP_HEIGHT;
  let tooltipBg = DEFAULT_TOOLTIP_BG;
  let tooltipTextColor = DEFAULT_TOOLTIP_TEXT_COLOR;
  let tooltipUnits = '';
  let unitType = '';

  // https://github.com/mzusin/toolcool-range-slider/issues/16
  let formatTooltipValue: ((value: string | number | undefined) => string) | undefined = undefined;

  let $tooltips: (HTMLElement | undefined)[] = [];
  let $tooltipsRow: HTMLElement | null = null;
  let resizeObserver: ResizeObserver | null = null;

  const updateRowClass = () => {
    $tooltipsRow?.classList.toggle('is-after', distanceToPointer <= 0);
  };

  const createTooltipsRow = () => {
    const $slider = $component?.shadowRoot?.querySelector('#range-slider') as HTMLElement;
    $tooltipsRow = document.createElement('div');
    $tooltipsRow.classList.add('tooltips');
    $slider.prepend($tooltipsRow);
    updateRowClass();
  };

  const createTooltip = (className: string) => {
    const $tooltip = document.createElement('div');
    $tooltip.style.zIndex = DEFAULT_Z_INDEX.toString();
    $tooltip.className = className;
    return $tooltip;
  };

  const updateTooltip = ($tooltip: HTMLElement, type: string, left: string, top: string, zIndex: string|number) => {
    if(!$tooltip) return;

    if(type === 'vertical'){
      $tooltip.style.left = `${ -distanceToPointer }px`;
      $tooltip.style.top = top ?? '0';
    }
    else{
      $tooltip.style.left = left ?? '0';
      $tooltip.style.top = `${ -distanceToPointer }px`;
    }

    $tooltip.style.width = `${ tooltipWidth }px`;
    $tooltip.style.height = `${ tooltipHeight }px`;
    $tooltip.style.background = tooltipBg;
    $tooltip.style.color = tooltipTextColor;
    $tooltip.style.zIndex = zIndex.toString();
  };

  const getTooltipText = (text: string) => {
    let tooltipText = text;
    if(typeof formatTooltipValue === 'function') {
      tooltipText = formatTooltipValue(text);
    }
    return unitType === 'prefix' ? `${ tooltipUnits }${ tooltipText }` : `${ tooltipText }${ tooltipUnits }`;
  };

  const updateTooltips = () => {
    const values = getters?.getValues() ?? [];
    const $pointers = getters?.getPointerElements() ?? [];
    const type = getters?.getType() ?? 'horizontal';

    if(!values) return;

    for(let i=0; i<values.length; i++){
      const $tooltip = $tooltips[i];
      if(!$tooltip) continue;

      const text = (values[i] ?? '').toString();
      $tooltip.textContent = getTooltipText(text);
      updateTooltip($tooltip, type, $pointers[i].style.left, $pointers[i].style.top, $pointers[i].style.zIndex);
    }
  };

  const createTooltips = () => {
    const values = getters?.getValues() ?? [];

    if(!values) return;

    for(let i=0; i<values.length; i++){
      const $tooltip = createTooltip(`tooltip tooltip-${ i + 1 }`);
      $tooltip.style.position = 'absolute';
      $tooltips.push($tooltip);
      $tooltipsRow?.prepend($tooltip);
    }

    updateTooltips();
  };

  const initResizeObserver = () => {
    if(!$component) return;
    resizeObserver = new ResizeObserver(entries => {
      // eslint-disable-next-line
      for (const _entry of entries) {
        updateTooltips();
      }
    });
    resizeObserver.observe($component);
  };

  const toggleEnabled = (_enabled: boolean) => {
    enabled = _enabled;

    if(!enabled){
      destroy();
    }
    else{
      createTooltipsRow();
      createTooltips();
      initResizeObserver();
    }
  };

  const setDistanceToPointer = (newDistance: number) => {
    distanceToPointer = newDistance;
    updateTooltips();
  };

  const setTooltipWidth = (newWidth: number) => {
    tooltipWidth = newWidth;
    updateTooltips();
  };

  const setTooltipHeight = (newHeight: number) => {
    tooltipHeight = newHeight;
    updateTooltips();
  };

  const setTooltipBg = (newValue: string) => {
    tooltipBg = newValue;
    updateTooltips();
  };

  const setTooltipTextColor = (newValue: string) => {
    tooltipTextColor = newValue;
    updateTooltips();
  };

  const setTooltipUnits = (newValue: string) => {
    tooltipUnits = newValue;
    updateTooltips();
  };

  const setUnitType = (newValue: string) => {
    unitType = newValue;
    updateTooltips();
  };

  const setFormatTooltipValue = (newFunc: ((value: string | number | undefined) => string) | undefined) => {
    formatTooltipValue = newFunc;
    updateTooltips();
  };

  const update = (data: IPluginUpdateData) => {

    if(!enabled || !data.values) return;

    const $pointers = getters?.getPointerElements() ?? [];
    const type = getters?.getType() ?? 'horizontal';

    for(let i=0; i<data.values.length; i++) {
      const value = data.values[i];
      const $tooltip = $tooltips[i];

      if(value === undefined && !!$tooltip){
        // remove the tooltip
        $tooltip.remove();
        $tooltips[i] = undefined;
        continue;
      }

      if(value !== undefined && !$tooltip){

        // create the tooltip
        const $tooltip = createTooltip(`tooltip tooltip-${ i + 1 }`);
        const text = (value ?? '').toString();
        $tooltip.textContent = getTooltipText(text);
        $tooltip.style.position = 'absolute';
        updateTooltip($tooltip, type, $pointers[i].style.left, $pointers[i].style.top, $pointers[i].style.zIndex);

        $tooltips[i] = $tooltip;
        $tooltipsRow?.append($tooltip);
      }

      if(!$tooltip) continue;

      const text = (value ?? '').toString();
      $tooltip.textContent = getTooltipText(text);
      updateTooltip($tooltip, type, $pointers[i].style.left, $pointers[i].style.top, $pointers[i].style.zIndex);
    }
  };

  const destroy = () => {
    $tooltipsRow?.remove();

    for(const $tooltip of $tooltips){
      if(!$tooltip) continue;
      $tooltip.remove();
    }

    $tooltips = [];

    resizeObserver?.disconnect();
  };

  return {

    /**
     * Required: unique plugin name
     */
    get name() {
      return 'Moving Tooltip';
    },

    /**
     * Optional: plugin initialization
     */
    init: (
      _$component,
      _requestUpdate,
      _setters: IPluginSetters,
      _getters: IPluginGetters
    ) => {
      $component = _$component;
      getters = _getters;

      distanceToPointer = getNumber(_$component.getAttribute('moving-tooltip-distance-to-pointer'), DISTANCE_TO_POINTER_DEFAULT);
      tooltipWidth = getNumber(_$component.getAttribute('moving-tooltip-width'), DEFAULT_TOOLTIP_WIDTH);
      tooltipHeight = getNumber(_$component.getAttribute('moving-tooltip-height'), DEFAULT_TOOLTIP_HEIGHT);
      tooltipBg = _$component.getAttribute('moving-tooltip-bg') || DEFAULT_TOOLTIP_BG;
      tooltipTextColor = _$component.getAttribute('moving-tooltip-text-color') || DEFAULT_TOOLTIP_TEXT_COLOR;
      tooltipUnits = _$component.getAttribute('moving-tooltip-units') || '';
      unitType = _$component.getAttribute('moving-tooltip-units-type') || '';
      toggleEnabled(getBoolean(_$component.getAttribute('moving-tooltip')));
    },

    /**
     * Optional:
     * this will be called each time
     * range slider updates pointer positions or other properties
     */
    update,

    /**
     * Optional:
     * this will be called each time observed HTML attribute changes;
     * observed attributes are defined in window.tcRangeSliderObservedAttr array above.
     */
    onAttrChange: (_attrName: string, _newValue: string) => {
      if(_attrName === 'moving-tooltip'){
        toggleEnabled(getBoolean(_newValue));
      }

      if(_attrName === 'moving-tooltip-distance-to-pointer'){
        setDistanceToPointer(getNumber(_newValue, DISTANCE_TO_POINTER_DEFAULT));
      }

      if(_attrName === 'moving-tooltip-width'){
        setTooltipWidth(getNumber(_newValue, DEFAULT_TOOLTIP_WIDTH));
      }

      if(_attrName === 'moving-tooltip-height'){
        setTooltipHeight(getNumber(_newValue, DEFAULT_TOOLTIP_HEIGHT));
      }

      if(_attrName === 'moving-tooltip-bg'){
        setTooltipBg(_newValue);
      }

      if(_attrName === 'moving-tooltip-text-color'){
        setTooltipTextColor(_newValue);
      }

      if(_attrName === 'moving-tooltip-units'){
        setTooltipUnits(_newValue);
      }

      if(_attrName === 'moving-tooltip-units-type'){
        setUnitType(_newValue);
      }
    },

    /**
     * Optional:
     * List of getters and setter that can be used to create slider API.
     */
    gettersAndSetters: [
      {
        name: 'movingTooltip',
        attributes: {
          get () {
            return enabled ?? false;
          },

          set: (_enabled) => {
            toggleEnabled(getBoolean(_enabled));
          },
        }
      },

      {
        name: 'distanceToPointer',
        attributes: {
          get () {
            return distanceToPointer ?? false;
          },

          set: (_value) => {
            setDistanceToPointer(getNumber(_value, DISTANCE_TO_POINTER_DEFAULT));
          },
        }
      },

      {
        name: 'tooltipWidth',
        attributes: {
          get () {
            return tooltipWidth;
          },

          set: (_value) => {
            setTooltipWidth(getNumber(_value, DEFAULT_TOOLTIP_WIDTH));
          },
        }
      },

      {
        name: 'tooltipHeight',
        attributes: {
          get () {
            return tooltipHeight;
          },

          set: (_value) => {
            setTooltipHeight(getNumber(_value, DEFAULT_TOOLTIP_HEIGHT));
          },
        }
      },

      {
        name: 'tooltipBg',
        attributes: {
          get () {
            return tooltipBg;
          },

          set: (_value) => {
            setTooltipBg(_value);
          },
        }
      },

      {
        name: 'tooltipTextColor',
        attributes: {
          get () {
            return tooltipTextColor;
          },

          set: (_value) => {
            setTooltipTextColor(_value);
          },
        }
      },

      {
        name: 'tooltipUnits',
        attributes: {
          get () {
            return tooltipUnits;
          },

          set: (_value) => {
            setTooltipUnits(_value);
          },
        }
      },

      {
        name: 'tooltipUnitType',
        attributes: {
          get () {
            return unitType;
          },

          set: (_value) => {
            setUnitType(_value);
          },
        }
      },

      // https://github.com/mzusin/toolcool-range-slider/issues/16
      {
        name: 'formatTooltipValue',
        attributes: {
          get () {
            return formatTooltipValue;
          },

          set: (_func) => {
            setFormatTooltipValue(_func);
          },
        }
      },
    ],

    css: `
.tooltip{
  background: #475569;
  color: #fff;
  font-size: 0.8rem;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: ${ DEFAULT_Z_INDEX };
}  

.tooltip::after {
    content: '';
    position: absolute;
    width: 7px;
    height: 6px;
    transform: translate(0%, -50%) rotate(45deg);
    background-color: inherit;
    z-index: -1;
    top: 100%;
}

.is-after .tooltip::after {
  top: 0;
}

.type-vertical .tooltip::after{
  transform: translate(-50%, 0%) rotate(45deg);
  left: 100%;
  top: auto;
}

.type-vertical .is-after .tooltip::after{
  left: 0%;
}

.animate-on-click .tooltip{
    transition: all var(--animate-onclick);
}
    `,

    destroy,
  };
};

/**
 * Required: add current plugin to the plugins list.
 */
window.tcRangeSliderPlugins.push(MovingTooltipPlugin);

export default MovingTooltipPlugin;

/**
 * export dynamic properties
 */
export interface IMovingTooltipPlugin extends RangeSlider{
  movingTooltip: boolean;
  distanceToPointer: number;
  tooltipWidth: number;
  tooltipHeight: number;
  tooltipBg: string;
  tooltipTextColor: string;
  tooltipUnits: string;
  tooltipUnitType: string;

  // https://github.com/mzusin/toolcool-range-slider/issues/16
  formatTooltipValue?: (value: string | number | undefined) => string;
}
