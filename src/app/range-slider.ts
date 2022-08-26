import styles from './styles.pcss';
import mainTemplate from '../templates/main.html.js'; // esbuild custom loader
import { convertRange, getNumber, isNumber, roundToStep, setDecimalPlaces } from '../domain/math-provider';
import { getFromStorage, saveToStorage, STORAGE_KEY, StorageTypeEnum } from '../domain/storage-provider';

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

  static get observedAttributes() {
    return [
      'value',
      'data',
      'min',
      'max',
      'step',
      'type',
      'theme',
      'disabled',
      'rtl',
      'btt',

      'storage',
      'storage-key',

      'slider-width',
      'slider-height',
      'slider-radius',

      'slider-bg',
      'slider-bg-hover',
      'slider-bg-fill',

      'pointer-width',
      'pointer-height',
      'pointer-radius',
      'pointer-shape',

      'pointer-bg',
      'pointer-bg-hover',
      'pointer-bg-focus',

      'pointer-shadow',
      'pointer-shadow-hover',
      'pointer-shadow-focus',

      'pointer-border',
      'pointer-border-hover',
      'pointer-border-focus',

      'value-label',
    ];
  }

  private _$slider: HTMLElement | null;
  private _$pointer: HTMLElement | null;
  private _$panelFill: HTMLElement | null;
  private _$valueLabel: HTMLElement | null;

  private _value: string | number = 0; // [min, max]
  private _data: (string | number)[] | undefined = undefined;
  private _min = 0;
  private _max = 100;
  private _step: number | undefined = undefined;
  private _type: string | undefined = undefined;
  private _theme: string | undefined = undefined;
  private _disabled = false;
  private _rtl = false; // right to left
  private _btt = false; // bottom to top

  private _storage: StorageTypeEnum | undefined = undefined;
  private _storageKey = STORAGE_KEY;
  private _storageInitialized = false;

  private _valueLabel: string | undefined = undefined;

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
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.pointerKeyDown = this.pointerKeyDown.bind(this);
    this.getSafeValues = this.getSafeValues.bind(this);
    this.render = this.render.bind(this);
  }

  // ----------- APIs ------------------------

  private setValueHelper(val: string | number) {
    this._value = val;

    this.render();
    this.sendChangeEvent();

    if (this.storage && this._storageInitialized) {
      saveToStorage(this.storage, this.storageKey, val);
    }
  }

  /**
   * value in [min, max] range, or in provided data array
   */
  public set value(val: string | number) {
    if (this.data) {
      // the provided value should present in data array
      const found = this.data.find((item) => item === val);
      if (found) {
        this.setValueHelper(val);
      }
    } else {
      const safe = this.getSafeValues(val as number, this.min, this.max);
      this.setValueHelper(safe.value);
    }
  }

  /**
   * returns value from [min, max] range
   */
  public get value() {
    return this._value;
  }

  public set data(val: (string | number)[] | undefined) {
    this._data = val;
    this.render();
  }

  public get data() {
    return this._data;
  }

  public set min(num: number) {
    if (this.data) {
    } else {
      const safe = this.getSafeValues(this.value as number, num, this.max);
      this._min = safe.min;
      this.value = safe.value;
      this.render();
    }
  }

  public get min() {
    return this._min;
  }

  public set max(num: number) {
    if (this.data) {
    } else {
      const safe = this.getSafeValues(this.value as number, this.min, num);
      this._max = safe.max;
      this.value = safe.value;
      this.render();
    }
  }

  public get max() {
    return this._max;
  }

  public set step(num: number | undefined) {
    const range = Math.abs(this.max - this.min);
    if (num === undefined) {
      this._step = undefined;
      return;
    }

    if (num > range) {
      this._step = undefined;
      return;
    }

    this._step = Math.abs(num);
  }

  public get step() {
    return this._step;
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

  public set valueLabel(val: string | undefined) {
    this._valueLabel = val;
    this.render();
  }

  public get valueLabel() {
    return this._valueLabel;
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

  sendPointerClickedEvent() {
    this.dispatchEvent(
      new CustomEvent('onPointerClicked', {
        detail: {
          $pointer: this._$pointer,
        },
      })
    );
  }

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
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: {
          value: this.value,
        },
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
      value: setDecimalPlaces(_val, 5),
    };
  }

  parseData(dataString: string | undefined | null): (string | number)[] | undefined {
    if (dataString === undefined || dataString === null) return undefined;

    let result = dataString.trim();
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

  render() {
    if (!this._$slider || !this._$pointer || !this._$panelFill) return;

    if (this.data) {
    } else {
      // update the pointer position
      let percent = convertRange(this.min, this.max, 0, 100, this.value as number);

      if (this.type === 'vertical') {
        if (this.btt) {
          this._$pointer.style.top = `${100 - percent}%`;
          this._$panelFill.style.height = `${percent}%`;
          this._$panelFill.style.bottom = '0%';
          this._$panelFill.style.top = 'auto';
        } else {
          this._$pointer.style.top = `${percent}%`;
          this._$panelFill.style.height = `${percent}%`;
          this._$panelFill.style.bottom = 'auto';
          this._$panelFill.style.top = '0%';
        }

        this._$slider.setAttribute('aria-orientation', 'vertical');
      } else {
        if (this.rtl) {
          this._$pointer.style.left = `${100 - percent}%`;
          this._$panelFill.style.width = `${percent}%`;
          this._$panelFill.style.right = '0%';
          this._$panelFill.style.left = 'auto';
        } else {
          this._$pointer.style.left = `${percent}%`;
          this._$panelFill.style.width = `${percent}%`;
          this._$panelFill.style.right = 'auto';
          this._$panelFill.style.left = '0%';
        }

        this._$slider.setAttribute('aria-orientation', 'horizontal');
      }

      if (this._$valueLabel) {
        this._$valueLabel.textContent = Math.round(this.value as number).toString();
      }
    }

    // set additional area attributes
    this._$slider.setAttribute('aria-valuemin', this.min.toString());
    this._$slider.setAttribute('aria-valuemax', this.max.toString());
    this._$slider.setAttribute('aria-valuenow', this.value.toString());
    this._$slider.setAttribute('aria-valuetext', this.value.toString());

    if (this.type) {
      this._$slider.classList.add(`type-${this.type}`);
    }

    if (this.theme) {
      this._$slider.classList.add(this.theme);
    }

    if (this.disabled) {
      this._$slider.classList.add('disabled');
      this._$slider.setAttribute('aria-disabled', 'true');
    } else {
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

  pointerClicked() {
    if (this.disabled) return;
    this._$pointer?.focus();
    this.sendPointerClickedEvent();
  }

  pointerKeyDown(evt: KeyboardEvent) {
    if (this.disabled) return;

    switch (evt.key) {
      case 'ArrowLeft': {
        if (this.data) {
        } else {
          const step = getNumber(this.step, 1);
          const safe = this.getSafeValues((this.value as number) - step, this.min, this.max);
          this.value = safe.value;
          this.render();
        }

        break;
      }

      case 'ArrowRight': {
        if (this.data) {
        } else {
          const step = getNumber(this.step, 1);
          const safe = this.getSafeValues((this.value as number) + step, this.min, this.max);
          this.value = safe.value;
          this.render();
        }
        break;
      }

      case 'ArrowUp': {
        this.value = this.min;
        this.render();
        break;
      }

      case 'ArrowDown': {
        this.value = this.max;
        this.render();
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

    this._$pointer?.focus();

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

    let percent;

    if (this.type === 'vertical') {
      // -------------- vertical -----------------

      const { height: boxHeight, top: boxTop } = this._$slider.getBoundingClientRect();

      let mouseY;
      if (evt.type.indexOf('mouse') !== -1) {
        mouseY = (evt as MouseEvent).clientY;
      } else {
        mouseY = (evt as TouchEvent).touches[0].clientY;
      }

      const top = Math.min(Math.max(0, mouseY - boxTop), boxHeight);
      percent = (top * 100) / boxHeight;

      if (this.btt) {
        percent = 100 - percent;
      }
    } else {
      // -------------- horizontal -----------------

      const { width: boxWidth, left: boxLeft } = this._$slider.getBoundingClientRect();

      let mouseX;
      if (evt.type.indexOf('mouse') !== -1) {
        mouseX = (evt as MouseEvent).clientX;
      } else {
        mouseX = (evt as TouchEvent).touches[0].clientX;
      }

      const left = Math.min(Math.max(0, mouseX - boxLeft), boxWidth);
      percent = (left * 100) / boxWidth;

      if (this.rtl) {
        percent = 100 - percent;
      }
    }

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
    this.data = this.parseData(this.getAttribute('data'));
    this.value = getNumber(this.getAttribute('value'), this.data ? this.data[0] : this.min);

    this.step = getNumber(this.getAttribute('step'), undefined);
    this.type = this.getAttribute('type') || undefined;
    this.theme = this.getAttribute('theme') || undefined;
    this.disabled = this.getAttribute('disabled') === 'true';
    this.rtl = this.getAttribute('rtl') === 'true';
    this.btt = this.getAttribute('btt') === 'true';

    this.valueLabel = this.getAttribute('value-label') || undefined;
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
    this._$slider = this.shadowRoot.querySelector('.range-slider');
    this._$pointer = this.shadowRoot.querySelector('.pointer');
    this._$panelFill = this.shadowRoot.querySelector('.panel-fill');

    if (this.valueLabel) {
      this._$valueLabel = document.querySelector(this.valueLabel);
    }

    // init slider events
    this._$slider?.addEventListener('mousedown', this.onMouseDown);
    this._$slider?.addEventListener('mouseup', this.onMouseUp);
    this._$slider?.addEventListener('touchmove', this.onValueChange);
    this._$slider?.addEventListener('touchstart', this.onValueChange);

    // init pointer events
    this._$pointer?.addEventListener('click', this.pointerClicked);
    this._$pointer?.addEventListener('keydown', this.pointerKeyDown);

    // if the storage is enabled ---> try to restore the value
    if (this.storage) {
      const restoredValue = Number(getFromStorage(this.storage, this.storageKey));
      this._storageInitialized = true;
      if (!isNaN(restoredValue)) {
        this.value = restoredValue;
      }
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

    this._$slider?.removeEventListener('mousedown', this.onMouseDown);
    this._$slider?.removeEventListener('mouseup', this.onMouseUp);
    this._$slider?.removeEventListener('touchmove', this.onValueChange);
    this._$slider?.removeEventListener('touchstart', this.onValueChange);
  }

  /**
   * when attributes change
   */
  attributeChangedCallback(attrName: string) {
    switch (attrName) {
      case 'min': {
        this.min = getNumber(this.getAttribute('min'), 0);
        this.render();
        break;
      }

      case 'max': {
        this.max = getNumber(this.getAttribute('max'), 100);
        this.render();
        break;
      }

      case 'value': {
        this.value = getNumber(this.getAttribute('value'), this.data ? this.data[0] : this.min);
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
