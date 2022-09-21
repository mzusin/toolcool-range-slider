import { IPointer, Pointer } from '../ui/pointer';
import * as AttributesEnum from '../enums/attributes-enum';
import { getNumber, isNumber } from './math-provider';

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
  pointers.push([Pointer($component, $pointer, 0), 0]);

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