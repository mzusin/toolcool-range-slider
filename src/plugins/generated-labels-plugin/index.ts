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
const DEFAULT_TEXT_COLOR = '#1E293B';

type generateLabelsFormatType = ((value: string | number | undefined) => string) | undefined;

const GeneratedLabelsPlugin = () : IPlugin => {

  let $component: HTMLElement | null = null;
  let $slider :HTMLElement | null = null;
  let getters: IPluginGetters | null = null;
  let requestUpdate: () => void | null;

  let enabled = false;
  let textColor = DEFAULT_TEXT_COLOR;
  let units = '';
  let generateLabelsFormat : generateLabelsFormatType = undefined;

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

    $min = createLabel(MIN_LABEL_CODE_NAME);
    $min.textContent = getLabelText(getters?.getTextMin(), units);

    $max = createLabel(MAX_LABEL_CODE_NAME);
    $max.textContent = getLabelText(getters?.getTextMax(), units);

    $slider?.before($min);
    $slider?.after($max);

    const values = getters?.getValues();
    if(!values) return;

    for(let i=0; i<values.length; i++){

      const $label = createLabel(`value${ i + 1 }-label generated-label`);
      $label.textContent = getLabelText(values[i], units);
      $labels.push($label);

      $labelsRow?.append($label);
    }
  };

  const destroy = () => {
    for(const $label of $labels){
      if(!$label) continue;
      $label.remove();
    }

    $min?.remove();
    $max?.remove();
    $labelsRow?.remove();

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

  const setTextColor = (newValue: string) => {

    textColor = newValue;
    for(const $label of $labels){
      if(!$label) continue;
      $label.style.color = textColor ?? DEFAULT_TEXT_COLOR;
    }

    if($min){
      $min.style.color = textColor ?? DEFAULT_TEXT_COLOR;
    }

    if($max){
      $max.style.color = textColor ?? DEFAULT_TEXT_COLOR;
    }
  };

  const setUnits = (newValue: string) => {
    units = newValue;
    if(requestUpdate) requestUpdate();
  };

  const updateClasses = () => {
    if(!getters || !$labelsRow) return;
    $labelsRow.classList.toggle('is-reversed', getters.isRightToLeft() || getters.isBottomToTop());
  };

  const getLabelText = (value: string | number | undefined, units: string) => {
    const val = `${ (value ?? '').toString() }${ units }`;
    return (!!generateLabelsFormat && (typeof generateLabelsFormat === 'function')) ? generateLabelsFormat(value) : val;
  };

  const update = (data: IPluginUpdateData) => {

    if(!enabled || !data.values) return;

    updateClasses();

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
        $label.textContent = getLabelText(value, units);
        $labels[i] = $label;

        // add the label to the proper place
        if(data.values.length <= 0){
          $labelsRow?.append($label);
        }
        else{
          if(i === 0){
            $labelsRow?.append($label);
          }
          else{
            // get the previous label
            const $prev = $labels[i - 1];
            $prev?.after($label);
          }
        }
        continue;
      }

      if(!$label) continue;
      $label.textContent = getLabelText(value, units);
    }

    if($min){
      $min.textContent = getLabelText(data.textMin, units);
    }

    if($max){
      $max.textContent = getLabelText(data.textMax, units);
    }

    setTextColor(textColor);
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
      requestUpdate = _requestUpdate;

      textColor = $component.getAttribute('generate-labels-text-color') ?? DEFAULT_TEXT_COLOR;
      units = $component.getAttribute('generate-labels-units') ?? '';
      toggleEnabled(getBoolean($component.getAttribute('generate-labels')));

      updateClasses();
      setTextColor(textColor);

      //console.log($slider.generateLabelsFormat)
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
      if(_attrName === 'generate-labels'){
        toggleEnabled(getBoolean(_newValue));
      }

      if(_attrName === 'generate-labels-text-color'){
        setTextColor(_newValue);
      }

      if(_attrName === 'generate-labels-units'){
        setUnits(_newValue);
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
      {
        name: 'textColor',
        attributes: {
          get () {
            return textColor ?? '';
          },

          set: (newValue) => {
            setTextColor(newValue);
          },
        }
      },
      {
        name: 'generateLabelsTextColor',
        attributes: {
          get () {
            return textColor ?? '';
          },

          set: (newValue) => {
            setTextColor(newValue);
          },
        }
      },
      {
        name: 'units',
        attributes: {
          get () {
            return units ?? '';
          },

          set: (newValue) => {
            setUnits(newValue);
          },
        }
      },
      {
        name: 'generateLabelsUnits',
        attributes: {
          get () {
            return units ?? '';
          },

          set: (newValue) => {
            setUnits(newValue);
          },
        }
      },
      {
        name: 'generateLabelsFormat',
        attributes: {
          get () {
            return generateLabelsFormat;
          },

          set: (newFunc) => {
            generateLabelsFormat = newFunc;
            if(requestUpdate) requestUpdate();
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
    
    .is-reversed,
    .is-reversed + .row{
      flex-direction: row-reverse;
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
    
    .type-vertical .is-reversed,
    .type-vertical .is-reversed + .row{
      flex-direction: column-reverse;
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

  /** @deprecated */
  textColor: string;

  generateLabelsTextColor: string;

  /** @deprecated */
  units: string;

  generateLabelsUnits: string;

  generateLabelsFormat: (value: string | number | undefined) => string;
}