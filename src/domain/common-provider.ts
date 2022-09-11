import { Pointer } from '../ui/pointer';
import { AttributesEnum } from '../enums/attributes-enum';

export const createPointer2 = ($component: HTMLElement, $pointer1: HTMLElement) => {
  const $pointer2 = $pointer1.cloneNode(true) as HTMLElement;
  $pointer1.after($pointer2);
  return Pointer($component, $pointer2, 2);
}

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

  for(let part of parts){
    if(part.trim() === '') continue;
    cssList.push(part.trim());
  }

  return cssList;
};