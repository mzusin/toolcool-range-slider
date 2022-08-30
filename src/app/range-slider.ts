import styles from './styles.pcss';
import mainTemplate from '../templates/main.html.js'; // esbuild custom loader
import { convertRange, DEFAULT_ROUND_PLACES, getNumber, isNumber, roundToStep } from '../domain/math-provider';
import {
  restoreFromStorage,
  saveToStorage,
  STORAGE_KEY,
  StorageTypeEnum
} from '../dal/storage-provider';
import { getStringOrNumber, observedAttributes, onAttributesChange } from '../domain/attributes-provider';
import {
  sendChangeEvent,
  sendMouseDownEvent,
  sendMouseUpEvent,
  sendOnKeyDownEvent,
  sendPointerClickedEvent
} from '../domain/events-provider';
import { initLabels, renderLabels } from '../domain/labels-provider';
import {
  getSafeValues,
  handleDisableEnable,
  isFocused,
  prepareDataForRender,
  updateValueAndFocusPointer
} from '../domain/core-provider';
import { parseData } from '../dal/data-provider';
import { stepBack, stepForward } from '../domain/accessibility-provider';
import { renderStyles } from '../domain/style-provider';

/*
 Usage:
 ------
 <toolcool-range-slider value="0" min="0" max="100"></toolcool-range-slider>
 <toolcool-range-slider value="0" min="-100" max="100" step="1"></toolcool-range-slider>
 <toolcool-range-slider slider-width="250px" slider-height="10px" slider-radius="5px"></toolcool-range-slider>
 <toolcool-range-slider pointer-width="20px" pointer-height="20px" pointer-radius="5px"></toolcool-range-slider>
 <toolcool-range-slider slider-bg="red" pointer-bg="blue"></toolcool-range-slider>
 <toolcool-range-slider type="vertical"></toolcool-range-slider>

 Documentation:
 -------------
 https://github.com/toolcool-org/toolcool-range-slider
 */
class RangeSlider extends HTMLElement {
  // ------------------------- INIT ----------------

  /**
   * the attributes list that are observed by web component;
   * if attribute changes ---> the web component will update accordingly
   */
  static get observedAttributes() {
    return observedAttributes;
  }

  private _$box: HTMLElement | null;
  private _$slider: HTMLElement | null;
  private _$panelFill: HTMLElement | null;

  private _$pointer: HTMLElement | null;
  private _$pointer2: HTMLElement | null;

  private _$valueLabel: HTMLElement | null;
  private _$value2Label: HTMLElement | null;

  private _$minLabel: HTMLElement | null;
  private _$maxLabel: HTMLElement | null;

  private _value: string | number = 0; // [min, max]
  private _value2: string | number | undefined = undefined; // [min, max]

  private _data: (string | number)[] | undefined = undefined;
  private _min: string | number = 0;
  private _max: string | number = 100;
  private _step: number | ((value: number | string) => number) | undefined = undefined;
  private _round = DEFAULT_ROUND_PLACES;
  private _type: string | undefined = undefined;
  private _theme: string | undefined = undefined;
  private _disabled = false;
  private _rtl = false; // right to left
  private _btt = false; // bottom to top

  private _storage: StorageTypeEnum | undefined = undefined;
  private _storageKey = STORAGE_KEY;
  private _storageInitialized = false;

  private _valueLabel: string | undefined = undefined;
  private _value2Label: string | undefined = undefined;

  private _generateLabels = false;
  private _animateOnClick: string | undefined = undefined;
  private _animating = false;

  private _sliderWidth: string | undefined = undefined;
  private _sliderHeight: string | undefined = undefined;
  private _sliderRadius: string | undefined = undefined;

  private _sliderBg: string | undefined = undefined;
  private _sliderBgHover: string | undefined = undefined;
  private _sliderBgFill: string | undefined = undefined;

  private _pointerWidth: string | undefined = undefined;
  private _pointerHeight: string | undefined = undefined;
  private _pointerRadius: string | undefined = undefined;
  private _pointerShape: string | undefined = undefined;

  private _pointerBg: string | undefined = undefined;
  private _pointerBgHover: string | undefined = undefined;
  private _pointerBgFocus: string | undefined = undefined;

