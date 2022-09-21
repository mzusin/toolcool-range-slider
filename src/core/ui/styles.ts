import * as AttributesEnum from '../enums/attributes-enum';
import * as CSSVariables from '../enums/css-vars-enum';
import { IPointer } from './pointer';
import { getAttributesByRegex } from '../domain/common-provider';

export interface IStyles {

  setStyle: (key: string, value: string | null | undefined, index: number) => void;
  getStyle: (key: string, index: number) => string | undefined;

  theme: string | null;
  pointerShape: string | null;
  pointer2Shape: string | null;
}

export const stylePropertiesList: [string, string, string, RegExp | null][] = [
  [CSSVariables.SliderWidth, AttributesEnum.SliderWidth, 'sliderWidth', null],
  [CSSVariables.SliderHeight, AttributesEnum.SliderHeight, 'sliderHeight', null],
  [CSSVariables.SliderRadius, AttributesEnum.SliderRadius, 'sliderRadius', null],

  [CSSVariables.SliderBg, AttributesEnum.SliderBg, 'sliderBg', null],
  [CSSVariables.SliderBgHover, AttributesEnum.SliderBgHover, 'sliderBgHover', null],
  [CSSVariables.SliderBgFill, AttributesEnum.SliderBgFill, 'sliderBgFill', null],

  [CSSVariables.PointerWidth, AttributesEnum.PointerWidth, 'pointer#Width', /^pointer([0-9]*)-width$/], // pointer-width, pointer2-width, ...
  [CSSVariables.PointerHeight, AttributesEnum.PointerHeight, 'pointer#Height', /^pointer([0-9]*)-height$/], // pointer-height$, pointer2-height, ...
  [CSSVariables.PointerRadius, AttributesEnum.PointerRadius, 'pointer#Radius', /^pointer([0-9]*)-radius$/], // pointer-radius, pointer2-radius, ...
  [CSSVariables.PointerBg, AttributesEnum.PointerBg, 'pointer#Bg', /^pointer([0-9]*)-bg$/], // pointer-bg, pointer2-bg, ...
  [CSSVariables.PointerBgHover, AttributesEnum.PointerBgHover, 'pointer#BgHover', /^pointer([0-9]*)-bg-hover$/], // pointer-bg-hover, pointer2-bg-hover, ...
  [CSSVariables.PointerBgFocus, AttributesEnum.PointerBgFocus, 'pointer#BgFocus', /^pointer([0-9]*)-bg-focus$/], // pointer-bg-focus, pointer2-bg-focus, ...
  [CSSVariables.PointerShadow, AttributesEnum.PointerShadow, 'pointer#Shadow', /^pointer([0-9]*)-shadow$/], // pointer-shadow, pointer2-shadow, ...
  [CSSVariables.PointerShadowHover, AttributesEnum.PointerShadowHover, 'pointer#ShadowHover', /^pointer([0-9]*)-shadow-hover$/], // pointer-shadow-hover, pointer2-shadow-hover, ...
  [CSSVariables.PointerShadowFocus, AttributesEnum.PointerShadowFocus, 'pointer#ShadowFocus', /^pointer([0-9]*)-shadow-focus$/], // pointer-shadow-focus, pointer2-shadow-focus, .
  [CSSVariables.PointerBorder, AttributesEnum.PointerBorder, 'pointer#Border', /^pointer([0-9]*)-border$/], // pointer-border, pointer2-border, ...
  [CSSVariables.PointerBorderHover, AttributesEnum.PointerBorderHover, 'pointer#BorderHover', /^pointer([0-9]*)-border-hover$/], // pointer-border-hover, pointer2-border-hover, ...
  [CSSVariables.PointerBorderFocus, AttributesEnum.PointerBorderFocus, 'pointer#BorderFocus', /^pointer([0-9]*)-border-focus$/], // pointer-border-focus, pointer2-border-focus, ...
];

export const Styles = ($component: HTMLElement, $slider: HTMLElement, pointers: IPointer[]) : IStyles => {

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

    const pointer = pointers[index];
    if(!pointer) return;

    const $styleHolder = index === 0 ? $slider : pointer.$pointer;

    if(value === null || value === undefined){
      if(stylesMap.has(getKey(key, index))){
        stylesMap.delete(getKey(key, index));
      }
      $styleHolder.style.removeProperty(key);
      return;
    }

    stylesMap.set(getKey(key, index), value);
    $styleHolder.style.setProperty(key, value);
  };

  const getStyle = (key: string, index: number) => {
    return stylesMap.get(getKey(key, index));
  };

  // ---- initialization ---------------------
  (() => {

    for(const item of stylePropertiesList){

      // '--pointer-width', 'pointer-width', 'pointerWidth', regex or null
      const [cssVariableName, attrName, apiProperty, regex] = item;

      // apply the styles via CSS variables;
      // if index = 0 ---> apply the style on the whole slider, so all
      // pointers will inherit it;
      // otherwise, apply styles on the individual pointers;
      if(regex){
        const list = getAttributesByRegex($component, regex);
        for(const item of list){
          const index = item[0];
          const value = item[1] as string;
          setStyle(cssVariableName, value, index);
        }
      }
      else{
        const cssVariableValue = $component.getAttribute(attrName);
        setStyle(cssVariableName, cssVariableValue, 0);
      }

      // add APIs --------------------------
      const apiProperties: [string, number][] = [];

      if(apiProperty.indexOf('#') === -1){
        apiProperties.push([apiProperty, 0]);
        apiProperties.push([apiProperty, 1]);
      }
      else{
        apiProperties.push([apiProperty.replace('#', ''), 0]);
        apiProperties.push([apiProperty.replace('#', '0'), 0]);
        apiProperties.push([apiProperty.replace('#', '1'), 0]);
        for(let i=1; i<pointers.length; i++){
          apiProperties.push([apiProperty.replace('#', (i + 1).toString()), i]);
        }
      }

      for(const item of apiProperties){
        try{
          const propName = item[0];
          const index = item[1];

          if(!$component.hasOwnProperty(propName)){
            Object.defineProperty($component, propName, {
              get () {
                return getStyle(cssVariableName, index);
              },

              set: (val) => {
                setStyle(cssVariableName, val, index);
              },
            });
          }
        }
        catch (ex){
          console.error(ex);
        }
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