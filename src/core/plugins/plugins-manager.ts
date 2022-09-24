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

  onAttrChange: (attrName: string, newValue: string) =>  void;

  destroy: () => void;
}

export const PluginsManager = (
  $component: HTMLElement,
  requestUpdatePlugins: () => void,
  setters: IPluginSetters,
  getters: IPluginGetters,
) : IPluginsManager => {

  const plugins: IPlugin[] = [];

  // ------ APIs ----------------------------

  const update = (data: IPluginUpdateData) => {
    for(const plugin of plugins){
      if(plugin.update && typeof plugin.update === 'function'){
        plugin.update(data);
      }
    }
  };

  const destroy = () => {
    for(const plugin of plugins){
      if(plugin.destroy && typeof plugin.destroy === 'function'){
        plugin.destroy();
      }
    }
  };

  const onAttrChange = (_attrName: string, _newValue: string) => {
    for(const plugin of plugins){
      if(plugin.onAttrChange && typeof plugin.onAttrChange === 'function'){
        plugin.onAttrChange(
          _attrName,
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
        if(!Object.prototype.hasOwnProperty.call($component, item.name)){
          Object.defineProperty($component, item.name, item.attributes);
        }
      }
      catch (ex){
        console.error('defineSettersGetters error:', ex);
      }
    }
  };

  const initStyles = (plugin: IPlugin) => {
    if(!plugin.css) return;

    const $style = $component.shadowRoot?.querySelector('style');
    if(!$style) return;

    $style.innerHTML += plugin.css;
  };

  // ------ initialization ------------------
  const init = () => {
    if(!window.tcRangeSliderPlugins) return;

    for(const pluginFunc of window.tcRangeSliderPlugins){
      const plugin = pluginFunc();
      plugins.push(plugin);

      if(plugin.init && typeof plugin.init === 'function'){

        // call plugin initialization function
        plugin.init(
          $component,
          requestUpdatePlugins,
          setters,
          getters,
        );

        // if plugin has getters and setters that used for APIs ---> define them
        defineSettersGetters(plugin);

        // if plugin has css rules defined as plain text ---> they can be added dynamically
        initStyles(plugin);
      }
    }
  };

  return {
    init,
    update,
    onAttrChange,
    destroy,
  };
};