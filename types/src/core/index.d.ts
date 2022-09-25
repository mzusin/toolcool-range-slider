import TCRangeSlider from './app/range-slider';
declare type RangeSlider = TCRangeSlider & HTMLElement & {
    value: string | number | undefined;
    [name: `value${number}`]: string | number | undefined;
    ariaLabel: string | number | undefined;
    [name: `ariaLabel$${number}`]: string | null | undefined;
    pointerShape: string | number | undefined;
    [name: `pointerShape$${number}`]: string | null;
    pointerDisabled: string | number | undefined;
    [name: `pointer$${number}Disabled`]: boolean;
    sliderWidth: string | number | null | undefined;
    sliderHeight: string | number | null | undefined;
    sliderRadius: string | number | null | undefined;
    sliderBg: string | null | undefined;
    sliderBgHover: string | null | undefined;
    sliderBgFill: string | null | undefined;
    pointerWidth: string | number | null | undefined;
    [name: `pointer${number}Width`]: string | number | undefined | null;
    pointerHeight: string | number | null | undefined;
    [name: `pointer${number}Height`]: string | number | undefined | null;
    pointerRadius: string | number | null | undefined;
    [name: `pointer${number}Radius`]: string | number | undefined | null;
    pointerBg: string | null | undefined;
    [name: `pointer${number}Bg`]: string | undefined | null;
    pointerBgHover: string | null | undefined;
    [name: `pointer${number}BgHover`]: string | undefined | null;
    pointerBgFocus: string | null | undefined;
    [name: `pointer${number}BgFocus`]: string | undefined | null;
    pointerShadow: string | null | undefined;
    [name: `pointer${number}Shadow`]: string | undefined | null;
    pointerShadowHover: string | null | undefined;
    [name: `pointer${number}ShadowHover`]: string | undefined | null;
    pointerShadowFocus: string | null | undefined;
    [name: `pointer${number}ShadowFocus`]: string | undefined | null;
    pointerBorder: string | number | null | undefined;
    [name: `pointer${number}Border`]: string | number | undefined | null;
    pointerBorderHover: string | number | null | undefined;
    [name: `pointer${number}BorderHover`]: string | number | undefined | null;
    pointerBorderFocus: string | number | null | undefined;
    [name: `pointer${number}BorderFocus`]: string | number | undefined | null;
};
declare global {
    interface Window {
        tcRangeSlider: typeof TCRangeSlider;
    }
}
export default RangeSlider;
//# sourceMappingURL=index.d.ts.map