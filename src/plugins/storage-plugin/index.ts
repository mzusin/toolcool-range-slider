import { IPlugin, IPluginGetters, IPluginSetters, IPluginUpdateData } from '../../core/plugins/interfaces';
import { StorageTypeEnum } from './storage-type-enum';
import { restoreFromStorage, saveToStorage, STORAGE_KEY } from './storage-provider';

/**
 * Storage Plugin.
 * Important: the plugin script should be included BEFORE the core script.
 */

/**
 * Required: init ToolCool Range Slider plugins namespace if not defined yet
 */
window.tcRangeSliderPlugins = window.tcRangeSliderPlugins || [];

const StoragePlugin = () : IPlugin => {

  let storage: StorageTypeEnum | undefined = undefined;
  let storageKey = STORAGE_KEY;
  let storageInitialized = false;

  return {
    /**
     * Required: unique plugin name
     */
    get name() {
      return 'Storage';
    },

    /**
     * Optional: plugin initialization
     */
    init: (
      _$component,
      _requestUpdate,
      _setters: IPluginSetters,
      _getters: IPluginGetters
    ) => {

      // if the storage is enabled ---> try to restore the values
      storage = (_$component.getAttribute('storage') as StorageTypeEnum) || undefined;
      storageKey = _$component.getAttribute('storage-key') || STORAGE_KEY;

      if (storage){
        restoreFromStorage(storage, storageKey, _setters.setValues);
        storageInitialized = true;
      }
    },

    /**
     * Optional:
     * this will be called each time
     * range slider updates pointer positions
     */
    update: (data: IPluginUpdateData) => {
      if (!storage || !storageInitialized) return;
      saveToStorage(storage, storageKey, data.values);
    },

    /**
     * Optional:
     * this will be called each time observed HTML attribute changes;
     * observed attributes are defined in window.tcRangeSliderObservedAttr array above.
     */
    onAttrChange: (_attrName: string, _newValue: string) => {

      switch (_attrName){
        case 'storage': {
          storage = _newValue as StorageTypeEnum;
          break;
        }

        case 'storage-key': {
          storageKey = _newValue;
          break;
        }
      }
    },

    /**
     * Optional:
     * List of getters and setter that can be used to create slider API.
     */
    gettersAndSetters: [
      {
        name: 'storage',
        attributes: {
          get () {
            return storage;
          },

          set: (_storage) => {
            storage = _storage;
          },
        }
      },
      {
        name: 'storageKey',
        attributes: {
          get () {
            return storageKey ?? STORAGE_KEY;
          },

          set: (_storageKey) => {
            storageKey = _storageKey;
          },
        }
      }
    ],
  };
};

/**
 * Required: add current plugin to the plugins list.
 */
window.tcRangeSliderPlugins.push(StoragePlugin);

export default StoragePlugin;