import { IPointer } from '../ui/pointer';
import { ISlider } from '../ui/slider';
export declare const MAX_VALUES_API = 10;
export declare const initPointers: ($component: HTMLElement, $pointer: HTMLElement) => [IPointer, string | number | undefined][];
export declare const initPointerAPI: ($component: HTMLElement, slider: ISlider, index: number, valueProp: string, ariaLabelProp: string, pointerShapeProp: string, pointerDisabledProp: string) => void;
export declare const initPointerAPIs: ($component: HTMLElement, slider: ISlider) => void;
export declare const changePointersOrder: (pointers: IPointer[], isDesc: boolean, $component: HTMLElement) => void;
