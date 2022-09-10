QUnit.module('Panel Background', (hooks) => {
  initFixtures(hooks, `
     <toolcool-range-slider id="slider-1"></toolcool-range-slider>
     <toolcool-range-slider slider-bg="red" slider-bg-hover="red" id="slider-24"></toolcool-range-slider>
  `);

  QUnit.test('slider bg color by default should be undefined', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.sliderBg, undefined);
  });

  QUnit.test('provided slider bg color should be red', (assert) => {
    const $slider = document.querySelector('#slider-24');
    assert.equal($slider.sliderBg, 'red');
  });

  QUnit.test('slider bg color changed to blue', (assert) => {
    const $slider = document.querySelector('#slider-24');
    $slider.sliderBg = 'blue';
    assert.equal($slider.sliderBg, 'blue');
  });

  QUnit.test('by default slider bg color style is empty', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.style.getPropertyValue('--panel-bg'), '');
  });

  QUnit.test('provided slider bg color style should be red', (assert) => {
    const $slider = document.querySelector('#slider-24').shadowRoot.querySelector('.range-slider')
    assert.equal($slider.style.getPropertyValue('--panel-bg'), 'red');
  });

  QUnit.test('slider bg color changed to green ---> style should change', (assert) => {
    const $slider = document.querySelector('#slider-24');
    $slider.sliderBg = 'green';
    assert.equal($slider.shadowRoot.querySelector('.range-slider').style.getPropertyValue('--panel-bg'), 'green');
  });

});
