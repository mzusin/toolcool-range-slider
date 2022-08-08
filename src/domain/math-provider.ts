/**
 * scale a range [min,max] to [a,b]
 * f(x) = (b - a) * (x - min) / (max - min) + a
 */
export const convertRange = (min: number, max: number, a: number, b: number, x: number) => {
  return ((b - a) * (x - min)) / (max - min) + a;
};

export const getNumber = (input: any, defaultValue: any) => {
  const isNumber = !isNaN(parseFloat(input)) && isFinite(input);
  return isNumber ? Number(input) : defaultValue;
};

/**
 * Round up to the next multiple of X,
 * where X is the step provided by the user.
 */
export const roundToStep = (num: number, step: number) => {
  return Math.round(num / step) * step;
};
