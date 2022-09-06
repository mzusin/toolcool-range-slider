import { getNumber, isNumber } from './math-provider';

export const sendPointerClickedEvent = ($component: HTMLElement, $pointer: HTMLElement) => {
  $component.dispatchEvent(
    new CustomEvent('onPointerClicked', {
      detail: {
        $pointer: $pointer,
      },
    })
  );
};

export const sendMouseDownEvent = ($component: HTMLElement, evt: MouseEvent) => {
  $component.dispatchEvent(
    new CustomEvent('onMouseDown', {
      detail: {
        nativeEvent: evt,
      },
    })
  );
};

export const sendMouseUpEvent = ($component: HTMLElement, evt: MouseEvent) => {
  $component.dispatchEvent(
    new CustomEvent('onMouseUp', {
      detail: {
        nativeEvent: evt,
      },
    })
  );
};

export const sendOnKeyDownEvent = ($component: HTMLElement, evt: KeyboardEvent) => {
  $component.dispatchEvent(
    new CustomEvent('onKeyDown', {
      detail: {
        nativeEvent: evt,
      },
    })
  );
};

export interface IChangeEventDetail {
  value?: number | string | undefined,
  value2?: number | string | undefined,
}

export const sendChangeEvent = ($component: HTMLElement, value1: string | number | undefined, value2: string | number | undefined) => {
  const detail: IChangeEventDetail = {
    value: isNumber(value1) ? getNumber(value1, value1) : value1,
    value2: isNumber(value2) ? getNumber(value2, value2) : value2,
  };

  $component.dispatchEvent(
    new CustomEvent('change', {
      detail,
    })
  );
};