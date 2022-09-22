import { IPlugin, IPluginGetters, IPluginSetters, IPluginUpdateData } from '../../core/plugins/interfaces';

/**
 * Binding Labels Plugin.
 * Important: the plugin script should be included BEFORE the core script.
 */

/**
 * Required: init ToolCool Range Slider plugins namespace if not defined yet
 */
window.tcRangeSliderPlugins = window.tcRangeSliderPlugins || [];

const BindingLabelsPlugin = () : IPlugin => {

  let getters: IPluginGetters | null = null;
  let $component: HTMLElement | null = null;
  let requestUpdate: (() => void) | null = null;

  const paths: (string | undefined)[] = [];
  const $labels: (HTMLElement | undefined)[] = [];

  const updateLabel = (index: number, newPath: string) => {
    const $newLabel = document.querySelector(newPath) as HTMLElement;
    $labels[index]?.remove();
    $labels[index] = $newLabel ?? undefined;

    if(typeof requestUpdate === 'function'){
      requestUpdate();
    }
  };

  const initLabels = () => {

    const values = getters?.getValues() ?? [];
    for(let i=0; i<values.length; i++){

      // find labels path for the given index -------------------------
      let labelPath = '';

      if(i === 0){
        labelPath = $component?.getAttribute(`value-label`) ?? '';
        if(!labelPath){
          labelPath = $component?.getAttribute(`value0-label`) ?? '';
        }
        if(!labelPath){
          labelPath = $component?.getAttribute(`value1-label`) ?? '';
        }
      }
      else{
        labelPath = $component?.getAttribute(`value${ i + 1 }-label`) ?? '';
      }

      if(!labelPath){
        $labels[i] = undefined;
        paths[i] = undefined;
        continue;
      }

      // create label
      const $label = document.querySelector(labelPath) as HTMLElement;
      if(!$label){
        $labels[i] = undefined;
        paths[i] = undefined;
        continue;
      }

      $labels[i] = $label;
      paths[i] = labelPath;

      // set current value
      $label.textContent = values[i]?.toString() ?? '';

      const apiProp = `value${ i + 1 }Label`;
      if(!Object.prototype.hasOwnProperty.call($component, apiProp)){
        Object.defineProperty($component, apiProp, {
          get () {
            return paths[i];
          },

          set: (val) => {
            updateLabel(i, val);
          },
        });
      }
    }

    if(typeof requestUpdate === 'function'){
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
    init: (
      _$component,
      _requestUpdate,
      _setters: IPluginSetters,
      _getters: IPluginGetters
    ) => {
      $component = _$component;
      requestUpdate = _requestUpdate;
      getters = _getters;

      initLabels();
    },

    /**
     * Optional:
     * this will be called each time
     * range slider updates pointer positions
     */
    update: (data: IPluginUpdateData) => {
      for(let i=0; i<data.values.length; i++){
        const $label = $labels[i];
        if(!$label) continue;

        const value = data.values[i] ?? '';
        $label.textContent = value.toString();
      }
    },

    /**
     * Optional:
     * this will be called each time observed HTML attribute changes;
     * observed attributes are defined in window.tcRangeSliderObservedAttr array above.
     */
    onAttrChange: (_attrName: string, _newValue: string) => {

      if(/^value([0-9]*)-label$/.test(_attrName) && typeof requestUpdate === 'function'){
        requestUpdate();
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
      /*{
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
      }*/
    ],
  };
};

/**
 * Required: add current plugin to the plugins list.
 */
window.tcRangeSliderPlugins.push(BindingLabelsPlugin);

export default BindingLabelsPlugin;