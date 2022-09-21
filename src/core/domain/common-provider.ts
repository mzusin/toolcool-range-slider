import { IPointer, Pointer } from '../ui/pointer';
import * as AttributesEnum from '../enums/attributes-enum';
import { getNumber, isNumber } from './math-provider';
import { ISlider } from '../ui/slider';

export const getAttributesByRegex = <T>($component: HTMLElement, regex: RegExp, parseValue?: (val: string) => T) : Map<number, T> => {

  const map = new Map<number, T>();

  for (const attr of $component.attributes) {
    const valueProp = attr.nodeName.trim().toLowerCase();
    const isValue = regex.test(valueProp);
    if(!isValue) continue;

    const key = valueProp.replace(/\D/g, '').trim();
    const keyNum = (key === '' || key === '0' || key === '1') ? 0 : (getNumber(key, 0) - 1);
    const value = parseValue && typeof parseValue === 'function' ? parseValue(attr.value) : attr.value;
    map.set(keyNum, value as T);
  }

  return map;
};

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

export const initPointerAPIs = ($component: HTMLElement, slider: ISlider) => {

  const apiProperties: [string, string, string, number][] = [
    ['value', 'ariaLabel', 'pointerShape', 0],
    ['value0', 'ariaLabel0', 'pointerShape0', 0],
    ['value1', 'ariaLabel1', 'pointerShape1', 0],
  ];

  for(let i=1; i<slider.pointers.length; i++){
    apiProperties.push([`value${ i + 1 }`, `ariaLabel${ i + 1 }`, `pointer${ i + 1 }Shape`, i]);
  }

  for(let item of apiProperties){
    try{
      const valueProp = item[0];
      const ariaLabelProp = item[1];
      const pointerShapeProp = item[2];
      const index = item[3];

      if(!$component.hasOwnProperty(valueProp)){
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

      if(!$component.hasOwnProperty(ariaLabelProp)){
        Object.defineProperty($component, ariaLabelProp, {
          get () {
            const pointer = slider?.pointers[index];
            return pointer?.getAttr('aria-label') ?? undefined;
          },

          set: (val) => {
            if(!slider) return;
            slider.setAriaLabel(index, val);
          },
        });
      }

      if(!$component.hasOwnProperty(pointerShapeProp)){
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
    }
    catch (ex){
      console.error(ex);
    }
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

export const removeFocus = () => {
  if(!document.activeElement) return;

  try{
    (document.activeElement as HTMLElement)?.blur();
  }
  catch(ex){
    // no exception
  }
};

export const getExternalCSSList = ($component: HTMLElement) => {
  if(!$component) return null;

  const str = $component.getAttribute(AttributesEnum.CSSLinks);
  if(!str) return null;

  const parts = str.split(';');
  const cssList: string[] = [];

  for(const part of parts){
    if(part.trim() === '') continue;
    cssList.push(part.trim());
  }

  return cssList;
};