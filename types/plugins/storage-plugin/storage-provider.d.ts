import { StorageTypeEnum } from './storage-type-enum';
export declare const STORAGE_KEY = "tc-range-slider";
export declare const isStorageEnabled: (storageType: StorageTypeEnum) => boolean;
export declare const setLocalStorageItem: (storageName: string, value: any) => void;
export declare const getLocalStorageItem: (storageName: string) => string | null;
export declare const setSessionStorageItem: (storageName: string, value: any) => void;
export declare const getSessionStorageItem: (storageName: string) => string | null;
export declare const saveToStorage: (storageType: StorageTypeEnum, storageName: string, value: any) => void;
export declare const getFromStorage: (storageType: StorageTypeEnum, storageName: string) => string | null;
export declare const getStorageKey2: (storageKey: string) => string;
/**
 * try to restore values from session or local storage
 * when component is initialized
 */
export declare const restoreFromStorage: (storage: StorageTypeEnum | undefined, storageKey: string, updatePointers: (value1: string | number | undefined | null, value2: string | number | undefined | null) => void) => void;
//# sourceMappingURL=storage-provider.d.ts.map