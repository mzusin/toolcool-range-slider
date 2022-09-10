QUnit.module('Width & Height', (hooks) => {
  initFixtures(hooks, `
     <toolcool-range-slider id="slider-1"></toolcool-range-slider>
     <toolcool-range-slider slider-width="200px" slider-height="20px" id="slider-20"></toolcool-range-slider>
  `);

  QUnit.test('slider width by default should be undefined', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.sliderWidth, undefined);
  });

  QUnit.test('slider height by default should be undefined', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.sliderHeight, undefined);
  });

  QUnit.test('provided slider width should be 200px', (assert) => {
    const $slider = document.querySelector('#slider-20');
    assert.equal($slider.sliderWidth, '200px');
  });

  QUnit.test('provided slider height should be 20px', (assert) => {
    const $slider = document.querySelector('#slider-20');
    assert.equal($slider.sliderHeight, '20px');
  });

  QUnit.test('slider width changed to 30rem', (assert) => {
    const $slider = document.querySelector('#slider-20');
    $slider.sliderWidth = '30rem';
    assert.equal($slider.sliderWidth, '30rem');
  });

  QUnit.test('slider height changed to 2rem', (assert) => {
    const $slider = document.querySelector('#slider-20');
    $slider.sliderHeight = '2rem';
    assert.equal($slider.sliderHeight, '2rem');
  });

  QUnit.test('by default width style is empty', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.style.getPropertyValue('--width'), '');
  });

  QUnit.test('by default height style is empty', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.style.getPropertyValue('--height'), '');
  });

  QUnit.test('provided slider width style should be 200px', (assert) => {
    const $slider = document.querySelector('#slider-20').shadowRoot.querySelector('.range-slider');
    assert.equal($slider.style.getPropertyValue('--width'), '200px');
  });

  QUnit.test('provided slider height style should be 20px', (assert) => {
    const $slider = document.querySelector('#slider-20').shadowRoot.querySelector('.range-slider');
    assert.equal($slider.style.getPropertyValue('--height'), '20px');
  });

  QUnit.test('slider width changed to 30rem ---> style should change', (assert) => {
    const $slider = document.querySelector('#slider-20');
    $slider.sliderWidth = '30rem';
    assert.equal($slider.shadowRoot.querySelector('.range-slider').style.getPropertyValue('--width'), '30rem');
  });

  QUnit.test('slider height changed to 2rem ---> style should change', (assert) => {
    const $slider = document.querySelector('#slider-20');
    $slider.sliderHeight = '2rem';
    assert.equal($slider.shadowRoot.querySelector('.range-slider').style.getPropertyValue('--height'), '2rem');
  });

});
