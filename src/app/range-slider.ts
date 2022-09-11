import mainTemplate from '../templates/main.html.js'; // esbuild custom loader
import styles from './styles.pcss';
import { observedAttributes, onAttributesChange } from '../domain/attributes-provider';
import { ISlider, ROUND_DEFAULT, Slider } from '../ui/slider';
import { IPointer, Pointer } from '../ui/pointer';
import { TData, TStep } from '../types';
import { getBoolean, getNumber, isNumber } from '../domain/math-provider';
import { TypeEnum } from '../enums/type-enum';
import { StorageTypeEnum } from '../enums/storage-type-enum';
import { STORAGE_KEY } from '../dal/storage-provider';
import { CSSVariables } from '../enums/css-vars-enum';
import { createPointer2, getExternalCSSList, removeFocus } from '../domain/common-provider';

/**
 * Usage: <toolcool-range-slider value="0" min="0" max="100"></toolcool-range-slider>
 * Documentation: https://github.com/toolcool-org/toolcool-range-slider
 */
class RangeSlider extends HTMLElement {

  /**
   * the attributes list that are observed by web component;
   * if attribute changes ---> the web component will update accordingly
   */
  static get observedAttributes() {
    return observedAttributes;
  }

  public slider: ISlider | undefined;

  private _externalCSSList: string[] | null = [];

  // -------------- APIs --------------------

  public set step(_step: TStep) {
    if(this.slider){
      this.slider.setStep(_step);
    }
  }

  public get step() {
    return this.slider?.step;
  }

  public set disabled(_disabled: boolean) {
    if(this.slider){
      this.slider.disabled = _disabled;
    }
  }

  public get disabled() {
    return this.slider?.disabled ?? false;
  }

  public set value(_value: string | number | undefined) {
    this.slider?.setValue(_value, 1);
  }

  public get value() {
    if(!this.slider) return undefined;
    const val = this.slider.getTextValue(this.slider.pointer1.percent);
    return isNumber(val) ? getNumber(val, val) : val;
  }

  /**
   * value1 is alias for value
   */
  public set value1(val: string | number | undefined) {
    this.value = val;
  }

  /**
   * value1 is alias for value
   */
  public get value1() {
    return this.value;
  }

  public set value2(_value2: string | number | undefined) {
    this.slider?.setValue(_value2, 2);
  }

  public get value2() {
    if(!this.slider || !this.slider.pointer2) return undefined;
    const val = this.slider.getTextValue(this.slider.pointer2.percent);
    return isNumber(val) ? getNumber(val, val) : val;
  }

  public set data(_data: TData) {
    this.slider?.setData(_data);
  }

  public get data() {
    return this.slider?.data;
  }

  public set min(_min: number | string | undefined | null) {
    this.slider?.setMin(_min);
  }

  public get min() {
    return this.slider?.min;
  }

  public set max(_max: number | string | undefined | null) {
    this.slider?.setMax(_max);
  }

  public get max() {
    return this.slider?.max;
  }

  public set round(_round: number) {
    if(!this.slider) return;
    this.slider.round = _round;
  }

  public get round() {
    return this.slider?.round ?? ROUND_DEFAULT;
  }

  public set type(_type: TypeEnum | undefined) {
    if(!this.slider) return;
    this.slider.type = _type ?? TypeEnum.Horizontal;
  }

  public get type() {
    return this.slider?.type || TypeEnum.Horizontal;
  }

  public set pointersOverlap(_pointersOverlap: boolean) {
    if(!this.slider) return;
    this.slider.pointersOverlap = _pointersOverlap;
  }

  public get pointersOverlap() {
    return this.slider?.pointersOverlap ?? false;
  }

  public set pointersMinDistance(_pointersMinDistance: number) {
    if(!this.slider) return;
    this.slider.pointersMinDistance = _pointersMinDistance;
  }

  public get pointersMinDistance() {
    return this.slider?.pointersMinDistance ?? 0;
  }

  public set pointersMaxDistance(_pointersMaxDistance: number) {
    if(!this.slider) return;
    this.slider.pointersMaxDistance = _pointersMaxDistance;
  }

  public get pointersMaxDistance() {
    return this.slider?.pointersMaxDistance ?? Infinity;
  }

