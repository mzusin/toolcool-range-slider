export interface IStyles {
    setStyle: (key: string, value: string | null | undefined) => void;
    getStyle: (key: string) => string | undefined;
    theme: string | null;
    pointerShape: string | null;
}
export declare const Styles: ($component: HTMLElement, $slider: HTMLElement) => IStyles;
//# sourceMappingURL=styles.d.ts.map