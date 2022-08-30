import RangeSlider from '../app/range-slider';
export declare const getSafeValues: (value: number, min: number, max: number, decimalPlaces: number) => {
    min: number;
    max: number;
    value: number;
};
export declare const prepareDataForRender: (slider: RangeSlider) => {
    _min: number;
    _max: number;
    _val: number;
    _val2: number | undefined;
    percent: number;
    percent2: number;
};
/**
 * in returns selected pointer or null
 */
export declare const updateValueAndFocusPointer: (evt: MouseEvent | TouchEvent, slider: RangeSlider, $selectedPointer: HTMLElement | null, hasData: boolean, updatedValue: string | number, $pointer: HTMLElement | null, $pointer2: HTMLElement | null) => HTMLElement | null;
export declare const isFocused: ($el: HTMLElement | null) => boolean;
export declare const handleDisableEnable: (disabled: boolean, $slider: HTMLElement | null) => void;
//# sourceMappingURL=core-provider.d.ts.map