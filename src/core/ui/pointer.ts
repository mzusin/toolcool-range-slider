import * as TypeEnum from '../enums/type-enum';
import { sendOnKeyDownEvent, sendPointerClickedEvent } from '../domain/events-provider';

export interface IPointer {
  readonly percent: number;
  readonly $pointer: HTMLElement;

  updatePosition: (percent: number, leftWall: number | undefined, rightWall: number | undefined, type: string, rightToLeft: boolean, bottomToTop: boolean) => boolean;

  disabled: boolean;

  isClicked: ($target: HTMLElement) => boolean;
  setCallbacks: (
    arrowLeft: (pointerIndex: number) => void,
    arrowRight: (pointerIndex: number) => void,
    arrowUp: (pointerIndex: number) => void,
    arrowDown: (pointerIndex: number) => void
  ) => void;

  setAttr: (key: string, value: string | null | undefined) => void;
  getAttr: (key: string) => string | null;

  destroy: () => void;
}

export const Pointer = ($component: HTMLElement, $pointer: HTMLElement, index: number) : IPointer => {

  // the pointer value in % in the range [0, 100] -
  // used to render the pointer position
  let percent = 0;

  let arrowLeft: (pointerIndex: number) => void;
  let arrowRight: (pointerIndex: number) => void;
  let arrowUp: (pointerIndex: number) => void;
  let arrowDown: (pointerIndex: number) => void;

  let disabled = false;

  // -------------- APIs -------------------------

  /**
   * Update pointer position according to its percent (value).
   * Returns true if change position has changed.
   */
  const updatePosition = (
      _percent: number,
      _leftWall: number | undefined,
      _rightWall: number | undefined,
      _type: string,
      _rightToLeft: boolean,
      _bottomToTop: boolean): boolean => {

    const oldValue = percent;

    if(_rightWall !== undefined && _percent > _rightWall){
      _percent = _rightWall;
    }

    if(_leftWall !== undefined && _percent < _leftWall){
      _percent = _leftWall;
    }

    percent = _percent;
    // $pointer.focus();

    // the below code should not change the global pointer percent,
    // only its position on the panel
    let percentPos = percent;
    if((_type === TypeEnum.Vertical && _bottomToTop) ||
      (_type === TypeEnum.Horizontal && _rightToLeft)) {
      percentPos = 100 - percentPos;
    }

    if (_type === TypeEnum.Vertical) {
      $pointer.style.top = `${ percentPos }%`;
    }
    else {
      $pointer.style.left = `${ percentPos }%`;
    }

    return oldValue !== percent;
  };

  const isClicked = ($target: HTMLElement) => {
    return $target === $pointer || $pointer.contains($target);
  };

  const setCallbacks = (
    _arrowLeft: (pointerIndex: number) => void,
    _arrowRight: (pointerIndex: number) => void,
    _arrowUp: (pointerIndex: number) => void,
    _arrowDown: (pointerIndex: number) => void
  ) => {
    arrowLeft = _arrowLeft;
    arrowRight = _arrowRight;
    arrowUp = _arrowUp;
    arrowDown = _arrowDown;
  };

  const setDisabled = (_disabled: boolean) => {
    disabled = _disabled;
    $pointer.classList.toggle('disabled', disabled);

    if(disabled){
      $pointer.setAttribute('aria-disabled', 'true');
    }
    else{
      if ($pointer.hasAttribute('aria-disabled')) {
        $pointer.removeAttribute('aria-disabled');
      }
    }
  };

  const setAttr = (key: string, value: string | null | undefined) => {
    if(value === null || value === undefined){
      $pointer.removeAttribute(key);
    }
    else{
      $pointer.setAttribute(key, value);
    }
  };

  const getAttr = (key: string) => {
    return $pointer.getAttribute(key);
  };

  // -------------- Events ------------------------

  const pointerKeyDown = (evt: KeyboardEvent) => {
    if(disabled) return;

    switch (evt.key) {
      case 'ArrowLeft': {
        evt.preventDefault();
        if(typeof arrowLeft === 'function'){
          arrowLeft(index);
        }
        break;
      }

      case 'ArrowRight': {
        evt.preventDefault();
        if(typeof arrowRight === 'function'){
          arrowRight(index);
        }
        break;
      }

      case 'ArrowUp': {
        evt.preventDefault();
        if(typeof arrowUp === 'function'){
          arrowUp(index);
        }
        break;
      }

      case 'ArrowDown': {
        evt.preventDefault();
        if(typeof arrowDown === 'function'){
          arrowDown(index);
        }
        break;
      }
    }

    sendOnKeyDownEvent($component, evt);
  };

  const pointerClicked = () => {
    if(disabled) return;
    sendPointerClickedEvent($component, $pointer);
  };

  // ---------- Lifecycle ------------------------

  (() => {
    $pointer.className = `pointer pointer-${ index }`;

    $pointer.addEventListener('keydown', pointerKeyDown);
    $pointer.addEventListener('click', pointerClicked);
  })();

  const destroy = () => {
    $pointer.removeEventListener('keydown', pointerKeyDown);
    $pointer.removeEventListener('click', pointerClicked);
    $pointer.remove();
  };

  return {
    $pointer,

    get percent() {
      return percent;
    },

    get disabled() {
      return disabled;
    },

    set disabled(_disabled) {
      setDisabled(_disabled);
    },

    updatePosition,

    isClicked,
    setCallbacks,
    setAttr,
    getAttr,

    destroy,
  };
};

