import { IPlugin } from '../../core/plugins/interfaces';
import RangeSlider from '../../core';
declare const MarksPlugin: () => IPlugin;
export default MarksPlugin;
/**
 * export dynamic properties
 */
export interface IMarksPlugin extends RangeSlider {
    marksEnabled: boolean;
    marksCount: number;
    marksValuesCount: number;
    marksColor: string;
    markValuesColor: string;
}
