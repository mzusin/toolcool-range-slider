import { IPlugin, IPluginGetters, IPluginSetters, IPluginUpdateData } from '../../core/plugins/interfaces';
import RangeSlider from '../../core';
import { getBoolean } from '../../core/domain/math-provider';

/**
 * Origin at Center Plugin.
 * Note: the plugin works only when there is exactly one pointer!
 * Important: the plugin script should be included BEFORE the core script.
 */

/**
 * Required: init ToolCool Range Slider plugins namespace if not defined yet
 */
window.tcRangeSliderPlugins = window.tcRangeSliderPlugins || [];

const OriginCenterPlugin = () : IPlugin => {

  let enabled = false;
  let getters: IPluginGetters | null = null;
  let $fill: HTMLElement | null = null;

  const updateFill = () => {
    if(!$fill || !getters) return;

    const percents = getters.getPercents() || [];

    // the plugin works only when there is exactly one pointer
    if(percents.length !== 1) return;

    const percent = percents[0];
    const pos = percent <= 50 ? percent : percent - Math.abs(percent - 50);

    if(getters.getType() === 'vertical'){
      $fill.style.removeProperty('width');
      $fill.style.removeProperty('left');
      $fill.style.removeProperty('right');

      const height = Math.abs(50 - percent);
      $fill.style.height = `${ height }%`;

      if(getters.isBottomToTop()){
        $fill.style.bottom = `${ pos }%`;
      }
      else{
        $fill.style.top = `${ pos }%`;
      }
    }
    else{
      $fill.style.removeProperty('height');
      $fill.style.removeProperty('top');
      $fill.style.removeProperty('bottom');

      const width = Math.abs(50 - percent);
      $fill.style.width = `${ width }%`;

      if(getters.isRightToLeft()){
        $fill.style.right = `${ pos }%`;
      }
      else{
        $fill.style.left = `${ pos }%`;
      }
    }
  };

  const setEnabled = (newValue: boolean) => {
    enabled = newValue;
    updateFill();
  };

  const update = (_data: IPluginUpdateData) => {
    if(!enabled) return;
    updateFill();
  };

  return {

    /**
     * Required: unique plugin name
     */
    get name() {
      return 'Origin at Center';
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
      getters = _getters;
      $fill = _$component.shadowRoot?.querySelector('.panel-fill') as HTMLElement;

      enabled = getBoolean(_$component.getAttribute('origin-at-center'));
      if(!enabled) return;

      updateFill();
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
      if(_attrName === 'origin-at-center'){
        setEnabled(getBoolean(_newValue));
      }
    },

    /**
     * Optional:
     * List of getters and setter that can be used to create slider API.
     */
    gettersAndSetters: [
      {
        name: 'originCenterEnabled',
        attributes: {
          get () {
            return enabled ?? false;
          },

          set: (_enabled) => {
            setEnabled(getBoolean(_enabled));
          },
        }
      },
    ],
  };
};

/**
 * Required: add current plugin to the plugins list.
 */
window.tcRangeSliderPlugins.push(OriginCenterPlugin);

export default OriginCenterPlugin;

/**
 * export dynamic properties
 */
export interface IOriginCenterPlugin extends RangeSlider{
  originCenterEnabled: boolean;
}
