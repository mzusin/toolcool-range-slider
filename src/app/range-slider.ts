// @ts-ignore: esbuild custom loader
import styles from './styles.pcss';

/*
 Usage:
 ------
 <toolcool-range-slider></toolcool-range-slider>
 */
class RangeSlider extends HTMLElement {
  static get observedAttributes() {
    return [];
  }

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

    this.shadowRoot.innerHTML = `
        <style>
            ${styles} 
        </style>

        <div class="range-slider">
          <div class="container">
            <div class="panel"></div>
            
            <div class="container">
              <div class="pointer-box" style="left: 37%;">
                <div tabindex="0" class="pointer"></div>
              </div>
            </div>
            
          </div>
        </div>
    `;
  }

  /**
   * when the custom element disconnected from DOM
   */
  disconnectedCallback() {}

  /**
   * when attributes change
   */
  attributeChangedCallback(_attrName: string) {}
}

export default RangeSlider;
