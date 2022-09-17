export interface IPlugin {
    readonly name: string;
    init: ($component: HTMLElement, requestUpdate: () => void, updatePointers: (value1: string | number | undefined, value2: string | number | undefined) => void) => void;
    update: (percent1: number, percent2: number | undefined, textValue1: string | number | undefined, textValue2: string | number | undefined, min: number, max: number, textMin: number | string | undefined, textMax: number | string | undefined, rightToLeft: boolean, bottomToTop: boolean) => void;
    onAttrChange: (attrName: string, _oldValue: string, newValue: string) => void;
    gettersAndSetters: ({
        name: PropertyKey;
        attributes: PropertyDescriptor & ThisType<any>;
    })[];
}
//# sourceMappingURL=interfaces.d.ts.map