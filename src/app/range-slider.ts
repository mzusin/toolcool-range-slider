// @ts-ignore: esbuild custom loader
import styles from './styles.pcss';
import { convertRange, getNumber, roundToStep } from '../domain/math-provider';

/*
 Usage:
 ------
 <toolcool-range-slider value="0" min="0" max="100"></toolcool-range-slider>
 <toolcool-range-slider value="0" min="-100" max="100" step="1"></toolcool-range-slider>
 */
class RangeSlider extends HTMLElement {
  // ------------------------- INIT ----------------

  static get observedAttributes() {
    return ['value', 'min', 'max', 'step'];
  }

  private _$slider: HTMLElement | null;
  private _$pointer: HTMLElement | null;

  private _value: number = 0; // [min, max]
  private _min: number = 0;
  private _max: number = 100;
  private _step: number | undefined = undefined;

  constructor() {
    super();

    this.attachShadow({
      mode: 'open', // 'closed', 'open',
    });

    this.pointerClicked = this.pointerClicked.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.pointerKeyDown = this.pointerKeyDown.bind(this);
    this.getSafeValues = this.getSafeValues.bind(this);
    this.render = this.render.bind(this);
  }

  // ----------- APIs ------------------------

  /**
   * value in [min, max] range
   */
  public set value(num: number) {
    const safe = this.getSafeValues(num, this.min, this.max);
    this._value = safe.value;
    this.render();
  }

  /**
   * returns value from [min, max] range
   */
  public get value() {
    return this._value;
  }

  public set min(num: number) {
    const safe = this.getSafeValues(this.value, num, this.max);
    this._min = safe.min;
    this.render();
  }

  public get min() {
    return this._min;
  }

  public set max(num: number) {
    const safe = this.getSafeValues(this.value, this.min, num);
    this._max = safe.max;
    this.render();
  }

  public get max() {
    return this._max;
  }

  public set step(num: number | undefined) {
    const range = Math.abs(this.max - this.min);
    if (num !== undefined && num > range) {
      num = undefined;
    }
    this._step = num;
  }

  public get step() {
    return this._step;
  }

  // ----------------------------------------------

  getSafeValues(value: number, min: number, max: number) {
    let _min = min;
    let _max = max;
    let _val = value;

    if (_min > _max) {
      _max = _min + 100;
    }

    if (_val < _min) {
      _val = _min;
    }

    if (_val > _max) {
      _val = _max;
    }

    return {
      min: _min,
      max: _max,
      value: _val,
    };
  }

  render() {
    if (!this._$pointer) return;

    const percent = convertRange(this.min, this.max, 0, 100, this.value);

    this._$pointer.style.left = `${percent}%`;
  }

  pointerClicked() {
    this._$pointer?.focus();
  }

  pointerKeyDown(evt: KeyboardEvent) {
    switch (evt.key) {
      case 'ArrowLeft': {
        const step = getNumber(this.step, 1);
        const safe = this.getSafeValues(this.value - step, this.min, this.max);
        this.value = safe.value;
        this.render();
        break;
      }

      case 'ArrowRight': {
        const step = getNumber(this.step, 1);
        const safe = this.getSafeValues(this.value + step, this.min, this.max);
        this.value = safe.value;
        this.render();
        break;
      }
    }
  }

  onMouseDown(evt: MouseEvent) {
    if (evt.preventDefault) {
      evt.preventDefault();
    }

    this.onValueChange(evt);
    window.addEventListener('mousemove', this.onValueChange);
    window.addEventListener('mouseup', this.onMouseUp);
  }

  onMouseUp() {
    window.removeEventListener('mousemove', this.onValueChange);
    window.removeEventListener('mouseup', this.onValueChange);
  }

  onValueChange(evt: MouseEvent | TouchEvent) {
    if (!this._$slider) return;

    const { width: boxWidth, left: boxLeft } = this._$slider.getBoundingClientRect();

    let mouseX;
    if (evt.type.indexOf('mouse') !== -1) {
      mouseX = (evt as MouseEvent).clientX;
    } else {
      mouseX = (evt as TouchEvent).touches[0].clientX;
    }

    const left = Math.min(Math.max(0, mouseX - boxLeft), boxWidth);
    const percent = (left * 100) / boxWidth;

    let value = convertRange(0, 100, this.min, this.max, percent);

    if (this.step !== undefined) {
      value = roundToStep(value, this.step);
    }

    this.value = value;
    this.render();
  }

  // ------------------------- WEB COMPONENT LIFECYCLE ----------------------------

  /**
   * when the custom element connected to DOM
   */
  connectedCallback() {
    if (!this.shadowRoot) return;

    // initial values of attributes
    this.min = getNumber(this.getAttribute('min'), 0);
    this.max = getNumber(this.getAttribute('max'), 100);
    this.value = getNumber(this.getAttribute('value'), this.min);

    const percent = convertRange(this.min, this.max, 0, 100, this.value);

    this.shadowRoot.innerHTML = `
        <style>
            ${styles} 
        </style>

        <div class="range-slider">
          <div class="container">
            <div class="panel"></div>
            
            <div class="container">
              <div class="pointer" tabindex="0" style="left: ${percent}%;">
                <div class="pointer-shape"></div>
              </div>
            </div>
            
          </div>
        </div>
    `;

    // update the initial position of the pointer
    this.render();

    // init slider element and its events
    this._$slider = this.shadowRoot.querySelector('.range-slider');
    this._$slider?.addEventListener('mousedown', this.onMouseDown);
    this._$slider?.addEventListener('mouseup', this.onMouseUp);
    this._$slider?.addEventListener('touchmove', this.onValueChange);
    this._$slider?.addEventListener('touchstart', this.onValueChange);

    // init pointer and its events
    this._$pointer = this.shadowRoot.querySelector('.pointer');
    this._$pointer?.addEventListener('click', this.pointerClicked);
    this._$pointer?.addEventListener('keydown', this.pointerKeyDown);
  }

  /**
   * when the custom element disconnected from DOM
   */
  disconnectedCallback() {
    this._$pointer?.removeEventListener('click', this.pointerClicked);
    this._$pointer?.removeEventListener('keydown', this.pointerClicked);

    this._$slider?.removeEventListener('mousedown', this.onMouseDown);
    this._$slider?.removeEventListener('mouseup', this.onMouseUp);
    this._$slider?.removeEventListener('touchmove', this.onValueChange);
    this._$slider?.removeEventListener('touchstart', this.onValueChange);
  }

  /**
   * when attributes change
   */
  attributeChangedCallback(attrName: string) {
    if (attrName === 'min') {
      this.min = getNumber(this.getAttribute('min'), 0);
      this.render();
    }

    if (attrName === 'max') {
      this.max = getNumber(this.getAttribute('max'), 100);
      this.render();
    }

    if (attrName === 'value') {
      this.value = getNumber(this.getAttribute('value'), this.min);
      this.render();
    }

    if (attrName === 'step') {
      this.step = getNumber(this.getAttribute('step'), undefined);
    }
  }
}

export default RangeSlider;
