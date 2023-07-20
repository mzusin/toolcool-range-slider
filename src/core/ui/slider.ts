import { IPointer, Pointer } from './pointer';
import { convertRange, getBoolean, getNumber, isNumber, roundToStep, setDecimalPlaces } from '../domain/math-provider';
import * as AttributesEnum from '../enums/attributes-enum';
import { TData, TStep } from '../types';
import { findValueIndexInData, parseData } from '../dal/data-provider';
import * as TypeEnum from '../enums/type-enum';
import { IPanelFill, PanelFill } from './panel-fill';
import { sendChangeEvent, sendMouseDownEvent, sendMouseUpEvent } from '../domain/events-provider';
import { IStyles, Styles } from './styles';
import * as CSSVariables from '../enums/css-vars-enum';
import * as CssClasses from '../enums/css-classes-enum';
import { getAttributesByRegex } from '../domain/common-provider';
import { IPluginsManager, PluginsManager } from '../plugins/plugins-manager';
import { changePointersOrder, setZIndex } from '../domain/pointers-provider';

export interface ISlider {
  readonly pointers: IPointer[];
  readonly styles: IStyles | null;
  readonly pluginsManager: IPluginsManager | null;

  pointersOverlap: boolean;
  pointersMinDistance: number;
  pointersMaxDistance: number;
  rangeDragging: boolean;

  readonly min: number | string;
  readonly max: number | string;
  readonly step: TStep;
  readonly data: TData;

  type: string;
  rightToLeft: boolean;
  bottomToTop: boolean;
  disabled: boolean;
  keyboardDisabled: boolean;
  mousewheelDisabled: boolean;
  round: number;
  animateOnClick: string | undefined | boolean;

  getAriaLabel: (index: number) => (string | undefined);
  setAriaLabel: (index: number, ariaLabel: string | undefined) => void;

  setMin: (value: number | string | undefined | null) => void;
  setMax: (value: number | string | undefined | null) => void;
  setValue: (value: number | string | undefined | null, index: number) => void;
  setStep: (value: TStep | string) => void;
  setData: (value: TData | string | null | number) => void;
  getTextValue: (_percent: number | undefined) => undefined | string | number;

  addPointer: (value: number | string | undefined | null) => number;
  removePointer: () => number;

  destroy: () => void;
}

export const MIN_DEFAULT = 0;
export const MAX_DEFAULT = 100;
export const ROUND_DEFAULT = 2;
export const ANIMATE_ON_CLICK_DEFAULT = '0.3s';

