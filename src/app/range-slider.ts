import mainTemplate from '../templates/main.html.js'; // esbuild custom loader
import styles from './styles.pcss';
import { observedAttributes, onAttributesChange } from '../domain/attributes-provider';
import { ISlider, ROUND_DEFAULT, Slider } from '../ui/slider';
import { IPointer, Pointer } from '../ui/pointer';
import { TData, TStep } from '../types';
import { getNumber, isNumber } from '../domain/math-provider';
import { TypeEnum } from '../enums/type-enum';
import { StorageTypeEnum } from '../enums/storage-type-enum';
import { STORAGE_KEY } from '../dal/storage-provider';
import { CSSVariables } from '../enums/css-vars-enum';
import { createPointer2 } from '../domain/common-provider';

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
    return this.slider?.storage ?? STORAGE_KEY;
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
    this.slider.styles.setStyle(CSSVariables.SliderWidth, _sliderWidth);
  }

  public get sliderWidth() {
    return this.slider?.styles?.getStyle(CSSVariables.SliderWidth);
  }

  public set sliderHeight(_sliderHeight: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.SliderHeight, _sliderHeight);
  }

  public get sliderHeight() {
    return this.slider?.styles?.getStyle(CSSVariables.SliderHeight);
  }

  public set sliderRadius(_sliderRadius: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.SliderRadius, _sliderRadius);
  }

  public get sliderRadius() {
    return this.slider?.styles?.getStyle(CSSVariables.SliderRadius);
  }

  public set sliderBg(_sliderBg: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.SliderBg, _sliderBg);
  }

  public get sliderBg() {
    return this.slider?.styles?.getStyle(CSSVariables.SliderBg);
  }

  public set sliderBgHover(_sliderBgHover: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.SliderBgHover, _sliderBgHover);
  }

  public get sliderBgHover() {
    return this.slider?.styles?.getStyle(CSSVariables.SliderBgHover);
  }

  public set sliderBgFill(_sliderBgFill: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.SliderBgFill, _sliderBgFill);
  }

  public get sliderBgFill() {
    return this.slider?.styles?.getStyle(CSSVariables.SliderBgFill);
  }

  public set pointerWidth(_pointerWidth: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.PointerWidth, _pointerWidth);
  }

  public get pointerWidth() {
    return this.slider?.styles?.getStyle(CSSVariables.PointerWidth);
  }

  public set pointerHeight(_pointerHeight: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.PointerHeight, _pointerHeight);
  }

  public get pointerHeight() {
    return this.slider?.styles?.getStyle(CSSVariables.PointerHeight);
  }

  public set pointerRadius(_pointerRadius: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.PointerRadius, _pointerRadius);
  }

  public get pointerRadius() {
    return this.slider?.styles?.getStyle(CSSVariables.PointerRadius);
  }

  public set pointerShape(_pointerShape: string | null) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.pointerShape = _pointerShape;
  }

  public get pointerShape() {
    return this.slider?.styles?.pointerShape ?? null;
  }

  public set pointerBg(_pointerBg: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.PointerBg, _pointerBg);
  }

  public get pointerBg() {
    return this.slider?.styles?.getStyle(CSSVariables.PointerBg);
  }

  public set pointerBgHover(_pointerBgHover: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.PointerBgHover, _pointerBgHover);
  }

  public get pointerBgHover() {
    return this.slider?.styles?.getStyle(CSSVariables.PointerBgHover);
  }

  public set pointerBgFocus(_pointerBgFocus: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.PointerBgFocus, _pointerBgFocus);
  }

  public get pointerBgFocus() {
    return this.slider?.styles?.getStyle(CSSVariables.PointerBgFocus);
  }

  public set pointerShadow(_pointerShadow: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.PointerShadow, _pointerShadow);
  }

  public get pointerShadow() {
    return this.slider?.styles?.getStyle(CSSVariables.PointerShadow);
  }

  public set pointerShadowHover(_pointerShadowHover: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.PointerShadowHover, _pointerShadowHover);
  }

  public get pointerShadowHover() {
    return this.slider?.styles?.getStyle(CSSVariables.PointerShadowHover);
  }

  public set pointerShadowFocus(_pointerShadowFocus: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.PointerShadowFocus, _pointerShadowFocus);
  }

  public get pointerShadowFocus() {
    return this.slider?.styles?.getStyle(CSSVariables.PointerShadowFocus);
  }

  public set pointerBorder(_pointerBorder: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.PointerBorder, _pointerBorder);
  }

  public get pointerBorder() {
    return this.slider?.styles?.getStyle(CSSVariables.PointerBorder);
  }

  public set pointerBorderHover(_pointerBorderHover: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.PointerBorderHover, _pointerBorderHover);
  }

  public get pointerBorderHover() {
    return this.slider?.styles?.getStyle(CSSVariables.PointerBorderHover);
  }

  public set pointerBorderFocus(_pointerBorderFocus: string | undefined) {
    if(!this.slider || !this.slider.styles) return;
    this.slider.styles.setStyle(CSSVariables.PointerBorderFocus, _pointerBorderFocus);
  }

  public get pointerBorderFocus() {
    return this.slider?.styles?.getStyle(CSSVariables.PointerBorderFocus);
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
    this.slider.pointer1.setAttr('aria-label', _ariaLabel1 ?? '');
  }

  public get ariaLabel1() {
    return this.slider?.pointer1.getAttr('aria-label') ?? undefined;
  }

  public set ariaLabel2(_ariaLabel2: string | undefined) {
    if(!this.slider) return;
    this.slider.pointer2?.setAttr('aria-label', _ariaLabel2 ?? '');
  }

  public get ariaLabel2() {
    return this.slider?.pointer2?.getAttr('aria-label') ?? undefined;
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
    this.shadowRoot.innerHTML = mainTemplate(styles);

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