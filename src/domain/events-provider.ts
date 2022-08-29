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

export const sendMouseDownEvent = (slider: RangeSlider, evt: MouseEvent) => {
  slider.dispatchEvent(
    new CustomEvent('onMouseDown', {
      detail: {
        nativeEvent: evt,
      },
    })
  );
};

export const sendMouseUpEvent = (slider: RangeSlider, evt: MouseEvent) => {
  slider.dispatchEvent(
    new CustomEvent('onMouseUp', {
      detail: {
        nativeEvent: evt,
      },
    })
  );
};

export const sendOnKeyDownEvent = (slider: RangeSlider, evt: KeyboardEvent) => {
  slider.dispatchEvent(
    new CustomEvent('onKeyDown', {
      detail: {
        nativeEvent: evt,
      },
    })
  );
};

export const sendChangeEvent = (slider: RangeSlider) => {
  const detail : { value: number | string, value2? : number | string } = {
    value: slider.value,
  };

  if(slider.value2 !== undefined){
    detail.value2 = slider.value2;
  }

  slider.dispatchEvent(
    new CustomEvent('change', {
      detail,
    })
  );
};