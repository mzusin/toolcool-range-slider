import { getNumber, isNumber } from './math-provider';
import { IPointer, Pointer } from '../ui/pointer';
import { ISlider } from '../ui/slider';

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

    if(!Object.prototype.hasOwnProperty.call($component, valueProp)){
      Object.defineProperty($component, valueProp, {
        get () {
          if(!slider) return undefined;

          const pointer = slider.pointers[index];
          if(!pointer) return undefined;

          const val = slider.getTextValue(pointer.percent);
          return isNumber(val) ? getNumber(val, val) : val;
        },

        set: (val) => {
          slider?.setValue(val, index);
        },
      });
    }

    if(!Object.prototype.hasOwnProperty.call($component, ariaLabelProp)){
      Object.defineProperty($component, ariaLabelProp, {
        get () {
          return slider?.pointers[index]?.getAttr('aria-label') ?? undefined;
        },

        set: (val) => {
          if(!slider) return;
          slider.setAriaLabel(index, val);
        },
      });
    }

    if(!Object.prototype.hasOwnProperty.call($component, pointerShapeProp)){
      Object.defineProperty($component, pointerShapeProp, {
        get () {
          return slider?.styles?.pointerShapes[index] ?? null;
        },

        set: (val) => {
          if(!slider || !slider.styles) return;
          slider.styles.setPointerShape(index, val);
        },
      });
    }

    if(!Object.prototype.hasOwnProperty.call($component, pointerDisabledProp)){
      Object.defineProperty($component, pointerDisabledProp, {
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

  for(let i=1; i<slider.pointers.length; i++){
    apiProperties.push([`value${ i + 1 }`, `ariaLabel${ i + 1 }`, `pointer${ i + 1 }Shape`, `pointer${ i + 1 }Disabled`, i]);
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
