import TCRangeSlider from './app/range-slider';
import { DynamicFields } from './types';

type RangeSlider = TCRangeSlider & HTMLElement & DynamicFields;

declare global {
  interface Window {
    tcRangeSlider: typeof TCRangeSlider;
  }
}

window.tcRangeSlider = TCRangeSlider;

// register web components
if (!customElements.get('toolcool-range-slider')) {
  customElements.define('toolcool-range-slider', TCRangeSlider);
}

if (!customElements.get('tc-range-slider')) {
  customElements.define('tc-range-slider', class extends TCRangeSlider{});
}

export default RangeSlider;


