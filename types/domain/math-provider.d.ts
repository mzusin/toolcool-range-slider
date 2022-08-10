/**
 * scale a range [min,max] to [a,b]
 * f(x) = (b - a) * (x - min) / (max - min) + a
 */
export declare const convertRange: (min: number, max: number, a: number, b: number, x: number) => number;
export declare const getNumber: (input: any, defaultValue: any) => any;
/**
 * Round up to the next multiple of X,
 * where X is the step provided by the user.
 */
export declare const roundToStep: (num: number, step: number) => number;
//# sourceMappingURL=math-provider.d.ts.map