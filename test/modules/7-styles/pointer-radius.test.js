QUnit.module('Pointer Radius', (hooks) => {
  initFixtures(hooks, `
     <toolcool-range-slider id="slider-1"></toolcool-range-slider>
     <toolcool-range-slider pointer-radius="5px" id="slider-22"></toolcool-range-slider>
  `);

  QUnit.test('pointer radius by default should be undefined', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.pointerRadius, undefined);
  });

  QUnit.test('provided pointer radius should be 5px', (assert) => {
    const $slider = document.querySelector('#slider-22');
    assert.equal($slider.pointerRadius, '5px');
  });

  QUnit.test('pointer radius changed to 3rem', (assert) => {
    const $slider = document.querySelector('#slider-22');
    $slider.pointerRadius = '3rem';
    assert.equal($slider.pointerRadius, '3rem');
  });

  QUnit.test('by default pointer radius style is empty', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.style.getPropertyValue('--pointer-border-radius'), '');
  });

  QUnit.test('provided pointer radius style should be 5px', (assert) => {
    const $slider = document.querySelector('#slider-22').shadowRoot.querySelector('.range-slider')
    assert.equal($slider.style.getPropertyValue('--pointer-border-radius'), '5px');
  });

  QUnit.test('pointer radius changed to 30rem ---> style should change', (assert) => {
    const $slider = document.querySelector('#slider-22');
    $slider.pointerRadius = '3rem';
    assert.equal($slider.shadowRoot.querySelector('.range-slider').style.getPropertyValue('--pointer-border-radius'), '3rem');
  });

});