  private _pointerShadow: string | undefined = undefined;
  private _pointerShadowHover: string | undefined = undefined;
  private _pointerShadowFocus: string | undefined = undefined;

  private _pointerBorder: string | undefined = undefined;
  private _pointerBorderHover: string | undefined = undefined;
  private _pointerBorderFocus: string | undefined = undefined;

  constructor() {
    super();

    this.attachShadow({
      mode: 'open', // 'closed', 'open',
    });

    this.pointerClicked = this.pointerClicked.bind(this);
    this.pointerMouseWheel = this.pointerMouseWheel.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.pointerKeyDown = this.pointerKeyDown.bind(this);
    this.render = this.render.bind(this);
    this.onTransitionEnd = this.onTransitionEnd.bind(this);
  }

  // ----------- APIs ------------------------

  private valueUpdateDone(val: number | string | undefined, storageKey: string) {
    this.render();
    sendChangeEvent(this);

    if (this.storage && this._storageInitialized) {
      saveToStorage(this.storage, storageKey, val);
    }
  }

  public set value(val: string | number) {
    if (this.data) {
      const _val = isNumber(val) ? Number(val) : val;

      // the provided value should present in data array
      const found = this.data.find((item) => item === _val);
      if (found === undefined) return;

      this._value = _val;
      this.valueUpdateDone(this._value, this.storageKey);
      return;
    }

    const safe = getSafeValues(val as number, this.min as number, this.max as number, this.round);
    this._value = safe.value;
    this.valueUpdateDone(this._value, this.storageKey);
  }

  public get value() {
    return this._value;
  }

  /**
   * value1 is alias for value
   */
  public set value1(val: string | number) {
    this.value = val;
  }

  /**
   * value1 is alias for value
   */
  public get value1() {
    return this.value;
  }

  public set value2(val: string | number | undefined) {
    if (val === undefined) {
      // value2 can be unset
      this._value2 = val;
      this.valueUpdateDone(this._value2, this.storageKey2);
      return;
    }

    if (this.data) {
      const _val = isNumber(val) ? Number(val) : val;

      // the provided value should present in data array
      const found = this.data.find((item) => item === _val);
      if (found === undefined) return;

      this._value2 = _val;
      this.valueUpdateDone(this._value2, this.storageKey2);
      return;
    }

    const safe = getSafeValues(val as number, this.min as number, this.max as number, this.round);
    this._value2 = safe.value;
    this.valueUpdateDone(this._value2, this.storageKey2);
  }

  public get value2() {
    return this._value2;
  }

  public set data(val: (string | number)[] | undefined) {
    this._data = val;
    this.render();
  }

  public get data() {
    return this._data;
  }

  public set min(val: number | string) {
    if (this.data) {
      this._min = isNumber(val) ? getNumber(val, this.data[0]) : this.data[0];
    }
    else {
      const safe = getSafeValues(this.value as number, val as number, this.max as number, this.round);
      this._min = safe.min;
      this.value = safe.value;

      if (this.value2 !== undefined) {
        const safe2 = getSafeValues(this.value2 as number, val as number, this.max as number, this.round);
        this.value2 = safe2.value;
      }
    }

    this.render();
  }

  public get min() {
    return this._min;
  }

  public set max(val: number | string) {
    if (this.data) {
      const defaultValue = this.data[this.data.length - 1];
      this._max = isNumber(val) ? getNumber(val, defaultValue) : defaultValue;
    }
    else {
      const safe = getSafeValues(this.value as number, this.min as number, val as number, this.round);
      this._max = safe.max;
      this.value = safe.value;

      if (this.value2 !== undefined) {
        const safe2 = getSafeValues(this.value2 as number, this.min as number, val as number, this.round);
        this.value2 = safe2.value;
      }
    }

    this.render();
  }

  public get max() {
    return this._max;
  }

  public set step(numOrFunction: number | ((value: number | string) => number) | undefined) {
    if (typeof numOrFunction === 'function') {
      this._step = numOrFunction;
      return;
    }

    const _start = this.data ? 0 : (this.min as number);
    const _end = this.data ? this.data.length - 1 : (this.max as number);

    const diff = Math.abs(_end - _start);
    if (numOrFunction === undefined) {
      this._step = undefined;
      return;
    }

    if (numOrFunction > diff) {
      this._step = undefined;
      return;
    }

    this._step = Math.abs(numOrFunction);
  }

