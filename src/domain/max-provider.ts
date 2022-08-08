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