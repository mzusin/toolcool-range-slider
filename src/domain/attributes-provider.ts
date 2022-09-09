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

  AttributesEnum.ValueLabel,
  AttributesEnum.Value2Label,
  AttributesEnum.GenerateLabels,
  AttributesEnum.AriaLabel1,
  AttributesEnum.AriaLabel2,

  AttributesEnum.AnimateOnClick,
];

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

    case AttributesEnum.ValueLabel: {
      if(slider.labels){
        slider.labels.referenceLabel1 = newValue;
      }
      break;
    }

    case AttributesEnum.Value2Label: {
      if(slider.labels){
        slider.labels.referenceLabel2 = newValue;
      }
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
        slider.styles.setStyle(CSSVariables.SliderWidth, newValue);
      }
      break;
    }

    case AttributesEnum.SliderHeight: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.SliderHeight, newValue);
      }
      break;
    }

    case AttributesEnum.SliderRadius: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.SliderRadius, newValue);
      }
      break;
    }

    case AttributesEnum.SliderBg: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.SliderBg, newValue);
      }
      break;
    }

    case AttributesEnum.SliderBgHover: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.SliderBgHover, newValue);
      }
      break;
    }

    case AttributesEnum.SliderBgFill: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.SliderBgFill, newValue);
      }
      break;
    }

    case AttributesEnum.PointerWidth: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.PointerWidth, newValue);
      }
      break;
    }

    case AttributesEnum.PointerHeight: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.PointerHeight, newValue);
      }
      break;
    }

    case AttributesEnum.PointerRadius: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.PointerRadius, newValue);
      }
      break;
    }

    case AttributesEnum.PointerBg: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.PointerBg, newValue);
      }
      break;
    }

    case AttributesEnum.PointerBgHover: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.PointerBgHover, newValue);
      }
      break;
    }

    case AttributesEnum.PointerBgFocus: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.PointerBgFocus, newValue);
      }
      break;
    }

    case AttributesEnum.PointerShadow: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.PointerShadow, newValue);
      }
      break;
    }

    case AttributesEnum.PointerShadowHover: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.PointerShadowHover, newValue);
      }
      break;
    }

    case AttributesEnum.PointerShadowFocus: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.PointerShadowFocus, newValue);
      }
      break;
    }

    case AttributesEnum.PointerBorder: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.PointerBorder, newValue);
      }
      break;
    }

    case AttributesEnum.PointerBorderHover: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.PointerBorderHover, newValue);
      }
      break;
    }

    case AttributesEnum.PointerBorderFocus: {
      if(slider.styles){
        slider.styles.setStyle(CSSVariables.PointerBorderFocus, newValue);
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

    case AttributesEnum.AnimateOnClick: {
      slider.animateOnClick = newValue;
      break;
    }
  }
};