  public get step() {
    return this._step;
  }

  public set round(val: number) {
    this._round = val;
    this.render();
  }

  public get round() {
    return this._round;
  }

  public set type(val: string | undefined) {
    this._type = val;
    this.render();
  }

  public get type() {
    return this._type;
  }

  public set theme(val: string | undefined) {
    this._theme = val;
    this.render();
  }

  public get theme() {
    return this._theme;
  }

  public set rtl(val: boolean) {
    this._rtl = val;
    this.render();
  }

  public get rtl() {
    return this._rtl;
  }

  public set btt(val: boolean) {
    this._btt = val;
    this.render();
  }

  public get btt() {
    return this._btt;
  }

  public set disabled(val: boolean) {
    this._disabled = val;
    this.render();
  }

  public get disabled() {
    return this._disabled;
  }

  public set animateOnClick(val: string | undefined) {
    this._animateOnClick = val;
    this.render();
  }

  public get animateOnClick() {
    return this._animateOnClick;
  }

  public set storage(val: StorageTypeEnum | undefined) {
    this._storage = val;
    this.render();
  }

  public get storage() {
    return this._storage;
  }

  public set storageKey(val: string) {
    this._storageKey = val;
    this.render();
  }

  public get storageKey() {
    return this._storageKey;
  }

  public get storageKey2() {
    return `${this._storageKey}-2`;
  }

  public set valueLabel(val: string | undefined) {
    this._valueLabel = val;

    if (this._valueLabel) {
      this._$valueLabel = document.querySelector(this._valueLabel);
    }

    this.render();
  }

  public get valueLabel() {
    return this._valueLabel;
  }

  public set value2Label(val: string | undefined) {
    this._value2Label = val;
    if (this._value2Label) {
      this._$value2Label = document.querySelector(this._value2Label);
    }

    this.render();
  }

  public get value2Label() {
    return this._value2Label;
  }

  public set generateLabels(val: boolean) {
    this._generateLabels = val;
    this.render();
  }

  public get generateLabels() {
    return this._generateLabels;
  }

  public set sliderWidth(val: string | undefined) {
    this._sliderWidth = val;
    this.render();
  }

  public get sliderWidth() {
    return this._sliderWidth;
  }

  public set sliderHeight(val: string | undefined) {
    this._sliderHeight = val;
    this.render();
  }

  public get sliderHeight() {
    return this._sliderHeight;
  }

  public set sliderRadius(val: string | undefined) {
    this._sliderRadius = val;
    this.render();
  }

  public get sliderRadius() {
    return this._sliderRadius;
  }

  public set sliderBg(val: string | undefined) {
    this._sliderBg = val;
    this.render();
  }

  public get sliderBg() {
    return this._sliderBg;
  }

  public set sliderBgHover(val: string | undefined) {
    this._sliderBgHover = val;
    this.render();
  }

  public get sliderBgHover() {
    return this._sliderBgHover;
  }

  public set sliderBgFill(val: string | undefined) {
    this._sliderBgFill = val;
    this.render();
  }

  public get sliderBgFill() {
    return this._sliderBgFill;
  }

  public set pointerWidth(val: string | undefined) {
    this._pointerWidth = val;
    this.render();
  }

  public get pointerWidth() {
    return this._pointerWidth;
  }

  public set pointerHeight(val: string | undefined) {
    this._pointerHeight = val;
    this.render();
  }

  public get pointerHeight() {
    return this._pointerHeight;
  }

  public set pointerRadius(val: string | undefined) {
    this._pointerRadius = val;
    this.render();
  }

  public get pointerRadius() {
    return this._pointerRadius;
  }

  public set pointerShape(val: string | undefined) {
    this._pointerShape = val;
    this.render();
  }

  public get pointerShape() {
    return this._pointerShape;
  }

  public set pointerBg(val: string | undefined) {
    this._pointerBg = val;
    this.render();
  }

