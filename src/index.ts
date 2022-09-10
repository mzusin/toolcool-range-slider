import RangeSlider from './app/range-slider';

// register web components
if (!customElements.get('toolcool-range-slider')) {
  customElements.define('toolcool-range-slider', RangeSlider);
}

if (!customElements.get('tc-range-slider')) {
  customElements.define('tc-range-slider', class extends RangeSlider{});
}

