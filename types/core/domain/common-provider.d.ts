import { IPointer } from '../ui/pointer';
export declare const getAttributesByRegex: <T>($component: HTMLElement, regex: RegExp, parseValue?: ((val: string) => T) | undefined) => Map<number, T>;
export declare const initPointers: ($component: HTMLElement, $pointer: HTMLElement) => [IPointer, string | number | undefined][];
export declare const changePointersOrder: (pointers: IPointer[], isDesc: boolean, $component: HTMLElement) => void;
export declare const removeFocus: () => void;
export declare const getExternalCSSList: ($component: HTMLElement) => string[] | null;
//# sourceMappingURL=common-provider.d.ts.map