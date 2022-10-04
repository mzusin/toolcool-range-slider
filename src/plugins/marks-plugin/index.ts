import { IPlugin, IPluginGetters, IPluginSetters, IPluginUpdateData } from '../../core/plugins/interfaces';
import RangeSlider from '../../core';
import { convertRange, getBoolean, getNumber } from '../../core/domain/math-provider';

/**
 * Marks Plugin.
 * Important: the plugin script should be included BEFORE the core script.
 */

/**
 * Required: init ToolCool Range Slider plugins namespace if not defined yet
 */
window.tcRangeSliderPlugins = window.tcRangeSliderPlugins || [];

const MARKS_STEP_COUNT_DEFAULT = 11;
const MARKS_VALUES_COUNT_DEFAULT = 11;

const MarksPlugin = () : IPlugin => {

  let $component: HTMLElement | null = null;
  let getters: IPluginGetters | null = null;

  let $marks: HTMLElement | null = null;
  let $markPoints: HTMLElement | null = null;
  let $markValues: HTMLElement | null = null;

  let enabled = false;
  let marksCount = MARKS_STEP_COUNT_DEFAULT;
  let marksValuesCount = MARKS_VALUES_COUNT_DEFAULT;

  const createMarksBox = () => {
    const $slider = $component?.shadowRoot?.querySelector('#range-slider')  as HTMLElement;
    $marks = document.createElement('div');
    $marks.classList.add('marks');

    $markPoints = document.createElement('div');
    $markPoints.classList.add('mark-points');
    $marks.append($markPoints);

    $markValues = document.createElement('div');
    $markValues.classList.add('mark-values');
    $marks.append($markValues);

    $slider.append($marks);
  };

  const createMarks = () => {
    if(!$marks || !getters) return;

    const min = getters.getMin();
    const max = getters.getMax();
    // const range = Math.abs(max - min);

    for(let i=0; i<marksCount; i++){
      const $mark = document.createElement('div');
      $mark.classList.add('mark', `mark-${ i }`);

      const percent = marksCount === 0 ? 0 : i * 100 / (marksCount - 1);
      $mark.style.left = `${ percent }%`;

      $markPoints.append($mark);
    }

    for(let i=0; i<marksValuesCount; i++){
      const $value = document.createElement('div');
      $value.classList.add('mark-value', `mark-value-${ i }`);

      const percent = marksValuesCount === 0 ? 0 : i * 100 / (marksValuesCount - 1);
      const val = convertRange(0, marksValuesCount - 1, min, max, i);

      $value.textContent = val.toString();
      $value.style.left = `${ percent }%`;
      $markValues.append($value);
    }
  };

  const updateSteps = (_markStep: number, _makeValueStep: number) => {
    destroy();

    marksCount = _markStep;
    marksValuesCount = _makeValueStep;

    if(marksCount <= 0){
      marksCount = MARKS_STEP_COUNT_DEFAULT;
    }

    if(marksValuesCount <= 0){
      marksValuesCount = MARKS_VALUES_COUNT_DEFAULT;
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
      updateSteps(
        getNumber($component.getAttribute('marks-count'), MARKS_STEP_COUNT_DEFAULT),
        getNumber($component.getAttribute('marks-values-count'), MARKS_VALUES_COUNT_DEFAULT)
      );
    },

    /**
     * Optional:
     * this will be called each time observed HTML attribute changes;
     * observed attributes are defined in window.tcRangeSliderObservedAttr array above.
     */
    onAttrChange: (_attrName: string, _newValue: string) => {
      if(_attrName === 'marks'){
        toggleEnabled(getBoolean(_newValue));
      }

      if(_attrName === 'marks-count'){
        updateSteps(getNumber(_newValue, MARKS_STEP_COUNT_DEFAULT), marksValuesCount);
      }

      if(_attrName === 'marks-values-count'){
        updateSteps(marksCount, getNumber(_newValue, MARKS_VALUES_COUNT_DEFAULT));
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
        name: 'marksCount',
        attributes: {
          get () {
            return marksCount ?? MARKS_STEP_COUNT_DEFAULT;
          },

          set: (_newStep) => {
            updateSteps(getNumber(_newStep, MARKS_STEP_COUNT_DEFAULT), marksValuesCount);
          },
        }
      },

      {
        name: 'marksValuesCount',
        attributes: {
          get () {
            return marksCount ?? MARKS_STEP_COUNT_DEFAULT;
          },

          set: (_newStep) => {
            updateSteps(marksCount, getNumber(_newStep, MARKS_VALUES_COUNT_DEFAULT));
          },
        }
      },

    ],

    destroy,

    css: `
.marks{
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 100%;
  left: 0;
  color: #475569;
}
    
.mark-points{
  width: 100%;
  height: 1rem;
  position: relative;
  margin-top: 5px;
}  

.mark-values{
  width: 100%;
  height: 1rem;
  position: relative;
}

.mark{
  background: #cbd5e1;
  width: 2px;
  height: 5px;
  position: absolute;
  transform: translateX(-50%);
}  

.mark-value{
  position: absolute;
  transform: translateX(-50%);
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
  marksCount: number;
  marksValuesCount: number;
}
