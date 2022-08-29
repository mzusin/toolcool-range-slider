import { getNumber, isNumber } from '../domain/math-provider';
import RangeSlider from '../app/range-slider';

export const STORAGE_KEY = 'tc-range-slider';

export enum StorageTypeEnum {
  localStorage = 'local-storage',
  sessionStorage = 'session-storage',
}

export const isStorageEnabled = (storageType: StorageTypeEnum) => {
  if (storageType === StorageTypeEnum.localStorage) {
    const temp = 'test';

    try {
      window.localStorage.setItem(temp, temp);
      window.localStorage.removeItem(temp);
      return true;
    } catch (e) {
      return false;
    }
  }

  if (storageType === StorageTypeEnum.sessionStorage) {
    const temp = 'test';

    try {
      window.sessionStorage.setItem(temp, temp);
      window.sessionStorage.removeItem(temp);
      return true;
    } catch (e) {
      return false;
    }
  }

  return false;
};

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export const setLocalStorageItem = (storageName: string, value: any) => {
  const escapedValue = encodeURIComponent(typeof value === 'object' ? JSON.stringify(value) : value);
  window.localStorage.setItem(storageName, escapedValue);
};

export const getLocalStorageItem = (storageName: string) => {
  const value = window.localStorage.getItem(storageName);
  return value === null ? null : decodeURIComponent(value);
};

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export const setSessionStorageItem = (storageName: string, value: any) => {
  const escapedValue = encodeURIComponent(typeof value === 'object' ? JSON.stringify(value) : value);
  window.sessionStorage.setItem(storageName, escapedValue);
};

export const getSessionStorageItem = (storageName: string) => {
  const value = window.sessionStorage.getItem(storageName);
  return value === null ? null : decodeURIComponent(value);
};

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export const saveToStorage = (storageType: StorageTypeEnum, storageName: string, value: any) => {
  // if this storage type is not supported -> do nothing
  if (!isStorageEnabled(storageType)) return;

  switch (storageType) {
    case StorageTypeEnum.localStorage: {
      setLocalStorageItem(storageName, value);
      break;
    }

    case StorageTypeEnum.sessionStorage: {
      setSessionStorageItem(storageName, value);
      break;
    }
  }
};

export const getFromStorage = (storageType: StorageTypeEnum, storageName: string) => {
  // if this storage type is not supported -> do nothing
  if (!isStorageEnabled(storageType)) return null;

  if (storageType === StorageTypeEnum.localStorage) {
    return getLocalStorageItem(storageName);
  }

  if (storageType === StorageTypeEnum.sessionStorage) {
    return getSessionStorageItem(storageName);
  }

  return null;
};

/**
 * try to restore values from session or local storage
 * when component is initialized
 */
export const restoreFromStorage = (slider: RangeSlider) => {
  if (!slider.storage) return;

  let restoredValue = getFromStorage(slider.storage, slider.storageKey);
  if (isNumber(restoredValue)) {
    slider.value = getNumber(restoredValue, slider.min);
  }
  else {
    if (restoredValue) {
      slider.value = restoredValue;
    }
  }

  if (slider.value2 !== undefined) {
    restoredValue = getFromStorage(slider.storage, slider.storageKey2);
    if (isNumber(restoredValue)) {
      slider.value2 = getNumber(restoredValue, slider.min);
    }
    else {
      if (restoredValue) {
        slider.value2 = restoredValue;
      }
    }
  }
};
