import RangeSlider from '../app/range-slider';
import { setDecimalPlaces } from "./math-provider";

const initLabel = (slider: RangeSlider, $box: HTMLElement | null, property: string, codeName: string) => {
  const $slot = slider.querySelector(`[slot="${codeName}"]`);

  // when slot exists ---> take its content as a template
  if ($slot) {
    slider[property] = $slot.querySelector(`.${codeName}`);
    return;
  }

  // slot is not provided ---> generate the label
  const $label = document.createElement('label');
  $label.classList.add(codeName);
  $label.setAttribute('for', 'range-slider');

  const $row = $box?.querySelector('.row');

  switch (codeName) {

    case 'min-label': {
      if (slider.rtl || slider.btt) {
        $row?.append($label);
      }
      else {
        $row?.prepend($label);
      }
      break;
    }

    case 'max-label': {
      if (slider.rtl || slider.btt) {
        $row?.prepend($label);
      }
      else {
        $row?.append($label);
      }
      break;
    }

    case 'value-label': {
      const $labelRow = $box?.querySelector('.labels-row');
      if (slider.rtl || slider.btt) {
        $labelRow?.prepend($label);
      }
      else {
        $labelRow?.append($label);
      }
      break;
    }

    case 'value2-label': {
      const $labelRow = $box?.querySelector('.labels-row');
      if (slider.rtl || slider.btt) {
        $labelRow?.prepend($label);
      }
      else {
        $labelRow?.append($label);
      }
      break;
    }
  }

  slider[property] = $label;
};

export const initSecondLabel = (slider: RangeSlider, $box: HTMLElement | null) => {
  initLabel(slider, $box,'_$value2Label', 'value2-label');

  if (slider.rtl || slider.btt) {
    const $value1Slot = slider.shadowRoot?.querySelector('slot[name="value-label"]');
    const $value2Slot = slider.shadowRoot?.querySelector('slot[name="value2-label"]');
    if ($value1Slot && $value2Slot) $value2Slot.after($value1Slot);
  }
}

export const initLabels = (slider: RangeSlider, $slider: HTMLElement | null, $box: HTMLElement | null) => {
  initLabel(slider, $box, '_$minLabel', 'min-label');
  initLabel(slider, $box,'_$maxLabel', 'max-label');
  initLabel(slider, $box,'_$valueLabel', 'value-label');

  if (slider.rtl || slider.btt) {
    const $minSlot = slider.shadowRoot?.querySelector('slot[name="min-label"]');
    const $maxSlot = slider.shadowRoot?.querySelector('slot[name="max-label"]');
    if ($minSlot) $slider?.after($minSlot);
    if ($maxSlot) $slider?.before($maxSlot);
  }

  if (slider.value2 !== undefined) {
    initSecondLabel(slider, $box);
  }
};

export const renderLabels = (
  slider: RangeSlider,
  generateLabels: boolean,
  $minLabel: HTMLElement | null,
  $maxLabel: HTMLElement | null,
  $valueLabel: HTMLElement | null,
  $value2Label: HTMLElement | null,
  updatedValue: string | number,
  updatedValue2: string | number | undefined
) => {

  if (generateLabels) {

    if ($minLabel) {
      $minLabel.textContent = slider.min.toString();
    }

    if ($maxLabel) {
      $maxLabel.textContent = slider.max.toString();
    }

    if ($valueLabel) {
      $valueLabel.textContent = slider.value.toString();
    }

    if ($value2Label && slider.value2 !== undefined) {
      $value2Label.textContent = slider.value2.toString();
    }
  }
  else{
    if ($valueLabel) {
      $valueLabel.textContent = slider.data ? slider.value.toString() : setDecimalPlaces(updatedValue as number, slider.round).toString();
    }

    if ($value2Label && slider.value2 !== undefined && updatedValue2 !== undefined) {
      $value2Label.textContent = slider.data ? slider.value2.toString() : setDecimalPlaces(updatedValue2 as number, slider.round).toString();
    }
  }
};