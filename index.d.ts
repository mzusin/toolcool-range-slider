declare module 'toolcool-range-slider' {

  // ------- plugins -------------------
  export interface IBindingLabelsPlugin extends RangeSlider {
    valueLabel: string;
    [name: `value${number}Label`]: string;
  }
  export interface IGeneratedLabelsPlugin extends RangeSlider {
    generateLabels: boolean;

    /** @deprecated */
    textColor: string;

    generateLabelsTextColor: string;

    /** @deprecated */
    units: string;

    generateLabelsUnits: string;

    generateLabelsFormat: (value: string | number | undefined) => string;
  }
  export interface IMovingTooltipPlugin extends RangeSlider{
    movingTooltip: boolean;
    distanceToPointer: number;
    tooltipWidth: number;
    tooltipHeight: number;
    tooltipBg: string;
    tooltipTextColor: string;
    tooltipUnits: string;
    tooltipUnitType: string;
  }
  export interface IOriginCenterPlugin extends RangeSlider{
    originCenterEnabled: boolean;
  }
  export interface IMarksPlugin extends RangeSlider{
    marksEnabled: boolean;
    marksCount: number;
    marksValuesCount: number;
    marksColor: string;
    markValuesColor: string;
  }

  // ------- range slider UI -----------
  export interface IStyles {
    setStyle: (key: string, value: string | null | undefined, index: number) => void;
    getStyle: (key: string, index: number) => string | undefined;
    theme: string | null;
    readonly pointerShapes: (string | null)[];
    setPointerShape: (index: number, value: string | null) => void;
  }
  export interface ISlider {
    readonly pointers: IPointer[];
    readonly styles: IStyles | null;
    readonly pluginsManager: IPluginsManager | null;
    pointersOverlap: boolean;
    pointersMinDistance: number;
    pointersMaxDistance: number;
    rangeDragging: boolean;
    readonly min: number | string;
    readonly max: number | string;
    readonly step: TStep;
    readonly data: TData;
    type: string;
    rightToLeft: boolean;
    bottomToTop: boolean;
    disabled: boolean;
    keyboardDisabled: boolean;
    mousewheelDisabled: boolean;
    round: number;
    animateOnClick: string | undefined | boolean;
    getAriaLabel: (index: number) => (string | undefined);
    setAriaLabel: (index: number, ariaLabel: string | undefined) => void;
    setMin: (value: number | string | undefined | null) => void;
    setMax: (value: number | string | undefined | null) => void;
    setValue: (value: number | string | undefined | null, index: number) => void;
    setStep: (value: TStep | string) => void;
    setData: (value: TData | string | null | number) => void;
    getTextValue: (_percent: number | undefined) => undefined | string | number;
    addPointer: (value: number | string | undefined | null) => number;
    removePointer: () => number;
    destroy: () => void;
  }
  export interface IPointer {
    readonly percent: number;
    readonly $pointer: HTMLElement;
    updatePosition: (percent: number, leftWall: number | undefined, rightWall: number | undefined, type: string, rightToLeft: boolean, bottomToTop: boolean) => void;
    disabled: boolean;
    isClicked: ($target: HTMLElement) => boolean;
    setCallbacks: (arrowLeft: (pointerIndex: number) => void, arrowRight: (pointerIndex: number) => void, arrowUp: (pointerIndex: number) => void, arrowDown: (pointerIndex: number) => void) => void;
    setAttr: (key: string, value: string | null | undefined) => void;
    getAttr: (key: string) => string | null;
    destroy: () => void;
  }
  export interface IPanelFill {
    updatePosition: (type: string, percents: (number | undefined)[], rightToLeft: boolean, bottomToTop: boolean) => void;
  }

  // -------- plugin system ------------
  export interface IPluginUpdateData {
    percents: number[];
    values: (string | number | undefined)[];
    $pointers: HTMLElement[],
    min: number;
    max: number;
    round: number;
    step: TStep;
    data: TData;
    type: string;
    textMin: number | string | undefined;
    textMax: number | string | undefined;
    rightToLeft: boolean;
    bottomToTop: boolean;
    pointersOverlap: boolean;
    pointersMinDistance: number;
    pointersMaxDistance: number;
    rangeDragging: boolean;
    disabled: boolean;
    keyboardDisabled: boolean;
  }
  export interface IPluginSetters {
    setValues: (values: (string | number | undefined)[]) => void;
    setMin: (min: number | string | undefined | null) => void;
    setMax: (max: number | string | undefined | null) => void;
    setStep: (step: TStep) => void;
    setRound: (val: number) => void;
    setType: (val: string) => void;
    setData: (val: TData) => void;
    setPointersOverlap: (val: boolean) => void;
    setPointersMinDistance: (val: number) => void;
    setPointersMaxDistance: (val: number) => void;
    setRangeDragging: (val: boolean) => void;
    setDisabled: (val: boolean) => void;
    setKeyboardDisabled: (val: boolean) => void;
    setRightToLeft: (val: boolean) => void;
    setBottomToTop: (val: boolean) => void;
  }
  export interface IPluginGetters {
    getPercents: () => number[];
    getValues: () => (string | number | undefined)[];
    getPointerElements: () => HTMLElement[];
    getMin: () => number;
    getMax: () => number;
    getTextMin: () => string | number;
    getTextMax: () => string | number;
    getStep: () => TStep;
    getData: () => TData;
    getType: () => string;
    getRound: () => number;
    isRightToLeft: () => boolean;
    isBottomToTop: () => boolean;
    isDisabled: () => boolean;
    isKeyboardDisabled: () => boolean;
    isPointersOverlap: () => boolean;
    isRangeDraggingEnabled: () => boolean;
    getPointersMinDistance: () => number;
    getPointersMaxDistance: () => number;
  }
  export interface IPlugin {
    readonly name: string;
    init?: ($component: HTMLElement, requestUpdate: () => void, setters: IPluginSetters, getters: IPluginGetters) => void;
    update?: (data: IPluginUpdateData) => void;
    onAttrChange?: (attrName: string, newValue: string) => void;
    gettersAndSetters?: ({
      name: PropertyKey;
      attributes: PropertyDescriptor & ThisType<any>;
    })[];
    css?: string;
    destroy?: () => void;
  }
  export interface IPluginsManager {
    init: () => void;
    update: (data: IPluginUpdateData) => void;
    onAttrChange: (attrName: string, newValue: string) => void;
    destroy: () => void;
  }

  // --------- initialization -----------
  export type TStep = ((value: number | string, percent: number) => number) | number | undefined | null;
  export type TData = (string | number)[] | undefined;
  export type DynamicFields = {
    value: string | number | undefined;
    [name: `value${number}`]: string | number | undefined;
    ariaLabel: string | number | undefined;
    [name: `ariaLabel${number}`]: string | null | undefined;
    pointerShape: string | number | undefined;
    [name: `pointerShape${number}`]: string | null;
    pointerDisabled: string | number | undefined;
    [name: `pointer${number}Disabled`]: boolean;
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

  class TCRangeSlider extends HTMLElement {
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

  type RangeSlider = TCRangeSlider & HTMLElement & DynamicFields;

  global {
    interface Window {
      tcRangeSliderPlugins: (() => IPlugin)[];
      tcRangeSliderObservedAttr: string[];
      tcRangeSlider: typeof TCRangeSlider;
    }

    namespace JSX {
      interface IntrinsicElements {
        // https://github.com/Microsoft/TypeScript/issues/15449#issuecomment-385959396
        // https://stackoverflow.com/questions/55424417/typescript-error-property-does-not-exist-on-type-jsx-intrinsicelements-when
        'tc-range-slider': React.DetailedHTMLProps<React.HTMLAttributes<RangeSlider>, RangeSlider>;
      }
    }
  }
}