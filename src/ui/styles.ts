import { AttributesEnum } from '../enums/attributes-enum';
import { CSSVariables } from '../enums/css-vars-enum';

export interface IStyles {

  setStyle: (key: string, value: string | null | undefined) => void;
  getStyle: (key: string) => string | undefined;

  theme: string | null;
  pointerShape: string | null;
}

export const Styles = ($component: HTMLElement, $slider: HTMLElement) : IStyles => {

  let theme: string | null = null;
  let pointerShape: string | null = null;
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

  const setPointerShape = (val: string | null) => {
    pointerShape = val;
    if(typeof val === 'string'){
      $slider.classList.add('shape', `shape-${ val }`);
    }
    else{
      removeClassesStartWith('shape-');
    }
  };

  const setStyle = (key: string, value: string | null | undefined) => {
    if(value === null || value === undefined){
      if(stylesMap.has(key)){
        stylesMap.delete(key);
      }

      $slider.style.removeProperty(key);
      return;
    }

    stylesMap.set(key, value);
    $slider.style.setProperty(key, value);
  };

  const getStyle = (key: string) => {
    return stylesMap.get(key);
  };

  // ---- initialization ---------------------
  (() => {

    const list = [
      [CSSVariables.SliderWidth, $component.getAttribute(AttributesEnum.SliderWidth)],
      [CSSVariables.SliderHeight, $component.getAttribute(AttributesEnum.SliderHeight)],
      [CSSVariables.SliderRadius, $component.getAttribute(AttributesEnum.SliderRadius)],

      [CSSVariables.SliderBg, $component.getAttribute(AttributesEnum.SliderBg)],
      [CSSVariables.SliderBgHover, $component.getAttribute(AttributesEnum.SliderBgHover)],
      [CSSVariables.SliderBgFill, $component.getAttribute(AttributesEnum.SliderBgFill)],

      [CSSVariables.PointerWidth, $component.getAttribute(AttributesEnum.PointerWidth)],
      [CSSVariables.PointerHeight, $component.getAttribute(AttributesEnum.PointerHeight)],
      [CSSVariables.PointerRadius, $component.getAttribute(AttributesEnum.PointerRadius)],

      [CSSVariables.PointerBg, $component.getAttribute(AttributesEnum.PointerBg)],
      [CSSVariables.PointerBgHover, $component.getAttribute(AttributesEnum.PointerBgHover)],
      [CSSVariables.PointerBgFocus, $component.getAttribute(AttributesEnum.PointerBgFocus)],

      [CSSVariables.PointerShadow, $component.getAttribute(AttributesEnum.PointerShadow)],
      [CSSVariables.PointerShadowHover, $component.getAttribute(AttributesEnum.PointerShadowHover)],
      [CSSVariables.PointerShadowFocus, $component.getAttribute(AttributesEnum.PointerShadowFocus)],

      [CSSVariables.PointerBorder, $component.getAttribute(AttributesEnum.PointerBorder)],
      [CSSVariables.PointerBorderHover, $component.getAttribute(AttributesEnum.PointerBorderHover)],
      [CSSVariables.PointerBorderFocus, $component.getAttribute(AttributesEnum.PointerBorderFocus)],
    ];

    for(const item of list){
      const cssVariableName = item[0] as string;
      const cssVariableValue = item[1];
      setStyle(cssVariableName, cssVariableValue);
    }

    setTheme($component.getAttribute(AttributesEnum.Theme));
    setPointerShape($component.getAttribute(AttributesEnum.PointerShape));
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
      setPointerShape(val);
    },

  };
};