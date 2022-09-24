import * as AttributesEnum from '../enums/attributes-enum';
import { getNumber } from './math-provider';

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