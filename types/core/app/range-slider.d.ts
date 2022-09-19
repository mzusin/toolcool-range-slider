import { ISlider } from '../ui/slider';
import { TData, TStep } from '../types';
/**
 * Usage: <toolcool-range-slider value="0" min="0" max="100"></toolcool-range-slider>
 * Documentation: https://github.com/toolcool-org/toolcool-range-slider
 */
declare class RangeSlider extends HTMLElement {
    /**
     * the attributes list that are observed by web component;
     * if attribute changes ---> the web component will update accordingly
     */
    static get observedAttributes(): string[];
    slider: ISlider | undefined;
    private _externalCSSList;
    set step(_step: TStep);
    get step(): TStep;
    set disabled(_disabled: boolean);
    get disabled(): boolean;
    set value(_value: string | number | undefined);
    get value(): string | number | undefined;
    /**
     * value1 is alias for value
     */
    set value1(val: string | number | undefined);
    /**
     * value1 is alias for value
     */
    get value1(): string | number | undefined;
    set value2(_value2: string | number | undefined);
    get value2(): string | number | undefined;
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
    set animateOnClick(_animateOnClick: string | undefined);
    get animateOnClick(): string | undefined;
    set pointerShape(_pointerShape: string | null);
    get pointerShape(): string | null;
    set pointer2Shape(_pointerShape: string | null);
    get pointer2Shape(): string | null;
    set pointer1Disabled(_pointer1Disabled: boolean);
    get pointer1Disabled(): boolean;
    set pointer2Disabled(_pointer2Disabled: boolean);
    get pointer2Disabled(): boolean;
    set ariaLabel1(_ariaLabel1: string | undefined);
    get ariaLabel1(): string | undefined;
    set ariaLabel2(_ariaLabel2: string | undefined);
    get ariaLabel2(): string | undefined;
    get rangeDragging(): boolean | string | undefined | null;
    set rangeDragging(_rangeDragging: boolean | string | undefined | null);
    get externalCSSList(): string[] | null;
    constructor();
    /**
     * when the custom element connected to DOM
     */
    connectedCallback(): void;
    /**
     * when the custom element disconnected from DOM
     */
    disconnectedCallback(): void;
    attributeChangedCallback(attrName: string, oldValue: string, newValue: string): void;
}
export default RangeSlider;
//# sourceMappingURL=range-slider.d.ts.map