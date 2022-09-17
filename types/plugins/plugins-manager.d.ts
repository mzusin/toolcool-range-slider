import { IPlugin } from './interfaces';
declare global {
    interface Window {
        tcRangeSliderPlugins: (() => IPlugin)[];
        tcRangeSliderObservedAttr: string[];
    }
}
export interface IPluginsManager {
    init: () => void;
    update: (percent1: number, percent2: number | undefined, textValue1: string | number | undefined, textValue2: string | number | undefined, min: number, max: number, textMin: number | string | undefined, textMax: number | string | undefined) => void;
    onAttrChange: (attrName: string, oldValue: string, newValue: string) => void;
}
export declare const PluginsManager: ($component: HTMLElement, requestUpdatePlugins: () => void) => IPluginsManager;
//# sourceMappingURL=plugins-manager.d.ts.map