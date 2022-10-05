import { IPlugin } from '../../core/plugins/interfaces';
import RangeSlider from '../../core';
declare const OriginCenterPlugin: () => IPlugin;
export default OriginCenterPlugin;
/**
 * export dynamic properties
 */
export interface IOriginCenterPlugin extends RangeSlider {
    originCenterEnabled: boolean;
}
