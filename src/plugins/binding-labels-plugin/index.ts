import { IPlugin, IPluginGetters, IPluginSetters, IPluginUpdateData } from '../../core/plugins/interfaces';
import { getNumber } from '../../core/domain/math-provider';
import RangeSlider from '../../core';

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

  const initApiProp = (apiProp: string, index: number) => {
    if(!Object.prototype.hasOwnProperty.call($component, apiProp)){
      Object.defineProperty($component, apiProp, {
        get () {
          return paths[index];
        },

        set: (val) => {
          updateLabel(index, val);
        },
      });
    }
  };

  const updateLabel = (index: number, newPath: string) => {

    const isDefined = !!$labels[index];

    if($labels[index]){
      ($labels[index] as HTMLElement).textContent = '';
    }

    const $newLabel = document.querySelector(newPath) as HTMLElement;
    $labels[index] = $newLabel ?? undefined;

    paths[index] = newPath ?? undefined;

    if(!isDefined){
      if(index === 0){
        initApiProp(`valueLabel`, index);
        initApiProp(`value0Label`, index);
        initApiProp(`value1Label`, index);
      }
      else{
        initApiProp(`value${ index + 1 }Label`, index);
      }
    }

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

      if(i === 0){
        initApiProp(`valueLabel`, i);
        initApiProp(`value0Label`, i);
        initApiProp(`value1Label`, i);
      }
      else{
        initApiProp(`value${ i + 1 }Label`, i);
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
        const key = _attrName.replace(/\D/g, '').trim();
        const index = (key === '' || key === '0' || key === '1') ? 0 : (getNumber(key, 0) - 1);
        updateLabel(index, _newValue);
      }
    },

    destroy: () => {
      for(const $label of $labels){
        if(!$label) continue;
        $label.remove();
      }
    },
  };
};

/**
 * Required: add current plugin to the plugins list.
 */
window.tcRangeSliderPlugins.push(BindingLabelsPlugin);

export default BindingLabelsPlugin;

/**
 * export dynamic properties
 */
export interface IBindingLabelsPlugin extends RangeSlider{
  valueLabel: string;
  [name: `value${number}Label`]: string;
}
