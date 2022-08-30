import { findValueIndexInData } from '../dal/data-provider';
import { getNumber } from './math-provider';
import { getSafeValues, isFocused } from './core-provider';
import RangeSlider from '../app/range-slider';
import { TypeEnum } from '../enums/type-enum';

export const stepBack = (slider: RangeSlider, $pointer2: HTMLElement | null) => {
  if (slider.data) {
    const isPointer2 = isFocused($pointer2) && slider.value2 !== undefined;

    const index = findValueIndexInData(isPointer2 && slider.value2 !== undefined ? slider.value2 : slider.value, slider.data);
    if (index !== -1) {
      const step = typeof slider.step === 'function' ? slider.step(index) : getNumber(slider.step, 1);
      const updatedIndex = index - step;
      if (slider.data[updatedIndex] !== undefined) {
        if (isPointer2) {
          slider.value2 = slider.data[updatedIndex];
        }
        else {
          slider.value = slider.data[updatedIndex];
        }
      }
    }
  }
  else {
    if (isFocused($pointer2)) {
      const step = typeof slider.step === 'function' ? slider.step(slider.value2 as number) : getNumber(slider.step, 1);
      const safe = getSafeValues((slider.value2 as number) - step, slider.min as number, slider.max as number, slider.round);
      slider.value2 = safe.value;
    }
    else {
      const step = typeof slider.step === 'function' ? slider.step(slider.value as number) : getNumber(slider.step, 1);
      const safe = getSafeValues((slider.value as number) - step, slider.min as number, slider.max as number, slider.round);
      slider.value = safe.value;
    }
  }

  slider.render();
};

export const stepForward = (slider: RangeSlider, $pointer2: HTMLElement | null) => {
  if (slider.data) {
    const isPointer2 = isFocused($pointer2) && slider.value2 !== undefined;

    const index = findValueIndexInData(isPointer2 && slider.value2 !== undefined ? slider.value2 : slider.value, slider.data);
    if (index !== -1) {
      const step = typeof slider.step === 'function' ? slider.step(index) : getNumber(slider.step, 1);
      const updatedIndex = index + step;
      if (slider.data[updatedIndex] !== undefined) {
        if (isPointer2) {
          slider.value2 = slider.data[updatedIndex];
        }
        else {
          slider.value = slider.data[updatedIndex];
        }
      }
    }
  }
  else {
    if (isFocused($pointer2)) {
      const step = typeof slider.step === 'function' ? slider.step(slider.value2 as number) : getNumber(slider.step, 1);
      const safe = getSafeValues((slider.value2 as number) + step, slider.min as number, slider.max as number, slider.round);
      slider.value2 = safe.value;
    }
    else {
      const step = typeof slider.step === 'function' ? slider.step(slider.value as number) : getNumber(slider.step, 1);
      const safe = getSafeValues((slider.value as number) + step, slider.min as number, slider.max as number, slider.round);
      slider.value = safe.value;
    }
  }

  slider.render();
};

export const renderAriaAttributes = (
  $pointer1: HTMLElement | null,
  $pointer2: HTMLElement | null,
  type: TypeEnum,
  min: string| number,
  max: string| number,
  val: string| number,
  val2: string| number | undefined
) => {

  if($pointer1){
    $pointer1?.setAttribute('aria-orientation', type === TypeEnum.Vertical ?  'vertical' : 'horizontal');
    $pointer1?.setAttribute('aria-valuemin', min.toString());
    $pointer1?.setAttribute('aria-valuemax', max.toString());
    $pointer1?.setAttribute('aria-valuenow', val.toString());
    $pointer1?.setAttribute('aria-valuetext', val.toString());
  }

  if($pointer2){
    $pointer2?.setAttribute('aria-orientation', type === TypeEnum.Vertical ?  'vertical' : 'horizontal');
    $pointer2?.setAttribute('aria-valuemin', min.toString());
    $pointer2?.setAttribute('aria-valuemax', max.toString());

    if(val2 !== undefined){
      $pointer2?.setAttribute('aria-valuenow', val2.toString());
      $pointer2?.setAttribute('aria-valuetext', val2.toString());
    }
  }
};