import * as AttributesEnum from '../enums/attributes-enum';
import { ISlider, ROUND_DEFAULT } from '../ui/slider';
import { getBoolean, getNumber } from './math-provider';
import { stylePropertiesList } from '../ui/styles';

export const onAttributeChange = (slider: ISlider, attrName: string, newValue: string) => {

  // handle style properties ------------------------------------
  // try to get style property - ['--pointer-width', 'pointer-width', 1, 'pointerWidth']
  const found = stylePropertiesList.find(([_cssVariableName, _attrName, _apiProperty, _regex]) => {
    return _attrName.replace('#', '') === attrName.replace(/\d+/g, '');
  });

  if(found && slider.styles){
    const [_cssVariableName, _attrName, _apiProperty, _regex] = found;

    const key = attrName.replace(/\D/g, '').trim();
    const index = (key === '' || key === '0' || key === '1') ? 0 : (getNumber(key, 0) - 1);

    slider.styles.setStyle(_cssVariableName, newValue, index);
    return;
  }

  if(slider && slider.pluginsManager){
    slider.pluginsManager.onAttrChange(attrName, newValue);
  }

  // handle static properties ----------------------------------
  switch (attrName) {

    case AttributesEnum.Min: {
      slider.setMin(newValue);
      break;
    }

    case AttributesEnum.Max: {
      slider.setMax(newValue);
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

    case AttributesEnum.MousewheelDisabled: {
      slider.mousewheelDisabled = getBoolean(newValue);
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

    case AttributesEnum.Theme: {
      if(slider.styles){
        slider.styles.theme = newValue;
      }
      break;
    }

    case AttributesEnum.AnimateOnClick: {
      slider.animateOnClick = newValue;
      break;
    }
  }

  // handle dynamic properties ------------------------------------
  let property: string | null = null;

  if(/^value([0-9]*)$/.test(attrName)){
    property = 'value';
  }

  if(/^pointer([0-9]*)-disabled$/.test(attrName)){
    property = 'pointer-disabled';
  }

  if(/^aria-label([0-9]*)$/.test(attrName)){
    property = 'aria-label';
  }

  if(/^pointer([0-9]*)-shape$/.test(attrName)){
    property = 'pointer-shape';
  }

  if(!property) return;

  const key = attrName.replace(/\D/g, '').trim();
  const index = (key === '' || key === '0' || key === '1') ? 0 : (getNumber(key, 0) - 1)

  switch (property) {

    case 'value': {
      slider.setValue(newValue, index);
      break;
    }

    case 'pointer-disabled': {
      const pointer = slider?.pointers[index];
      if(!pointer) return;

      pointer.disabled = getBoolean(newValue);
      break;
    }

    case 'aria-label': {
      slider.setAriaLabel(index, newValue);
      break;
    }

    case 'pointer-shape': {
      if(slider.styles){
        slider.styles.setPointerShape(index, newValue);
      }
      break;
    }
  }
};