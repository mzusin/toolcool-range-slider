import RangeSlider from './app/range-slider';

declare global {
  interface Window {
    tcRangeSlider: typeof RangeSlider;
  }
}

window.tcRangeSlider = RangeSlider;

// register web components
if (!customElements.get('toolcool-range-slider')) {
  customElements.define('toolcool-range-slider', RangeSlider);
}

if (!customElements.get('tc-range-slider')) {
  customElements.define('tc-range-slider', class extends RangeSlider{});
}

export default RangeSlider;

