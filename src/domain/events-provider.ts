import RangeSlider from '../app/range-slider';

export const sendPointerClickedEvent = (slider: RangeSlider, $pointer: HTMLElement) => {
  slider.dispatchEvent(
    new CustomEvent('onPointerClicked', {
      detail: {
        $pointer: $pointer,
      },
    })
  );
};