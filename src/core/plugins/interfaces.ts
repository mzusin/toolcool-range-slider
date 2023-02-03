import { TData, TStep } from '../types';

export interface IPluginUpdateData {
  percents: number[],
  values: (string | number | undefined)[],
  $pointers: HTMLElement[],

  min: number;
  max: number;
  round: number;

  step: TStep;
  data: TData;
  type: string;

  textMin: number | string | undefined;
  textMax: number | string | undefined;

  rightToLeft: boolean;
  bottomToTop: boolean;

  pointersOverlap: boolean;
  pointersMinDistance: number;
  pointersMaxDistance: number;
  rangeDragging: boolean;

  disabled: boolean;
  keyboardDisabled: boolean;
  mousewheelDisabled: boolean;
}

export interface IPluginSetters {
  setValues: (values: (string | number | undefined)[]) => void;
  setMin: (min: number | string | undefined | null) => void;
  setMax: (max: number | string | undefined | null) => void;
  setStep: (step: TStep) => void;
  setRound: (val: number) => void;
  setType: (val: string) => void;
  setData: (val: TData) => void;

  setPointersOverlap: (val: boolean) => void;
  setPointersMinDistance: (val: number) => void;
  setPointersMaxDistance: (val: number) => void;
  setRangeDragging: (val: boolean) => void;

  setDisabled: (val: boolean) => void;
  setKeyboardDisabled: (val: boolean) => void;
  setMousewheelDisabled: (val: boolean) => void;

  setRightToLeft: (val: boolean) => void;
  setBottomToTop: (val: boolean) => void;
}

export interface IPluginGetters {
  getPercents: () => number[];
  getValues: () => (string | number | undefined)[];
  getPointerElements: () => HTMLElement[];

  getMin: () => number;
  getMax: () => number;

  getTextMin: () => string | number;
  getTextMax: () => string | number;

  getStep: () => TStep;
  getData: () => TData;
  getType: () => string;
  getRound: () => number;

  isRightToLeft: () => boolean;
  isBottomToTop: () => boolean;
  isDisabled: () => boolean;
  isKeyboardDisabled: () => boolean;
  isMousewheelDisabled: () => boolean;

  isPointersOverlap: () => boolean;
  isRangeDraggingEnabled: () => boolean;
  getPointersMinDistance: () => number;
  getPointersMaxDistance: () => number;
}

export interface IPlugin {
  readonly name: string,

  init?: (
    $component: HTMLElement,
    requestUpdate: () => void,
    setters: IPluginSetters,
    getters: IPluginGetters,
  ) => void;

  update?: (data: IPluginUpdateData) => void;

  onAttrChange?: (attrName: string, newValue: string) =>  void;

  gettersAndSetters?: ({
    name: PropertyKey,
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    attributes:  PropertyDescriptor & ThisType<any>
  })[];

  css?: string,

  destroy?: () => void;
}