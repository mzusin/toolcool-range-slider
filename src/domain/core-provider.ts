import { setDecimalPlaces } from './math-provider';

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