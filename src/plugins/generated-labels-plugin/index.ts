import { IPlugin, IPluginGetters, IPluginSetters, IPluginUpdateData } from '../../core/plugins/interfaces';
import { getBoolean } from '../../core/domain/math-provider';
import RangeSlider from '../../core';

/**
 * Generated Labels Plugin.
 * Important: the plugin script should be included BEFORE the core script.
 */

/**
 * Required: init ToolCool Range Slider plugins namespace if not defined yet
 */
window.tcRangeSliderPlugins = window.tcRangeSliderPlugins || [];

const MIN_LABEL_CODE_NAME = 'min-label';
const MAX_LABEL_CODE_NAME = 'max-label';

const GeneratedLabelsPlugin = () : IPlugin => {

  let $component: HTMLElement | null = null;
  let $slider :HTMLElement | null = null;
  let getters: IPluginGetters | null = null;

  let enabled = false;

  let $labelsRow: HTMLElement | null = null;
  let $min: HTMLElement | null = null;
  let $max: HTMLElement | null = null;
  let $labels: (HTMLElement | undefined)[] = [];

  const createLabelsRow = () => {
    const $box = $component?.shadowRoot?.querySelector('.range-slider-box')  as HTMLElement;
    $labelsRow = document.createElement('div');
    $labelsRow.classList.add('labels-row');
    $box.prepend($labelsRow);
  };

  const createLabel = (className: string) => {
    const $label = document.createElement('label');
    $label.className = className;
    $label.setAttribute('for', 'range-slider');
    return $label;
  };

  const createLabels = () => {
    const isReversedOrder = getters?.isRightToLeft() || getters?.isBottomToTop();

    $min = createLabel(MIN_LABEL_CODE_NAME);
    $min.textContent = getters?.getTextMin().toString() ?? '';

    $max = createLabel(MAX_LABEL_CODE_NAME);
    $max.textContent = getters?.getTextMax().toString() ?? '';

    if(!isReversedOrder){
      $slider?.before($min);
      $slider?.after($max);
    }
    else{
      $slider?.after($min);
      $slider?.before($max);
    }

    const values = getters?.getValues();
    if(!values) return;

    for(let i=0; i<values.length; i++){

      const $label = createLabel(`value${ i + 1 }-label generated-label`);
      $label.textContent = (values[i] ?? '').toString();
      $labels.push($label);

      if(!isReversedOrder){
        $labelsRow?.append($label);
      }
      else{
        $labelsRow?.prepend($label);
      }
    }
  };

  const destroy = () => {
    for(const $label of $labels){
      if(!$label) continue;
      $label.remove();
    }

    $min?.remove();
    $max?.remove();

    $labels = [];
  };

  const toggleEnabled = (_enabled: boolean) => {
    enabled = _enabled;

    if(!enabled){
      destroy();
    }
    else{
      createLabelsRow();
      createLabels();
    }
  };

  const update = (data: IPluginUpdateData) => {
    if(!enabled || !data.values) return;

    for(let i=0; i<data.values.length; i++){
      const value = data.values[i];
      const $label = $labels[i];

      if(value === undefined && !!$label){
        // remove the label
        $label.remove();
        $labels[i] = undefined;
        continue;
      }

      if(value !== undefined && !$label){
        // create the label
        const $label = createLabel(`value${ i + 1 }-label generated-label`);
        $label.textContent = (value ?? '').toString();
        $labels[i] = $label;

        // add the label to the proper place
        if(data.values.length <= 0){
          $labelsRow?.append($label);
        }
        else{
          const isReversedOrder = getters?.isRightToLeft() || getters?.isBottomToTop();

          if(i === 0){
            if(!isReversedOrder){
              $labelsRow?.prepend($label);
            }
            else{
              $labelsRow?.append($label);
            }
          }
          else{
            // get the previous label
            const $prev = $label[i - 1];
            if(!isReversedOrder){
              $prev.after($label);
            }
            else{
              $prev.before($label);
            }
          }
        }
        continue;
      }

      if(!$label) continue;
      $label.textContent = (value ?? '').toString();
    }

    if($min){
      $min.textContent = (data.textMin ?? '').toString();
    }

    if($max){
      $max.textContent = (data.textMax ?? '').toString();
    }
  };

  return {

    /**
     * Required: unique plugin name
     */
    get name() {
      return 'Generated Labels';
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
      $slider = _$component.shadowRoot?.getElementById('range-slider') as HTMLElement;

      toggleEnabled(getBoolean($component.getAttribute('generate-labels')));
    },

    /**
     * Optional:
     * this will be called each time
     * range slider updates pointer positions
     */
    update,

    /**
     * Optional:
     * this will be called each time observed HTML attribute changes;
     * observed attributes are defined in window.tcRangeSliderObservedAttr array above.
     */
    onAttrChange: (_attrName: string, _newValue: string) => {
      if(_attrName === 'generate-labels'){
        toggleEnabled(getBoolean(_newValue));
      }
    },

    /**
     * Optional:
     * List of getters and setter that can be used to create slider API.
     */
    gettersAndSetters: [
      {
        name: 'generateLabels',
        attributes: {
          get () {
            return enabled ?? false;
          },

          set: (_enabled) => {
            toggleEnabled(getBoolean(_enabled));
          },
        }
      },
    ],

    /**
     * Optional:
     * Small groups of CSS rules can be passed here as a string.
     * Bigger CSS files should be passed via css-links="file1.css;file2.css;" property.
     */
    css: `
    .labels-row{
      text-align: center;
      display: flex;
      justify-content: center;
    }
    
    .type-vertical{
      position: relative;
    }
    
    .type-vertical .labels-row{
      flex-direction: column;
      position: absolute;
      top: 50%;
      right: -100%;
      transform: translateY(-50%);
    }
    
    .max-label,
    .min-label{
      margin: 0 1rem;
      width: 2rem;
      text-align: center;
      white-space: nowrap;
    }
    
    .generated-label{
      text-align: center;
      margin: 0 0.5rem;
      white-space: nowrap;
    }
    `,

    destroy,
  };
};

/**
 * Required: add current plugin to the plugins list.
 */
window.tcRangeSliderPlugins.push(GeneratedLabelsPlugin);

export default GeneratedLabelsPlugin;

/**
 * export dynamic properties
 */
export interface IGeneratedLabelsPlugin extends RangeSlider{
  generateLabels: boolean;
}