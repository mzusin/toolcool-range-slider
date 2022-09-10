QUnit.module('Pointer Radius', (hooks) => {
  initFixtures(hooks, `
     <toolcool-range-slider id="slider-1"></toolcool-range-slider>
     <toolcool-range-slider slider-radius="5px" id="slider-23"></toolcool-range-slider>
  `);

  QUnit.test('panel radius by default should be undefined', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.sliderRadius, undefined);
  });

  QUnit.test('provided panel radius should be 5px', (assert) => {
    const $slider = document.querySelector('#slider-23');
    assert.equal($slider.sliderRadius, '5px');
  });

  QUnit.test('panel radius changed to 3rem', (assert) => {
    const $slider = document.querySelector('#slider-23');
    $slider.sliderRadius = '3rem';
    assert.equal($slider.sliderRadius, '3rem');
  });

  QUnit.test('by default panel radius style is empty', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.style.getPropertyValue('--panel-bg-border-radius'), '');
  });

  QUnit.test('provided panel radius style should be 5px', (assert) => {
    const $slider = document.querySelector('#slider-23').shadowRoot.querySelector('.range-slider');
    assert.equal($slider.style.getPropertyValue('--panel-bg-border-radius'), '5px');
  });

  QUnit.test('panel radius changed to 30rem ---> style should change', (assert) => {
    const $slider = document.querySelector('#slider-23');
    $slider.sliderRadius = '3rem';
    assert.equal($slider.shadowRoot.querySelector('.range-slider').style.getPropertyValue('--panel-bg-border-radius'), '3rem');
  });

});
