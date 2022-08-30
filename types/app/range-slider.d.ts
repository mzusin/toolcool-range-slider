import { StorageTypeEnum } from '../dal/storage-provider';
import { TypeEnum } from '../enums/type-enum';
declare class RangeSlider extends HTMLElement {
    /**
     * the attributes list that are observed by web component;
     * if attribute changes ---> the web component will update accordingly
     */
    static get observedAttributes(): string[];
    private _$box;
    private _$slider;
    private _$panelFill;
    private _$pointer;
    private _$pointer2;
    private _$selectedPointer;
    private _$valueLabel;
    private _$value2Label;
    private _$minLabel;
    private _$maxLabel;
    private _value;
    private _value2;
    private _data;
    private _min;
    private _max;
    private _step;
    private _round;
    private _type;
    private _theme;
    private _disabled;
    private _rtl;
    private _btt;
    private _storage;
    private _storageKey;
    private _storageInitialized;
    private _valueLabel;
    private _value2Label;
    private _pointersOverlap;
    private _generateLabels;
    private _animateOnClick;
    private _animating;
    private _sliderWidth;
    private _sliderHeight;
    private _sliderRadius;
    private _sliderBg;
    private _sliderBgHover;
    private _sliderBgFill;
    private _pointerWidth;
    private _pointerHeight;
    private _pointerRadius;
    private _pointerShape;
    private _pointerBg;
    private _pointerBgHover;
    private _pointerBgFocus;
    private _pointerShadow;
    private _pointerShadowHover;
    private _pointerShadowFocus;
    private _pointerBorder;
    private _pointerBorderHover;
    private _pointerBorderFocus;
    constructor();
    private valueUpdateDone;
    set value(val: string | number);
    get value(): string | number;
    /**
     * value1 is alias for value
     */
    set value1(val: string | number);
    /**
     * value1 is alias for value
     */
    get value1(): string | number;
    set value2(val: string | number | undefined);
    get value2(): string | number | undefined;
    set data(val: (string | number)[] | undefined);
    get data(): (string | number)[] | undefined;
    set min(val: number | string);
    get min(): number | string;
    set max(val: number | string);
    get max(): number | string;
    set step(numOrFunction: number | ((value: number | string) => number) | undefined);
    get step(): number | ((value: number | string) => number) | undefined;
    set round(val: number);
    get round(): number;
    set type(val: TypeEnum | undefined);
    get type(): TypeEnum | undefined;
    set pointersOverlap(val: boolean);
    get pointersOverlap(): boolean;
    set theme(val: string | undefined);
    get theme(): string | undefined;
    set rtl(val: boolean);
    get rtl(): boolean;
    set btt(val: boolean);
    get btt(): boolean;
    set disabled(val: boolean);
    get disabled(): boolean;
    set animateOnClick(val: string | undefined);
    get animateOnClick(): string | undefined;
    set storage(val: StorageTypeEnum | undefined);
    get storage(): StorageTypeEnum | undefined;
    set storageKey(val: string);
    get storageKey(): string;
    get storageKey2(): string;
    set valueLabel(val: string | undefined);
    get valueLabel(): string | undefined;
    set value2Label(val: string | undefined);
    get value2Label(): string | undefined;
    set generateLabels(val: boolean);
    get generateLabels(): boolean;
    set sliderWidth(val: string | undefined);
    get sliderWidth(): string | undefined;
    set sliderHeight(val: string | undefined);
    get sliderHeight(): string | undefined;
    set sliderRadius(val: string | undefined);
    get sliderRadius(): string | undefined;
    set sliderBg(val: string | undefined);
    get sliderBg(): string | undefined;
    set sliderBgHover(val: string | undefined);
    get sliderBgHover(): string | undefined;
    set sliderBgFill(val: string | undefined);
    get sliderBgFill(): string | undefined;
    set pointerWidth(val: string | undefined);
    get pointerWidth(): string | undefined;
    set pointerHeight(val: string | undefined);
    get pointerHeight(): string | undefined;
    set pointerRadius(val: string | undefined);
    get pointerRadius(): string | undefined;
    set pointerShape(val: string | undefined);
    get pointerShape(): string | undefined;
    set pointerBg(val: string | undefined);
    get pointerBg(): string | undefined;
    set pointerBgHover(val: string | undefined);
    get pointerBgHover(): string | undefined;
    set pointerBgFocus(val: string | undefined);
    get pointerBgFocus(): string | undefined;
    set pointerShadow(val: string | undefined);
    get pointerShadow(): string | undefined;
    set pointerShadowHover(val: string | undefined);
    get pointerShadowHover(): string | undefined;
    set pointerShadowFocus(val: string | undefined);
    get pointerShadowFocus(): string | undefined;
    set pointerBorder(val: string | undefined);
    get pointerBorder(): string | undefined;
    set pointerBorderHover(val: string | undefined);
    get pointerBorderHover(): string | undefined;
    set pointerBorderFocus(val: string | undefined);
    get pointerBorderFocus(): string | undefined;
    render(): void;
    pointerClicked(evt: MouseEvent): void;
    pointerMouseWheel(evt: WheelEvent): void;
    onTransitionEnd(): void;
    pointerKeyDown(evt: KeyboardEvent): void;
    onMouseDown(evt: MouseEvent): void;
    onMouseUp(evt: MouseEvent): void;
    onValueChange(evt: MouseEvent | TouchEvent): void;
    /**
     * when the custom element connected to DOM
     */
    connectedCallback(): void;
    /**
     * when the custom element disconnected from DOM
     */
    disconnectedCallback(): void;
    /**
     * when attributes change
     */
    attributeChangedCallback(attrName: string): void;
}
export default RangeSlider;
//# sourceMappingURL=range-slider.d.ts.map