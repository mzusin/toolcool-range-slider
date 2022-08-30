import { DEFAULT_ROUND_PLACES, getNumber, isNumber } from './math-provider';
import RangeSlider from '../app/range-slider';
import { parseData } from '../dal/data-provider';
import { STORAGE_KEY, StorageTypeEnum } from '../dal/storage-provider';
import { TypeEnum } from '../enums/type-enum';

export const observedAttributes = [
  'value',
  'value1',
  'value2',
  'pointers-overlap',

  'data',
  'min',
  'max',
  'step',
  'round',
  'type',
  'theme',
  'disabled',
  'rtl',
  'btt',

  'storage',
  'storage-key',

  'slider-width',
  'slider-height',
  'slider-radius',

  'slider-bg',
  'slider-bg-hover',
  'slider-bg-fill',

  'pointer-width',
  'pointer-height',
  'pointer-radius',
  'pointer-shape',

  'pointer-bg',
  'pointer-bg-hover',
  'pointer-bg-focus',

  'pointer-shadow',
  'pointer-shadow-hover',
  'pointer-shadow-focus',

  'pointer-border',
  'pointer-border-hover',
  'pointer-border-focus',

  'value-label',
  'value2-label',
  'generate-labels',
  'animate-onclick',
];

export const getStringOrNumber = (slider: RangeSlider, attrName: string, defaultValue: number, dataDefaultValue: string | number) => {
  const _val = slider.getAttribute(attrName);
  if (slider.data) {
    return isNumber(_val) ? getNumber(_val, dataDefaultValue) : _val ?? dataDefaultValue;
  }
  else {
    return getNumber(_val, defaultValue);
  }
};

