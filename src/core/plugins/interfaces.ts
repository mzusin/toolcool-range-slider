import { TStep } from '../types';

export interface IPluginUpdateData {
  percent1: number,
  percent2: number | undefined,

  textValue1: string | number | undefined,
  textValue2: string | number | undefined,

  min: number,
  max: number,

  textMin: number | string | undefined,
  textMax: number | string | undefined,

  rightToLeft: boolean,
  bottomToTop: boolean
}

export interface IPluginSetters {
  setValues: (value1: string | number | undefined, value2: string | number | undefined) => void,
  setMin: (min: number | string | undefined | null) => void,
  setMax: (max: number | string | undefined | null) => void,
  setStep: (step: TStep) => void
}

export interface IPluginGetters {
  getMin: () => string | number;
  getMax: () => string | number;
  getStep: () => TStep;
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

  onAttrChange?: (attrName: string, _oldValue: string, newValue: string) =>  void;

  gettersAndSetters?: ({
    name: PropertyKey,
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    attributes:  PropertyDescriptor & ThisType<any>
  })[];

  css?: string,
}