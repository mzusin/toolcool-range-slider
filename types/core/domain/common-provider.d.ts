import { IPointer } from '../ui/pointer';
import { ISlider } from '../ui/slider';
export declare const getAttributesByRegex: <T>($component: HTMLElement, regex: RegExp, parseValue?: ((val: string) => T) | undefined) => Map<number, T>;
export declare const initPointers: ($component: HTMLElement, $pointer: HTMLElement) => [IPointer, string | number | undefined][];
export declare const initPointerAPIs: ($component: HTMLElement, slider: ISlider) => void;
export declare const changePointersOrder: (pointers: IPointer[], isDesc: boolean, $component: HTMLElement) => void;
export declare const removeFocus: () => void;
export declare const getExternalCSSList: ($component: HTMLElement) => string[] | null;
//# sourceMappingURL=common-provider.d.ts.map