  public get pointerBg() {
    return this._pointerBg;
  }

  public set pointerBgHover(val: string | undefined) {
    this._pointerBgHover = val;
    this.render();
  }

  public get pointerBgHover() {
    return this._pointerBgHover;
  }

  public set pointerBgFocus(val: string | undefined) {
    this._pointerBgFocus = val;
    this.render();
  }

  public get pointerBgFocus() {
    return this._pointerBgFocus;
  }

  public set pointerShadow(val: string | undefined) {
    this._pointerShadow = val;
    this.render();
  }

  public get pointerShadow() {
    return this._pointerShadow;
  }

  public set pointerShadowHover(val: string | undefined) {
    this._pointerShadowHover = val;
    this.render();
  }

  public get pointerShadowHover() {
    return this._pointerShadowHover;
  }

  public set pointerShadowFocus(val: string | undefined) {
    this._pointerShadowFocus = val;
    this.render();
  }

  public get pointerShadowFocus() {
    return this._pointerShadowFocus;
  }

  public set pointerBorder(val: string | undefined) {
    this._pointerBorder = val;
    this.render();
  }

  public get pointerBorder() {
    return this._pointerBorder;
  }

  public set pointerBorderHover(val: string | undefined) {
    this._pointerBorderHover = val;
    this.render();
  }

  public get pointerBorderHover() {
    return this._pointerBorderHover;
  }

  public set pointerBorderFocus(val: string | undefined) {
    this._pointerBorderFocus = val;
    this.render();
  }

  public get pointerBorderFocus() {
    return this._pointerBorderFocus;
  }

  // ----------------------------------------------

  render() {
    if (!this._$slider || !this._$pointer || !this._$panelFill) return;

    const { percent, percent2, _val, _val2, _min, _max } = prepareDataForRender(this);

    if (this.type === 'vertical') {
      if (this.btt) {
        this._$pointer.style.top = `${100 - percent}%`;
        this._$panelFill.style.height = `${percent}%`;
        this._$panelFill.style.bottom = '0%';
        this._$panelFill.style.top = 'auto';

        if (this.value2 !== undefined && this._$pointer2) {
          this._$pointer2.style.top = `${100 - percent2}%`;
          this._$panelFill.style.top = `${100 - percent2}%`;
          this._$panelFill.style.height = `${Math.abs(percent - percent2)}%`;
        }
      }
      else {
        this._$pointer.style.top = `${percent}%`;
        this._$panelFill.style.height = `${percent}%`;
        this._$panelFill.style.bottom = 'auto';
        this._$panelFill.style.top = '0%';

        if (this.value2 !== undefined && this._$pointer2) {
          this._$pointer2.style.top = `${percent2}%`;
          this._$panelFill.style.top = `${percent}%`;
          this._$panelFill.style.height = `${Math.abs(percent - percent2)}%`;
        }
      }

      this._$slider.setAttribute('aria-orientation', 'vertical');
    }
    else {
      if (this.rtl) {
        this._$pointer.style.left = `${100 - percent}%`;
        this._$panelFill.style.width = `${percent}%`;
        this._$panelFill.style.right = '0%';
        this._$panelFill.style.left = 'auto';

        if (this.value2 !== undefined && this._$pointer2) {
          this._$pointer2.style.left = `${100 - percent2}%`;
          this._$panelFill.style.left = `${100 - percent2}%`;
          this._$panelFill.style.width = `${Math.abs(percent - percent2)}%`;
        }
      }
      else {
        this._$pointer.style.left = `${percent}%`;
        this._$panelFill.style.width = `${percent}%`;
        this._$panelFill.style.right = 'auto';
        this._$panelFill.style.left = '0%';

        if (this.value2 !== undefined && this._$pointer2) {
          this._$pointer2.style.left = `${percent2}%`;
          this._$panelFill.style.left = `${percent}%`;
          this._$panelFill.style.width = `${Math.abs(percent - percent2)}%`;
        }
      }

      this._$slider.setAttribute('aria-orientation', 'horizontal');
    }

    renderLabels(
      this,
      this.generateLabels,
      this._$minLabel,
      this._$maxLabel,
      this._$valueLabel,
      this._$value2Label,
      _val,
      _val2
    );

    // set additional area attributes
    this._$slider.setAttribute('aria-valuemin', _min.toString());
    this._$slider.setAttribute('aria-valuemax', _max.toString());
    this._$slider.setAttribute('aria-valuenow', _val.toString());
    this._$slider.setAttribute('aria-valuetext', _val.toString());

    if (this.type) {
      this._$box?.classList.add(`type-${this.type}`);
    }

    handleDisableEnable(this.disabled, this._$slider);
    renderStyles(this, this._$slider);
  }

