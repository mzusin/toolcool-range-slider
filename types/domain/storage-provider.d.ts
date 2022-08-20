export declare const STORAGE_KEY = "tc-range-slider";
export declare enum StorageTypeEnum {
    localStorage = "local-storage",
    sessionStorage = "session-storage"
}
export declare const isStorageEnabled: (storageType: StorageTypeEnum) => boolean;
export declare const setLocalStorageItem: (storageName: string, value: any) => void;
export declare const getLocalStorageItem: (storageName: string) => string | null;
export declare const setSessionStorageItem: (storageName: string, value: any) => void;
export declare const getSessionStorageItem: (storageName: string) => string | null;
export declare const saveToStorage: (storageType: StorageTypeEnum, storageName: string, value: any) => void;
export declare const getFromStorage: (storageType: StorageTypeEnum, storageName: string) => string | null;
//# sourceMappingURL=storage-provider.d.ts.map