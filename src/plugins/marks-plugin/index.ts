import { IPlugin, IPluginGetters, IPluginSetters, IPluginUpdateData } from '../../core/plugins/interfaces';
import RangeSlider from '../../core';
import { getBoolean, getNumber } from '../../core/domain/math-provider';

/**
 * Marks Plugin.
 * Important: the plugin script should be included BEFORE the core script.
 */

/**
 * Required: init ToolCool Range Slider plugins namespace if not defined yet
 */
window.tcRangeSliderPlugins = window.tcRangeSliderPlugins || [];

const MARKS_STEP_DEFAULT = 1;

const MarksPlugin = () : IPlugin => {

  let $component: HTMLElement | null = null;
  let getters: IPluginGetters | null = null;
  let $marks: HTMLElement | null = null;

  let enabled = false;
  let marksStep = MARKS_STEP_DEFAULT;

  const createMarksBox = () => {
    const $slider = $component?.shadowRoot?.querySelector('#range-slider')  as HTMLElement;
    $marks = document.createElement('div');
    $marks.classList.add('marks');
    $slider.append($marks);
  };

  const createMarks = () => {
    if(!$marks || !getters) return;

    const min = getters.getMin();
    const max = getters.getMax();
    const range = Math.abs(max - min);
    const count = Math.round(range / marksStep);

    for(let i=0; i<count; i++){
      const $mark = document.createElement('div');
      $mark.classList.add('mark', `mark-${ i }`);
      $marks.append($mark);
    }
  };

  const updateStep = (stepValue: number) => {
    destroy();

    marksStep = stepValue;

    if(marksStep <= 0){
      marksStep = MARKS_STEP_DEFAULT;
    }

    createMarksBox();
    createMarks();
  };

  const toggleEnabled = (_enabled: boolean) => {
    enabled = _enabled;

    if(!enabled){
      destroy();
    }
    else{
      createMarksBox();
      createMarks();
    }
  };

  const update = (data: IPluginUpdateData) => {

    if(!enabled ) return;

  };

  const destroy = () => {
    $marks?.remove();
  };

  return {

    /**
     * Required: unique plugin name
     */
    get name() {
      return 'Marks';
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

      enabled = getBoolean($component.getAttribute('marks'));
      updateStep(getNumber($component.getAttribute('marks-step'), MARKS_STEP_DEFAULT));
    },

    /**
     * Optional:
     * this will be called each time
     * range slider updates pointer positions or other properties
     */
    update,

    /**
     * Optional:
     * this will be called each time observed HTML attribute changes;
     * observed attributes are defined in window.tcRangeSliderObservedAttr array above.
     */
    onAttrChange: (_attrName: string, _newValue: string) => {
      if(_attrName === 'marks'){
        toggleEnabled(getBoolean(_newValue));
      }

      if(_attrName === 'marks-step'){
        updateStep(getNumber(_newValue, MARKS_STEP_DEFAULT));
      }
    },

    /**
     * Optional:
     * List of getters and setter that can be used to create slider API.
     */
    gettersAndSetters: [
      {
        name: 'marksEnabled',
        attributes: {
          get () {
            return enabled ?? false;
          },

          set: (_enabled) => {
            toggleEnabled(getBoolean(_enabled));
          },
        }
      },

      {
        name: 'marksStep',
        attributes: {
          get () {
            return marksStep ?? MARKS_STEP_DEFAULT;
          },

          set: (_newStep) => {
            updateStep(getNumber(_newStep, MARKS_STEP_DEFAULT));
          },
        }
      },

    ],

    destroy,

    css: `
.marks{
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  position: relative;
  top: 100%;
  left: 0;
  margin-top: 3px;
}  

.mark{
  background: #cbd5e1;
  width: 2px;
  height: 5px;
}  
    `,
  };
};

/**
 * Required: add current plugin to the plugins list.
 */
window.tcRangeSliderPlugins.push(MarksPlugin);

export default MarksPlugin;

/**
 * export dynamic properties
 */
export interface IMarksPlugin extends RangeSlider{
  marksEnabled: boolean;
  marksStep: number;
}
