import { StorageTypeEnum } from '../domain/storage-provider';
declare class RangeSlider extends HTMLElement {
    static get observedAttributes(): string[];
    private _$slider;
    private _$pointer;
    private _$panelFill;
    private _$valueLabel;
    private _value;
    private _data;
    private _min;
    private _max;
    private _step;
    private _type;
    private _theme;
    private _disabled;
    private _rtl;
    private _btt;
    private _storage;
    private _storageKey;
    private _storageInitialized;
    private _valueLabel;
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
    private setValueHelper;
    /**
     * value in [min, max] range, or in provided data array
     */
    set value(val: string | number);
    /**
     * returns value from [min, max] range
     */
    get value(): string | number;
    set data(val: (string | number)[] | undefined);
    get data(): (string | number)[] | undefined;
    set min(val: number | string);
    get min(): number | string;
    set max(val: number | string);
    get max(): number | string;
    set step(numOrFunction: number | ((value: number | string) => number) | undefined);
    get step(): number | ((value: number | string) => number) | undefined;
    set type(val: string | undefined);
    get type(): string | undefined;
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
    set valueLabel(val: string | undefined);
    get valueLabel(): string | undefined;
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
    sendPointerClickedEvent(): void;
    sendMouseDownEvent(evt: MouseEvent): void;
    sendMouseUpEvent(evt: MouseEvent): void;
    sendChangeEvent(): void;
    sendOnKeyDownEvent(evt: KeyboardEvent): void;
    getSafeValues(value: number, min: number, max: number): {
        min: number;
        max: number;
        value: number;
    };
    parseData(dataString: string | undefined | null): (string | number)[] | undefined;
    findValueIndexInData(val: string | number): number;
    render(): void;
    pointerClicked(): void;
    pointerMouseWheel(evt: WheelEvent): void;
    stepBack(): void;
    stepForward(): void;
    onTransitionEnd(): void;
    pointerKeyDown(evt: KeyboardEvent): void;
    onMouseDown(evt: MouseEvent): void;
    onMouseUp(evt: MouseEvent): void;
    onValueChange(evt: MouseEvent | TouchEvent): void;
    getStringOrNumber(attrName: string, defaultValue: number, dataDefaultValue: string | number): any;
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