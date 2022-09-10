QUnit.module('Pointer Background Hover', (hooks) => {
  initFixtures(hooks, `
     <toolcool-range-slider id="slider-1"></toolcool-range-slider>
     <toolcool-range-slider pointer-bg="red" pointer-bg-hover="red" id="slider-25"></toolcool-range-slider>
  `);

  QUnit.test('pointer bg hover color by default should be undefined', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.pointerBgHover, undefined);
  });

  QUnit.test('provided pointer bg hover color should be red', (assert) => {
    const $slider = document.querySelector('#slider-25');
    assert.equal($slider.pointerBgHover, 'red');
  });

  QUnit.test('pointer bg hover color changed to blue', (assert) => {
    const $slider = document.querySelector('#slider-25');
    $slider.pointerBgHover = 'blue';
    assert.equal($slider.pointerBgHover, 'blue');
  });

  QUnit.test('by default pointer bg hover color style is empty', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.style.getPropertyValue('--pointer-bg-hover'), '');
  });

  QUnit.test('provided pointer bg hover color style should be red', (assert) => {
    const $slider = document.querySelector('#slider-25').shadowRoot.querySelector('.range-slider')
    assert.equal($slider.style.getPropertyValue('--pointer-bg-hover'), 'red');
  });

  QUnit.test('pointer bg hover color changed to green ---> style should change', (assert) => {
    const $slider = document.querySelector('#slider-25');
    $slider.pointerBgHover = 'green';
    assert.equal($slider.shadowRoot.querySelector('.range-slider').style.getPropertyValue('--pointer-bg-hover'), 'green');
  });

});
