import TCRangeSlider from './app/range-slider';
import { DynamicFields } from './types';
declare type RangeSlider = TCRangeSlider & HTMLElement & DynamicFields;
declare global {
    interface Window {
        tcRangeSlider: typeof TCRangeSlider;
    }
}
export default RangeSlider;
