import { setDecimalPlaces } from './math-provider';
import RangeSlider from '../app/range-slider';

export const getSafeValues = (value: number, min: number, max: number, decimalPlaces: number) => {
  const _min = min;
  let _max = max;
  let _val = value;

  if (_min > _max) {
    _max = _min + 100;
  }

  if (_val < _min) {
    _val = _min;
  }

  if (_val > _max) {
    _val = _max;
  }

  return {
    min: _min,
    max: _max,
    value: setDecimalPlaces(_val, decimalPlaces),
  };
};

export const updateValueAndFocusPointer = (
  slider: RangeSlider,
  hasData: boolean,
  updatedValue: string | number,
  $pointer: HTMLElement | null,
  $pointer2: HTMLElement | null) => {

  if (slider.value2 !== undefined) {
    let distance1: number | undefined = undefined;
    let distance2: number | undefined = undefined;

    if (hasData) {
      if (!slider.data) return;

      const index1 = slider.data.findIndex((item) => item === slider.value);
      const index2 = slider.data.findIndex((item) => item === slider.value2);
      const index3 = slider.data.findIndex((item) => item === updatedValue);

      if (index1 === -1 && index2 === -1 && index3 === -1) return;

      distance1 = Math.abs(index1 - index3);
      distance2 = Math.abs(index2 - index3);
    }
    else {
      distance1 = Math.abs((updatedValue as number) - (slider.value as number));
      distance2 = Math.abs((updatedValue as number) - (slider.value2 as number));
    }

    if (distance1 !== undefined && distance2 !== undefined) {
      if (distance1 <= distance2) {
        slider.value = updatedValue;
        $pointer?.focus();
      }
      else {
        slider.value2 = updatedValue;
        $pointer2?.focus();
      }
    }

    return;
  }

  slider.value = updatedValue;
  $pointer2?.focus();
};

export const isFocused = ($el: HTMLElement | null) => {
  if (!$el) return false;
  return $el.matches(':focus-within');
};
