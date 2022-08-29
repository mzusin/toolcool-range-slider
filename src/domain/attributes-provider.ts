import { getNumber, isNumber } from './math-provider';
import RangeSlider from '../app/range-slider';

export const observedAttributes = [
  'value',
  'value2',
  'data',
  'min',
  'max',
  'step',
  'round',
  'type',
  'theme',
  'disabled',
  'rtl',
  'btt',

  'storage',
  'storage-key',

  'slider-width',
  'slider-height',
  'slider-radius',

  'slider-bg',
  'slider-bg-hover',
  'slider-bg-fill',

  'pointer-width',
  'pointer-height',
  'pointer-radius',
  'pointer-shape',

  'pointer-bg',
  'pointer-bg-hover',
  'pointer-bg-focus',

  'pointer-shadow',
  'pointer-shadow-hover',
  'pointer-shadow-focus',

  'pointer-border',
  'pointer-border-hover',
  'pointer-border-focus',

  'value-label',
  'value2-label',
  'generate-labels',
  'animate-onclick',
];


export const getStringOrNumber = (slider: RangeSlider, attrName: string, defaultValue: number, dataDefaultValue: string | number) => {
  const _val = slider.getAttribute(attrName);
  if (slider.data) {
    return isNumber(_val) ? getNumber(_val, dataDefaultValue) : _val ?? dataDefaultValue;
  }
  else {
    return getNumber(_val, defaultValue);
  }
};