import TCRangeSlider from './app/range-slider';

type RangeSlider = typeof TCRangeSlider & HTMLElement & {
  // permit any property like `value${ index + 1 }`
  value: string | number | undefined;
  [name: `value${number}`]: string | number | undefined;

  // permit any property like `ariaLabel${ index + 1 }`
  ariaLabel$: string | number | undefined;
  [name: `ariaLabel$${number}`]: string | null | undefined;

  // permit any property like `pointerShape${ index + 1 }`
  pointerShape$: string | number | undefined;
  [name: `pointerShape$${number}`]: string | null;

  // permit any property like `pointer${ index + 1 }Disabled`
  pointerDisabled$: string | number | undefined;
  [name: `pointer$${number}Disabled`]: boolean;
};

declare global {
  interface Window {
    tcRangeSlider: TCRangeSlider;
  }
}

// @ts-ignore
window.tcRangeSlider = TCRangeSlider;

// register web components
if (!customElements.get('toolcool-range-slider')) {
  customElements.define('toolcool-range-slider', TCRangeSlider);
}

if (!customElements.get('tc-range-slider')) {
  customElements.define('tc-range-slider', class extends TCRangeSlider{});
}

export default RangeSlider;


