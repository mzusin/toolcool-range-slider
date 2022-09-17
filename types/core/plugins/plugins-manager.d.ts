import { IPlugin } from './interfaces';
declare global {
    interface Window {
        tcRangeSliderPlugins: (() => IPlugin)[];
        tcRangeSliderObservedAttr: string[];
    }
}
export interface IPluginsManager {
    init: () => void;
    update: (percent1: number, percent2: number | undefined, textValue1: string | number | undefined, textValue2: string | number | undefined, min: number, max: number, textMin: number | string | undefined, textMax: number | string | undefined, rightToLeft: boolean, bottomToTop: boolean) => void;
    onAttrChange: (attrName: string, oldValue: string, newValue: string) => void;
}
export declare const PluginsManager: ($component: HTMLElement, requestUpdatePlugins: () => void, updatePointers: (value1: string | number | undefined, value2: string | number | undefined) => void) => IPluginsManager;
//# sourceMappingURL=plugins-manager.d.ts.map