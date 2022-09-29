/**
 * scale a range [min,max] to [a,b]
 * f(x) = (b - a) * (x - min) / (max - min) + a
 */
export declare const convertRange: (min: number, max: number, a: number, b: number, x: number) => number;
export declare const isNumber: (input: any) => boolean;
export declare const getNumber: (input: any, defaultValue: any) => number;
/**
 * Round up to the next multiple of X,
 * where X is the step provided by the user.
 */
export declare const roundToStep: (num: number, step: number) => number;
/**
 * round to decimal places
 * https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
 */
export declare const setDecimalPlaces: (num: number, decimalPlaces?: number) => number;
export declare const getBoolean: (val: string | null | undefined | boolean) => boolean;
