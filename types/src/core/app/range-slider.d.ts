import { ISlider } from '../ui/slider';
import { TData, TStep } from '../types';
/**
 * Usage: <toolcool-range-slider value="0" min="0" max="100"></toolcool-range-slider>
 * Documentation: https://github.com/toolcool-org/toolcool-range-slider
 */
declare class TCRangeSlider extends HTMLElement {
    slider: ISlider | undefined;
    private _externalCSSList;
    private _observer;
    set step(_step: TStep);
    get step(): TStep;
    set disabled(_disabled: boolean);
    get disabled(): boolean;
    set data(_data: TData);
    get data(): TData;
    set min(_min: number | string | undefined | null);
    get min(): number | string | undefined | null;
    set max(_max: number | string | undefined | null);
    get max(): number | string | undefined | null;
    set round(_round: number);
    get round(): number;
    set type(_type: string | undefined);
    get type(): string | undefined;
    set pointersOverlap(_pointersOverlap: boolean);
    get pointersOverlap(): boolean;
    set pointersMinDistance(_pointersMinDistance: number);
    get pointersMinDistance(): number;
    set pointersMaxDistance(_pointersMaxDistance: number);
    get pointersMaxDistance(): number;
    set theme(_theme: string | null);
    get theme(): string | null;
    set rtl(_rtl: boolean);
    get rtl(): boolean;
    set btt(_btt: boolean);
    get btt(): boolean;
    set keyboardDisabled(_keyboardDisabled: boolean);
    get keyboardDisabled(): boolean;
    set animateOnClick(_animateOnClick: string | boolean | undefined);
    get animateOnClick(): string | boolean | undefined;
    get rangeDragging(): boolean | string | undefined | null;
    set rangeDragging(_rangeDragging: boolean | string | undefined | null);
    get externalCSSList(): string[] | null;
    addPointer(value: number | string | undefined): void;
    removePointer(): void;
    addCSS(css: string): void;
    constructor();
    /**
     * when the custom element connected to DOM
     */
    connectedCallback(): void;
    /**
     * when the custom element disconnected from DOM
     */
    disconnectedCallback(): void;
}
export default TCRangeSlider;
