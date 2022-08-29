import { findValueIndexInData } from '../dal/data-provider';
import { getNumber } from './math-provider';
import { getSafeValues, isFocused } from './core-provider';
import RangeSlider from '../app/range-slider';

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