  public set theme(_theme: string | null) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.theme = _theme;
  }

  public get theme() {
    return this.slider?.styles?.theme ?? null;
  }

  public set rtl(_rtl: boolean) {
    if(!this.slider) return;
    this.slider.rightToLeft = _rtl;
  }

  public get rtl() {
    return this.slider?.rightToLeft ?? false;
  }

  public set btt(_btt: boolean) {
    if(!this.slider) return;
    this.slider.bottomToTop = _btt;
  }

  public get btt() {
    return this.slider?.bottomToTop ?? false;
  }

  public set keyboardDisabled(_keyboardDisabled: boolean) {
    if(!this.slider) return;
    this.slider.keyboardDisabled = _keyboardDisabled;
  }

  public get keyboardDisabled() {
    return this.slider?.keyboardDisabled ?? false;
  }

  public set animateOnClick(_animateOnClick: string | undefined) {
    if(!this.slider) return;
    this.slider.animateOnClick = _animateOnClick;
  }

  public get animateOnClick() {
    return this.slider?.animateOnClick;
  }

  public set storage(_storage: StorageTypeEnum | undefined) {
    if(!this.slider) return;
    this.slider.storage = _storage;
  }

  public get storage() {
    return this.slider?.storage;
  }

  public set storageKey(_storageKey: string) {
    if(!this.slider) return;
    this.slider.storageKey = _storageKey;
  }

  public get storageKey() {
    return this.slider?.storageKey ?? STORAGE_KEY;
  }

  public get storageKey2() {
    return this.slider?.storageKey2;
  }

  public set generateLabels(_generateLabels: boolean) {
    if(!this.slider) return;
    this.slider.generateLabels = _generateLabels;
  }

  public get generateLabels() {
    return this.slider?.generateLabels ?? false;
  }

  public set sliderWidth(_sliderWidth: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.SliderWidth, _sliderWidth, 1);
  }

  public get sliderWidth() {
    return this.slider?.styles?.getStyle(CSSVariables.SliderWidth, 1);
  }

  public set sliderHeight(_sliderHeight: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.SliderHeight, _sliderHeight, 1);
  }

  public get sliderHeight() {
    return this.slider?.styles?.getStyle(CSSVariables.SliderHeight, 1);
  }

  public set sliderRadius(_sliderRadius: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.SliderRadius, _sliderRadius, 1);
  }

  public get sliderRadius() {
    return this.slider?.styles?.getStyle(CSSVariables.SliderRadius, 1);
  }

  public set sliderBg(_sliderBg: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.SliderBg, _sliderBg, 1);
  }

  public get sliderBg() {
    return this.slider?.styles?.getStyle(CSSVariables.SliderBg, 1);
  }

  public set sliderBgHover(_sliderBgHover: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.SliderBgHover, _sliderBgHover, 1);
  }

  public get sliderBgHover() {
    return this.slider?.styles?.getStyle(CSSVariables.SliderBgHover, 1);
  }

  public set sliderBgFill(_sliderBgFill: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.SliderBgFill, _sliderBgFill, 1);
  }

  public get sliderBgFill() {
    return this.slider?.styles?.getStyle(CSSVariables.SliderBgFill, 1);
  }

  public set pointerWidth(_pointerWidth: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.PointerWidth, _pointerWidth, 1);
  }

  public get pointerWidth() {
    return this.slider?.styles?.getStyle(CSSVariables.PointerWidth, 1);
  }

  public set pointer2Width(_pointerWidth: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.PointerWidth, _pointerWidth, 2);
  }

  public get pointer2Width() {
    return this.slider?.styles?.getStyle(CSSVariables.PointerWidth, 2);
  }

  public set pointerHeight(_pointerHeight: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.PointerHeight, _pointerHeight, 1);
  }

  public get pointerHeight() {
    return this.slider?.styles?.getStyle(CSSVariables.PointerHeight, 1);
  }

  public set pointer2Height(_pointerHeight: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.PointerHeight, _pointerHeight, 2);
  }

  public get pointer2Height() {
    return this.slider?.styles?.getStyle(CSSVariables.PointerHeight, 2);
  }

  public set pointerRadius(_pointerRadius: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.PointerRadius, _pointerRadius, 1);
  }

  public get pointerRadius() {
    return this.slider?.styles?.getStyle(CSSVariables.PointerRadius, 1);
  }

  public set pointer2Radius(_pointerRadius: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.PointerRadius, _pointerRadius, 2);
  }

  public get pointer2Radius() {
    return this.slider?.styles?.getStyle(CSSVariables.PointerRadius, 2);
  }

  public set pointerShape(_pointerShape: string | null) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.pointerShape = _pointerShape;
  }

  public get pointerShape() {
    return this.slider?.styles?.pointerShape ?? null;
  }

  public set pointer2Shape(_pointerShape: string | null) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.pointer2Shape = _pointerShape;
  }

  public get pointer2Shape() {
    return this.slider?.styles?.pointer2Shape ?? null;
  }

  public set pointerBg(_pointerBg: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.PointerBg, _pointerBg, 1);
  }

  public get pointerBg() {
    return this.slider?.styles?.getStyle(CSSVariables.PointerBg, 1);
  }

  public set pointer2Bg(_pointerBg: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.PointerBg, _pointerBg, 2);
  }

  public get pointer2Bg() {
    return this.slider?.styles?.getStyle(CSSVariables.PointerBg, 2);
  }

  public set pointerBgHover(_pointerBgHover: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.PointerBgHover, _pointerBgHover, 1);
  }

  public get pointerBgHover() {
    return this.slider?.styles?.getStyle(CSSVariables.PointerBgHover, 1);
  }

  public set pointer2BgHover(_pointerBgHover: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.PointerBgHover, _pointerBgHover, 2);
  }

  public get pointer2BgHover() {
    return this.slider?.styles?.getStyle(CSSVariables.PointerBgHover, 2);
  }

  public set pointerBgFocus(_pointerBgFocus: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.PointerBgFocus, _pointerBgFocus, 1);
  }

  public get pointerBgFocus() {
    return this.slider?.styles?.getStyle(CSSVariables.PointerBgFocus, 1);
  }

  public set pointer2BgFocus(_pointerBgFocus: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.PointerBgFocus, _pointerBgFocus, 2);
  }

  public get pointer2BgFocus() {
    return this.slider?.styles?.getStyle(CSSVariables.PointerBgFocus, 2);
  }

  public set pointerShadow(_pointerShadow: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.PointerShadow, _pointerShadow, 1);
  }

  public get pointerShadow() {
    return this.slider?.styles?.getStyle(CSSVariables.PointerShadow, 1);
  }

  public set pointer2Shadow(_pointerShadow: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.PointerShadow, _pointerShadow, 2);
  }

  public get pointer2Shadow() {
    return this.slider?.styles?.getStyle(CSSVariables.PointerShadow, 2);
  }

  public set pointerShadowHover(_pointerShadowHover: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.PointerShadowHover, _pointerShadowHover, 1);
  }

  public get pointerShadowHover() {
    return this.slider?.styles?.getStyle(CSSVariables.PointerShadowHover, 1);
  }

  public set pointer2ShadowHover(_pointerShadowHover: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.PointerShadowHover, _pointerShadowHover, 2);
  }

  public get pointer2ShadowHover() {
    return this.slider?.styles?.getStyle(CSSVariables.PointerShadowHover, 2);
  }

  public set pointerShadowFocus(_pointerShadowFocus: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.PointerShadowFocus, _pointerShadowFocus, 1);
  }

  public get pointerShadowFocus() {
    return this.slider?.styles?.getStyle(CSSVariables.PointerShadowFocus, 1);
  }

  public set pointer2ShadowFocus(_pointerShadowFocus: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.PointerShadowFocus, _pointerShadowFocus, 2);
  }

  public get pointer2ShadowFocus() {
    return this.slider?.styles?.getStyle(CSSVariables.PointerShadowFocus, 2);
  }

  public set pointerBorder(_pointerBorder: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.PointerBorder, _pointerBorder, 1);
  }

  public get pointerBorder() {
    return this.slider?.styles?.getStyle(CSSVariables.PointerBorder, 1);
  }

  public set pointer2Border(_pointerBorder: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.PointerBorder, _pointerBorder, 2);
  }

  public get pointer2Border() {
    return this.slider?.styles?.getStyle(CSSVariables.PointerBorder, 2);
  }

  public set pointerBorderHover(_pointerBorderHover: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.PointerBorderHover, _pointerBorderHover, 1);
  }

  public get pointerBorderHover() {
    return this.slider?.styles?.getStyle(CSSVariables.PointerBorderHover, 1);
  }

  public set pointer2BorderHover(_pointerBorderHover: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.PointerBorderHover, _pointerBorderHover, 2);
  }

  public get pointer2BorderHover() {
    return this.slider?.styles?.getStyle(CSSVariables.PointerBorderHover, 2);
  }

  public set pointerBorderFocus(_pointerBorderFocus: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.PointerBorderFocus, _pointerBorderFocus, 1);
  }

  public get pointerBorderFocus() {
    return this.slider?.styles?.getStyle(CSSVariables.PointerBorderFocus, 1);
  }

  public set pointer2BorderFocus(_pointerBorderFocus: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.PointerBorderFocus, _pointerBorderFocus, 2);
  }

  public get pointer2BorderFocus() {
    return this.slider?.styles?.getStyle(CSSVariables.PointerBorderFocus, 2);
  }

  public set pointer1Disabled(_pointer1Disabled: boolean) {
    if(!this.slider) return;
    this.slider.pointer1.disabled = _pointer1Disabled;
  }

  public get pointer1Disabled() {
    return this.slider?.pointer1.disabled ?? false;
  }

  public set pointer2Disabled(_pointer2Disabled: boolean) {
    if(!this.slider || !this.slider.pointer2) return;
    this.slider.pointer2.disabled = _pointer2Disabled;
  }

  public get pointer2Disabled() {
    return this.slider?.pointer2?.disabled ?? false;
  }

  public set valueLabel(_valueLabel: string | undefined) {
    if(!this.slider || !this.slider.labels) return;
    this.slider.labels.referenceLabel1 = _valueLabel ?? null;
  }

  public get valueLabel() {
    return this.slider?.labels?.referenceLabel1 ?? '';
  }

  public set value2Label(_value2Label: string | undefined) {
    if(!this.slider || !this.slider.labels) return;
    this.slider.labels.referenceLabel2 = _value2Label ?? null;
  }

  public get value2Label() {
    return this.slider?.labels?.referenceLabel2 ?? '';
  }

  public set ariaLabel1(_ariaLabel1: string | undefined) {
    if(!this.slider) return;
    this.slider.ariaLabel1 = _ariaLabel1;
  }

  public get ariaLabel1() {
    return this.slider?.pointer1.getAttr('aria-label') ?? undefined;
  }

  public set ariaLabel2(_ariaLabel2: string | undefined) {
    if(!this.slider) return;
    this.slider.ariaLabel2 = _ariaLabel2;
  }

  public get ariaLabel2() {
    return this.slider?.pointer2?.getAttr('aria-label') ?? undefined;
  }

  public get rangeDragging(){
    return this.slider?.rangeDragging ?? false;
  }

  public set rangeDragging(_rangeDragging: boolean | string | undefined | null) {
    if(this.slider){
      this.slider.rangeDragging = getBoolean(_rangeDragging);
    }
  }

  public get externalCSSList() {
    return this._externalCSSList;
  }

  // ----------------------------------------------

  constructor() {
    super();

    this.attachShadow({
      mode: 'open', // 'closed', 'open',
    });
  }

  /**
   * when the custom element connected to DOM
   */
  connectedCallback() {
    if (!this.shadowRoot) return;

    // get optional external CSS list
    this._externalCSSList = getExternalCSSList(this);
    this.shadowRoot.innerHTML = mainTemplate(styles, this._externalCSSList);

    // init first pointer
    const $pointer1 = this.shadowRoot?.querySelector('.pointer') as HTMLElement;
    const pointer1 = $pointer1 ? Pointer(this, $pointer1, 1) : null;
    if(!pointer1) return;

    // init second pointer
    let pointer2: IPointer | null = null;
    if(this.getAttribute('value2') !== null){
      pointer2 = createPointer2(this, $pointer1);
    }

    // init the slider
    const $slider = this.shadowRoot?.getElementById('range-slider') as HTMLElement;
    if(!$slider) return;
    this.slider = Slider(this, $slider, pointer1, pointer2);

    removeFocus();
  }

  /**
   * when the custom element disconnected from DOM
   */
  disconnectedCallback() {
    if(!this.slider) return

    this.slider.destroy();
  }

  attributeChangedCallback(attrName: string, oldValue: string, newValue: string) {
    if(!this.slider) return;

    onAttributesChange(this.slider, attrName, oldValue, newValue);
  }
}

export default RangeSlider;