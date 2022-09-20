import { IPlugin, IPluginGetters, IPluginSetters, IPluginUpdateData } from '../../core/plugins/interfaces';

/**
 * Binding Labels Plugin.
 * Important: the plugin script should be included BEFORE the core script.
 */

/**
 * Required: init ToolCool Range Slider plugins namespace if not defined yet
 */
window.tcRangeSliderPlugins = window.tcRangeSliderPlugins || [];

/**
 * Optional: array of attribute names to monitor for changes
 * Read more: https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements
 */
window.tcRangeSliderObservedAttr = window.tcRangeSliderObservedAttr || [];
window.tcRangeSliderObservedAttr.push('value-label');
window.tcRangeSliderObservedAttr.push('value2-label');

const BindingLabelsPlugin = () : IPlugin => {

  let requestUpdate: (() => void) | null = null;

  let referenceLabel1: string | null = null;
  let referenceLabel2: string | null = null;

  let $referenceLabel1: HTMLElement | null = null;
  let $referenceLabel2: HTMLElement | null = null;

  const setReferenceLabel1 = (_referenceLabel1: string | null) => {
    referenceLabel1 = _referenceLabel1;
    $referenceLabel1 = _referenceLabel1 ? document.querySelector(_referenceLabel1) : null;

    if(requestUpdate && typeof requestUpdate === 'function'){
      requestUpdate();
    }
  };

  const setReferenceLabel2 = (_referenceLabel2: string | null) => {
    referenceLabel2 = _referenceLabel2;
    $referenceLabel2 = _referenceLabel2 ? document.querySelector(_referenceLabel2) : null;

    if(requestUpdate && typeof requestUpdate === 'function'){
      requestUpdate();
    }
  };

  return {
    /**
     * Required: unique plugin name
     */
    get name() {
      return 'Binding Labels';
    },

    /**
     * Optional: plugin initialization
     */
    /* eslint-disable @typescript-eslint/no-unused-vars */
    init: (
      _$component,
      _requestUpdate,
      _setters: IPluginSetters,
      _getters: IPluginGetters
    ) => {
      requestUpdate = _requestUpdate;

      setReferenceLabel1(_$component.getAttribute('value-label'));
      setReferenceLabel2(_$component.getAttribute('value2-label'));
    },

    /**
     * Optional:
     * this will be called each time
     * range slider updates pointer positions
     */
    update: (data: IPluginUpdateData) => {
      const textValue1 = data.values[0];
      const textValue2 = data.values[1];

      if($referenceLabel1 && textValue1 !== undefined){
        $referenceLabel1.textContent = textValue1.toString();
      }

      if($referenceLabel2 && textValue2 !== undefined){
        $referenceLabel2.textContent = textValue2.toString();
      }
    },

    /**
     * Optional:
     * this will be called each time observed HTML attribute changes;
     * observed attributes are defined in window.tcRangeSliderObservedAttr array above.
     */
    onAttrChange: (_attrName: string, _oldValue: string, _newValue: string) => {

      switch (_attrName){
        case 'value-label': {
          setReferenceLabel1(_newValue);
          break;
        }

        case 'value2-label': {
          setReferenceLabel2(_newValue);
          break;
        }
      }
    },

    /**
     * Optional:
     * List of getters and setter that can be used to create slider API.
     * For example, the code below will call the setter function:
     * slider1.valueLabel = '.value-13';
     * And this line will call the getter function:
     * console.log(slider1.valueLabel);
     */
    gettersAndSetters: [
      {
        name: 'valueLabel',
        attributes: {
          get () {
            return referenceLabel1;
          },

          set: (_referenceLabel1) => {
            setReferenceLabel1(_referenceLabel1);
          },
        }
      },
      {
        name: 'value2Label',
        attributes: {
          get () {
            return referenceLabel2;
          },

          set: (_referenceLabel2) => {
            setReferenceLabel2(_referenceLabel2);
          },
        }
      }
    ],
  };
};

/**
 * Required: add current plugin to the plugins list.
 */
window.tcRangeSliderPlugins.push(BindingLabelsPlugin);

export default BindingLabelsPlugin;