  // -------------------- EVENTS HANDLERS --------------------------

  pointerClicked(evt: MouseEvent) {
    if (this.disabled) return;

    const $pointer = evt.currentTarget as HTMLElement;
    $pointer.focus();
    sendPointerClickedEvent(this, $pointer);
  }

  pointerMouseWheel(evt: WheelEvent) {
    if (document.activeElement !== this) return;

    evt.stopPropagation();
    evt.preventDefault();

    const scrollTop = evt.deltaY < 0;

    if (scrollTop) {
      stepBack(this, this._$pointer2);
    }
    else {
      stepForward(this, this._$pointer2);
    }
  }

  onTransitionEnd() {
    this._animating = false;
    this._$slider?.classList.remove('animate-on-click');
  }

  pointerKeyDown(evt: KeyboardEvent) {
    if (this.disabled) return;

    switch (evt.key) {
      case 'ArrowLeft': {
        if (this.type === 'vertical') {
          if (isFocused(this._$pointer2)) {
            this.value2 = this.min;
          }
          else {
            this.value = this.min;
          }

          this.render();
        }
        else {
          stepBack(this, this._$pointer2);
        }

        break;
      }

      case 'ArrowRight': {
        if (this.type === 'vertical') {
          if (isFocused(this._$pointer2)) {
            this.value2 = this.max;
          }
          else {
            this.value = this.max;
          }

          this.render();
        }
        else {
          stepForward(this, this._$pointer2);
        }
        break;
      }

      case 'ArrowUp': {
        evt.preventDefault();
        if (this.type === 'vertical') {
          stepBack(this, this._$pointer2);
        }
        else {
          if (isFocused(this._$pointer2)) {
            this.value2 = this.min;
          }
          else {
            this.value = this.min;
          }

          this.render();
        }
        break;
      }

      case 'ArrowDown': {
        evt.preventDefault();
        if (this.type === 'vertical') {
          stepForward(this, this._$pointer2);
        }
        else {
          if (isFocused(this._$pointer2)) {
            this.value2 = this.max;
          }
          else {
            this.value = this.max;
          }

          this.render();
        }
        break;
      }
    }

    sendOnKeyDownEvent(this, evt);
  }

  onMouseDown(evt: MouseEvent) {
    if (this.disabled) return;

    if (evt.preventDefault) {
      evt.preventDefault();
    }

    if (this.animateOnClick && !this._animating) {
      const $target = evt.target as HTMLElement;
      if (!$target.classList.contains('pointer-shape') && !$target.classList.contains('pointer')) {
        this._animating = true;
        this._$slider?.classList.add('animate-on-click');
      }
    }

    this.onValueChange(evt);
    sendMouseDownEvent(this, evt);

    window.addEventListener('mousemove', this.onValueChange);
    window.addEventListener('mouseup', this.onMouseUp);
  }

  onMouseUp(evt: MouseEvent) {
    if (this.disabled) return;

    window.removeEventListener('mousemove', this.onValueChange);
    window.removeEventListener('mouseup', this.onValueChange);
    sendMouseUpEvent(this, evt);
  }

