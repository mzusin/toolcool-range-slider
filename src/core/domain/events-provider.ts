import { getNumber, isNumber } from './math-provider';

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
interface IIndexable<T = any> { [key: string]: T }

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

export const sendChangeEvent = (
  $component: HTMLElement,
  values: (string | number | undefined)[],
) => {

  if(!values || values.length <= 0) return;

  const transformed = values.map(value => isNumber(value) ? getNumber(value, value) : value);

  const detail: IIndexable = {
    values: transformed || [],
  };

  detail.value = transformed[0];
  detail.value0 = transformed[0];
  detail.value1 = transformed[0];

  for(let i=1; i<transformed.length; i++){
    detail[`value${ i + 1 }`] = transformed[i];
  }

  $component.dispatchEvent(
    new CustomEvent('change', {
      detail,
    })
  );
};