import { IPlugin } from '../../core/plugins/interfaces';
import RangeSlider from '../../core';
declare const BindingLabelsPlugin: () => IPlugin;
export default BindingLabelsPlugin;
/**
 * export dynamic properties
 */
export interface IBindingLabelsPlugin extends RangeSlider {
    valueLabel: string;
    [name: `value${number}Label`]: string;
}
