import { IPlugin } from '../../core/plugins/interfaces';
import RangeSlider from '../../core';
declare const MovingTooltipPlugin: () => IPlugin;
export default MovingTooltipPlugin;
/**
 * export dynamic properties
 */
export interface IMovingTooltipPlugin extends RangeSlider {
    movingTooltip: boolean;
    distanceToPointer: number;
    tooltipWidth: number;
    tooltipHeight: number;
    tooltipBg: string;
    tooltipTextColor: string;
    tooltipUnits: string;
    tooltipUnitType: string;
}
