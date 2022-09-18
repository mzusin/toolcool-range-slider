import * as AttributesEnum from '../enums/attributes-enum';
import * as CSSVariables from '../enums/css-vars-enum';

export interface IStyles {

  setStyle: (key: string, value: string | null | undefined, index: number) => void;
  getStyle: (key: string, index: number) => string | undefined;

  theme: string | null;
  pointerShape: string | null;
  pointer2Shape: string | null;
}

export const stylePropertiesList: [string, string, number, string][] = [
  [CSSVariables.SliderWidth, AttributesEnum.SliderWidth, 1, 'sliderWidth'],
  [CSSVariables.SliderHeight, AttributesEnum.SliderHeight, 1, 'sliderHeight'],
  [CSSVariables.SliderRadius, AttributesEnum.SliderRadius, 1, 'sliderRadius'],

  [CSSVariables.SliderBg, AttributesEnum.SliderBg, 1, 'sliderBg'],
  [CSSVariables.SliderBgHover, AttributesEnum.SliderBgHover, 1, 'sliderBgHover'],
  [CSSVariables.SliderBgFill, AttributesEnum.SliderBgFill, 1, 'sliderBgFill'],

  [CSSVariables.PointerWidth, AttributesEnum.PointerWidth, 1, 'pointerWidth'],
  [CSSVariables.PointerHeight, AttributesEnum.PointerHeight, 1, 'pointerHeight'],
  [CSSVariables.PointerRadius, AttributesEnum.PointerRadius, 1, 'pointerRadius'],
  [CSSVariables.PointerBg, AttributesEnum.PointerBg, 1, 'pointerBg'],
  [CSSVariables.PointerBgHover, AttributesEnum.PointerBgHover, 1, 'pointerBgHover'],
  [CSSVariables.PointerBgFocus, AttributesEnum.PointerBgFocus, 1, 'pointerBgFocus'],
  [CSSVariables.PointerShadow, AttributesEnum.PointerShadow, 1, 'pointerShadow'],
  [CSSVariables.PointerShadowHover, AttributesEnum.PointerShadowHover, 1, 'pointerShadowHover'],
  [CSSVariables.PointerShadowFocus, AttributesEnum.PointerShadowFocus, 1, 'pointerShadowFocus'],
  [CSSVariables.PointerBorder, AttributesEnum.PointerBorder, 1, 'pointerBorder'],
  [CSSVariables.PointerBorderHover, AttributesEnum.PointerBorderHover, 1, 'pointerBorderHover'],
  [CSSVariables.PointerBorderFocus, AttributesEnum.PointerBorderFocus, 1, 'pointerBorderFocus'],

  [CSSVariables.PointerWidth, AttributesEnum.Pointer2Width, 2, 'pointer2Width'],
  [CSSVariables.PointerHeight, AttributesEnum.Pointer2Height, 2, 'pointer2Height'],
  [CSSVariables.PointerRadius, AttributesEnum.Pointer2Radius, 2, 'pointer2Radius'],
  [CSSVariables.PointerBg, AttributesEnum.Pointer2Bg, 2, 'pointer2Bg'],
  [CSSVariables.PointerBgHover, AttributesEnum.Pointer2BgHover, 2, 'pointer2BgHover'],
  [CSSVariables.PointerBgFocus, AttributesEnum.Pointer2BgFocus, 2, 'pointer2BgFocus'],
  [CSSVariables.PointerShadow, AttributesEnum.Pointer2Shadow, 2, 'pointer2Shadow'],
  [CSSVariables.PointerShadowHover, AttributesEnum.Pointer2ShadowHover, 2, 'pointer2ShadowHover'],
  [CSSVariables.PointerShadowFocus, AttributesEnum.Pointer2ShadowFocus, 2, 'pointer2ShadowFocus'],
  [CSSVariables.PointerBorder, AttributesEnum.Pointer2Border, 2, 'pointer2Border'],
  [CSSVariables.PointerBorderHover, AttributesEnum.Pointer2BorderHover, 2, 'pointer2BorderHover'],
  [CSSVariables.PointerBorderFocus, AttributesEnum.Pointer2BorderFocus, 2, 'pointer2BorderFocus'],
];

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


    for(const item of stylePropertiesList){
      // '--pointer-width', 'pointer-width', 1, 'pointerWidth'
      const [cssVariableName, attrName, index, apiProperty] = item;
      const cssVariableValue = $component.getAttribute(attrName);
      setStyle(cssVariableName, cssVariableValue, index);

      try{
        if(!$component.hasOwnProperty(apiProperty)){
          Object.defineProperty($component, apiProperty, {
            get () {
              return getStyle(cssVariableName, index);
            },

            set: (_val) => {
              setStyle(cssVariableName, _val, index);
            },
          });
        }
      }
      catch (ex){
        console.error(ex);
      }
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