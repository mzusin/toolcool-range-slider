import { IPlugin } from '../../core/plugins/interfaces';
import { StorageTypeEnum } from './storage-type-enum';
import { getStorageKey2, restoreFromStorage, saveToStorage, STORAGE_KEY } from './storage-provider';

/**
 * Storage Plugin.
 * Important: the plugin script should be included BEFORE the core script.
 */

/**
 * Required: init ToolCool Range Slider plugins namespace if not defined yet
 */
window.tcRangeSliderPlugins = window.tcRangeSliderPlugins || [];

/**
 * Optional: array of attribute names to monitor for changes
 * Read more: https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements
 */
window.tcRangeSliderObservedAttr = window.tcRangeSliderObservedAttr || [];
window.tcRangeSliderObservedAttr.push('storage');
window.tcRangeSliderObservedAttr.push('storage-key');

const StoragePlugin = () : IPlugin => {

  let storage: StorageTypeEnum | undefined = undefined;
  let storageKey = STORAGE_KEY;
  let storageInitialized = false;

  return {
    /**
     * Required: unique plugin name
     */
    get name() {
      return 'Storage Labels';
    },

    /**
     * Optional: plugin initialization
     */
    init: (_$component, _requestUpdate, _updatePointers) => {

      // if the storage is enabled ---> try to restore the values
      storage = (_$component.getAttribute('storage') as StorageTypeEnum) || undefined;
      storageKey = _$component.getAttribute('storage-key') || STORAGE_KEY;

      if (storage){
        restoreFromStorage(storage, storageKey, _updatePointers);
        storageInitialized = true;
      }

    },

    /**
     * Optional:
     * this will be called each time
     * range slider updates pointer positions
     */
    /* eslint-disable @typescript-eslint/no-unused-vars */
    update: (
      _percent1: number,
      _percent2: number | undefined,
      _textValue1: string | number | undefined,
      _textValue2: string | number | undefined,
      _min: number,
      _max: number,
      _textMin: number | string | undefined,
      _textMax: number | string | undefined,
      _rightToLeft: boolean,
      _bottomToTop: boolean
    ) => {
      if (storage && storageInitialized) {
        saveToStorage(storage, storageKey, _textValue1);
        if(_percent2 !== undefined){
          saveToStorage(storage, getStorageKey2(storageKey), _textValue2);
        }
      }
    },

    /**
     * Optional:
     * this will be called each time observed HTML attribute changes;
     * observed attributes are defined in window.tcRangeSliderObservedAttr array above.
     */
    onAttrChange: (_attrName: string, _oldValue: string, _newValue: string) => {

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
      },
      {
        name: 'storageKey2',
        attributes: {
          get () {
            return getStorageKey2(storageKey);
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