/**
 * scale a range [min,max] to [a,b]
 * f(x) = (b - a) * (x - min) / (max - min) + a
 */
export const convertRange = (min: number, max: number, a: number, b: number, x: number) => {
  const temp = (max - min);
  if(temp === 0) return a;
  return ((b - a) * (x - min)) / temp + a;
};

// eslint-disable-next-line
export const isNumber = (input: any) => {
  return !isNaN(parseFloat(input)) && isFinite(input);
};

// the below function should receive any
// eslint-disable-next-line
export const getNumber = (input: any, defaultValue: any) : number => {
  return isNumber(input) ? Number(input) : defaultValue;
};

/**
 * Round up to the next multiple of X,
 * where X is the step provided by the user.
 */
export const roundToStep = (num: number, step: number) => {
  return step === 0 ? 0 : Math.round(num / step) * step;
};

/**
 * round to decimal places
 * https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
 */
export const setDecimalPlaces = (num: number, decimalPlaces = Infinity) => {
  if (decimalPlaces === Infinity) return num;

  const coeff = 10 ** decimalPlaces;
  return Math.round(num * coeff) / coeff;
};

export const getBoolean = (val: string | null | undefined | boolean) => {
  if(val === null || val === undefined) return false;
  if(typeof val === 'boolean') return val;
  return val.trim().toLowerCase() === 'true';
};
