import RangeSlider from './app/range-slider';

/*
 Usage:
 Demo:
 */

// register web components
if (!customElements.get('toolcool-range-slider')) {
  customElements.define('toolcool-range-slider', RangeSlider);
}
