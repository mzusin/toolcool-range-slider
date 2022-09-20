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
  values: (string | number | undefined)[],
}

export const sendChangeEvent = (
  $component: HTMLElement,
  values: (string | number | undefined)[],
) => {

  const transformed = values.map(value => isNumber(value) ? getNumber(value, value) : value);

  const detail: IChangeEventDetail = {
    value: transformed[0],
    value2: transformed[1],
    values: transformed || [],
  };

  $component.dispatchEvent(
    new CustomEvent('change', {
      detail,
    })
  );
};