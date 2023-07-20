import mainTemplate from '../templates/main.html.js'; // esbuild custom loader
import styles from './styles.pcss';
import { onAttributeChange } from '../domain/attributes-provider';
import { ISlider, ROUND_DEFAULT, Slider } from '../ui/slider';
import { TData, TStep } from '../types';
import { getBoolean } from '../domain/math-provider';
import * as TypeEnum from '../enums/type-enum';
import { getExternalCSSList } from '../domain/common-provider';
import { initPointerAPI, initPointerAPIs, initPointers } from '../domain/pointers-provider';

/**
 * Usage: <toolcool-range-slider value="0" min="0" max="100"></toolcool-range-slider>
 * Documentation: https://github.com/mzusin/toolcool-range-slider
 */
class TCRangeSlider extends HTMLElement {

  public slider: ISlider | undefined;

  private _externalCSSList: string[] | null = [];

  private _observer: MutationObserver | null = null;

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

  public set type(_type: string | undefined) {
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

  public set mousewheelDisabled(_mousewheelDisabled: boolean) {
    if(!this.slider) return;
    this.slider.mousewheelDisabled = _mousewheelDisabled;
  }

  public get mousewheelDisabled() {
    return this.slider?.mousewheelDisabled ?? false;
  }

  public set animateOnClick(_animateOnClick: string | boolean | undefined) {
    if(!this.slider) return;
    this.slider.animateOnClick = _animateOnClick;
  }

  public get animateOnClick() {
    return this.slider?.animateOnClick;
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

  public addPointer(value: number | string | undefined) {
    if(!this.slider) return;

    const index = this.slider?.addPointer(value) ?? 0;

    initPointerAPI(this,
      this.slider,
      index,
      `value${ index + 1 }`,
      `ariaLabel${ index + 1 }`,
      `pointerShape${ index + 1 }`,
      `pointer${ index + 1 }Disabled`
    );
  }

  public removePointer() {
    if(!this.slider) return;
    this.slider?.removePointer();
  }

  public addCSS(css: string) {
    if(!this.shadowRoot) return;

    const sheet = document.createElement('style')
    sheet.textContent = css;
    this.shadowRoot.appendChild(sheet);
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
    const $pointer = this.shadowRoot?.querySelector('.pointer') as HTMLElement;
    if(!$pointer) return;

    // init the slider
    const $slider = this.shadowRoot?.getElementById('range-slider') as HTMLElement;
    if(!$slider) return;

    const pointers = initPointers(this, $pointer);
    this.slider = Slider(this, $slider, pointers);

    initPointerAPIs(this, this.slider);

    this._observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (!this.slider || mutation.type !== 'attributes') return;

        const attrName = mutation.attributeName;
        if(!attrName) return;

        onAttributeChange(this.slider, attrName, this.getAttribute(attrName) ?? '');
      });
    });

    this._observer.observe(this, {
      attributes: true, //configure it to listen to attribute changes
    });
  }

  /**
   * when the custom element disconnected from DOM
   */
  disconnectedCallback() {
    if(this._observer){
      this._observer.disconnect();
    }

    if(!this.slider) return

    this.slider.destroy();
  }
}

export default TCRangeSlider;
