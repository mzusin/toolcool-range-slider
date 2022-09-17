import { AttributesEnum } from '../enums/attributes-enum';
import { ISlider, ROUND_DEFAULT } from '../ui/slider';
import { getBoolean, getNumber } from './math-provider';
import { TypeEnum } from '../enums/type-enum';
import { CSSVariables } from '../enums/css-vars-enum';
import { StorageTypeEnum } from '../enums/storage-type-enum';

export const observedAttributes = [
  AttributesEnum.Value,
  AttributesEnum.Value1,
  AttributesEnum.Value2,

  AttributesEnum.PointersOverlap,
  AttributesEnum.PointersMinDistance,
  AttributesEnum.PointersMaxDistance,

  AttributesEnum.Data,
  AttributesEnum.Min,
  AttributesEnum.Max,
  AttributesEnum.Step,
  AttributesEnum.Round,
  AttributesEnum.Type,
  AttributesEnum.Theme,
  AttributesEnum.RightToLeft,
  AttributesEnum.BottomToTop,

  AttributesEnum.Disabled,
  AttributesEnum.KeyboardDisabled,
  AttributesEnum.Pointer1Disabled,
  AttributesEnum.Pointer2Disabled,
  AttributesEnum.RangeDragging,

  AttributesEnum.Storage,
  AttributesEnum.StorageKey,

  AttributesEnum.SliderWidth,
  AttributesEnum.SliderHeight,
  AttributesEnum.SliderRadius,

  AttributesEnum.SliderBg,
  AttributesEnum.SliderBgHover,
  AttributesEnum.SliderBgFill,

  AttributesEnum.PointerWidth,
  AttributesEnum.PointerHeight,
  AttributesEnum.PointerRadius,
  AttributesEnum.PointerShape,
  AttributesEnum.PointerBg,
  AttributesEnum.PointerBgHover,
  AttributesEnum.PointerBgFocus,
  AttributesEnum.PointerShadow,
  AttributesEnum.PointerShadowHover,
  AttributesEnum.PointerShadowFocus,
  AttributesEnum.PointerBorder,
  AttributesEnum.PointerBorderHover,
  AttributesEnum.PointerBorderFocus,

  AttributesEnum.Pointer2Width,
  AttributesEnum.Pointer2Height,
  AttributesEnum.Pointer2Radius,
  AttributesEnum.Pointer2Shape,
  AttributesEnum.Pointer2Bg,
  AttributesEnum.Pointer2BgHover,
  AttributesEnum.Pointer2BgFocus,
  AttributesEnum.Pointer2Shadow,
  AttributesEnum.Pointer2ShadowHover,
  AttributesEnum.Pointer2ShadowFocus,
  AttributesEnum.Pointer2Border,
  AttributesEnum.Pointer2BorderHover,
  AttributesEnum.Pointer2BorderFocus,

  AttributesEnum.GenerateLabels,
  AttributesEnum.AriaLabel1,
  AttributesEnum.AriaLabel2,

  AttributesEnum.AnimateOnClick,
];

if(window.tcRangeSliderObservedAttr){
  for(const attr of window.tcRangeSliderObservedAttr){
    observedAttributes.push(attr as AttributesEnum);
  }
}

