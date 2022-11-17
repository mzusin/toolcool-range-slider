import { IPlugin } from '../../core/plugins/interfaces';
import RangeSlider from '../../core';
declare const GeneratedLabelsPlugin: () => IPlugin;
export default GeneratedLabelsPlugin;
/**
 * export dynamic properties
 */
export interface IGeneratedLabelsPlugin extends RangeSlider {
    generateLabels: boolean;
    /** @deprecated */
    textColor: string;
    generateLabelsTextColor: string;
    /** @deprecated */
    units: string;
    generateLabelsUnits: string;
}
