import { Pointer } from '../ui/pointer';

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