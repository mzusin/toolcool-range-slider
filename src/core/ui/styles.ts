import * as AttributesEnum from '../enums/attributes-enum';
import * as CSSVariables from '../enums/css-vars-enum';
import { IPointer } from './pointer';
import { getAttributesByRegex } from '../domain/common-provider';

export interface IStyles {

  setStyle: (key: string, value: string | null | undefined, index: number) => void;
  getStyle: (key: string, index: number) => string | undefined;

  theme: string | null;
  readonly pointerShapes: (string | null)[];
  setPointerShape: (index: number, value: string | null) => void;
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
  const pointerShapes: (string | null)[] = [];
  const stylesMap: Map<string, string> = new Map();

  // ----- SETTERS ---------------------------

  const removeClassesStartWith = (prefix: string, $element = $slider) => {
    const classList = [...$element.classList];
    for(const className of classList){
      if(className.startsWith(prefix)){
        $slider.classList.remove(className);
      }
    }
  };

  const removeClasses = () => {
    // remove shape classes from $slider
    removeClassesStartWith('shape');

    // remove shape classes from pointers (if there are any)
    const $pointers = $slider.querySelectorAll('.pointer');
    for(const $pointer of $pointers){
      removeClassesStartWith('shape', $pointer as HTMLElement);
    }
  };

  const setTheme = (val: string | null) => {
    theme = val;
    removeClassesStartWith('theme-');

    if(typeof val === 'string'){
      $slider.classList.add(`theme-${ val }`);
    }
  };

  const updatePointerShapes = () => {
    removeClasses();

    if(pointerShapes.length <= 0) return;

    // first shape is added to the slider, as it should be applied on all pointers (potentially)
    $slider.classList.add('shape', `shape-${ pointerShapes[0] }`);

    // other shapes should be added to the relevant pointers each;
    for(let i=1; i<pointerShapes.length; i++){
      const item = pointerShapes[i];
      if(!item) continue;

      const $pointer = $slider.querySelector(`.pointer-${ i }`);
      if(!$pointer) continue;

      $pointer.classList.add('shape', `shape-${ item }`);
    }
  };

  const setPointerShape = (index: number, value: string) => {
    pointerShapes[index] = value;
    updatePointerShapes();
  };

  const setPointerShapes = () => {

    removeClasses();

    // pointer-shape, pointer2-shape, ...
    const list = getAttributesByRegex($component, /^pointer([0-9]*)-shape$/);
    if(list.size <= 0) return;

    // save shapes to the list that can be used for the getter APIs later
    for(const item of list){
      const index = item[0] as number;
      pointerShapes[index] = item[1] as string;
    }

    updatePointerShapes();
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

          if(!Object.prototype.hasOwnProperty.call($component, propName)){
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
    setPointerShapes();
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

    get pointerShapes() {
      return pointerShapes;
    },

    setPointerShape,
  };
};