  onValueChange(evt: MouseEvent | TouchEvent) {
    if (this.disabled || !this._$slider) return;

    // find the percent [0, 100] of the current mouse position in vertical or horizontal slider
    let percent;

    if (this.type === 'vertical') {
      // -------------- vertical -----------------

      const { height: boxHeight, top: boxTop } = this._$slider.getBoundingClientRect();
      const mouseY = evt.type.indexOf('mouse') !== -1 ? (evt as MouseEvent).clientY : (evt as TouchEvent).touches[0].clientY;
      const top = Math.min(Math.max(0, mouseY - boxTop), boxHeight);
      percent = (top * 100) / boxHeight;

      if (this.btt) {
        percent = 100 - percent;
      }
    }
    else {
      // -------------- horizontal -----------------

      const { width: boxWidth, left: boxLeft } = this._$slider.getBoundingClientRect();
      const mouseX = evt.type.indexOf('mouse') !== -1 ? (evt as MouseEvent).clientX : (evt as TouchEvent).touches[0].clientX;
      const left = Math.min(Math.max(0, mouseX - boxLeft), boxWidth);
      percent = (left * 100) / boxWidth;

      if (this.rtl) {
        percent = 100 - percent;
      }
    }

    // transform the percent [0, 100] to the actual slider range [min, max],
    // and also round to the provided step (if needed)
    if (this.data) {
      // when textual data or separate values data is provided ---> use index instead of the actual values
      let index = Math.round(convertRange(0, 100, 0, this.data.length - 1, percent));
      const stepVal = typeof this.step === 'function' ? this.step(index) : this.step;

      if (stepVal !== undefined) {
        index = roundToStep(index, stepVal);
      }

      updateValueAndFocusPointer(
        this,
        true,
        this.data[index],
        this._$pointer,
        this._$pointer2);
    }
    else {
      let value = convertRange(0, 100, this.min as number, this.max as number, percent);
      const stepVal = typeof this.step === 'function' ? this.step(value) : this.step;

      if (stepVal !== undefined) {
        value = roundToStep(value, stepVal);
      }

      updateValueAndFocusPointer(
        this,
        false,
        value,
        this._$pointer,
        this._$pointer2);
    }

    this.render();
  }

  // ------------------------- WEB COMPONENT LIFECYCLE ----------------------------

