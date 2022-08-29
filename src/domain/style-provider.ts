import RangeSlider from '../app/range-slider';

export const renderStyles = (slider: RangeSlider, $slider: HTMLElement | null) => {
  if (slider.theme) {
    $slider?.classList.add(slider.theme);
  }

  if (slider.pointerShape) {
    $slider?.classList.add('shape', `shape-${slider.pointerShape}`);
  }

  if (slider.sliderWidth) {
    $slider?.style.setProperty('--tc-range-slider-width', slider.sliderWidth);
  }

  if (slider.sliderHeight) {
    $slider?.style.setProperty('--tc-range-slider-height', slider.sliderHeight);
  }

  if (slider.sliderRadius) {
    $slider?.style.setProperty('--tc-range-slider-panel-bg-border-radius', slider.sliderRadius);
  }

  if (slider.sliderBg) {
    $slider?.style.setProperty('--tc-range-slider-panel-bg', slider.sliderBg);
  }

  if (slider.sliderBgHover) {
    $slider?.style.setProperty('--tc-range-slider-panel-bg-hover', slider.sliderBgHover);
  }

  if (slider.sliderBgFill) {
    $slider?.style.setProperty('--tc-range-slider-panel-bg-fill', slider.sliderBgFill);
  }

  if (slider.pointerWidth) {
    $slider?.style.setProperty('--tc-range-slider-pointer-width', slider.pointerWidth);
  }

  if (slider.pointerHeight) {
    $slider?.style.setProperty('--tc-range-slider-pointer-height', slider.pointerHeight);
  }

  if (slider.pointerRadius) {
    $slider?.style.setProperty('--tc-range-slider-pointer-border-radius', slider.pointerRadius);
  }

  if (slider.pointerBg) {
    $slider?.style.setProperty('--tc-range-slider-pointer-bg', slider.pointerBg);
  }

  if (slider.pointerBgHover) {
    $slider?.style.setProperty('--tc-range-slider-pointer-bg-hover', slider.pointerBgHover);
  }

  if (slider.pointerBgFocus) {
    $slider?.style.setProperty('--tc-range-slider-pointer-bg-focus', slider.pointerBgFocus);
  }

  if (slider.pointerShadow) {
    $slider?.style.setProperty('--tc-range-slider-pointer-shadow', slider.pointerShadow);
  }

  if (slider.pointerShadowHover) {
    $slider?.style.setProperty('--tc-range-slider-pointer-shadow-hover', slider.pointerShadowHover);
  }

  if (slider.pointerShadowFocus) {
    $slider?.style.setProperty('--tc-range-slider-pointer-shadow-focus', slider.pointerShadowFocus);
  }

  if (slider.pointerBorder) {
    $slider?.style.setProperty('--tc-range-slider-pointer-border', slider.pointerBorder);
  }

  if (slider.pointerBorderHover) {
    $slider?.style.setProperty('--tc-range-slider-pointer-border-hover', slider.pointerBorderHover);
  }

  if (slider.pointerBorderFocus) {
    $slider?.style.setProperty('--tc-range-slider-pointer-border-focus', slider.pointerBorderFocus);
  }
};