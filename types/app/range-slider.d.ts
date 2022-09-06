import { ISlider } from '../ui/slider';
import { TData, TStep } from '../types';
import { TypeEnum } from '../enums/type-enum';
import { StorageTypeEnum } from '../enums/storage-type-enum';
import { AttributesEnum } from '../enums/attributes-enum';
/**
 * Usage: <toolcool-range-slider value="0" min="0" max="100"></toolcool-range-slider>
 * Documentation: https://github.com/toolcool-org/toolcool-range-slider
 */
declare class RangeSlider extends HTMLElement {
    /**
     * the attributes list that are observed by web component;
     * if attribute changes ---> the web component will update accordingly
     */
    static get observedAttributes(): AttributesEnum[];
    slider: ISlider | undefined;
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
    set type(_type: TypeEnum | undefined);
    get type(): TypeEnum | undefined;
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
    set storage(_storage: StorageTypeEnum | undefined);
    get storage(): StorageTypeEnum | undefined;
    set storageKey(_storageKey: string);
    get storageKey(): string;
    get storageKey2(): string | undefined;
    set generateLabels(_generateLabels: boolean);
    get generateLabels(): boolean;
    set sliderWidth(_sliderWidth: string | undefined);
    get sliderWidth(): string | undefined;
    set sliderHeight(_sliderHeight: string | undefined);
    get sliderHeight(): string | undefined;
    set sliderRadius(_sliderRadius: string | undefined);
    get sliderRadius(): string | undefined;
    set sliderBg(_sliderBg: string | undefined);
    get sliderBg(): string | undefined;
    set sliderBgHover(_sliderBgHover: string | undefined);
    get sliderBgHover(): string | undefined;
    set sliderBgFill(_sliderBgFill: string | undefined);
    get sliderBgFill(): string | undefined;
    set pointerWidth(_pointerWidth: string | undefined);
    get pointerWidth(): string | undefined;
    set pointerHeight(_pointerHeight: string | undefined);
    get pointerHeight(): string | undefined;
    set pointerRadius(_pointerRadius: string | undefined);
    get pointerRadius(): string | undefined;
    set pointerShape(_pointerShape: string | null);
    get pointerShape(): string | null;
    set pointerBg(_pointerBg: string | undefined);
    get pointerBg(): string | undefined;
    set pointerBgHover(_pointerBgHover: string | undefined);
    get pointerBgHover(): string | undefined;
    set pointerBgFocus(_pointerBgFocus: string | undefined);
    get pointerBgFocus(): string | undefined;
    set pointerShadow(_pointerShadow: string | undefined);
    get pointerShadow(): string | undefined;
    set pointerShadowHover(_pointerShadowHover: string | undefined);
    get pointerShadowHover(): string | undefined;
    set pointerShadowFocus(_pointerShadowFocus: string | undefined);
    get pointerShadowFocus(): string | undefined;
    set pointerBorder(_pointerBorder: string | undefined);
    get pointerBorder(): string | undefined;
    set pointerBorderHover(_pointerBorderHover: string | undefined);
    get pointerBorderHover(): string | undefined;
    set pointerBorderFocus(_pointerBorderFocus: string | undefined);
    get pointerBorderFocus(): string | undefined;
    set pointer1Disabled(_pointer1Disabled: boolean);
    get pointer1Disabled(): boolean;
    set pointer2Disabled(_pointer2Disabled: boolean);
    get pointer2Disabled(): boolean;
    set valueLabel(_valueLabel: string | undefined);
    get valueLabel(): string | undefined;
    set value2Label(_value2Label: string | undefined);
    get value2Label(): string | undefined;
    set ariaLabel1(_ariaLabel1: string | undefined);
    get ariaLabel1(): string | undefined;
    set ariaLabel2(_ariaLabel2: string | undefined);
    get ariaLabel2(): string | undefined;
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