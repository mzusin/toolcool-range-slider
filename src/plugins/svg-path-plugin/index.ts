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
docs - current color for fill and not only!
 */
const SVGPathPlugin = () : IPlugin => {

  let $component: HTMLElement | null = null;
  let getters: IPluginGetters | null = null;
  let requestUpdate: () => void;

  let $initialFill: HTMLElement | null = null;
  let $svg: SVGSVGElement | null = null;
  let $svgCopy: SVGSVGElement | null = null;
  let $fill: HTMLElement | null = null;
  let $path: SVGPathElement | null = null;
  let $svgPanel: HTMLElement | null = null;

  let resizeObserver: ResizeObserver | null = null;

  const initResizeObserver = () => {
    if(!$component) return;
    resizeObserver = new ResizeObserver(entries => {
      // eslint-disable-next-line
      for (const _entry of entries) {
        $svgPanel?.remove();
        initSVGPanel();
        window.setTimeout(() => {
          requestUpdate();
        });
      }
    });
    resizeObserver.observe($component);
  };

  const updateFill = () => {
    if(!$initialFill || !$fill || !$svgCopy) return;

    if(getters?.getType() === 'vertical'){
      $fill.style.height = $initialFill.style.height;
      $fill.style.top = $initialFill.style.top;
      $fill.style.bottom = $initialFill.style.bottom;

      if(getters?.isBottomToTop()){
        if(getters?.getPercents().length > 1){
          $svgCopy.style.transform = `translateY(-${ $initialFill.style.top })`;
        }
        else{
          const height = Number($initialFill.style.height.replace('%', ''));
          $svgCopy.style.transform = `translateY(-${ 100 - height }%)`;
        }
      }
      else{
        $svgCopy.style.transform = `translateY(-${ $initialFill.style.top })`;
      }
    }
    else{
      $fill.style.width = $initialFill.style.width;
      $fill.style.right = $initialFill.style.right;
      $fill.style.left = $initialFill.style.left;

      if(getters?.isRightToLeft()){
        if(getters?.getPercents().length > 1){
          $svgCopy.style.transform = `translateX(-${ $initialFill.style.left })`;
        }
        else{
          const width = Number($initialFill.style.width.replace('%', ''));
          $svgCopy.style.transform = `translateX(-${ 100 - width }%)`;
        }
      }
      else{
        $svgCopy.style.transform = `translateX(-${ $initialFill.style.left })`;
      }
    }
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

    if(getters?.isBottomToTop() || getters?.isRightToLeft()){
      $component?.shadowRoot?.querySelector('.range-slider-box')?.classList.add('is-reversed');
    }

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
      
      // const pointerRect = $pointer.getBoundingClientRect();

      const percent = percents[i];

      const distance = getSvgAbsoluteDistance(percent, svgLength);
      const svgPoint = $path.getPointAtLength(distance);
      let x = svgPoint.x;
      let y = svgPoint.y;

      if(getters?.getType() === 'vertical'){
        //
        //y -= pointerRect.height / 2;
        if(getters?.isBottomToTop()){
          $pointer.style.bottom = `${ y * aspectY }px`;
          $pointer.style.top = `auto`;
        }
        else{
          $pointer.style.top = `${ y * aspectY }px`;
          $pointer.style.bottom = `auto`;
        }

        $pointer.style.left = `${ x * aspectX }px`;
        $pointer.style.right = `auto`;
      }
      else{
        //x -= pointerRect.width / 2;
        //y -= pointerRect.height;
        if(getters?.isRightToLeft()){
          $pointer.style.right = `${ x * aspectX }px`;
          $pointer.style.left = `auto`;
        }
        else{
          $pointer.style.left = `${ x * aspectX }px`;
          $pointer.style.right = `auto`;
        }
        $pointer.style.top = `${ y * aspectY }px`;
        $pointer.style.bottom = `auto`;
      }
    }
  };

  const update = (_data: IPluginUpdateData) => {
    initPointerPositions();
    updateFill();
  };

  const destroy = () => {
    $svgPanel?.remove();
    resizeObserver?.disconnect();
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
      requestUpdate = _requestUpdate;

      $svg = _$component.querySelector('svg');
      if(!$svg) return;

      $path = $svg.querySelector('path');
      if(!$path) return;

      $initialFill = $component?.shadowRoot?.querySelector('.panel-fill') as HTMLElement;
      if(!$initialFill) return;

      initSVGPanel();
      initResizeObserver();
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
  display: flex;
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

.type-vertical.is-reversed .pointer{
  transform: translateX(0%) !important;
}

    `,
  };
};

/**
 * Required: add current plugin to the plugins list.
 */
window.tcRangeSliderPlugins.push(SVGPathPlugin);

export default SVGPathPlugin;