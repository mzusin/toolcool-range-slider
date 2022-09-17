import { AttributesEnum } from '../enums/attributes-enum';
import { CSSVariables } from '../enums/css-vars-enum';

export interface IStyles {

  setStyle: (key: string, value: string | null | undefined, index: number) => void;
  getStyle: (key: string, index: number) => string | undefined;

  theme: string | null;
  pointerShape: string | null;
  pointer2Shape: string | null;
}

export const Styles = ($component: HTMLElement, $slider: HTMLElement, $pointer2: HTMLElement | undefined) : IStyles => {

  let theme: string | null = null;
  let pointerShape: string | null = null;
  let pointer2Shape: string | null = null;

  const stylesMap: Map<string, string> = new Map();

  // ----- SETTERS ---------------------------

  const removeClassesStartWith = (prefix: string) => {
    const classList = [...$slider.classList];
    for(const className of classList){
      if(className.startsWith(prefix)){
        $slider.classList.remove(className);
      }
    }
  };

  const setTheme = (val: string | null) => {
    theme = val;
    if(typeof val === 'string'){
      $slider.classList.add(`theme-${ val }`);
    }
    else{
      removeClassesStartWith('theme-');
    }
  };

  const setPointerShape = (val: string | null, index: number) => {

    if(index < 2){
      pointerShape = val;

      if(typeof val === 'string'){
        $slider.classList.add('shape', `shape-${ val }`);
      }
      else{
        removeClassesStartWith('shape-');
      }
    }
    else{
      pointer2Shape = val;

      if(typeof val === 'string'){
        $slider.classList.add('shape2', `shape2-${ val }`);
      }
      else{
        removeClassesStartWith('shape2-');
      }
    }
  };

  const getKey = (key: string, index: number) => {
    return `${ key }-${ index }`;
  };

  const setStyle = (key: string, value: string | null | undefined, index: number) => {

    if(value === null || value === undefined){
      if(stylesMap.has(getKey(key, index))){
        stylesMap.delete(getKey(key, index));
      }

      if(index < 2){
        $slider.style.removeProperty(key);
      }
      else{
        $pointer2?.style.removeProperty(key);
      }
      return;
    }

    stylesMap.set(getKey(key, index), value);

    if(index < 2){
      $slider.style.setProperty(key, value);
    }
    else{
      $pointer2?.style.setProperty(key, value);
    }
  };

  const getStyle = (key: string, index: number) => {
    return stylesMap.get(getKey(key, index));
  };

  // ---- initialization ---------------------
  (() => {

    const list = [
      [CSSVariables.SliderWidth, $component.getAttribute(AttributesEnum.SliderWidth), 1],
      [CSSVariables.SliderHeight, $component.getAttribute(AttributesEnum.SliderHeight), 1],
      [CSSVariables.SliderRadius, $component.getAttribute(AttributesEnum.SliderRadius), 1],

      [CSSVariables.SliderBg, $component.getAttribute(AttributesEnum.SliderBg), 1],
      [CSSVariables.SliderBgHover, $component.getAttribute(AttributesEnum.SliderBgHover), 1],
      [CSSVariables.SliderBgFill, $component.getAttribute(AttributesEnum.SliderBgFill), 1],

      [CSSVariables.PointerWidth, $component.getAttribute(AttributesEnum.PointerWidth), 1],
      [CSSVariables.PointerHeight, $component.getAttribute(AttributesEnum.PointerHeight), 1],
      [CSSVariables.PointerRadius, $component.getAttribute(AttributesEnum.PointerRadius), 1],
      [CSSVariables.PointerBg, $component.getAttribute(AttributesEnum.PointerBg), 1],
      [CSSVariables.PointerBgHover, $component.getAttribute(AttributesEnum.PointerBgHover), 1],
      [CSSVariables.PointerBgFocus, $component.getAttribute(AttributesEnum.PointerBgFocus), 1],
      [CSSVariables.PointerShadow, $component.getAttribute(AttributesEnum.PointerShadow), 1],
      [CSSVariables.PointerShadowHover, $component.getAttribute(AttributesEnum.PointerShadowHover), 1],
      [CSSVariables.PointerShadowFocus, $component.getAttribute(AttributesEnum.PointerShadowFocus), 1],
      [CSSVariables.PointerBorder, $component.getAttribute(AttributesEnum.PointerBorder), 1],
      [CSSVariables.PointerBorderHover, $component.getAttribute(AttributesEnum.PointerBorderHover), 1],
      [CSSVariables.PointerBorderFocus, $component.getAttribute(AttributesEnum.PointerBorderFocus), 1],

      [CSSVariables.PointerWidth, $component.getAttribute(AttributesEnum.Pointer2Width), 2],
      [CSSVariables.PointerHeight, $component.getAttribute(AttributesEnum.Pointer2Height), 2],
      [CSSVariables.PointerRadius, $component.getAttribute(AttributesEnum.Pointer2Radius), 2],
      [CSSVariables.PointerBg, $component.getAttribute(AttributesEnum.Pointer2Bg), 2],
      [CSSVariables.PointerBgHover, $component.getAttribute(AttributesEnum.Pointer2BgHover), 2],
      [CSSVariables.PointerBgFocus, $component.getAttribute(AttributesEnum.Pointer2BgFocus), 2],
      [CSSVariables.PointerShadow, $component.getAttribute(AttributesEnum.Pointer2Shadow), 2],
      [CSSVariables.PointerShadowHover, $component.getAttribute(AttributesEnum.Pointer2ShadowHover), 2],
      [CSSVariables.PointerShadowFocus, $component.getAttribute(AttributesEnum.Pointer2ShadowFocus), 2],
      [CSSVariables.PointerBorder, $component.getAttribute(AttributesEnum.Pointer2Border), 2],
      [CSSVariables.PointerBorderHover, $component.getAttribute(AttributesEnum.Pointer2BorderHover), 2],
      [CSSVariables.PointerBorderFocus, $component.getAttribute(AttributesEnum.Pointer2BorderFocus), 2],
    ];

    for(const item of list){
      const [cssVariableName, cssVariableValue, index] = item;
      setStyle(cssVariableName as string, cssVariableValue as string, index as number);
    }

    setTheme($component.getAttribute(AttributesEnum.Theme));
    setPointerShape($component.getAttribute(AttributesEnum.PointerShape), 1);
    setPointerShape($component.getAttribute(AttributesEnum.Pointer2Shape), 2);
  })();

  return {
    setStyle,
    getStyle,

    get theme() {
      return theme;
    },

    set theme(val){
      setTheme(val);
    },

    get pointerShape() {
      return pointerShape;
    },

    set pointerShape(val){
      setPointerShape(val, 1);
    },

    get pointer2Shape() {
      return pointer2Shape;
    },

    set pointer2Shape(val){
      setPointerShape(val, 2);
    },

  };
};