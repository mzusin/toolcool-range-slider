import { IPlugin } from './interfaces';

declare global {
  interface Window {
    tcRangeSliderPlugins: (() => IPlugin)[];
    tcRangeSliderObservedAttr: string[];
  }
}

export interface IPluginsManager {
  init: () => void;

  update: (
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
  ) => void;

  onAttrChange: (attrName: string, oldValue: string, newValue: string) =>  void;
}

export const PluginsManager = (
  $component: HTMLElement,
  requestUpdatePlugins: () => void,
  updatePointers: (value1: string | number | undefined, value2: string | number | undefined) => void
) : IPluginsManager => {

  const plugins: IPlugin[] = [];

  // ------ APIs ----------------------------

  const update = (
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
  ) => {
    for(const plugin of plugins){
      if(plugin.update && typeof plugin.update === 'function'){
        plugin.update(
          percent1,
          percent2,
          textValue1,
          textValue2,
          min,
          max,
          textMin,
          textMax,
          rightToLeft,
          bottomToTop
        );
      }
    }
  };

  const onAttrChange = (_attrName: string, _oldValue: string, _newValue: string) => {
    for(const plugin of plugins){
      if(plugin.onAttrChange && typeof plugin.onAttrChange === 'function'){
        plugin.onAttrChange(
          _attrName,
          _oldValue,
          _newValue
        );
      }
    }
  };

  const defineSettersGetters = (plugin: IPlugin) => {
    if(!plugin.gettersAndSetters) return;

    for(const item of plugin.gettersAndSetters){
      if(!item.name || !item.attributes) continue;

      try{
        Object.defineProperty($component, item.name, item.attributes);
      }
      catch (ex){
        console.error('defineSettersGetters error:', ex);
      }
    }
  };

  // ------ initialization ------------------
  const init = () => {
    if(!window.tcRangeSliderPlugins) return;

    for(const pluginFunc of window.tcRangeSliderPlugins){
      const plugin = pluginFunc();
      plugins.push(plugin);

      if(plugin.init && typeof plugin.init === 'function'){
        plugin.init($component, requestUpdatePlugins, updatePointers);
        defineSettersGetters(plugin);
      }
    }
  };

  return {
    init,
    update,
    onAttrChange,
  };
};