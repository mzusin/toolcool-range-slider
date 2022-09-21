import { IPointer } from './pointer';
import { TData, TStep } from '../types';
import { IStyles } from './styles';
import { IPluginsManager } from '../plugins/plugins-manager';
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
    round: number;
    animateOnClick: string | undefined;
    getAriaLabel: (index: number) => (string | undefined);
    setAriaLabel: (index: number, ariaLabel: string | undefined) => void;
    setMin: (value: number | string | undefined | null) => void;
    setMax: (value: number | string | undefined | null) => void;
    setValue: (value: number | string | undefined | null, index: number) => void;
    setStep: (value: TStep) => void;
    setData: (value: TData | string | null | number) => void;
    getTextValue: (_percent: number | undefined) => undefined | string | number;
    destroy: () => void;
}
export declare const MIN_DEFAULT = 0;
export declare const MAX_DEFAULT = 100;
export declare const ROUND_DEFAULT = 2;
export declare const Slider: ($component: HTMLElement, $slider: HTMLElement, pointersList: [IPointer, string | number | undefined][]) => ISlider;
//# sourceMappingURL=slider.d.ts.map