export const Slider = ($component: HTMLElement, $slider: HTMLElement, pointersList: [IPointer, string | number | undefined][]) : ISlider => {

  const pointers = pointersList.map(item => item[0]);
  let selectedPointer: IPointer | null | undefined = null;
  let panelFill: IPanelFill | null = null;
  let styles: IStyles | null = null;
  let pluginsManager: IPluginsManager | null = null;

  let min = MIN_DEFAULT;
  let max = MAX_DEFAULT;
  let step: TStep = undefined; // step is defined in absolute units (not percent!)
  let data: TData = undefined;
  let type: string = TypeEnum.Horizontal;
  let round: number = ROUND_DEFAULT;
  let rightToLeft = false;
  let bottomToTop = false;

  let pointersOverlap = false;
  let pointersMinDistance = 0;
  let pointersMaxDistance = Infinity;

  let rangeDragging = false;

  let rangeDraggingStart: number | undefined = undefined;
  let rangeDraggingDiff: number | undefined = undefined;

  let disabled = false;
  let keyboardDisabled = false;
  let mousewheelDisabled = false;
  let animateOnClick: string | undefined = ANIMATE_ON_CLICK_DEFAULT;

  const ariaLabels: (string | undefined)[] = [];

  // -------------- EVENTS --------------------

  const onMouseDown = (evt: MouseEvent) => {
    if(disabled) return;

    if (evt.preventDefault) {
      evt.preventDefault();
    }

    onValueChange(evt);

    window.addEventListener('mousemove', onValueChange);
    window.addEventListener('mouseup', onMouseUp);

    sendMouseDownEvent($component, evt);
  };

  const onMouseUp = (evt: MouseEvent) => {
    if(disabled) return;

    rangeDraggingStart = undefined;
    rangeDraggingDiff = undefined;

    window.removeEventListener('mousemove', onValueChange);
    window.removeEventListener('mouseup', onMouseUp);

    if(animateOnClick){
      $slider.classList.add(CssClasses.AnimateOnClick);
    }

    sendMouseUpEvent($component, evt);
  };

  const getActivePointer = ($target: HTMLElement, percent: number) => {
    if(pointers.length <= 0) return;

    // if only 1 pointer exists --> return it
    if(pointers.length === 1){
      if(pointers[0].isClicked($target) && animateOnClick){
        $slider.classList.remove(CssClasses.AnimateOnClick);
      }

      return pointers[0];
    }

    const panelFillClicked = isPanelFillClicked($target);

    if(rangeDragging){

      let _dragPercent = percent;
      const stepPercent = getStepPercent(_dragPercent);
      if(stepPercent !== undefined){
        _dragPercent = roundToStep(_dragPercent, stepPercent);
      }

      if(panelFillClicked){
        rangeDraggingStart = _dragPercent;
        rangeDraggingDiff = 0;

        if(animateOnClick){
          $slider.classList.remove(CssClasses.AnimateOnClick);
        }
      }
      else{
        if(rangeDraggingStart !== undefined){
          rangeDraggingDiff = _dragPercent - rangeDraggingStart;
          rangeDraggingStart = _dragPercent;
        }
      }
    }

    if(!isPanelClicked($target) && !panelFillClicked){
      // if clicked directly on 1 of the pointers ---> return it
      for(const pointer of pointers){
        if(!pointer.isClicked($target) || pointer.disabled) continue;

        if(animateOnClick){
          $slider.classList.remove(CssClasses.AnimateOnClick);
        }

        return pointer;
      }

      // if already selected pointer ---> return it
      for(const pointer of pointers){
        if(selectedPointer === pointer) return pointer;
      }
    }

    // find the closest pointer and return it
    let minDistance = Infinity;
    let minDistancePointer = null;

    for(const pointer of pointers){
      if(pointer.disabled) continue;

      const distance = Math.abs(percent - pointer.percent);
      if(distance < minDistance){
        minDistance = distance;
        minDistancePointer = pointer;
      }
    }

    return minDistancePointer;
  };

  const getSelectedPointerIndex = () => {
    return pointers.findIndex(pointer => selectedPointer === pointer && !pointer.disabled);
  };

  const onValueChange = (evt: MouseEvent | TouchEvent) => {

    // find the percent [0, 100] of the current mouse position in vertical or horizontal slider
    let percent;

    if(type === TypeEnum.Vertical){
      const { height: boxHeight, top: boxTop } = $slider.getBoundingClientRect();
      const mouseY = evt.type.indexOf('mouse') !== -1 ? (evt as MouseEvent).clientY : (evt as TouchEvent).touches[0].clientY;
      const top = Math.min(Math.max(0, mouseY - boxTop), boxHeight);
      percent = (top * 100) / boxHeight;
    }
    else{
      const { width: boxWidth, left: boxLeft } = $slider.getBoundingClientRect();
      const mouseX = evt.type.indexOf('mouse') !== -1 ? (evt as MouseEvent).clientX : (evt as TouchEvent).touches[0].clientX;
      const left = Math.min(Math.max(0, mouseX - boxLeft), boxWidth);
      percent = (left * 100) / boxWidth;
    }

    if(rightToLeft || bottomToTop){
      percent = 100 - percent;
    }

    selectedPointer = getActivePointer(evt.target as HTMLElement, percent);

    if(selectedPointer) {
      // https://github.com/mzusin/toolcool-range-slider/issues/15
      setZIndex(pointers, selectedPointer);
    }

    // handle range dragging
    if(rangeDragging && pointers.length > 1 && rangeDraggingDiff !== undefined){

      const firstPointer = pointers[0];
      const lastPointer = pointers[pointers.length - 1];

      const firstSmallerThanMin = firstPointer.percent + rangeDraggingDiff < 0;
      const lastGreaterThanMax = lastPointer.percent + rangeDraggingDiff > 100;
      if(firstSmallerThanMin || lastGreaterThanMax) return;

      for(let i=0; i<pointers.length; i++){
        setPositions(i, pointers[i].percent + rangeDraggingDiff);
      }

      return;
    }

    const foundIndex = getSelectedPointerIndex();

    if(foundIndex !== -1){
      setPositions(foundIndex, percent);
      selectedPointer?.$pointer.focus();
    }
  };

  const pointerMouseWheel = (evt: WheelEvent) => {
    if (disabled ||
      document.activeElement !== $component ||
      selectedPointer?.disabled) return;

    evt.stopPropagation();
    evt.preventDefault();

    const scrollTop = evt.deltaY < 0;
    const rightOrBottom = rightToLeft || bottomToTop;
    const shouldGoPrev = scrollTop ? !rightOrBottom : rightOrBottom;

    const foundIndex = getSelectedPointerIndex();
    if(foundIndex === -1) return;

    if(shouldGoPrev){
      goPrev(foundIndex, pointers[foundIndex].percent);
    }
    else{
      goNext(foundIndex, pointers[foundIndex].percent);
    }
  };

  // -------------- Arrows --------------------

  const arrowLeft = (pointerIndex: number) => {
    if(disabled || keyboardDisabled) return;

    if(type === TypeEnum.Vertical){
      if(bottomToTop){
        // jump to the max value
        setPositions(pointerIndex, 100);
      }
      else{
        // jump to the min value
        setPositions(pointerIndex, 0);
      }
    }
    else{
      if(rightToLeft){
        // go forward
        goNext(pointerIndex, pointers[pointerIndex].percent);
      }
      else{
        // go backwards
        goPrev(pointerIndex, pointers[pointerIndex].percent);
      }
    }
  };

  const arrowRight = (pointerIndex: number) => {
    if(disabled || keyboardDisabled) return;

    if(type === TypeEnum.Vertical){
      if(bottomToTop){
        // jump to the min value
        setPositions(pointerIndex, 0);
      }
      else{
        // jump to the max value
        setPositions(pointerIndex, 100);
      }
    }
    else{
      if(rightToLeft){
        // go backward
        goPrev(pointerIndex, pointers[pointerIndex].percent);
      }
      else{
        // go forward
        goNext(pointerIndex, pointers[pointerIndex].percent);
      }
    }
  };

  const arrowUp = (pointerIndex: number) => {
    if(disabled || keyboardDisabled) return;

    if(type === TypeEnum.Vertical){
      if(bottomToTop){
        // go forwards
        goNext(pointerIndex, pointers[pointerIndex].percent);
      }
      else{
        // go backwards
        goPrev(pointerIndex, pointers[pointerIndex].percent);
      }
    }
    else{
      if(rightToLeft){
        // jump to the max value
        setPositions(pointerIndex, 100);
      }
      else{
        // jump to the min value
        setPositions(pointerIndex, 0);
      }
    }
  };

  const arrowDown = (pointerIndex: number) => {
    if(disabled || keyboardDisabled) return;

    if(type === TypeEnum.Vertical){
      if(bottomToTop){
        // go backward
        goPrev(pointerIndex, pointers[pointerIndex].percent);
      }
      else{
        // go forward
        goNext(pointerIndex, pointers[pointerIndex].percent);
      }
    }
    else{
      if(rightToLeft){
        // jump to the min value
        setPositions(pointerIndex, 0);
      }
      else{
        // jump to the max value
        setPositions(pointerIndex, 100);
      }
    }
  };

  // -------------- Helpers ------------------------

  const isPanelClicked = ($target: HTMLElement) => {
    return $target.classList.contains('panel');
  };

  const isPanelFillClicked = ($target: HTMLElement) => {
    return $target.classList.contains('panel-fill');
  };

  const goPrev = (index: number, _percent: number | undefined) => {
    if(_percent === undefined) return;

    let stepPercent = getStepPercent(_percent);

    if(stepPercent == undefined){
      stepPercent = 1;
    }

    _percent -= stepPercent;

    if(_percent < 0){
      _percent = 0;
    }

    setPositions(index, _percent);
  };

  const goNext = (index: number, _percent: number | undefined) => {

    if(_percent === undefined) return;

    let stepPercent = getStepPercent(_percent);

    if(stepPercent == undefined){
      stepPercent = 1;
    }

    _percent += stepPercent;

    if(_percent > 100){
      _percent = 100;
    }

    setPositions(index, _percent);
  };

  const updatePlugins = () => {

    if(!pluginsManager) return;
    pluginsManager.update({
      percents: getPercents(),
      values: getValues(),
      $pointers: getPointerElements(),

      min: getNumericMin(),
      max: getNumericMax(),

      data: getData(),
      step: getStep(),
      round: getRound(),
      type: getType(),

      textMin: getMin(),
      textMax: getMax(),

      rightToLeft: isRightToLeft(),
      bottomToTop: isBottomToTop(),

      pointersOverlap: isPointersOverlap(),
      pointersMinDistance: getPointersMinDistance(),
      pointersMaxDistance: getPointersMaxDistance(),
      rangeDragging: isRangeDraggingEnabled(),

      disabled: isDisabled(),
      keyboardDisabled: isKeyboardDisabled(),
      mousewheelDisabled: isMousewheelDisabled(),
    });
  };

  const requestUpdatePlugins = () => {
    updatePlugins();
  };

  // -------------- Getters --------------------

  const getPointerLeftWall = (pointerIndex: number) => {
    if(pointersOverlap || pointers.length <= 1 || max === min) return undefined;

    if(pointerIndex === 0){
      // by default 0, but if min distance between pointers is defined --->
      // then the distance to the next pointer
      const converted = pointersMaxDistance * 100 / (max - min);
      return Math.max(0, pointers[pointerIndex + 1].percent - converted);
    }
    else{
      // by default previous pointer, but if min distance between pointers is defined --->
      // then the distance to the next pointer
      const converted = pointersMinDistance * 100 / (max - min);
      return Math.min(pointers[pointerIndex - 1].percent + converted, 100);
    }
  };

  const getPointerRightWall = (pointerIndex: number) => {
    if(pointersOverlap || pointers.length <= 1 || max === min) return undefined;

    if(pointerIndex === pointers.length - 1){
      // by default 100, but if min distance between pointers is defined --->
      // then the distance to the previous pointer
      const converted = pointersMaxDistance * 100 / (max - min);
      return Math.min(pointers[pointerIndex - 1].percent + converted, 100);
    }
    else{
      // distance to the next pointer
      const converted = pointersMinDistance * 100 / (max - min);
      return Math.max(0, pointers[pointerIndex + 1].percent - converted);
    }
  };

  /**
   * user step is defined in absolute values;
   * this function return it as %
   */
  const getStepPercent = (_percent: number) => {

    let _step: number | undefined | null;

    if(typeof step === 'function'){
      // convert percent to value: [0, 100] to [min, max]
      const currentValue = convertRange(0, 100, min, max, _percent);

      // the slider function provided by user should return an absolute value, not %
      _step = step(currentValue, _percent);
    }
    else{
      // the step value provided by the user should be absolute value (not %), undefined, or null
      _step = step;
    }

    // round percent to step
    if(isNumber(_step)){

      /*
      min ......... max (step = 1)
      0 ........... 100 (step = ?)

      (max - min) ....... step (=1)
      100 ............... ?

      ? = 100 * step / (max - min)
      */

      const diff = max - min;
      _step = diff === 0 ? 0 :  (_step as number) * 100 / diff;

      return _step;
    }

    return undefined;
  };

  const getTextValue = (_percent: number | undefined) => {
    if(_percent === undefined) return undefined;

    const val = convertRange(0, 100, min, max, _percent);

    if(data !== undefined){
      return data[Math.round(val)];
    }

    return setDecimalPlaces(val, round);
  };

  const getMin = () => {

    if(data !== undefined){
      return data[min];
    }

    return min;
  };

  const getMax = () => {

    if(data !== undefined){
      return data[max];
    }

    return max;
  };

  const getStep = () => {
    return step;
  };

  const getPointerMin = (index: number) => {
    if(index <= 0 || pointersOverlap) return getMin();
    return getTextValue(pointers[index - 1].percent) ?? '';
  };

  const getPointerMax = (index: number) => {
    if(pointers.length <= 1 ||
      index >= pointers.length - 1 ||
      pointersOverlap) return getMax();

    return getTextValue(pointers[index + 1].percent) ?? '';
  };

  const getPercents = () => {
    return pointers.map(pointer => pointer.percent);
  };

  const getValues = () => {
    return pointers.map(pointer => getTextValue(pointer.percent));
  }

  const getPointerElements = () => {
    return pointers.map(pointer => pointer.$pointer);
  };

  const getNumericMin = () => {
    return min;
  };

  const getNumericMax = () => {
    return max;
  };

  const getData = () => {
    return data;
  };

  const getType = () => {
    return type;
  };

  const getRound = () => {
    return round;
  };

  const getPointersMinDistance = () => {
    return pointersMinDistance;
  };

  const getPointersMaxDistance = () => {
    return pointersMaxDistance;
  };

  const getAriaLabel = (index: number) => {
    return ariaLabels[index];
  };

  const isRightToLeft = () => {
    return rightToLeft;
  };

  const isBottomToTop = () => {
    return bottomToTop;
  };

  const isDisabled = () => {
    return disabled;
  };

  const isKeyboardDisabled = () => {
    return keyboardDisabled;
  };

  const isMousewheelDisabled = () => {
    return mousewheelDisabled;
  };

  const isPointersOverlap = () => {
    return pointersOverlap;
  };

  const isRangeDraggingEnabled = () => {
    return rangeDragging;
  };

  // -------------- Setters --------------------

  const setPositions = (index: number, _percent: number | undefined) => {
    if(_percent === undefined) return;

    // round percent to step
    const stepPercent = getStepPercent(_percent);

    if(stepPercent !== undefined){
      _percent = roundToStep(_percent, stepPercent);
    }

    const pointer = pointers[index];
    if(!pointer) return;

    const percentChanged = pointer.updatePosition(_percent, getPointerLeftWall(index), getPointerRightWall(index), type, rightToLeft, bottomToTop);
    panelFill?.updatePosition(type, pointers.map(pointer => pointer.percent), rightToLeft, bottomToTop);

    updatePlugins();

    for(const pointer of pointers){
      const valueText = getTextValue(pointer.percent);
      if(valueText !== undefined){
        pointer.setAttr('aria-valuenow', valueText.toString());
        pointer.setAttr('aria-valuetext', valueText.toString());
      }
    }

    setAriaMinMax();

    if(percentChanged){
      sendChangeEvent($component, pointers.map(pointer => getTextValue(pointer.percent)));
    }
  };

  const setAllPositions = () => {
    for(let i=0; i<pointers.length; i++){
      setPositions(i, pointers[i].percent);
    }
  };

  /**
   * on component init, min and max should be initialized together
   * because their validations depend on each other;
   */
  const setMinMax = (_min: number | string | undefined | null, _max: number | string | undefined | null) => {

    min = data !== undefined ? 0 : getNumber(_min, MIN_DEFAULT);
    max = data !== undefined ? data.length - 1 : getNumber(_max, MAX_DEFAULT);

    // perform validations
    setMin(min);
    setMax(max);
  };

  const setAriaMinMax = () => {
    for(let i=0; i<pointers.length; i++){
      const pointer = pointers[i];
      pointer.setAttr('aria-valuemin', (getPointerMin(i) ?? '').toString());
      pointer.setAttr('aria-valuemax', (getPointerMax(i) ?? '').toString());
    }
  };

  const setMin = (_min: number | string | undefined | null) => {
    min = getNumber(_min, MIN_DEFAULT);

    if(min > max){
      max = min + MAX_DEFAULT;
    }

    setAllPositions();
  };

  const setMax = (_max: number | string | undefined | null) => {

    max = getNumber(_max, MAX_DEFAULT);

    if(max < min){
      max = min + MAX_DEFAULT;
    }

    setAllPositions();
  };

  const setValues = (values: (number | string | undefined)[]) => {

    // initial values should be initialized together
    // because their validations may depend on each other;

    // init initial values with pointers overlap ----------
    pointersOverlap = true;

    for(let i=0; i<values.length; i++){
      setValue(values[i], i);
    }

    pointersOverlap = false;

    // add all required validations ------------------------
    for(let i=0; i<values.length; i++){
      setValue(values[i], i);
    }
  };

  const setValue = (_val: number | string | undefined | null, index: number) => {

    let val: number;

    if(data !== undefined){

      val = (_val === undefined || _val === null) ? 0 : findValueIndexInData(_val, data);
      if(val === -1){
        val = 0;
      }
    }
    else{
      val = getNumber(_val, min);

      if(val < min){
        val = min;
      }

      if(val > max){
        val = max;
      }
    }

    // scale a range [min,max] to [a,b]
    const percent = convertRange(min, max, 0, 100, val);

    setPositions(index, percent);
  };

  const setStep = (_step: TStep | string) => {
    if(_step === null || _step === undefined){
      step = undefined;
      return;
    }

    if (typeof _step === 'function') {
      step = _step;
      setAllPositions();
      return;
    }

    if(isNumber(_step)){
      step = getNumber(_step, 1);

      const diff = Math.abs(max - min);
      if (step > diff) {
        step = undefined;
      }

      setAllPositions();
      return;
    }

    step = undefined;
  };

  const setPointersOverlap = (_pointersOverlap: boolean) => {
    pointersOverlap = _pointersOverlap;
    setAllPositions();
  };

  const setPointersMinDistance = (_pointersMinDistance: number) => {
    if(!isNumber(_pointersMinDistance) || _pointersMinDistance < 0){
      _pointersMinDistance = 0;
    }
    pointersMinDistance = _pointersMinDistance;
  };

  const setPointersMaxDistance = (_pointersMaxDistance: number) => {
    if(!isNumber(_pointersMaxDistance) || _pointersMaxDistance < 0){
      _pointersMaxDistance = Infinity;
    }
    pointersMaxDistance = _pointersMaxDistance;
  };

  const setDisabled = (_disabled: boolean) => {
    disabled = _disabled;
    $slider.classList.toggle('disabled', disabled);

    if(disabled){
      $slider.setAttribute('aria-disabled', 'true');
    }
    else{
      if ($slider.hasAttribute('aria-disabled')) {
        $slider.removeAttribute('aria-disabled');
      }
    }
  };

  const setKeyboardDisabled = (_disabled: boolean) => {
    keyboardDisabled = _disabled;
  };

  const setMousewheelDisabled = (_disabled: boolean) => {
    mousewheelDisabled = _disabled;

    if(mousewheelDisabled){
      document.removeEventListener('wheel', pointerMouseWheel);
    }
    else{
      document.addEventListener('wheel', pointerMouseWheel, { passive: false });
    }
  };

  const setData = (_data: TData | string | number | null) => {

    if(_data === null || _data === undefined){
      data = undefined;
      return;
    }

    data = parseData(_data as string);
    if(data === undefined || data.length <= 0){
      data = undefined;
      return;
    }

    setMin(0);
    setMax(data.length - 1);

    if(step === undefined){
      setStep(1);
    }
  };

  const setType = (_type: string | null | undefined) => {

    if(typeof _type === 'string'){
      type = _type.trim().toLowerCase() === TypeEnum.Vertical ? TypeEnum.Vertical : TypeEnum.Horizontal;
    }
    else{
      type = TypeEnum.Horizontal;
    }

    const $box = $component.shadowRoot?.querySelector('.range-slider-box');
    if(!$box) return;
    $box.className = `range-slider-box type-${ type }`;

    setAllPositions();

    // update accessibility properties
    const aria = type === TypeEnum.Vertical ? 'vertical' : 'horizontal';
    for(const pointer of pointers){
      pointer.setAttr('aria-orientation', aria);
    }
  };

  const setRightToLeft = (_rightToLeft: boolean) => {
    rightToLeft = _rightToLeft;

    if(pointers.length > 1){
      changePointersOrder(pointers, rightToLeft, $component);
    }

    setAllPositions();
    updatePlugins();
  };

  const setBottomToTop = (_bottomToTop: boolean) => {
    bottomToTop = _bottomToTop;

    if(pointers.length > 1){
      changePointersOrder(pointers, bottomToTop, $component);
    }

    setAllPositions();
    updatePlugins();
  };

  const setRound = (_round: number) => {
    round = getNumber(_round, ROUND_DEFAULT);

    if(round < 0){
      round = ROUND_DEFAULT;
    }

    updatePlugins();
  };

  const setAnimateOnClick = (_animateOnClick: string | boolean | null | undefined) => {
    if(_animateOnClick === null ||
      _animateOnClick === undefined ||
      _animateOnClick.toString().trim().toLowerCase() === 'false'){
      animateOnClick = undefined;
      $slider.style.removeProperty(CSSVariables.AnimateOnClick);
      $slider.classList.remove(CssClasses.AnimateOnClick);
    }
    else{
      animateOnClick = _animateOnClick.toString();
      $slider.style.setProperty(CSSVariables.AnimateOnClick, animateOnClick);
      $slider.classList.add(CssClasses.AnimateOnClick);
    }
  };

  const setAriaLabel = (index: number, _ariaLabel: string | undefined) => {

    const pointer = pointers[index];
    if(!pointer) return;

    pointer.setAttr('aria-label', _ariaLabel);
    ariaLabels[index] = _ariaLabel;
  };

  const setRangeDragging = (_rangeDragging: boolean) => {
    rangeDraggingStart = undefined;

    if(pointers.length <= 1){
      rangeDragging = false;
      $slider.classList.remove(CssClasses.RangeDragging);
      return;
    }

    rangeDragging = _rangeDragging;
    $slider.classList.toggle(CssClasses.RangeDragging, rangeDragging);
  };

  // initialization -------------------------------------

  const initDisabled = () => {
    setDisabled(getBoolean($component.getAttribute(AttributesEnum.Disabled)));
    keyboardDisabled = getBoolean($component.getAttribute(AttributesEnum.KeyboardDisabled));
    mousewheelDisabled = getBoolean($component.getAttribute(AttributesEnum.MousewheelDisabled));

    // handle 'pointer1-disabled, pointer2-disabled, etc.
    const disabledList = getAttributesByRegex($component, /^pointer([0-9]*)-disabled$/, (val: string) => {
      return getBoolean(val);
    });

    for(const item of disabledList){
      const pointerIndex = item[0];
      if(!pointers[pointerIndex]) continue;
      pointers[pointerIndex].disabled = item[1];
    }
  };

  const initAriaLabels = () => {
    // handle 'aria-label1', 'aria-label2', etc.
    const ariaLabelsList = getAttributesByRegex($component, /^aria-label([0-9]*)$/);

    for(const item of ariaLabelsList){
      const index = item[0];
      setAriaLabel(index, item[1] as string);
    }
  };

  // add pointer - always to the end
  const addPointer = (value: string | number | undefined) => {
    const len = pointers.length;
    const $latestPointer = pointers[len - 1].$pointer;

    const $newPointer = $latestPointer.cloneNode(true) as HTMLElement;
    $latestPointer.after($newPointer);
    const newPointer = Pointer($component, $newPointer, len);

    newPointer.setCallbacks(arrowLeft, arrowRight, arrowUp, arrowDown);
    pointers.push(newPointer);

    setValue(value, len);
    setAllPositions();
    updatePlugins();

    return len;
  };

  // always from the end
  const removePointer = () => {
    const len = pointers.length;
    const pointer = pointers[len - 1];
    if(!pointer) return -1;

    pointer.destroy();
    pointers.pop();

    if(pointers.length <= 1){
      setRangeDragging(false);
    }

    setAllPositions();
    updatePlugins();

    return len - 1;
  };

  (() => {

    // init pointer callbacks for arrow keys
    for(const pointer of pointers){
      pointer.setCallbacks(arrowLeft, arrowRight, arrowUp, arrowDown);
    }

    // init panel fill
    const $fill = $component.shadowRoot?.querySelector('.panel-fill') as HTMLElement;
    if($fill){
      panelFill = PanelFill($fill);
    }

    // init main properties from HTML attributes
    setType($component.getAttribute(AttributesEnum.Type));
    setRightToLeft(getBoolean($component.getAttribute(AttributesEnum.RightToLeft)));
    setBottomToTop(getBoolean($component.getAttribute(AttributesEnum.BottomToTop)));

    setMinMax($component.getAttribute(AttributesEnum.Min), $component.getAttribute(AttributesEnum.Max));
    setStep($component.getAttribute(AttributesEnum.Step));
    setData($component.getAttribute(AttributesEnum.Data));

    // set value and render the pointers ----------------------
    setValues(pointersList.map(item => item[1]));

    // overlaps MUST be defined after the pointer values
    setPointersOverlap(getBoolean($component.getAttribute(AttributesEnum.PointersOverlap)));
    setPointersMinDistance(getNumber($component.getAttribute(AttributesEnum.PointersMinDistance), 0));
    setPointersMaxDistance(getNumber($component.getAttribute(AttributesEnum.PointersMaxDistance), Infinity));
    setRangeDragging(getBoolean($component.getAttribute(AttributesEnum.RangeDragging)));

    // additional properties -----------------------------
    setRound(getNumber($component.getAttribute(AttributesEnum.Round), ROUND_DEFAULT));
    initDisabled();
    initAriaLabels();

    // init styles ---------
    styles = Styles($component, $slider, pointers);
    setAnimateOnClick($component.getAttribute(AttributesEnum.AnimateOnClick) ?? ANIMATE_ON_CLICK_DEFAULT);

    // init slider events -------------------------------------
    $slider.addEventListener('mousedown', onMouseDown);
    $slider.addEventListener('mouseup', onMouseUp);
    $slider.addEventListener('touchmove', onValueChange);
    $slider.addEventListener('touchstart', onValueChange);

    if(!mousewheelDisabled){
      document.addEventListener('wheel', pointerMouseWheel, { passive: false });
    }

    // init plugins ---------------
    pluginsManager = PluginsManager(
      $component,
      requestUpdatePlugins,
      {
        setValues,
        setMin,
        setMax,
        setStep,
        setPointersOverlap,
        setPointersMinDistance,
        setPointersMaxDistance,
        setDisabled,
        setType,
        setRightToLeft,
        setBottomToTop,
        setRound,
        setKeyboardDisabled,
        setMousewheelDisabled,
        setRangeDragging,
        setData,
      },
      {
        getPercents,
        getValues,
        getPointerElements,

        getMin: getNumericMin,
        getMax: getNumericMax,

        getStep,
        getData,
        getType,
        getRound,

        getTextMin: getMin,
        getTextMax: getMax,

        isRightToLeft,
        isBottomToTop,

        isDisabled,
        isKeyboardDisabled,
        isMousewheelDisabled,

        isPointersOverlap,
        isRangeDraggingEnabled,
        getPointersMinDistance,
        getPointersMaxDistance,
      }
    );
    pluginsManager.init();
  })();

  const destroy = () => {
    $slider.removeEventListener('mousedown', onMouseDown);
    $slider.removeEventListener('mouseup', onMouseUp);
    $slider.removeEventListener('touchmove', onValueChange);
    $slider.removeEventListener('touchstart', onValueChange);
    document.removeEventListener('wheel', pointerMouseWheel);

    for(const pointer of pointers){
      pointer.destroy();
    }

    pluginsManager?.destroy();
  };

  return {
    get pointers() {
      return pointers;
    },

    get styles() {
      return styles;
    },

    get pluginsManager() {
      return pluginsManager;
    },

    get min() {
      return getMin();
    },

    get max() {
      return getMax();
    },

    get step() {
      return getStep();
    },

    get pointersOverlap() {
      return isPointersOverlap();
    },

    set pointersOverlap(_pointersOverlap) {
      setPointersOverlap(_pointersOverlap);
    },

    get pointersMinDistance() {
      return getPointersMinDistance();
    },

    set pointersMinDistance(_pointersMinDistance) {
      setPointersMinDistance(_pointersMinDistance);
    },

    get pointersMaxDistance() {
      return getPointersMaxDistance();
    },

    set pointersMaxDistance(_pointersMaxDistance) {
      setPointersMaxDistance(_pointersMaxDistance);
    },

    get disabled() {
      return isDisabled();
    },

    set disabled(_disabled) {
      setDisabled(_disabled);
    },

    get data() {
      return getData();
    },

    get type() {
      return getType();
    },

    set type(_type) {
      setType(_type);
    },

    get rightToLeft() {
      return isRightToLeft();
    },

    set rightToLeft(_rightToLeft) {
      setRightToLeft(_rightToLeft);
    },

    get bottomToTop() {
      return isBottomToTop();
    },

    set bottomToTop(_bottomToTop) {
      setBottomToTop(_bottomToTop);
    },

    get round() {
      return getRound();
    },

    set round(_round) {
      setRound(_round);
    },

    get animateOnClick() {
      return animateOnClick;
    },

    set animateOnClick(_animateOnClick) {
      setAnimateOnClick(_animateOnClick);
    },

    get keyboardDisabled() {
      return isKeyboardDisabled();
    },

    set keyboardDisabled(_keyboardDisabled){
      setKeyboardDisabled(_keyboardDisabled);
    },

    get mousewheelDisabled() {
      return isMousewheelDisabled();
    },

    set mousewheelDisabled(_mousewheelDisabled){
      setMousewheelDisabled(_mousewheelDisabled);
    },

    get rangeDragging() {
      return isRangeDraggingEnabled();
    },

    set rangeDragging(_rangeDragging) {
      setRangeDragging(_rangeDragging);
    },

    setMin,
    setMax,
    setValue,
    setStep,
    setData,
    getTextValue,
    setAriaLabel,
    getAriaLabel,

    addPointer,
    removePointer,

    destroy,
  };
};

