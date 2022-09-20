export interface IStyles {
    setStyle: (key: string, value: string | null | undefined, index: number) => void;
    getStyle: (key: string, index: number) => string | undefined;
    theme: string | null;
    pointerShape: string | null;
    pointer2Shape: string | null;
}
export declare const stylePropertiesList: [string, string, number, string][];
export declare const Styles: ($component: HTMLElement, $slider: HTMLElement, $pointer2: HTMLElement | undefined) => IStyles;
//# sourceMappingURL=styles.d.ts.map