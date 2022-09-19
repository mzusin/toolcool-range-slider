import { IPlugin, IPluginGetters, IPluginSetters, IPluginUpdateData } from './interfaces';
declare global {
    interface Window {
        tcRangeSliderPlugins: (() => IPlugin)[];
        tcRangeSliderObservedAttr: string[];
    }
}
export interface IPluginsManager {
    init: () => void;
    update: (data: IPluginUpdateData) => void;
    onAttrChange: (attrName: string, oldValue: string, newValue: string) => void;
}
export declare const PluginsManager: ($component: HTMLElement, requestUpdatePlugins: () => void, setters: IPluginSetters, getters: IPluginGetters) => IPluginsManager;
//# sourceMappingURL=plugins-manager.d.ts.map