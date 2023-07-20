import { getNumber, isNumber } from './math-provider';
import { IPointer, Pointer } from '../ui/pointer';
import { ISlider } from '../ui/slider';

export const MAX_VALUES_API = 10;
export const POINTER_Z_INDEX_DEFAULT = 20;

export const initPointers = ($component: HTMLElement, $pointer: HTMLElement) => {
  const map = new Map<number, number | string>();
  const regex = /^value([0-9]*)$/;

  // collect data about key / value pairs: value=50, value2=70, etc.
  // value = value0 = value1 (all these are aliases of each other)
  for (const attr of $component.attributes) {
    const valueProp = attr.nodeName.trim().toLowerCase();
    const isValue = regex.test(valueProp);
    if(!isValue) continue;

    const key = valueProp.replace('value', '').trim();
    const keyNum = (key === '' || key === '0' || key === '1') ? 0 : (getNumber(key, 0) - 1);
    const value = isNumber(attr.value) ? getNumber(attr.value, 0) : attr.value;

    map.set(keyNum, value);
  }

  // find the max value number in the map
  const max = Math.max(...Array.from(map.keys()));
  const pointers: [IPointer, string | number | undefined][] = [];

  // first pointer always exists
  pointers.push([Pointer($component, $pointer, 0), map.get(0)]);

  // add all other pointers
  let $latestPointer = $pointer;

  for(let i=1; i<=max; i++){
    const $newPointer = $pointer.cloneNode(true) as HTMLElement;
    $latestPointer.after($newPointer);

    $latestPointer = $newPointer;
    pointers.push([Pointer($component, $newPointer, i), map.get(i)]);
  }

  return pointers;
};

export const initPointerAPI = (
  $component: HTMLElement,
  slider: ISlider,
  index: number,
  valueProp: string,
  ariaLabelProp: string,
  pointerShapeProp: string,
  pointerDisabledProp: string
) => {

  try{

    // `value${ index + 1 }`: value, value0, value1, value2, etc.
    Object.defineProperty($component, valueProp, {
      configurable: true,
      get () {
        if(!slider) return undefined;

        const pointer = slider.pointers[index];
        if(!pointer) return undefined;

        const val = slider.getTextValue(pointer.percent);
        return isNumber(val) ? getNumber(val, val) : val;
      },

      set: (val) => {
        const pointer = slider.pointers[index];
        if(!pointer){
          slider?.addPointer(val);
        }
        else{
          slider?.setValue(val, index);
        }
      },
    });

    // `ariaLabel${ index + 1 }`
    Object.defineProperty($component, ariaLabelProp, {
      configurable: true,
      get () {
        return slider?.pointers[index]?.getAttr('aria-label') ?? undefined;
      },

      set: (val) => {
        if(!slider) return;
        slider.setAriaLabel(index, val);
      },
    });

    // `pointerShape${ index + 1 }`
    Object.defineProperty($component, pointerShapeProp, {
      configurable: true,
      get () {
        return slider?.styles?.pointerShapes[index] ?? null;
      },

      set: (val) => {
        if(!slider || !slider.styles) return;
        slider.styles.setPointerShape(index, val);
      },
    });

    // `pointer${ index + 1 }Disabled`
    Object.defineProperty($component, pointerDisabledProp, {
      configurable: true,
      get () {
        return slider?.pointers[index].disabled ?? false;
      },

      set: (val) => {
        if(!slider) return;

        const pointer = slider?.pointers[index];
        if(!pointer) return;

        pointer.disabled = val;
      },
    });
  }
  catch (ex){
    console.error(ex);
  }
};

export const initPointerAPIs = ($component: HTMLElement, slider: ISlider) => {

  const apiProperties: [string, string, string, string, number][] = [
    ['value', 'ariaLabel', 'pointerShape', 'pointerDisabled', 0],
    ['value0', 'ariaLabel0', 'pointerShape0', 'pointer0Disabled', 0],
    ['value1', 'ariaLabel1', 'pointerShape1', 'pointer1Disabled', 0],
  ];

  // The maximum number of such pointers is determined by the MAX_VALUES_API API constant (for performance reasons).
  // https://github.com/mzusin/toolcool-range-slider/issues/2
  for(let i=2; i<MAX_VALUES_API; i++){
    apiProperties.push([`value${ i }`, `ariaLabel${ i }`, `pointer${ i }Shape`, `pointer${ i }Disabled`, i - 1]);
  }

  for(const item of apiProperties){
    initPointerAPI($component,
      slider,
      item[4],
      item[0],
      item[1],
      item[2],
      item[3]
    );
  }

};

export const changePointersOrder = (pointers: IPointer[], isDesc: boolean, $component: HTMLElement) => {

  const $container = $component.shadowRoot?.querySelector('.container') as HTMLElement
  if(!$container) return;

  for(const pointer of pointers){
    if(isDesc){
      $container.prepend(pointer.$pointer);
    }
    else{
      $container.append(pointer.$pointer);
    }
  }
};

/**
 * Set greater z-index only to the active pointer.
 * https://github.com/mzusin/toolcool-range-slider/issues/15
 */
export const setZIndex = (pointers: IPointer[], selectedPointer: IPointer | null | undefined) => {
  if(!selectedPointer || pointers.length <= 1) return;

  for(const pointer of pointers) {
    pointer.$pointer.style.zIndex = POINTER_Z_INDEX_DEFAULT.toString();
  }

  selectedPointer.$pointer.style.zIndex = (POINTER_Z_INDEX_DEFAULT * 2).toString();
};
