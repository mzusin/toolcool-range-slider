import { StorageTypeEnum } from './storage-type-enum';
export const STORAGE_KEY = 'tc-range-slider';

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

export const getStorageKey2 = (storageKey: string) => {
  return `${ storageKey }-2`;
};

/**
 * try to restore values from session or local storage
 * when component is initialized
 */
export const restoreFromStorage = (
  storage: StorageTypeEnum | undefined,
  storageKey: string,
  updatePointers: (value1: string | number | undefined | null, value2: string | number | undefined | null) => void
) => {
  if (!storage) return;

  let val1: string | null = null;
  let val2: string | null = null;

  const restoredValue1 = getFromStorage(storage, storageKey);
  const restoredValue2 = getFromStorage(storage, getStorageKey2(storageKey));

  if(restoredValue1 !== null && restoredValue1 !== undefined){
    val1 = restoredValue1;
  }

  if(restoredValue2 !== null && restoredValue2 !== undefined){
    val2 = restoredValue2;
  }

  if(val1 === null && val2 === null) return;

  updatePointers(val1 !== null ? val1 : val2, val2);
};
