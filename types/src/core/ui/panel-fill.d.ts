export interface IPanelFill {
    updatePosition: (type: string, percents: (number | undefined)[], rightToLeft: boolean, bottomToTop: boolean) => void;
}
export declare const PanelFill: ($fill: HTMLElement) => IPanelFill;