export const onAttributesChange = (slider: ISlider, attrName: string, _oldValue: string, newValue: string) => {
  switch (attrName) {

    case AttributesEnum.Min: {
      slider.setMin(newValue);
      break;
    }

    case AttributesEnum.Max: {
      slider.setMax(newValue);
      break;
    }

    case AttributesEnum.Value: {
      slider.setValue(newValue, 1);
      break;
    }

    case AttributesEnum.Value1: {
      slider.setValue(newValue, 1);
      break;
    }

    case AttributesEnum.Value2: {
      slider.setValue(newValue, 2);
      break;
    }

    case AttributesEnum.Step: {
      slider.setStep(newValue);
      break;
    }

    case AttributesEnum.PointersOverlap: {
      slider.pointersOverlap = getBoolean(newValue);
      break;
    }

    case AttributesEnum.PointersMinDistance: {
      slider.pointersMinDistance = getNumber(newValue, 0);
      break;
    }

    case AttributesEnum.RangeDragging: {
      slider.rangeDragging = getBoolean(newValue);
      break;
    }

    case AttributesEnum.PointersMaxDistance: {
      slider.pointersMaxDistance = getNumber(newValue, Infinity);
      break;
    }

    case AttributesEnum.Disabled: {
      slider.disabled = getBoolean(newValue);
      break;
    }

    case AttributesEnum.Storage: {
      slider.storage = newValue as StorageTypeEnum;
      break;
    }

    case AttributesEnum.StorageKey: {
      slider.storageKey = newValue;
      break;
    }

    case AttributesEnum.KeyboardDisabled: {
      slider.keyboardDisabled = getBoolean(newValue);
      break;
    }

    case AttributesEnum.Pointer1Disabled: {
      slider.pointer1.disabled = getBoolean(newValue);
      break;
    }

    case AttributesEnum.Pointer2Disabled: {
      if(slider.pointer2){
        slider.pointer2.disabled = getBoolean(newValue);
      }
      break;
    }

    case AttributesEnum.Data: {
      slider.setData(newValue);
      break;
    }

    case AttributesEnum.Type: {
      slider.type = newValue as TypeEnum;
      break;
    }

    case AttributesEnum.RightToLeft: {
      slider.rightToLeft = getBoolean(newValue);
      break;
    }

    case AttributesEnum.BottomToTop: {
      slider.bottomToTop = getBoolean(newValue);
      break;
    }

    case AttributesEnum.GenerateLabels: {
      slider.generateLabels = getBoolean(newValue);
      break;
    }

    case AttributesEnum.Round: {
      slider.round = getNumber(newValue, ROUND_DEFAULT);
      break;
    }

    case AttributesEnum.AriaLabel1: {
      slider.ariaLabel1 = newValue;
      break;
    }

    case AttributesEnum.AriaLabel2: {
      slider.ariaLabel2 = newValue;
      break;
    }

    case AttributesEnum.SliderWidth: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.SliderWidth, newValue, 1);
      }
      break;
    }

    case AttributesEnum.SliderHeight: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.SliderHeight, newValue, 1);
      }
      break;
    }

    case AttributesEnum.SliderRadius: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.SliderRadius, newValue, 1);
      }
      break;
    }

    case AttributesEnum.SliderBg: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.SliderBg, newValue, 1);
      }
      break;
    }

    case AttributesEnum.SliderBgHover: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.SliderBgHover, newValue, 1);
      }
      break;
    }

    case AttributesEnum.SliderBgFill: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.SliderBgFill, newValue, 1);
      }
      break;
    }

    case AttributesEnum.PointerWidth: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.PointerWidth, newValue, 1);
      }
      break;
    }

    case AttributesEnum.Pointer2Width: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.PointerWidth, newValue, 2);
      }
      break;
    }

    case AttributesEnum.PointerHeight: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.PointerHeight, newValue, 1);
      }
      break;
    }

    case AttributesEnum.Pointer2Height: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.PointerHeight, newValue, 2);
      }
      break;
    }

    case AttributesEnum.PointerRadius: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.PointerRadius, newValue, 1);
      }
      break;
    }

    case AttributesEnum.Pointer2Radius: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.PointerRadius, newValue, 2);
      }
      break;
    }

    case AttributesEnum.PointerBg: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.PointerBg, newValue, 1);
      }
      break;
    }

    case AttributesEnum.Pointer2Bg: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.PointerBg, newValue, 2);
      }
      break;
    }

    case AttributesEnum.PointerBgHover: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.PointerBgHover, newValue, 1);
      }
      break;
    }

    case AttributesEnum.Pointer2BgHover: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.PointerBgHover, newValue, 2);
      }
      break;
    }

    case AttributesEnum.PointerBgFocus: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.PointerBgFocus, newValue, 1);
      }
      break;
    }

    case AttributesEnum.Pointer2BgFocus: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.PointerBgFocus, newValue, 2);
      }
      break;
    }

    case AttributesEnum.PointerShadow: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.PointerShadow, newValue, 1);
      }
      break;
    }

    case AttributesEnum.Pointer2Shadow: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.PointerShadow, newValue, 2);
      }
      break;
    }

    case AttributesEnum.PointerShadowHover: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.PointerShadowHover, newValue, 1);
      }
      break;
    }

    case AttributesEnum.Pointer2ShadowHover: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.PointerShadowHover, newValue, 2);
      }
      break;
    }

    case AttributesEnum.PointerShadowFocus: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.PointerShadowFocus, newValue, 1);
      }
      break;
    }

    case AttributesEnum.Pointer2ShadowFocus: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.PointerShadowFocus, newValue, 2);
      }
      break;
    }

    case AttributesEnum.PointerBorder: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.PointerBorder, newValue, 1);
      }
      break;
    }

    case AttributesEnum.Pointer2Border: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.PointerBorder, newValue, 2);
      }
      break;
    }

    case AttributesEnum.PointerBorderHover: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.PointerBorderHover, newValue, 1);
      }
      break;
    }

    case AttributesEnum.Pointer2BorderHover: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.PointerBorderHover, newValue, 2);
      }
      break;
    }

    case AttributesEnum.PointerBorderFocus: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.PointerBorderFocus, newValue, 1);
      }
      break;
    }

    case AttributesEnum.Pointer2BorderFocus: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.PointerBorderFocus, newValue, 2);
      }
      break;
    }

    case AttributesEnum.Theme: {
      if(slider.styles){
        slider.styles.theme = newValue;
      }
      break;
    }

    case AttributesEnum.PointerShape: {
      if(slider.styles){
        slider.styles.pointerShape = newValue;
      }
      break;
    }

    case AttributesEnum.Pointer2Shape: {
      if(slider.styles){
        slider.styles.pointer2Shape = newValue;
      }
      break;
    }

    case AttributesEnum.AnimateOnClick: {
      slider.animateOnClick = newValue;
      break;
    }
  }

  if(!slider || !slider.pluginsManager) return;
  slider.pluginsManager.onAttrChange(attrName, _oldValue, newValue);
};