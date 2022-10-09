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
docs - current color for fill and not only!
 */
const SVGPathPlugin = () : IPlugin => {

  let $component: HTMLElement | null = null;
  let getters: IPluginGetters | null = null;

  let $initialFill: HTMLElement | null = null;
  let $svg: SVGSVGElement | null = null;
  let $svgCopy: SVGSVGElement | null = null;
  let $fill: HTMLElement | null = null;
  let $path: SVGPathElement | null = null;
  let $svgPanel: HTMLElement | null = null;

  const updateFill = () => {
    if(!$initialFill || !$fill) return;
    $fill.style.width = $initialFill.style.width;
    $fill.style.right = $initialFill.style.right;
    $fill.style.left = $initialFill.style.left;

    if(!$svgCopy) return;
    $svgCopy.style.transform = `translateX(-${ $initialFill.style.left })`;
  };

  const initSVGPanel = () => {
    if(!$svg) return;

    const $panel = $component?.shadowRoot?.querySelector('.panel') as HTMLElement;
    if(!$panel) return;

    $panel.style.display = 'none';

    $svgPanel = document.createElement('div');
    $svgPanel.classList.add('svg-panel');
    $svgPanel.append($svg);

    $fill = document.createElement('div');
    $fill.classList.add('svg-fill');

    $svgCopy = $svg.cloneNode(true) as SVGSVGElement;
    $fill.append($svgCopy);

    updateFill();

    $svgPanel.append($fill);
    $panel.before($svgPanel);

    const rect = $svg.getBoundingClientRect();
    $svgCopy.style.width = `${ rect.width }px`;
    $svgCopy.style.height = `${ rect.height }px`;
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
    updateFill();
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

      $initialFill = $component?.shadowRoot?.querySelector('.panel-fill') as HTMLElement;
      if(!$initialFill) return;

      initSVGPanel();
      window.setTimeout(() => {
        _requestUpdate();
      });
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
  transition: none !important;
} 

.svg-panel svg{
  width: 100%;
  height: 100%;
  display: flex;
}   

.panel-fill{
  display: none;
}

.svg-fill{
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   overflow: hidden;
}

.svg-fill svg{
  color: var(--panel-bg-fill,#000);
}

.pointer{
 /*transform: none !important;*/
 transition: none !important;
}

    `,
  };
};

/**
 * Required: add current plugin to the plugins list.
 */
window.tcRangeSliderPlugins.push(SVGPathPlugin);

export default SVGPathPlugin;