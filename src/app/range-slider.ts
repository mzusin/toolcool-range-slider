import styles from './styles.pcss';
import mainTemplate from '../templates/main.html.js'; // esbuild custom loader
import { convertRange, DEFAULT_ROUND_PLACES, getNumber, isNumber, roundToStep, setDecimalPlaces } from '../domain/math-provider';
import { getFromStorage, saveToStorage, STORAGE_KEY, StorageTypeEnum } from '../domain/storage-provider';
import { observedAttributes } from '../domain/attributes-provider';
import { sendPointerClickedEvent } from '../domain/events-provider';
import { initLabels, renderLabels } from "../domain/labels-provider";

/*
 Usage:
 ------
 <toolcool-range-slider value="0" min="0" max="100"></toolcool-range-slider>
 <toolcool-range-slider value="0" min="-100" max="100" step="1"></toolcool-range-slider>
 <toolcool-range-slider slider-width="250px" slider-height="10px" slider-radius="5px"></toolcool-range-slider>
 <toolcool-range-slider pointer-width="20px" pointer-height="20px" pointer-radius="5px"></toolcool-range-slider>
 <toolcool-range-slider slider-bg="red" pointer-bg="blue"></toolcool-range-slider>
 <toolcool-range-slider type="vertical"></toolcool-range-slider>
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
    this.updateValueAndFocusPointer = this.updateValueAndFocusPointer.bind(this);
    this.pointerKeyDown = this.pointerKeyDown.bind(this);
    this.isFocused = this.isFocused.bind(this);
    this.getSafeValues = this.getSafeValues.bind(this);
    this.stepBack = this.stepBack.bind(this);
    this.stepForward = this.stepForward.bind(this);
    this.render = this.render.bind(this);
    this.onTransitionEnd = this.onTransitionEnd.bind(this);
  }

  // ----------- APIs ------------------------

  private valueUpdateDone(val: number | string | undefined, storageKey: string) {
    this.render();
    this.sendChangeEvent();

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

    const safe = this.getSafeValues(val as number, this.min as number, this.max as number);
    this._value = safe.value;
    this.valueUpdateDone(this._value, this.storageKey);
  }

  public get value() {
    return this._value;
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

    const safe = this.getSafeValues(val as number, this.min as number, this.max as number);
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
      const safe = this.getSafeValues(this.value as number, val as number, this.max as number);
      this._min = safe.min;
      this.value = safe.value;

      if (this.value2 !== undefined) {
        const safe2 = this.getSafeValues(this.value2 as number, val as number, this.max as number);
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
      const safe = this.getSafeValues(this.value as number, this.min as number, val as number);
      this._max = safe.max;
      this.value = safe.value;

      if (this.value2 !== undefined) {
        const safe2 = this.getSafeValues(this.value2 as number, this.min as number, val as number);
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

  // ---------------------- EVENTS ------------------------

  sendMouseDownEvent(evt: MouseEvent) {
    this.dispatchEvent(
      new CustomEvent('onMouseDown', {
        detail: {
          nativeEvent: evt,
        },
      })
    );
  }

  sendMouseUpEvent(evt: MouseEvent) {
    this.dispatchEvent(
      new CustomEvent('onMouseUp', {
        detail: {
          nativeEvent: evt,
        },
      })
    );
  }

  sendChangeEvent() {
    const detail : { value: number | string, value2? : number | string } = {
      value: this.value,
    };

    if(this.value2 !== undefined){
      detail.value2 = this.value2;
    }

    this.dispatchEvent(
      new CustomEvent('change', {
        detail,
      })
    );
  }

  sendOnKeyDownEvent(evt: KeyboardEvent) {
    this.dispatchEvent(
      new CustomEvent('onKeyDown', {
        detail: {
          nativeEvent: evt,
        },
      })
    );
  }

  // ----------------------------------------------

  getSafeValues(value: number, min: number, max: number) {
    const _min = min;
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
      value: setDecimalPlaces(_val, this.round),
    };
  }

  parseData(dataString: string | undefined | null): (string | number)[] | undefined {
    if (dataString === undefined || dataString === null) return undefined;

    const result = dataString.trim();
    if (result === '') return undefined;

    const parts = dataString.split(',');
    const list: string[] = [];
    let allValuesAreNumbers = true;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i].trim();
      if (part === '') continue;

      list.push(part);

      if (!isNumber(part)) {
        allValuesAreNumbers = false;
      }
    }

    if (!allValuesAreNumbers) return list;

    return list.map((item) => Number(item));
  }

  findValueIndexInData(val: string | number) {
    return this.data ? this.data.findIndex((item) => item === val || item.toString().trim() === val.toString().trim()) : -1;
  }

  render() {
    if (!this._$slider || !this._$pointer || !this._$panelFill) return;

    let _min;
    let _max;
    let _val;
    let _val2;

    if (this.data) {
      // when data is defined, we use data indexes instead of the actual values
      _min = 0;
      _max = this.data.length - 1;
      _val = this.findValueIndexInData(this.value);
      if (_val === -1) {
        _val = _min;
      }

      if (this.value2 !== undefined) {
        _val2 = this.findValueIndexInData(this.value2);
        if (_val2 === -1) {
          _val2 = _min;
        }
      }
    }
    else {
      _min = this.min as number;
      _max = this.max as number;
      _val = this.value as number;

      if (this.value2 !== undefined) {
        _val2 = this.value2 as number;
      }
    }

    // update the pointer position
    const percent = convertRange(_min, _max, 0, 100, _val);
    const percent2 = this.value2 === undefined || _val2 === undefined ? 0 : convertRange(_min, _max, 0, 100, _val2);

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

    if (this.theme) {
      this._$slider.classList.add(this.theme);
    }

    if (this.disabled) {
      this._$slider.classList.add('disabled');
      this._$slider.setAttribute('aria-disabled', 'true');
    }
    else {
      this._$slider.classList.remove('disabled');

      if (this._$slider.hasAttribute('aria-disabled')) {
        this._$slider.removeAttribute('aria-disabled');
      }
    }

    if (this.pointerShape) {
      this._$slider.classList.add('shape', `shape-${this.pointerShape}`);
    }

    if (this.sliderWidth) {
      this._$slider.style.setProperty('--tc-range-slider-width', this.sliderWidth);
    }

    if (this.sliderHeight) {
      this._$slider.style.setProperty('--tc-range-slider-height', this.sliderHeight);
    }

    if (this.sliderRadius) {
      this._$slider.style.setProperty('--tc-range-slider-panel-bg-border-radius', this.sliderRadius);
    }

    if (this.sliderBg) {
      this._$slider.style.setProperty('--tc-range-slider-panel-bg', this.sliderBg);
    }

    if (this.sliderBgHover) {
      this._$slider.style.setProperty('--tc-range-slider-panel-bg-hover', this.sliderBgHover);
    }

    if (this.sliderBgFill) {
      this._$slider.style.setProperty('--tc-range-slider-panel-bg-fill', this.sliderBgFill);
    }

    if (this.pointerWidth) {
      this._$slider.style.setProperty('--tc-range-slider-pointer-width', this.pointerWidth);
    }

    if (this.pointerHeight) {
      this._$slider.style.setProperty('--tc-range-slider-pointer-height', this.pointerHeight);
    }

    if (this.pointerRadius) {
      this._$slider.style.setProperty('--tc-range-slider-pointer-border-radius', this.pointerRadius);
    }

    if (this.pointerBg) {
      this._$slider.style.setProperty('--tc-range-slider-pointer-bg', this.pointerBg);
    }

    if (this.pointerBgHover) {
      this._$slider.style.setProperty('--tc-range-slider-pointer-bg-hover', this.pointerBgHover);
    }

    if (this.pointerBgFocus) {
      this._$slider.style.setProperty('--tc-range-slider-pointer-bg-focus', this.pointerBgFocus);
    }

    if (this.pointerShadow) {
      this._$slider.style.setProperty('--tc-range-slider-pointer-shadow', this.pointerShadow);
    }

    if (this.pointerShadowHover) {
      this._$slider.style.setProperty('--tc-range-slider-pointer-shadow-hover', this.pointerShadowHover);
    }

    if (this.pointerShadowFocus) {
      this._$slider.style.setProperty('--tc-range-slider-pointer-shadow-focus', this.pointerShadowFocus);
    }

    if (this.pointerBorder) {
      this._$slider.style.setProperty('--tc-range-slider-pointer-border', this.pointerBorder);
    }

    if (this.pointerBorderHover) {
      this._$slider.style.setProperty('--tc-range-slider-pointer-border-hover', this.pointerBorderHover);
    }

    if (this.pointerBorderFocus) {
      this._$slider.style.setProperty('--tc-range-slider-pointer-border-focus', this.pointerBorderFocus);
    }
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
      this.stepBack();
    }
    else {
      this.stepForward();
    }
  }

  stepBack() {
    if (this.data) {
      const isPointer2 = this.isFocused(this._$pointer2) && this.value2 !== undefined;

      const index = this.findValueIndexInData(isPointer2 && this.value2 !== undefined ? this.value2 : this.value);
      if (index !== -1) {
        const step = typeof this.step === 'function' ? this.step(index) : getNumber(this.step, 1);
        const updatedIndex = index - step;
        if (this.data[updatedIndex] !== undefined) {
          if (isPointer2) {
            this.value2 = this.data[updatedIndex];
          }
          else {
            this.value = this.data[updatedIndex];
          }
        }
      }
    }
    else {
      if (this.isFocused(this._$pointer2)) {
        const step = typeof this.step === 'function' ? this.step(this.value2 as number) : getNumber(this.step, 1);
        const safe = this.getSafeValues((this.value2 as number) - step, this.min as number, this.max as number);
        this.value2 = safe.value;
      }
      else {
        const step = typeof this.step === 'function' ? this.step(this.value as number) : getNumber(this.step, 1);
        const safe = this.getSafeValues((this.value as number) - step, this.min as number, this.max as number);
        this.value = safe.value;
      }
    }

    this.render();
  }

  stepForward() {
    if (this.data) {
      const isPointer2 = this.isFocused(this._$pointer2) && this.value2 !== undefined;

      const index = this.findValueIndexInData(isPointer2 && this.value2 !== undefined ? this.value2 : this.value);
      if (index !== -1) {
        const step = typeof this.step === 'function' ? this.step(index) : getNumber(this.step, 1);
        const updatedIndex = index + step;
        if (this.data[updatedIndex] !== undefined) {
          if (isPointer2) {
            this.value2 = this.data[updatedIndex];
          }
          else {
            this.value = this.data[updatedIndex];
          }
        }
      }
    }
    else {
      if (this.isFocused(this._$pointer2)) {
        const step = typeof this.step === 'function' ? this.step(this.value2 as number) : getNumber(this.step, 1);
        const safe = this.getSafeValues((this.value2 as number) + step, this.min as number, this.max as number);
        this.value2 = safe.value;
      }
      else {
        const step = typeof this.step === 'function' ? this.step(this.value as number) : getNumber(this.step, 1);
        const safe = this.getSafeValues((this.value as number) + step, this.min as number, this.max as number);
        this.value = safe.value;
      }
    }

    this.render();
  }

  onTransitionEnd() {
    this._animating = false;
    this._$slider?.classList.remove('animate-on-click');
  }

  isFocused($el: HTMLElement | null) {
    if (!$el) return false;
    return $el.matches(':focus-within');
  }

  pointerKeyDown(evt: KeyboardEvent) {
    if (this.disabled) return;

    switch (evt.key) {
      case 'ArrowLeft': {
        if (this.type === 'vertical') {
          if (this.isFocused(this._$pointer2)) {
            this.value2 = this.min;
          }
          else {
            this.value = this.min;
          }

          this.render();
        }
        else {
          this.stepBack();
        }

        break;
      }

      case 'ArrowRight': {
        if (this.type === 'vertical') {
          if (this.isFocused(this._$pointer2)) {
            this.value2 = this.max;
          }
          else {
            this.value = this.max;
          }

          this.render();
        }
        else {
          this.stepForward();
        }

        break;
      }

      case 'ArrowUp': {
        evt.preventDefault();
        if (this.type === 'vertical') {
          this.stepBack();
        }
        else {
          if (this.isFocused(this._$pointer2)) {
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
          this.stepForward();
        }
        else {
          if (this.isFocused(this._$pointer2)) {
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

    this.sendOnKeyDownEvent(evt);
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
    this.sendMouseDownEvent(evt);

    window.addEventListener('mousemove', this.onValueChange);
    window.addEventListener('mouseup', this.onMouseUp);
  }

  onMouseUp(evt: MouseEvent) {
    if (this.disabled) return;

    window.removeEventListener('mousemove', this.onValueChange);
    window.removeEventListener('mouseup', this.onValueChange);
    this.sendMouseUpEvent(evt);
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

      this.updateValueAndFocusPointer(true, this.data[index]);
    }
    else {
      let value = convertRange(0, 100, this.min as number, this.max as number, percent);
      const stepVal = typeof this.step === 'function' ? this.step(value) : this.step;

      if (stepVal !== undefined) {
        value = roundToStep(value, stepVal);
      }

      this.updateValueAndFocusPointer(false, value);
    }

    this.render();
  }

  updateValueAndFocusPointer(hasData: boolean, updatedValue: string | number) {
    if (this.value2 !== undefined) {
      let distance1: number | undefined = undefined;
      let distance2: number | undefined = undefined;

      if (hasData) {
        if (!this.data) return;

        const index1 = this.data.findIndex((item) => item === this.value);
        const index2 = this.data.findIndex((item) => item === this.value2);
        const index3 = this.data.findIndex((item) => item === updatedValue);

        if (index1 === -1 && index2 === -1 && index3 === -1) return;

        distance1 = Math.abs(index1 - index3);
        distance2 = Math.abs(index2 - index3);
      }
      else {
        distance1 = Math.abs((updatedValue as number) - (this.value as number));
        distance2 = Math.abs((updatedValue as number) - (this.value2 as number));
      }

      if (distance1 !== undefined && distance2 !== undefined) {
        if (distance1 <= distance2) {
          this.value = updatedValue;
          this._$pointer?.focus();
        }
        else {
          this.value2 = updatedValue;
          this._$pointer2?.focus();
        }
      }

      return;
    }

    this.value = updatedValue;
    this._$pointer?.focus();
  }

  getStringOrNumber(attrName: string, defaultValue: number, dataDefaultValue: string | number) {
    const _val = this.getAttribute(attrName);
    if (this.data) {
      return isNumber(_val) ? getNumber(_val, dataDefaultValue) : _val ?? dataDefaultValue;
    }
    else {
      return getNumber(_val, defaultValue);
    }
  }

  // ------------------------- WEB COMPONENT LIFECYCLE ----------------------------



  /**
   * try to restore values from session or local storage
   * when component is initialized
   */
  restoreFromStorage() {
    if (!this.storage) return;
    this._storageInitialized = true;

    let restoredValue = getFromStorage(this.storage, this.storageKey);
    if (isNumber(restoredValue)) {
      this.value = getNumber(restoredValue, this.min);
    }
    else {
      if (restoredValue) {
        this.value = restoredValue;
      }
    }

    if (this.value2 !== undefined) {
      restoredValue = getFromStorage(this.storage, this.storageKey2);
      if (isNumber(restoredValue)) {
        this.value2 = getNumber(restoredValue, this.min);
      }
      else {
        if (restoredValue) {
          this.value2 = restoredValue;
        }
      }
    }
  }

  /**
   * when the custom element connected to DOM
   */
  connectedCallback() {
    if (!this.shadowRoot) return;

    // initial values of attributes
    this.data = this.parseData(this.getAttribute('data'));
    this.min = this.getStringOrNumber('min', 0, this.data ? this.data[0] : '');
    this.max = this.getStringOrNumber('max', 100, this.data ? this.data[this.data.length - 1] : '');

    this.value = this.getStringOrNumber('value', this.min as number, this.data ? this.data[0] : '');
    if (this.getAttribute('value2') !== null) {
      this.value2 = this.getStringOrNumber('value2', this.min as number, this.data ? this.data[0] : '');
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

    // if the storage is enabled ---> try to restore the value
    this.restoreFromStorage();

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
    switch (attrName) {
      case 'min': {
        this.min = this.getStringOrNumber('min', 0, this.data ? this.data[0] : '');
        this.render();
        break;
      }

      case 'max': {
        this.max = this.getStringOrNumber('max', 100, this.data ? this.data[this.data.length - 1] : '');
        this.render();
        break;
      }

      case 'value': {
        this.value = this.getStringOrNumber('value', this.min as number, this.data ? this.data[0] : '');
        this.render();
        break;
      }

      case 'value2': {
        this.value2 = this.getStringOrNumber('value2', this.min as number, this.data ? this.data[0] : '');
        this.render();
        break;
      }

      case 'data': {
        this.data = this.parseData(this.getAttribute('data'));
        this.render();
        break;
      }

      case 'step': {
        this.step = getNumber(this.getAttribute('step'), undefined);
        break;
      }

      case 'round': {
        this.round = getNumber(this.getAttribute('round'), DEFAULT_ROUND_PLACES);
        if (this.round < 0) {
          this.round = DEFAULT_ROUND_PLACES;
        }
        break;
      }

      case 'type': {
        this.type = this.getAttribute('type') || undefined;
        this.render();
        break;
      }

      case 'theme': {
        this.theme = this.getAttribute('theme') || undefined;
        this.render();
        break;
      }

      case 'rtl': {
        this.rtl = this.getAttribute('rtl') === 'true';
        this.render();
        break;
      }

      case 'btt': {
        this.btt = this.getAttribute('btt') === 'true';
        this.render();
        break;
      }

      case 'disabled': {
        this.disabled = this.getAttribute('disabled') === 'true';
        this.render();
        break;
      }

      case 'animate-onclick': {
        this.animateOnClick = this.getAttribute('animate-onclick') || undefined;
        if (this.animateOnClick) {
          this._$slider?.style.setProperty('--tc-range-slider-animate-onclick', this.animateOnClick);
        }
        this.render();
        break;
      }

      case 'storage': {
        this.storage = (this.getAttribute('storage') as StorageTypeEnum) || undefined;
        break;
      }

      case 'storage-key': {
        this.storageKey = this.getAttribute('storage-key') || STORAGE_KEY;
        break;
      }

      case 'value-label': {
        this.valueLabel = this.getAttribute('value-label') || undefined;
        this.render();
        break;
      }

      case 'value2-label': {
        this.value2Label = this.getAttribute('value2-label') || undefined;
        this.render();
        break;
      }

      case 'generate-labels': {
        this.generateLabels = this.getAttribute('generate-labels') === 'true';
        this.render();
        break;
      }

      case 'slider-width': {
        this.sliderWidth = this.getAttribute('slider-width') || undefined;
        this.render();
        break;
      }

      case 'slider-height': {
        this.sliderHeight = this.getAttribute('slider-height') || undefined;
        this.render();
        break;
      }

      case 'slider-radius': {
        this.sliderRadius = this.getAttribute('slider-radius') || undefined;
        this.render();
        break;
      }

      case 'slider-bg': {
        this.sliderBg = this.getAttribute('slider-bg') || undefined;
        this.render();
        break;
      }

      case 'slider-bg-hover': {
        this.sliderBgHover = this.getAttribute('slider-bg-hover') || undefined;
        this.render();
        break;
      }

      case 'slider-bg-fill': {
        this.sliderBgFill = this.getAttribute('slider-bg-fill') || undefined;
        this.render();
        break;
      }

      case 'pointer-width': {
        this.pointerWidth = this.getAttribute('pointer-width') || undefined;
        this.render();
        break;
      }

      case 'pointer-height': {
        this.pointerHeight = this.getAttribute('pointer-height') || undefined;
        this.render();
        break;
      }

      case 'pointer-radius': {
        this.pointerRadius = this.getAttribute('pointer-radius') || undefined;
        this.render();
        break;
      }

      case 'pointer-shape': {
        this.pointerShape = this.getAttribute('pointer-shape') || undefined;
        this.render();
        break;
      }

      case 'pointer-bg': {
        this.pointerBg = this.getAttribute('pointer-bg') || undefined;
        this.render();
        break;
      }

      case 'pointer-bg-hover': {
        this.pointerBgHover = this.getAttribute('pointer-bg-hover') || undefined;
        this.render();
        break;
      }

      case 'pointer-bg-focus': {
        this.pointerBgFocus = this.getAttribute('pointer-bg-focus') || undefined;
        this.render();
        break;
      }

      case 'pointer-shadow': {
        this.pointerShadow = this.getAttribute('pointer-shadow') || undefined;
        this.render();
        break;
      }

      case 'pointer-shadow-hover': {
        this.pointerShadowHover = this.getAttribute('pointer-shadow-hover') || undefined;
        this.render();
        break;
      }

      case 'pointer-shadow-focus': {
        this.pointerShadowFocus = this.getAttribute('pointer-shadow-focus') || undefined;
        this.render();
        break;
      }

      case 'pointer-border': {
        this.pointerBorder = this.getAttribute('pointer-border') || undefined;
        this.render();
        break;
      }

      case 'pointer-border-hover': {
        this.pointerBorderHover = this.getAttribute('pointer-border-hover') || undefined;
        this.render();
        break;
      }

      case 'pointer-border-focus': {
        this.pointerBorderFocus = this.getAttribute('pointer-border-focus') || undefined;
        this.render();
        break;
      }
    }
  }
}

export default RangeSlider;
