import TCRangeSlider from './app/range-slider';
declare type RangeSlider = TCRangeSlider & HTMLElement & {
    value: string | number | undefined;
    [name: `value${number}`]: string | number | undefined;
    ariaLabel$: string | number | undefined;
    [name: `ariaLabel$${number}`]: string | null | undefined;
    pointerShape$: string | number | undefined;
    [name: `pointerShape$${number}`]: string | null;
    pointerDisabled$: string | number | undefined;
    [name: `pointer$${number}Disabled`]: boolean;
};
declare global {
    interface Window {
        tcRangeSlider: typeof TCRangeSlider;
    }
}
export default RangeSlider;
//# sourceMappingURL=index.d.ts.map