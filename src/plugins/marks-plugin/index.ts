import { IPlugin, IPluginGetters, IPluginSetters, IPluginUpdateData } from '../../core/plugins/interfaces';
import RangeSlider from '../../core';

/**
 * Marks Plugin.
 * Important: the plugin script should be included BEFORE the core script.
 */

/**
 * Required: init ToolCool Range Slider plugins namespace if not defined yet
 */
window.tcRangeSliderPlugins = window.tcRangeSliderPlugins || [];

const MarksPlugin = () : IPlugin => {

  const update = (data: IPluginUpdateData) => {

    //if(!enabled || !data.values) return;

  };

  const destroy = () => {

  };

  return {

    /**
     * Required: unique plugin name
     */
    get name() {
      return 'Marks';
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
     /* if(_attrName === 'moving-tooltip'){
        toggleEnabled(getBoolean(_newValue));
      }*/

    },

    /**
     * Optional:
     * List of getters and setter that can be used to create slider API.
     */
    gettersAndSetters: [
      /*{
        name: 'movingTooltip',
        attributes: {
          get () {
            return enabled ?? false;
          },

          set: (_enabled) => {
            toggleEnabled(getBoolean(_enabled));
          },
        }
      },*/

    ],

    destroy,
  };
};

/**
 * Required: add current plugin to the plugins list.
 */
window.tcRangeSliderPlugins.push(MarksPlugin);

export default MarksPlugin;

/**
 * export dynamic properties
 */
export interface IMarksPlugin extends RangeSlider{

}
