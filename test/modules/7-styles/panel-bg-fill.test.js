QUnit.module('Panel Background Fill', (hooks) => {
  initFixtures(hooks, `
     <toolcool-range-slider id="slider-1"></toolcool-range-slider>
     <toolcool-range-slider slider-bg-fill="red" id="slider-32"></toolcool-range-slider>
  `);

  QUnit.test('slider bg fill color by default should be undefined', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.sliderBgFill, undefined);
  });

  QUnit.test('provided slider bg fill color should be red', (assert) => {
    const $slider = document.querySelector('#slider-32');
    assert.equal($slider.sliderBgFill, 'red');
  });

  QUnit.test('slider bg fill color changed to blue', (assert) => {
    const $slider = document.querySelector('#slider-32');
    $slider.sliderBgFill = 'blue';
    assert.equal($slider.sliderBgFill, 'blue');
  });

  QUnit.test('by default slider bg fill color style is empty', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.style.getPropertyValue('--panel-bg-fill'), '');
  });

  QUnit.test('provided slider bg fill color style should be red', (assert) => {
    const $slider = document.querySelector('#slider-32').shadowRoot.querySelector('.range-slider')
    assert.equal($slider.style.getPropertyValue('--panel-bg-fill'), 'red');
  });

  QUnit.test('slider bg fill color changed to green ---> style should change', (assert) => {
    const $slider = document.querySelector('#slider-32');
    $slider.sliderBgFill = 'green';
    assert.equal($slider.shadowRoot.querySelector('.range-slider').style.getPropertyValue('--panel-bg-fill'), 'green');
  });

});
