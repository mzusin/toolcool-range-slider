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

const MovingTooltipPlugin = () : IPlugin => {

  let $component: HTMLElement | null = null;
  let $container: HTMLElement | null = null;
  let getters: IPluginGetters | null = null;

  let enabled = false;
  let distanceToPointer = DISTANCE_TO_POINTER_DEFAULT; // px
  let tooltipWidth = DEFAULT_TOOLTIP_WIDTH;
  let tooltipHeight = DEFAULT_TOOLTIP_HEIGHT;

  let $tooltips: (HTMLElement | undefined)[] = [];
  let $tooltipsRow: HTMLElement | null = null;

  const updateRowClass = () => {
    $tooltipsRow?.classList.toggle('is-after', distanceToPointer <= 0);
  };

  const createTooltipsRow = () => {
    const $box = $component?.shadowRoot?.querySelector('.range-slider-box')  as HTMLElement;
    $tooltipsRow = document.createElement('div');
    $tooltipsRow.classList.add('tooltips');
    $box.prepend($tooltipsRow);
    updateRowClass();
  };

  const createTooltip = (className: string) => {
    const $tooltip = document.createElement('div');
    $tooltip.className = className;
    $tooltip.style.width = `${ tooltipWidth }px`;
    $tooltip.style.height = `${ tooltipHeight }px`;
    return $tooltip;
  };

  const updateTooltip = ($tooltip: HTMLElement, type: string, percent: number) => {
    if(!$tooltip) return;

    if(type === 'vertical'){
      const diff = Math.abs($component?.getBoundingClientRect().x - $container.getBoundingClientRect().x);
      $tooltip.style.left = `${ diff - distanceToPointer }px`;
      $tooltip.style.top = `${ percent ?? 0 }%`;
    }
    else{
      const diff = Math.abs($component?.getBoundingClientRect().y - $container.getBoundingClientRect().y);
      $tooltip.style.left = `${ percent ?? 0 }%`;
      $tooltip.style.top = `${ diff - distanceToPointer }px`;
    }
  };

  const createTooltips = () => {
    const values = getters?.getValues() ?? [];
    const percents = getters?.getPercents() ?? [];
    const type = getters?.getType() ?? 'horizontal';

    if(!values) return;

    for(let i=0; i<values.length; i++){
      const $tooltip = createTooltip(`tooltip tooltip-${ i + 1 }`);

      $tooltip.textContent = (values[i] ?? '').toString();
      $tooltip.style.position = 'absolute';
      updateTooltip($tooltip, type, percents[i]);

      $tooltips.push($tooltip);
      $tooltipsRow?.prepend($tooltip);
    }
  };

  const toggleEnabled = (_enabled: boolean) => {
    enabled = _enabled;

    if(!enabled){
      destroy();
    }
    else{
      createTooltipsRow();
      createTooltips();
    }
  };

  const setDistanceToPointer = (newDistance: number) => {
    distanceToPointer = newDistance;
  };

  const update = (data: IPluginUpdateData) => {

    if(!enabled || !data.values) return;

    const percents = data.percents ?? [];
    const type = getters?.getType() ?? 'horizontal';

    for(let i=0; i<data.values.length; i++){
      const value = data.values[i];
      const $tooltip = $tooltips[i];

      if(value === undefined && !!$tooltip){
        // remove the tooltip
        $tooltip.remove();
        $tooltip[i] = undefined;
        continue;
      }

      if(value !== undefined && !$tooltip){

        // create the tooltip
        const $tooltip = createTooltip(`tooltip tooltip-${ i + 1 }`);
        $tooltip.textContent = (value ?? '').toString();
        $tooltip.style.position = 'absolute';
        updateTooltip($tooltip, type, percents[i]);

        $tooltips[i] = $tooltip;
        $tooltipsRow?.append($tooltip);
      }

      if(!$tooltip) continue;
      $tooltip.textContent = (value ?? '').toString();
      updateTooltip($tooltip, type, percents[i]);
    }
  };

  const destroy = () => {
    $tooltipsRow?.remove();

    for(const $tooltip of $tooltips){
      if(!$tooltip) continue;
      $tooltip.remove();
    }

    $tooltips = [];
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
      $container = $component.shadowRoot?.querySelector('.container');
      getters = _getters;

      distanceToPointer = getNumber(_$component.getAttribute('moving-tooltip-distance-to-pointer'), DISTANCE_TO_POINTER_DEFAULT);
      tooltipWidth = getNumber(_$component.getAttribute('moving-tooltip-width'), DEFAULT_TOOLTIP_WIDTH);
      tooltipHeight = getNumber(_$component.getAttribute('moving-tooltip-height'), DEFAULT_TOOLTIP_HEIGHT);
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
}  

.tooltip::after {
    content: '';
    position: absolute;
    width: 20%;
    height: 20%;
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
}
