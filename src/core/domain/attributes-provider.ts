import * as AttributesEnum from '../enums/attributes-enum';
import { ISlider, ROUND_DEFAULT } from '../ui/slider';
import { getBoolean, getNumber } from './math-provider';
import { stylePropertiesList } from '../ui/styles';

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

  AttributesEnum.AriaLabel1,
  AttributesEnum.AriaLabel2,

  AttributesEnum.AnimateOnClick,
];

if(window.tcRangeSliderObservedAttr){
  for(const attr of window.tcRangeSliderObservedAttr){
    observedAttributes.push(attr);
  }
}

export const onAttributesChange = (slider: ISlider, attrName: string, _oldValue: string, newValue: string) => {

  // try to get style property - ['--pointer-width', 'pointer-width', 1, 'pointerWidth']
  const found = stylePropertiesList.find(([_cssVariableName, _attrName, _index, _apiProperty]) => _attrName === attrName);
  if(found && slider.styles){
    const [_cssVariableName, _attrName, _index, _apiProperty] = found;
    slider.styles.setStyle(_cssVariableName, newValue, _index);
    return;
  }

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

    case AttributesEnum.KeyboardDisabled: {
      slider.keyboardDisabled = getBoolean(newValue);
      break;
    }

    case AttributesEnum.Pointer1Disabled: {
      const pointer1 = slider?.pointers[0];
      if(!pointer1) return;

      pointer1.disabled = getBoolean(newValue);
      break;
    }

    case AttributesEnum.Pointer2Disabled: {
      const pointer2 = slider?.pointers[1];
      if(!pointer2) return;

      pointer2.disabled = getBoolean(newValue);
      break;
    }

    case AttributesEnum.Data: {
      slider.setData(newValue);
      break;
    }

    case AttributesEnum.Type: {
      slider.type = newValue;
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