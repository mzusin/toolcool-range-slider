export interface ILabels {
    readonly genLabelsEnabled: boolean;
    setGenLabelsEnabled: (enabled: boolean, textValue1: string | number | undefined, textValue2: string | number | undefined, rtlOrBtt: boolean, min: number | string | undefined, max: number | string | undefined) => void;
    updateValues: (textValue1: string | number | undefined, textValue2: string | number | undefined, min: number | string | undefined, max: number | string | undefined) => void;
    setLabelsOrder: (rtlOrBtt: boolean) => void;
    referenceLabel1: string | null;
    referenceLabel2: string | null;
}
export declare const Labels: ($component: HTMLElement, $slider: HTMLElement, requestUpdateValues: () => void) => ILabels;
//# sourceMappingURL=labels.d.ts.map