export const onAttributesChange = (slider: RangeSlider, attrName: string, $slider: HTMLElement | null) => {
  switch (attrName) {
    case 'min': {
      slider.min = getStringOrNumber(slider, 'min', 0, slider.data ? slider.data[0] : '');
      slider.render();
      break;
    }

    case 'max': {
      slider.max = getStringOrNumber(slider, 'max', 100, slider.data ? slider.data[slider.data.length - 1] : '');
      slider.render();
      break;
    }

    case 'value': {
      slider.value = getStringOrNumber(slider, 'value', slider.min as number, slider.data ? slider.data[0] : '');
      slider.render();
      break;
    }

    case 'value1': {
      slider.value1 = getStringOrNumber(slider, 'value1', slider.min as number, slider.data ? slider.data[0] : '');
      slider.render();
      break;
    }

    case 'value2': {
      slider.value2 = getStringOrNumber(slider, 'value2', slider.min as number, slider.data ? slider.data[0] : '');
      slider.render();
      break;
    }

    case 'data': {
      slider.data = parseData(slider.getAttribute('data'));
      slider.render();
      break;
    }

    case 'step': {
      slider.step = getNumber(slider.getAttribute('step'), undefined);
      break;
    }

    case 'round': {
      slider.round = getNumber(slider.getAttribute('round'), DEFAULT_ROUND_PLACES);
      if (slider.round < 0) {
        slider.round = DEFAULT_ROUND_PLACES;
      }
      break;
    }

    case 'type': {
      slider.type = slider.getAttribute('type') as TypeEnum || undefined;
      slider.render();
      break;
    }

    case 'pointers-overlap': {
      slider.pointersOverlap = slider.getAttribute('pointers-overlap') === 'true';
      slider.render();
      break;
    }

    case 'theme': {
      slider.theme = slider.getAttribute('theme') || undefined;
      slider.render();
      break;
    }

    case 'rtl': {
      slider.rtl = slider.getAttribute('rtl') === 'true';
      slider.render();
      break;
    }

    case 'btt': {
      slider.btt = slider.getAttribute('btt') === 'true';
      slider.render();
      break;
    }

    case 'disabled': {
      slider.disabled = slider.getAttribute('disabled') === 'true';
      slider.render();
      break;
    }

    case 'animate-onclick': {
      slider.animateOnClick = slider.getAttribute('animate-onclick') || undefined;
      if (slider.animateOnClick) {
        $slider?.style.setProperty('--tc-range-slider-animate-onclick', slider.animateOnClick);
      }
      slider.render();
      break;
    }

    case 'storage': {
      slider.storage = (slider.getAttribute('storage') as StorageTypeEnum) || undefined;
      break;
    }

    case 'storage-key': {
      slider.storageKey = slider.getAttribute('storage-key') || STORAGE_KEY;
      break;
    }

    case 'value-label': {
      slider.valueLabel = slider.getAttribute('value-label') || undefined;
      slider.render();
      break;
    }

    case 'value2-label': {
      slider.value2Label = slider.getAttribute('value2-label') || undefined;
      slider.render();
      break;
    }

    case 'generate-labels': {
      slider.generateLabels = slider.getAttribute('generate-labels') === 'true';
      slider.render();
      break;
    }

    case 'slider-width': {
      slider.sliderWidth = slider.getAttribute('slider-width') || undefined;
      slider.render();
      break;
    }

    case 'slider-height': {
      slider.sliderHeight = slider.getAttribute('slider-height') || undefined;
      slider.render();
      break;
    }

    case 'slider-radius': {
      slider.sliderRadius = slider.getAttribute('slider-radius') || undefined;
      slider.render();
      break;
    }

    case 'slider-bg': {
      slider.sliderBg = slider.getAttribute('slider-bg') || undefined;
      slider.render();
      break;
    }

    case 'slider-bg-hover': {
      slider.sliderBgHover = slider.getAttribute('slider-bg-hover') || undefined;
      slider.render();
      break;
    }

    case 'slider-bg-fill': {
      slider.sliderBgFill = slider.getAttribute('slider-bg-fill') || undefined;
      slider.render();
      break;
    }

    case 'pointer-width': {
      slider.pointerWidth = slider.getAttribute('pointer-width') || undefined;
      slider.render();
      break;
    }

    case 'pointer-height': {
      slider.pointerHeight = slider.getAttribute('pointer-height') || undefined;
      slider.render();
      break;
    }

    case 'pointer-radius': {
      slider.pointerRadius = slider.getAttribute('pointer-radius') || undefined;
      slider.render();
      break;
    }

    case 'pointer-shape': {
      slider.pointerShape = slider.getAttribute('pointer-shape') || undefined;
      slider.render();
      break;
    }

    case 'pointer-bg': {
      slider.pointerBg = slider.getAttribute('pointer-bg') || undefined;
      slider.render();
      break;
    }

    case 'pointer-bg-hover': {
      slider.pointerBgHover = slider.getAttribute('pointer-bg-hover') || undefined;
      slider.render();
      break;
    }

    case 'pointer-bg-focus': {
      slider.pointerBgFocus = slider.getAttribute('pointer-bg-focus') || undefined;
      slider.render();
      break;
    }

    case 'pointer-shadow': {
      slider.pointerShadow = slider.getAttribute('pointer-shadow') || undefined;
      slider.render();
      break;
    }

    case 'pointer-shadow-hover': {
      slider.pointerShadowHover = slider.getAttribute('pointer-shadow-hover') || undefined;
      slider.render();
      break;
    }

    case 'pointer-shadow-focus': {
      slider.pointerShadowFocus = slider.getAttribute('pointer-shadow-focus') || undefined;
      slider.render();
      break;
    }

    case 'pointer-border': {
      slider.pointerBorder = slider.getAttribute('pointer-border') || undefined;
      slider.render();
      break;
    }

    case 'pointer-border-hover': {
      slider.pointerBorderHover = slider.getAttribute('pointer-border-hover') || undefined;
      slider.render();
      break;
    }

    case 'pointer-border-focus': {
      slider.pointerBorderFocus = slider.getAttribute('pointer-border-focus') || undefined;
      slider.render();
      break;
    }
  }
};