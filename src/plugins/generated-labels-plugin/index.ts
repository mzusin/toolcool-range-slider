import { IPlugin, IPluginGetters, IPluginSetters, IPluginUpdateData } from '../../core/plugins/interfaces';
import { getBoolean } from '../../core/domain/math-provider';

/**
 * Generated Labels Plugin.
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
window.tcRangeSliderObservedAttr.push('generate-labels');

const VALUE_LABEL1_CODE_NAME = 'value-label';
const VALUE_LABEL2_CODE_NAME = 'value2-label';
const MIN_LABEL_CODE_NAME = 'min-label';
const MAX_LABEL_CODE_NAME = 'max-label';

const GeneratedLabelsPlugin = () : IPlugin => {

  let requestUpdate: (() => void) | null = null;
  let $component: HTMLElement | null = null;
  let $slider: HTMLElement | null = null;
  let $labelsRow: HTMLElement | null = null;
  let generatedLabelsEnabled = false;

  let $genValue1Label: HTMLElement | null = null;
  let $genValue2Label: HTMLElement | null = null;
  let $genMinLabel: HTMLElement | null = null;
  let $genMaxLabel: HTMLElement | null = null;

  // ---------- HELPERS ------------------------------

  const createLabel = (codeName: string) => {
    const $label = document.createElement('label');
    $label.classList.add(codeName);
    $label.setAttribute('for', 'range-slider');
    return $label;
  };

  const getOuterSlot = (codeName: string) => {
    return $component?.querySelector(`[slot="${ codeName }"]`);
  };

  const getInnerSlot = (codeName: string) => {
    return $component?.shadowRoot?.querySelector(`slot[name="${ codeName }"]`);
  };

  const getLabelFromSlot = (codeName: string) => {
    const $slot = getOuterSlot(codeName);

    if(!$slot) return null;
    return $slot.querySelector(`.${ codeName }`) as HTMLElement;
  };

  const createGenerateLabels = (
    textValue1: string | number | undefined,
    textValue2: string | number | undefined,
    rtlOrBtt: boolean,
    min: number | string | undefined,
    max: number | string | undefined
  ) => {

    if(!$genValue1Label){
      // create first generated label ---------------------
      $genValue1Label = getLabelFromSlot(VALUE_LABEL1_CODE_NAME);
      if(!$genValue1Label){
        $genValue1Label = createLabel(VALUE_LABEL1_CODE_NAME);
        $labelsRow?.append($genValue1Label);
      }
    }

    if(!$genValue2Label){
      // create second generated label --------------------
      if(textValue2 !== undefined){
        $genValue2Label = getLabelFromSlot(VALUE_LABEL2_CODE_NAME);
        if(!$genValue2Label){
          $genValue2Label = createLabel(VALUE_LABEL2_CODE_NAME);
          $labelsRow?.append($genValue2Label);
        }
      }
    }

    if(!$genMinLabel){
      $genMinLabel = getLabelFromSlot(MIN_LABEL_CODE_NAME);
      if(!$genMinLabel){
        $genMinLabel = createLabel(MIN_LABEL_CODE_NAME);
        $slider?.after($genMinLabel);
      }
    }

    if(!$genMaxLabel){
      $genMaxLabel = getLabelFromSlot(MAX_LABEL_CODE_NAME);
      if(!$genMaxLabel){
        $genMaxLabel = createLabel(MAX_LABEL_CODE_NAME);
        $slider?.after($genMaxLabel);
      }
    }

    setLabelsOrder(rtlOrBtt);
    updateValues(textValue1, textValue2, min, max);
  };

  const removeGeneratedLabels = () => {
    if($genValue1Label){
      $genValue1Label.remove();
      $genValue1Label = null;
    }

    if($genValue2Label){
      $genValue2Label.remove();
      $genValue2Label = null;
    }

    if($genMaxLabel){
      $genMaxLabel.remove();
      $genMaxLabel = null;
    }

    if($genMinLabel){
      $genMinLabel.remove();
      $genMinLabel = null;
    }
  };

  // -------- APIs -------------------------

  const setGenLabelsEnabled = (enabled: boolean) => {
    if(enabled === generatedLabelsEnabled) return;

    generatedLabelsEnabled = enabled;

    if(requestUpdate && typeof requestUpdate === 'function'){
      requestUpdate();
    }
  };

  const setLabelsOrder = (rtlOrBtt: boolean) => {

    const label1hasSlot = getOuterSlot(VALUE_LABEL1_CODE_NAME) !== null;
    const label2hasSlot = getOuterSlot(VALUE_LABEL2_CODE_NAME) !== null;
    const minHasSlot = getOuterSlot(MIN_LABEL_CODE_NAME) !== null;
    const maxHasSlot = getOuterSlot(MAX_LABEL_CODE_NAME) !== null;

    const $label1Slot = getInnerSlot(VALUE_LABEL1_CODE_NAME);
    const $label2Slot = getInnerSlot(VALUE_LABEL2_CODE_NAME);
    const $minSlot = getInnerSlot(MIN_LABEL_CODE_NAME);
    const $maxSlot = getInnerSlot(MAX_LABEL_CODE_NAME);

    if(rtlOrBtt){

      if($genValue1Label && $genValue2Label && !label1hasSlot && !label2hasSlot){
        $genValue2Label.after($genValue1Label);
      }
      else{
        if($label1Slot && $label2Slot){
          $label2Slot.after($label1Slot);
        }
      }

      if($genMinLabel){
        if(minHasSlot && $minSlot){
          $slider?.after($minSlot);
        }
        else{
          $slider?.after($genMinLabel);
        }
      }

      if($genMaxLabel){
        if(maxHasSlot && $maxSlot){
          $slider?.before($maxSlot);
        }
        else{
          $slider?.before($genMaxLabel);
        }
      }
    }
    else{

      if($genMinLabel){
        if(minHasSlot && $minSlot){
          $slider?.before($minSlot);
        }
        else{
          $slider?.before($genMinLabel);
        }
      }

      if($genMaxLabel){
        if(maxHasSlot && $maxSlot){
          $slider?.after($maxSlot);
        }
        else{
          $slider?.after($genMaxLabel);
        }
      }

      if($genValue1Label && $genValue2Label && !label1hasSlot && !label2hasSlot){
        $genValue1Label.after($genValue2Label);
      }
      else{
        if($label1Slot && $label2Slot){
          $label1Slot.after($label2Slot);
        }
      }
    }
  };

  const updateValues = (
    textValue1: string | number | undefined,
    textValue2: string | number | undefined,
    min: number | string | undefined,
    max: number | string | undefined) => {

    if($genValue1Label && textValue1 !== undefined){
      $genValue1Label.textContent = textValue1.toString();
    }

    if($genValue2Label && textValue2 !== undefined){
      $genValue2Label.textContent = textValue2.toString();
    }

    if($genMinLabel){
      $genMinLabel.textContent = min === undefined ? '' : min.toString();
    }

    if($genMaxLabel){
      $genMaxLabel.textContent = max === undefined ? '' : max.toString();
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
    /* eslint-disable @typescript-eslint/no-unused-vars */
    init: (
      _$component,
      _requestUpdate,
      _setters: IPluginSetters,
      _getters: IPluginGetters
    ) => {
      $component = _$component;
      requestUpdate = _requestUpdate;

      $slider = _$component.shadowRoot?.getElementById('range-slider') as HTMLElement;

      // generate labels row with slots
      const $box = _$component.shadowRoot?.querySelector('.range-slider-box')  as HTMLElement;
      $labelsRow = document.createElement('div');
      $labelsRow.classList.add('labels-row');
      $labelsRow.innerHTML = `
        <slot name="value-label"></slot>
        <slot name="value2-label"></slot>
      `;
      $box.prepend($labelsRow);

      // generate min / max slots
      const $min = document.createElement('slot');
      $min.setAttribute('name', 'min-label');
      $slider.before($min);

      const $max = document.createElement('slot');
      $max.setAttribute('name', 'max-label');
      $slider.after($max);

      setGenLabelsEnabled(getBoolean($component.getAttribute('generate-labels')));
    },

    /**
     * Optional:
     * this will be called each time
     * range slider updates pointer positions
     */
    update: (data: IPluginUpdateData) => {

      if(generatedLabelsEnabled){
        createGenerateLabels(data.textValue1, data.textValue2, data.rightToLeft || data.bottomToTop, data.textMin, data.textMax);
      }
      else{
        removeGeneratedLabels();
      }
    },

    /**
     * Optional:
     * this will be called each time observed HTML attribute changes;
     * observed attributes are defined in window.tcRangeSliderObservedAttr array above.
     */
    onAttrChange: (_attrName: string, _oldValue: string, _newValue: string) => {
      if(_attrName === 'generate-labels'){
        setGenLabelsEnabled(getBoolean(_newValue));
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
            return generatedLabelsEnabled ?? false;
          },

          set: (_enabled) => {
            setGenLabelsEnabled(getBoolean(_enabled));
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
      
      .type-vertical .labels-row{
          flex-direction: column;
          order: 1;
      }
      
      .max-label,
      .min-label,
      ::slotted([slot="max-label"]),
      ::slotted([slot="min-label"]){
          margin: 0 1rem;
          width: 2rem;
          text-align: center;
          white-space: nowrap;
      }
      
      .value-label,
      .value2-label,
      ::slotted([slot="value-label"]),
      ::slotted([slot="value2-label"]){
          text-align: center;
          margin: 0 0.5rem;
          white-space: nowrap;
      }

      .type-vertical .max-label,
      .type-vertical .min-label,
      .type-vertical ::slotted([slot="max-label"]),
      .type-vertical ::slotted([slot="min-label"]){
          margin: 1rem 0;
          width: auto;
      }
    `,
  };
};

/**
 * Required: add current plugin to the plugins list.
 */
window.tcRangeSliderPlugins.push(GeneratedLabelsPlugin);

export default GeneratedLabelsPlugin;