import RangeSlider from '../../../../types/app/range-slider';

export const getSetValuesExamples = () => {
  if(!document.querySelector('[data-examples="get-set-values"]')) return;

  try{
    const $slider1 = document.getElementById('slider-1') as RangeSlider;
    const $label1 = document.getElementById('label-1') as HTMLElement;

    $slider1.addEventListener('change', (evt: CustomEvent) => {
      $label1.textContent = evt.detail.value;
    });

    $slider1.value = 50;
  }
  catch(ex) { console.error(ex); }

  try{
    const $slider2 = document.getElementById('slider-2') as RangeSlider;
    const $label2 = document.getElementById('label-2') as HTMLElement;
    const $label3 = document.getElementById('label-3') as HTMLElement;

    $slider2.addEventListener('change', (evt: CustomEvent) => {
      $label2.textContent = evt.detail.value;
      $label3.textContent = evt.detail.value2;
    });

    $slider2.value1 = 40;
    $slider2.value2 = 80;
  }
  catch(ex) { console.error(ex); }
};

export const autoBindingValuesExamples = () => {
  if(!document.querySelector('[data-examples="auto-binding-values"]')) return;

  try{
    const $slider2 = document.getElementById('slider-2') as RangeSlider;

    // @ts-ignore
    $slider2.valueLabel = '.value-22';
    // $slider2.setAttribute('value-label', '.value-22');
  }
  catch(ex) { console.error(ex); }
};