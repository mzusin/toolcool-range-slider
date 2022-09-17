import { TypeEnum } from '../enums/type-enum';
export interface IPanelFill {
    updatePosition: (type: TypeEnum, percent1: number, percent2: number | undefined, rightToLeft: boolean, bottomToTop: boolean) => void;
}
export declare const PanelFill: ($fill: HTMLElement) => IPanelFill;
//# sourceMappingURL=panel-fill.d.ts.map