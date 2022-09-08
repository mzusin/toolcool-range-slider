export interface ILabels {
  readonly genLabelsEnabled: boolean;
  setGenLabelsEnabled: (
    enabled: boolean,
    textValue1: string | number | undefined,
    textValue2: string | number | undefined,
    rtlOrBtt: boolean,
    min: number | string | undefined,
    max: number | string | undefined) => void;

  updateValues: (
    textValue1: string | number | undefined,
    textValue2: string | number | undefined,
    min: number | string | undefined,
    max: number | string | undefined) => void;

  setLabelsOrder: (rtlOrBtt: boolean) => void;

  referenceLabel1: string | null;
  referenceLabel2: string | null;
}

const VALUE_LABEL1_CODE_NAME = 'value-label';
const VALUE_LABEL2_CODE_NAME = 'value2-label';
const MIN_LABEL_CODE_NAME = 'min-label';
const MAX_LABEL_CODE_NAME = 'max-label';

export const Labels = ($component: HTMLElement, $slider: HTMLElement, requestUpdateValues: Function) : ILabels => {

  let $labelsRow: HTMLElement | null;
  let generatedLabelsEnabled = false;

  let $genValue1Label: HTMLElement | null = null;
  let $genValue2Label: HTMLElement | null = null;
  let $genMinLabel: HTMLElement | null = null;
  let $genMaxLabel: HTMLElement | null = null;

  let referenceLabel1: string | null = null;
  let referenceLabel2: string | null = null;
  let $referenceLabel1: HTMLElement | null = null;
  let $referenceLabel2: HTMLElement | null = null;

  // ---------- HELPERS ------------------------------

  const createLabel = (codeName: string) => {
    const $label = document.createElement('label');
    $label.classList.add(codeName);
    $label.setAttribute('for', 'range-slider');
    return $label;
  };

  const getOuterSlot = (codeName: string) => {
    return $component.querySelector(`[slot="${ codeName }"]`);
  };

  const getInnerSlot = (codeName: string) => {
    return $component.shadowRoot?.querySelector(`slot[name="${ codeName }"]`);
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

    // create first generated label ---------------------
    $genValue1Label = getLabelFromSlot(VALUE_LABEL1_CODE_NAME);
    if(!$genValue1Label){
      $genValue1Label = createLabel(VALUE_LABEL1_CODE_NAME);
      $labelsRow?.append($genValue1Label);
    }

    // create second generated label --------------------
    if(textValue2 !== undefined){
      $genValue2Label = getLabelFromSlot(VALUE_LABEL2_CODE_NAME);
      if(!$genValue2Label){
        $genValue2Label = createLabel(VALUE_LABEL2_CODE_NAME);
        $labelsRow?.append($genValue2Label);
      }
    }

    $genMinLabel = getLabelFromSlot(MIN_LABEL_CODE_NAME);
    if(!$genMinLabel){
      $genMinLabel = createLabel(MIN_LABEL_CODE_NAME);
      $slider?.after($genMinLabel);
    }

    $genMaxLabel = getLabelFromSlot(MAX_LABEL_CODE_NAME);
    if(!$genMaxLabel){
      $genMaxLabel = createLabel(MAX_LABEL_CODE_NAME);
      $slider?.after($genMaxLabel);
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

  const setGenLabelsEnabled = (
    enabled: boolean,
    textValue1: string | number | undefined,
    textValue2: string | number | undefined,
    rtlOrBtt: boolean,
    min: number | string | undefined,
    max: number | string | undefined) => {

    generatedLabelsEnabled = enabled;

    if(enabled){
      createGenerateLabels(textValue1, textValue2, rtlOrBtt, min, max);
    }
    else{
      removeGeneratedLabels();
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
          $slider.after($minSlot);
        }
        else{
          $slider.after($genMinLabel);
        }
      }

      if($genMaxLabel){
        if(maxHasSlot && $maxSlot){
          $slider.before($maxSlot);
        }
        else{
          $slider.before($genMaxLabel);
        }
      }
    }
    else{

      if($genMinLabel){
        if(minHasSlot && $minSlot){
          $slider.before($minSlot);
        }
        else{
          $slider.before($genMinLabel);
        }
      }

      if($genMaxLabel){
        if(maxHasSlot && $maxSlot){
          $slider.after($maxSlot);
        }
        else{
          $slider.after($genMaxLabel);
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

    if($referenceLabel1 && textValue1 !== undefined){
      $referenceLabel1.textContent = textValue1.toString();
    }

    if($referenceLabel2 && textValue2 !== undefined){
      $referenceLabel2.textContent = textValue2.toString();
    }
  };

  const setReferenceLabel1 = (_referenceLabel1: string | null) => {
    referenceLabel1 = _referenceLabel1;
    $referenceLabel1 = _referenceLabel1 ? document.querySelector(_referenceLabel1) : null;
    requestUpdateValues();
  };

  const setReferenceLabel2 = (_referenceLabel2: string | null) => {
    referenceLabel2 = _referenceLabel2;
    $referenceLabel2 = _referenceLabel2 ? document.querySelector(_referenceLabel2) : null;
    requestUpdateValues();
  };

  // initialization -------------------------
  (() => {
    $labelsRow = $component.shadowRoot?.querySelector('.labels-row') as HTMLElement;
  })();

  return {
    get genLabelsEnabled() {
      return generatedLabelsEnabled;
    },

    setGenLabelsEnabled,
    updateValues,
    setLabelsOrder,

    get referenceLabel1() {
      return referenceLabel1;
    },

    set referenceLabel1(_referenceLabel1) {
      setReferenceLabel1(_referenceLabel1);
    },

    get referenceLabel2() {
      return referenceLabel2;
    },

    set referenceLabel2(_referenceLabel2) {
      setReferenceLabel2(_referenceLabel2);
    },
  };
};