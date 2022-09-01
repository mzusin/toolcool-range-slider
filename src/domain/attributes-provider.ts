import { DEFAULT_ROUND_PLACES, getNumber, isNumber } from './math-provider';
import RangeSlider from '../app/range-slider';
import { parseData } from '../dal/data-provider';
import { STORAGE_KEY, StorageTypeEnum } from '../dal/storage-provider';
import { TypeEnum } from '../enums/type-enum';
import { AttributesEnum } from '../enums/attributes-enum';

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

export const getStringOrNumber = (slider: RangeSlider, attrName: string, defaultValue: number, dataDefaultValue: string | number) => {
  const val = slider.getAttribute(attrName);
  if (slider.data) {
    return isNumber(val) ? getNumber(val, dataDefaultValue) : (val ?? dataDefaultValue);
  }
  else {
    return getNumber(val, defaultValue);
  }
};

export const onAttributesChange = (slider: RangeSlider, attrName: string, $slider: HTMLElement | null) => {
  switch (attrName) {
    case AttributesEnum.Min: {
      slider.min = getStringOrNumber(slider, AttributesEnum.Min, 0, slider.data ? slider.data[0] : '');
      slider.render();
      break;
    }

    case AttributesEnum.Max: {
      slider.max = getStringOrNumber(slider, AttributesEnum.Max, 100, slider.data ? slider.data[slider.data.length - 1] : '');
      slider.render();
      break;
    }

    case AttributesEnum.Value: {
      slider.value = getStringOrNumber(slider, AttributesEnum.Value, slider.min as number, slider.data ? slider.data[0] : '');
      slider.render();
      break;
    }

    case AttributesEnum.Value1: {
      slider.value1 = getStringOrNumber(slider, AttributesEnum.Value1, slider.min as number, slider.data ? slider.data[0] : '');
      slider.render();
      break;
    }

    case AttributesEnum.Value2: {
      slider.value2 = getStringOrNumber(slider, AttributesEnum.Value2, slider.min as number, slider.data ? slider.data[0] : '');
      slider.render();
      break;
    }

    case AttributesEnum.Data: {
      slider.data = parseData(slider.getAttribute(AttributesEnum.Data));
      slider.render();
      break;
    }

    case AttributesEnum.Step: {
      slider.step = getNumber(slider.getAttribute(AttributesEnum.Step), undefined);
      break;
    }

    case AttributesEnum.Round: {
      slider.round = getNumber(slider.getAttribute(AttributesEnum.Round), DEFAULT_ROUND_PLACES);
      if (slider.round < 0) {
        slider.round = DEFAULT_ROUND_PLACES;
      }
      break;
    }

    case AttributesEnum.Type: {
      slider.type = slider.getAttribute(AttributesEnum.Type) as TypeEnum || undefined;
      slider.render();
      break;
    }

    case AttributesEnum.PointersOverlap: {
      slider.pointersOverlap = slider.getAttribute(AttributesEnum.PointersOverlap) === 'true';
      slider.render();
      break;
    }

    case AttributesEnum.PointersMinDistance: {
      slider.pointersMinDistance = getNumber(slider.getAttribute(AttributesEnum.PointersMinDistance), 0);
      slider.render();
      break;
    }

    case AttributesEnum.PointersMaxDistance: {
      slider.pointersMaxDistance = getNumber(slider.getAttribute(AttributesEnum.PointersMaxDistance), Infinity);
      slider.render();
      break;
    }

    case AttributesEnum.Theme: {
      slider.theme = slider.getAttribute(AttributesEnum.Theme) || undefined;
      slider.render();
      break;
    }

    case AttributesEnum.RightToLeft: {
      slider.rtl = slider.getAttribute(AttributesEnum.RightToLeft) === 'true';
      slider.render();
      break;
    }

    case AttributesEnum.BottomToTop: {
      slider.btt = slider.getAttribute(AttributesEnum.BottomToTop) === 'true';
      slider.render();
      break;
    }

    case AttributesEnum.Disabled: {
      slider.disabled = slider.getAttribute(AttributesEnum.Disabled) === 'true';
      slider.render();
      break;
    }

    case AttributesEnum.KeyboardDisabled: {
      slider.keyboardDisabled = slider.getAttribute(AttributesEnum.KeyboardDisabled) === 'true';
      slider.render();
      break;
    }

    case AttributesEnum.Pointer1Disabled: {
      slider.pointer1Disabled = slider.getAttribute(AttributesEnum.Pointer1Disabled) === 'true';
      slider.render();
      break;
    }

    case AttributesEnum.Pointer2Disabled: {
      slider.pointer2Disabled = slider.getAttribute(AttributesEnum.Pointer2Disabled) === 'true';
      slider.render();
      break;
    }

    case AttributesEnum.AnimateOnClick: {
      slider.animateOnClick = slider.getAttribute(AttributesEnum.AnimateOnClick) || undefined;
      if (slider.animateOnClick) {
        $slider?.style.setProperty('--tc-range-slider-animate-onclick', slider.animateOnClick);
      }
      slider.render();
      break;
    }

    case AttributesEnum.Storage: {
      slider.storage = (slider.getAttribute(AttributesEnum.Storage) as StorageTypeEnum) || undefined;
      break;
    }

    case AttributesEnum.StorageKey: {
      slider.storageKey = slider.getAttribute(AttributesEnum.StorageKey) || STORAGE_KEY;
      break;
    }

    case AttributesEnum.ValueLabel: {
      slider.valueLabel = slider.getAttribute(AttributesEnum.ValueLabel) || undefined;
      slider.render();
      break;
    }

    case AttributesEnum.Value2Label: {
      slider.value2Label = slider.getAttribute(AttributesEnum.Value2Label) || undefined;
      slider.render();
      break;
    }

    case AttributesEnum.AriaLabel1: {
      slider.ariaLabel1 = slider.getAttribute(AttributesEnum.AriaLabel1) || undefined;
      slider.render();
      break;
    }

    case AttributesEnum.AriaLabel2: {
      slider.ariaLabel2 = slider.getAttribute(AttributesEnum.AriaLabel2) || undefined;
      slider.render();
      break;
    }

    case AttributesEnum.GenerateLabels: {
      slider.generateLabels = slider.getAttribute(AttributesEnum.GenerateLabels) === 'true';
      slider.render();
      break;
    }

    case AttributesEnum.SliderWidth: {
      slider.sliderWidth = slider.getAttribute(AttributesEnum.SliderWidth) || undefined;
      slider.render();
      break;
    }

    case AttributesEnum.SliderHeight: {
      slider.sliderHeight = slider.getAttribute(AttributesEnum.SliderHeight) || undefined;
      slider.render();
      break;
    }

    case AttributesEnum.SliderRadius: {
      slider.sliderRadius = slider.getAttribute(AttributesEnum.SliderRadius) || undefined;
      slider.render();
      break;
    }

    case AttributesEnum.SliderBg: {
      slider.sliderBg = slider.getAttribute(AttributesEnum.SliderBg) || undefined;
      slider.render();
      break;
    }

    case AttributesEnum.SliderBgHover: {
      slider.sliderBgHover = slider.getAttribute(AttributesEnum.SliderBgHover) || undefined;
      slider.render();
      break;
    }

    case AttributesEnum.SliderBgFill: {
      slider.sliderBgFill = slider.getAttribute(AttributesEnum.SliderBgFill) || undefined;
      slider.render();
      break;
    }

    case AttributesEnum.PointerWidth: {
      slider.pointerWidth = slider.getAttribute(AttributesEnum.PointerWidth) || undefined;
      slider.render();
      break;
    }

    case AttributesEnum.PointerHeight: {
      slider.pointerHeight = slider.getAttribute(AttributesEnum.PointerHeight) || undefined;
      slider.render();
      break;
    }

    case AttributesEnum.PointerRadius: {
      slider.pointerRadius = slider.getAttribute(AttributesEnum.PointerRadius) || undefined;
      slider.render();
      break;
    }

    case AttributesEnum.PointerShape: {
      slider.pointerShape = slider.getAttribute(AttributesEnum.PointerShape) || undefined;
      slider.render();
      break;
    }

    case AttributesEnum.PointerBg: {
      slider.pointerBg = slider.getAttribute(AttributesEnum.PointerBg) || undefined;
      slider.render();
      break;
    }

    case AttributesEnum.PointerBgHover: {
      slider.pointerBgHover = slider.getAttribute(AttributesEnum.PointerBgHover) || undefined;
      slider.render();
      break;
    }

    case AttributesEnum.PointerBgFocus: {
      slider.pointerBgFocus = slider.getAttribute(AttributesEnum.PointerBgFocus) || undefined;
      slider.render();
      break;
    }

    case AttributesEnum.PointerShadow: {
      slider.pointerShadow = slider.getAttribute(AttributesEnum.PointerShadow) || undefined;
      slider.render();
      break;
    }

    case AttributesEnum.PointerShadowHover: {
      slider.pointerShadowHover = slider.getAttribute(AttributesEnum.PointerShadowHover) || undefined;
      slider.render();
      break;
    }

    case AttributesEnum.PointerShadowFocus: {
      slider.pointerShadowFocus = slider.getAttribute(AttributesEnum.PointerShadowFocus) || undefined;
      slider.render();
      break;
    }

    case AttributesEnum.PointerBorder: {
      slider.pointerBorder = slider.getAttribute(AttributesEnum.PointerBorder) || undefined;
      slider.render();
      break;
    }

    case AttributesEnum.PointerBorderHover: {
      slider.pointerBorderHover = slider.getAttribute(AttributesEnum.PointerBorderHover) || undefined;
      slider.render();
      break;
    }

    case AttributesEnum.PointerBorderFocus: {
      slider.pointerBorderFocus = slider.getAttribute(AttributesEnum.PointerBorderFocus) || undefined;
      slider.render();
      break;
    }
  }
};