export declare const getAttributesByRegex: <T>($component: HTMLElement, regex: RegExp, parseValue?: ((val: string) => T) | undefined) => Map<number, T>;
export declare const getExternalCSSList: ($component: HTMLElement) => string[] | null;
