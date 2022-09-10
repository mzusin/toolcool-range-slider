QUnit.module('Pointer Background', (hooks) => {
  initFixtures(hooks, `
     <toolcool-range-slider id="slider-1"></toolcool-range-slider>
     <toolcool-range-slider pointer-bg="red" pointer-bg-hover="red" id="slider-25"></toolcool-range-slider>
  `);

  QUnit.test('pointer bg color by default should be undefined', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.pointerBg, undefined);
  });

  QUnit.test('provided pointer bg color should be red', (assert) => {
    const $slider = document.querySelector('#slider-25');
    assert.equal($slider.pointerBg, 'red');
  });

  QUnit.test('pointer bg color changed to blue', (assert) => {
    const $slider = document.querySelector('#slider-25');
    $slider.pointerBg = 'blue';
    assert.equal($slider.pointerBg, 'blue');
  });

  QUnit.test('by default pointer bg color style is empty', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.style.getPropertyValue('--pointer-bg'), '');
  });

  QUnit.test('provided pointer bg color style should be red', (assert) => {
    const $slider = document.querySelector('#slider-25').shadowRoot.querySelector('.range-slider')
    assert.equal($slider.style.getPropertyValue('--pointer-bg'), 'red');
  });

  QUnit.test('pointer bg color changed to green ---> style should change', (assert) => {
    const $slider = document.querySelector('#slider-25');
    $slider.pointerBg = 'green';
    assert.equal($slider.shadowRoot.querySelector('.range-slider').style.getPropertyValue('--pointer-bg'), 'green');
  });

});
