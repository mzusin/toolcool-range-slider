import { IPlugin, IPluginGetters, IPluginSetters, IPluginUpdateData } from '../../core/plugins/interfaces';
import { getBoolean, getNumber } from '../../core/domain/math-provider';
import { createFire, IFire } from './dom/fire-provider';
import { hexToNormalized } from './dom/color-provider';

/**
 * Fire Plugin.
 * Note: the plugin works only when there is exactly one pointer!
 * Important: the plugin script should be included BEFORE the core script.
 */

/**
 * Required: init ToolCool Range Slider plugins namespace if not defined yet
 */
window.tcRangeSliderPlugins = window.tcRangeSliderPlugins || [];

const FIRE_BG = '#000';
const COLOR_1 = '#bc4c18';
const COLOR_2 = '#fff200';
const FIRE_WIDTH = 55;
const FIRE_HEIGHT = 150;

const FirePlugin = () : IPlugin => {

  let $component: HTMLElement | null = null;
  let $container: HTMLElement | null = null;
  let getters: IPluginGetters | null = null;

  let enabled = false;
  let fireBg = FIRE_BG;
  let fireBaseColor1 = COLOR_1;
  let fireBaseColor2 = COLOR_2;
  let fireShape = 1;
  let fireWidth = FIRE_WIDTH;
  let fireHeight = FIRE_HEIGHT;

  let fireSpeedStart = 0.4;
  let fireSpeedEnd = 0.6;

  let fireStrengthStart = 90;
  let fireStrengthEnd = 110;

  let detalizationStart = 0.5;
  let detalizationEnd = 1.0;

  const fires: (IFire | null)[] = [];

  /**
   * Returns a random number between min and max
   */
  const getRandom = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
  };

  const update = (_data: IPluginUpdateData) => {
    if(!enabled) return;

    const percents = getters?.getPercents() || [];

    for(let i=0; i<percents.length; i++){
      const fire = fires[i];
      if(!fire) continue;

      fire.$canvas.style.left = `${ percents[i] }%`;
      const normalized1 = hexToNormalized(fireBaseColor1);
      const normalized2 = hexToNormalized(fireBaseColor2);
      normalized1[0] = percents[i] / 100;
      fire.setColors(normalized1, normalized2);
    }
  };

  const initGeneralStyles = () => {
    if(!$component) return;
    $component.style.background = fireBg;
  };

  const initFires = () => {
    if(!getters || !$container) return;

    const percents = getters.getPercents() || [];
    for(let i=0; i<percents.length; i++){
      const color1 = hexToNormalized(fireBaseColor1);
      const color2 = hexToNormalized(fireBaseColor2);
      color1[0] = percents[i] / 100;
      color2[0] = percents[i] / 100;

      const fire = createFire($container, {
        fireBaseColor1: color1,
        fireBaseColor2: color2,
        fireShape,
        fireSpeed: getRandom(fireSpeedStart, fireSpeedEnd),
        fireStrength: getRandom(fireStrengthStart, fireStrengthEnd),
        fireDetalization: getRandom(detalizationStart, detalizationEnd),
        fireWidth,
        fireHeight
      });

      if(fire){
        fire.$canvas.style.left = `${ percents[i] }%`;
      }

      fires.push(fire);
    }
  };

  return {

    /**
     * Required: unique plugin name
     */
    get name() {
      return 'Fire';
    },

    /**
     * Optional: plugin initialization
     */
    init: (
      _$component,
      _requestUpdate,
      _setters: IPluginSetters,
      _getters: IPluginGetters
    ) => {
      getters = _getters;
      $component = _$component;

      enabled = getBoolean(_$component.getAttribute('fire'));
      if(!enabled) return;

      fireBg = _$component.getAttribute('fire-bg') ?? FIRE_BG;
      fireBaseColor1 = _$component.getAttribute('fire-color1') ?? COLOR_1;
      fireBaseColor2 = _$component.getAttribute('fire-color2') ?? COLOR_2;
      fireShape = getNumber(_$component.getAttribute('fire-shape'), 1);
      fireSpeedStart = getNumber(_$component.getAttribute('fire-speed-start'), 0.4);
      fireSpeedEnd = getNumber(_$component.getAttribute('fire-speed-end'), 0.6);
      fireStrengthStart = getNumber(_$component.getAttribute('fire-strength-start'), 90);
      fireStrengthEnd = getNumber(_$component.getAttribute('fire-strength-end'), 110);
      fireWidth = getNumber(_$component.getAttribute('fire-width'), FIRE_WIDTH);
      fireHeight = getNumber(_$component.getAttribute('fire-height'), FIRE_HEIGHT);
      detalizationStart = getNumber(_$component.getAttribute('fire-detalization-start'), 1);
      detalizationEnd = getNumber(_$component.getAttribute('fire-detalization-end'), 1);

      $container = _$component.shadowRoot?.querySelector('.container') as HTMLElement;
      if(!$container) return;

      initGeneralStyles();
      initFires();


      /*
        fire-detalization-start="0.1"
        fire-detalization-end="0.5"
        fire-shape="1"
        fire-speed-start="0.4"
        fire-speed-end="0.6"
        fire-strength-start="90"
        fire-strength-end="110"
        fire-bg="#000"
        fire-color1="#bc4c18"
        fire-color2="#fff200"
        fire-width="55"
        fire-height="150"*/
    },

    /**
     * Optional:
     * this will be called each time
     * range slider updates pointer positions or other properties
     */
    update,

    css: `
.range-slider-box{
  display: flex;
  flex-direction: column;
  justify-content: center;
}   

.fire-canvas{
  width: 35px;
  height: 50px;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-100%) translateX(-50%);
  overflow: hidden;
  clip-path: ellipse(25% 40% at 50% 50%);
  pointer-events: none;
} 

.animate-on-click .fire-canvas{
    transition: all var(--animate-onclick);
}
    `,
  };
};

/**
 * Required: add current plugin to the plugins list.
 */
window.tcRangeSliderPlugins.push(FirePlugin);

export default FirePlugin;
