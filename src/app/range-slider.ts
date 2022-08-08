// @ts-ignore: esbuild custom loader
import styles from './styles.pcss';

/*
 Usage:
 ------
 <toolcool-range-slider value="0"></toolcool-range-slider>
 */
class RangeSlider extends HTMLElement {
  // ------------------------- INIT ----------------

  static get observedAttributes() {
    return ['value'];
  }

  private _$slider: HTMLElement | null;
  private _$pointer: HTMLElement | null;
  private _value: number = 0;

  constructor() {
    super();

    this.attachShadow({
      mode: 'open', // 'closed', 'open',
    });

    this.pointerClicked = this.pointerClicked.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
  }

  // ----------- APIs ------------------------

  /**
   * value in % [0, 100]
   */
  public set value(percent: number) {
    this._value = percent;
  }

  /**
   * returns % [0, 100]
   */
  public get value() {
    return this._value;
  }

  // ----------------------------------------------

  render() {
    if (!this._$pointer) return;

    this._$pointer.style.left = `${this.value}%`;
  }

  pointerClicked() {
    this._$pointer?.focus();
  }

  pointerKeyDown() {}

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

    this.value = Math.round((left * 100) / boxWidth);
    this.render();
  }

  // ------------------------- WEB COMPONENT LIFECYCLE ----------------------------

  /**
   * when the custom element connected to DOM
   */
  connectedCallback() {
    if (!this.shadowRoot) return;

    // initial values of attributes
    this.value = Number(this.getAttribute('value')) || 0;

    this.shadowRoot.innerHTML = `
        <style>
            ${styles} 
        </style>

        <div class="range-slider">
          <div class="container">
            <div class="panel"></div>
            
            <div class="container">
              <div class="pointer" style="left: ${this.value}%;">
                <div tabindex="0" class="pointer-shape"></div>
              </div>
            </div>
            
          </div>
        </div>
    `;

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
    if (attrName === 'value') {
      this.value = Number(this.getAttribute('value')) || 0;
      this.render();
    }
  }
}

export default RangeSlider;
