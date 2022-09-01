import { convertRange, setDecimalPlaces } from './math-provider';
import RangeSlider from '../app/range-slider';
import { findValueIndexInData } from '../dal/data-provider';

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

export const prepareDataForRender = (slider: RangeSlider) => {

  let _min;
  let _max;
  let _val;
  let _val2;

  if (slider.data) {
    // when data is defined, we use data indexes instead of the actual values
    _min = 0;
    _max = slider.data.length - 1;
    _val = findValueIndexInData(slider.value, slider.data);
    if (_val === -1) {
      _val = _min;
    }

    if (slider.value2 !== undefined) {
      _val2 = findValueIndexInData(slider.value2, slider.data);
      if (_val2 === -1) {
        _val2 = _min;
      }
    }
  }
  else {
    _min = slider.min as number;
    _max = slider.max as number;
    _val = slider.value as number;

    if (slider.value2 !== undefined) {
      _val2 = slider.value2 as number;
    }
  }

  // update the pointer position
  const percent = convertRange(_min, _max, 0, 100, _val);
  const percent2 = slider.value2 === undefined || _val2 === undefined ? 0 : convertRange(_min, _max, 0, 100, _val2);

  return {
    _min,
    _max,
    _val,
    _val2,
    percent,
    percent2
  };
};

/**
 * in returns selected pointer or null
 */
export const updateValueAndFocusPointer = (
  evt: MouseEvent | TouchEvent,
  slider: RangeSlider,
  $selectedPointer: HTMLElement | null,
  hasData: boolean,
  updatedValue: string | number,
  $pointer: HTMLElement | null,
  $pointer2: HTMLElement | null) => {

  const $target = evt.target as HTMLElement;
  const isPointer1Clicked = $target === $pointer || $pointer?.contains($target);
  const isPointer2Clicked = $target === $pointer2 || $pointer2?.contains($target);
  const isPanelClicked = $target.classList.contains('panel') || $target.classList.contains('panel-fill');

  if(slider.pointer1Disabled && slider.pointer2Disabled) return null;

  if(!isPanelClicked){
    if(isPointer1Clicked){
      if(slider.pointer1Disabled) return null;

      slider.value = updatedValue;
      $pointer?.focus();
      return $pointer;
    }

    if(isPointer2Clicked){
      if(slider.pointer2Disabled) return null;

      slider.value2 = updatedValue;
      $pointer2?.focus();
      return $pointer2;
    }

    if($selectedPointer === $pointer){
      if(slider.pointer1Disabled) return null;

      slider.value = updatedValue;
      $pointer?.focus();
      return $pointer;
    }

    if($selectedPointer === $pointer2){
      if(slider.pointer2Disabled) return null;

      slider.value2 = updatedValue;
      $pointer2?.focus();
      return $pointer2;
    }
  }

  if (slider.value2 !== undefined) {
    let distance1: number | undefined = undefined;
    let distance2: number | undefined = undefined;

    if (hasData) {
      if (!slider.data) return null;

      const index1 = slider.data.findIndex((item) => item === slider.value);
      const index2 = slider.data.findIndex((item) => item === slider.value2);
      const index3 = slider.data.findIndex((item) => item === updatedValue);

      if (index1 === -1 && index2 === -1 && index3 === -1) return null;

      distance1 = Math.abs(index1 - index3);
      distance2 = Math.abs(index2 - index3);
    }
    else {
      distance1 = Math.abs((updatedValue as number) - (slider.value as number));
      distance2 = Math.abs((updatedValue as number) - (slider.value2 as number));
    }

    if (distance1 !== undefined && distance2 !== undefined) {
      if (distance1 <= distance2) {

        if(slider.pointer1Disabled) return null;

        slider.value = updatedValue;
        $pointer?.focus();
        return $pointer;
      }
      else {
        if(slider.pointer2Disabled) return null;

        slider.value2 = updatedValue;
        $pointer2?.focus();
        return $pointer2;
      }
    }

    return null;
  }

  if(slider.pointer1Disabled) return null;

  slider.value = updatedValue;
  $pointer?.focus();
  return $pointer;
};

export const isFocused = ($el: HTMLElement | null) => {
  if (!$el) return false;
  return $el.matches(':focus-within');
};

export const handleDisableEnable = (
  disabled: boolean,
  pointer1Disabled: boolean,
  pointer2Disabled: boolean,
  $slider: HTMLElement | null,
  $pointer: HTMLElement | null,
  $pointer2: HTMLElement | null) => {
  if (disabled) {
    $slider?.classList.add('disabled');
    $slider?.setAttribute('aria-disabled', 'true');
  }
  else {
    $slider?.classList.remove('disabled');

    if ($slider?.hasAttribute('aria-disabled')) {
      $slider?.removeAttribute('aria-disabled');
    }
  }

  if(pointer1Disabled){
    $pointer?.classList.add('disabled');
    $pointer?.setAttribute('aria-disabled', 'true');
  }
  else{
    $pointer?.classList.remove('disabled');

    if ($pointer?.hasAttribute('aria-disabled')) {
      $pointer?.removeAttribute('aria-disabled');
    }
  }

  if(pointer2Disabled){
    $pointer2?.classList.add('disabled');
    $pointer2?.setAttribute('aria-disabled', 'true');
  }
  else{
    $pointer2?.classList.remove('disabled');

    if ($pointer2?.hasAttribute('aria-disabled')) {
      $pointer2?.removeAttribute('aria-disabled');
    }
  }
};