  /**
   * when the custom element connected to DOM
   */
  connectedCallback() {
    if (!this.shadowRoot) return;

    // initial values of attributes
    this.data = parseData(this.getAttribute('data'));
    this.min = getStringOrNumber(this, 'min', 0, this.data ? this.data[0] : '');
    this.max = getStringOrNumber(this, 'max', 100, this.data ? this.data[this.data.length - 1] : '');

    this.value = getStringOrNumber(this, 'value', this.min as number, this.data ? this.data[0] : '');

    if (this.getAttribute('value1') !== null) {
      this.value = getStringOrNumber(this, 'value1', this.min as number, this.data ? this.data[0] : '');
    }

    if (this.getAttribute('value2') !== null) {
      this.value2 = getStringOrNumber(this, 'value2', this.min as number, this.data ? this.data[0] : '');
    }

    this.step = getNumber(this.getAttribute('step'), undefined);
    this.round = getNumber(this.getAttribute('round'), DEFAULT_ROUND_PLACES);
    if (this.round < 0) {
      this.round = DEFAULT_ROUND_PLACES;
    }

    this.type = this.getAttribute('type') || undefined;
    this.theme = this.getAttribute('theme') || undefined;
    this.disabled = this.getAttribute('disabled') === 'true';
    this.rtl = this.getAttribute('rtl') === 'true';
    this.btt = this.getAttribute('btt') === 'true';

    this.valueLabel = this.getAttribute('value-label') || undefined;
    this.generateLabels = this.getAttribute('generate-labels') === 'true';
    this.animateOnClick = this.getAttribute('animate-onclick') || undefined;

    this.storage = (this.getAttribute('storage') as StorageTypeEnum) || undefined;
    this.storageKey = this.getAttribute('storage-key') || STORAGE_KEY;

    this.sliderWidth = this.getAttribute('slider-width') || undefined;
    this.sliderHeight = this.getAttribute('slider-height') || undefined;
    this.sliderRadius = this.getAttribute('slider-radius') || undefined;
    this.sliderBg = this.getAttribute('slider-bg') || undefined;
    this.sliderBgHover = this.getAttribute('slider-bg-hover') || undefined;
    this.sliderBgFill = this.getAttribute('slider-bg-fill') || undefined;

    this.pointerWidth = this.getAttribute('pointer-width') || undefined;
    this.pointerHeight = this.getAttribute('pointer-height') || undefined;
    this.pointerRadius = this.getAttribute('pointer-radius') || undefined;
    this.pointerShape = this.getAttribute('pointer-shape') || undefined;

    this.pointerBg = this.getAttribute('pointer-bg') || undefined;
    this.pointerBgHover = this.getAttribute('pointer-bg-hover') || undefined;
    this.pointerBgFocus = this.getAttribute('pointer-bg-focus') || undefined;

    this.pointerShadow = this.getAttribute('pointer-shadow') || undefined;
    this.pointerShadowHover = this.getAttribute('pointer-shadow-hover') || undefined;
    this.pointerShadowFocus = this.getAttribute('pointer-shadow-focus') || undefined;

    this.pointerBorder = this.getAttribute('pointer-border') || undefined;
    this.pointerBorderHover = this.getAttribute('pointer-border-hover') || undefined;
    this.pointerBorderFocus = this.getAttribute('pointer-border-focus') || undefined;

    this.shadowRoot.innerHTML = mainTemplate(styles);

    // init slider elements
    this._$box = this.shadowRoot.querySelector('.range-slider-box');
    this._$slider = this.shadowRoot.querySelector('.range-slider');
    this._$pointer = this.shadowRoot.querySelector('.pointer');

    if (this.value2 !== undefined) {
      this._$pointer2 = this._$pointer?.cloneNode(true) as HTMLElement;
      this._$pointer2.classList.add('pointer-2');
      this._$pointer?.after(this._$pointer2);
    }

    this._$pointer?.classList.add('pointer-1');

    this._$panelFill = this.shadowRoot.querySelector('.panel-fill');

    if (this.valueLabel) {
      this._$valueLabel = document.querySelector(this.valueLabel);
    }

    if (this.value2Label) {
      this._$value2Label = document.querySelector(this.value2Label);
    }

    // initialize labels
    if (this.generateLabels) {
      initLabels(this, this._$slider, this._$box);
    }

    // init slider events
    this._$slider?.addEventListener('mousedown', this.onMouseDown);
    this._$slider?.addEventListener('mouseup', this.onMouseUp);
    this._$slider?.addEventListener('touchmove', this.onValueChange);
    this._$slider?.addEventListener('touchstart', this.onValueChange);

    // init pointer events
    this._$pointer?.addEventListener('click', this.pointerClicked);
    this._$pointer?.addEventListener('keydown', this.pointerKeyDown);

    if (this._$pointer2) {
      this._$pointer2.addEventListener('click', this.pointerClicked);
      this._$pointer2.addEventListener('keydown', this.pointerKeyDown);
    }

    document.addEventListener('wheel', this.pointerMouseWheel, { passive: false });

    if (this.animateOnClick) {
      this._$slider?.style.setProperty('--tc-range-slider-animate-onclick', this.animateOnClick);
      this._$slider?.addEventListener('transitionend', this.onTransitionEnd);
    }

    // if the storage is enabled ---> try to restore the values
    if (this.storage){
      restoreFromStorage(this);
      this._storageInitialized = true;
    }

    // update the initial position of the pointer
    this.render();
  }

  /**
   * when the custom element disconnected from DOM
   */
  disconnectedCallback() {
    this._$pointer?.removeEventListener('click', this.pointerClicked);
    this._$pointer?.removeEventListener('keydown', this.pointerClicked);

    if (this._$pointer2) {
      this._$pointer2.removeEventListener('click', this.pointerClicked);
      this._$pointer2.removeEventListener('keydown', this.pointerKeyDown);
    }

    document.removeEventListener('wheel', this.pointerMouseWheel);

    this._$slider?.removeEventListener('mousedown', this.onMouseDown);
    this._$slider?.removeEventListener('mouseup', this.onMouseUp);
    this._$slider?.removeEventListener('touchmove', this.onValueChange);
    this._$slider?.removeEventListener('touchstart', this.onValueChange);

    if (this.animateOnClick) {
      this._$slider?.removeEventListener('transitionend', this.onTransitionEnd);
    }
  }

  /**
   * when attributes change
   */
  attributeChangedCallback(attrName: string) {
    onAttributesChange(this, attrName, this._$slider);
  }
}

export default RangeSlider;
