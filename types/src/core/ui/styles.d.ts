import { IPointer } from './pointer';
export interface IStyles {
    setStyle: (key: string, value: string | null | undefined, index: number) => void;
    getStyle: (key: string, index: number) => string | undefined;
    theme: string | null;
    readonly pointerShapes: (string | null)[];
    setPointerShape: (index: number, value: string | null) => void;
}
export declare const stylePropertiesList: [string, string, string, RegExp | null][];
export declare const Styles: ($component: HTMLElement, $slider: HTMLElement, pointers: IPointer[]) => IStyles;
