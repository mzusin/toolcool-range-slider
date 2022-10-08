import { IPlugin, IPluginGetters, IPluginSetters, IPluginUpdateData } from '../../core/plugins/interfaces';
import svgPathBbox from 'svg-path-bbox';

/**
 * SVG Path Plugin.
 * SVG should consist of one SVG path!!!
 * Important: the plugin script should be included BEFORE the core script.
 */

/**
 * Required: init ToolCool Range Slider plugins namespace if not defined yet
 */
window.tcRangeSliderPlugins = window.tcRangeSliderPlugins || [];

/*
TODO:
resize observer
 */
const SVGPathPlugin = () : IPlugin => {

  let $component: HTMLElement | null = null;
  let getters: IPluginGetters | null = null;

  let $svg: SVGSVGElement | null = null;
  let $path: SVGPathElement | null = null;
  let $svgPanel: HTMLElement | null = null;

  const initSVGPanel = () => {
    if(!$svg) return;

    const $panel = $component?.shadowRoot?.querySelector('.panel') as HTMLElement;
    if(!$panel) return;

    $panel.style.display = 'none';

    $svgPanel = document.createElement('div');
    $svgPanel.classList.add('svg-panel');
    $svgPanel.append($svg);

    $panel.before($svgPanel);
  };

  const getSvgAbsoluteDistance = (percent: number, svgLength: number) => {
    return percent * svgLength / 100;
  };

  const initPointerPositions = () => {
    if(!$svgPanel || !$svg || !$path) return;

    const $pointers = getters?.getPointerElements() ?? [];
    const percents = getters?.getPercents() ?? [];
    const svgLength = $path.getTotalLength();

    const svgRectAfterResize = $svgPanel.getBoundingClientRect();
    const box = svgPathBbox($path.getAttribute('d') || '');

    const aspectX = svgRectAfterResize.width / box[2];
    const aspectY = svgRectAfterResize.height / box[3];

    for(let i=0; i<percents.length; i++){
      const $pointer = $pointers[i];
      if(!$pointer) continue;

      const percent = percents[i];

      const distance = getSvgAbsoluteDistance(percent, svgLength);
      const svgPoint = $path.getPointAtLength(distance);

      $pointer.style.left = `${ svgPoint.x * aspectX }px`;
      $pointer.style.top = `${ svgPoint.y * aspectY }px`;
    }
  };

  const update = (_data: IPluginUpdateData) => {
    initPointerPositions();
  };

  const destroy = () => {
    $svgPanel?.remove();
  };

  return {
    /**
     * Required: unique plugin name
     */
    get name() {
      return 'SVG Path';
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
      $component = _$component;
      getters = _getters;

      $svg = _$component.querySelector('svg');
      if(!$svg) return;

      $path = $svg.querySelector('path');
      if(!$path) return;

      initSVGPanel();
      initPointerPositions();
    },

    /**
     * Optional:
     * this will be called each time
     * range slider updates pointer positions
     */
    update,

    /**
     * Optional:
     * this will be called when
     * the web component will be removed from the DOM.
     */
    destroy,

    css: `
.svg-panel{
  position: absolute;
  z-index: 10;
  width: 100%;
  color: var(--panel-bg, #2d4373);
  overflow: hidden;
  transition: .3s all ease;
} 

.svg-panel svg{
  width: 100%;
  height: 100%;
  display: flex;
}   

.panel-fill{
  display: none;
}

    `,
  };
};

/**
 * Required: add current plugin to the plugins list.
 */
window.tcRangeSliderPlugins.push(SVGPathPlugin);

export default SVGPathPlugin;