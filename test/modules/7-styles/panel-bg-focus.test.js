QUnit.module('Panel Background Focus', (hooks) => {
  initFixtures(hooks, `
     <toolcool-range-slider id="slider-1"></toolcool-range-slider>
     <toolcool-range-slider pointer-bg-focus="#000" id="slider-31"></toolcool-range-slider>
  `);

  QUnit.test('pointer bg focus color by default should be undefined', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.pointerBgFocus, undefined);
  });

  QUnit.test('provided pointer bg focus color should be red', (assert) => {
    const $slider = document.querySelector('#slider-31');
    assert.equal($slider.pointerBgFocus, '#000');
  });

  QUnit.test('pointer bg focus color changed to blue', (assert) => {
    const $slider = document.querySelector('#slider-31');
    $slider.pointerBgFocus = 'blue';
    assert.equal($slider.pointerBgFocus, 'blue');
  });

  QUnit.test('by default pointer bg focus color style is empty', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.style.getPropertyValue('--pointer-bg-focus'), '');
  });

  QUnit.test('provided pointer bg focus color style should be red', (assert) => {
    const $slider = document.querySelector('#slider-31').shadowRoot.querySelector('.range-slider')
    assert.equal($slider.style.getPropertyValue('--pointer-bg-focus'), '#000');
  });

  QUnit.test('pointer bg focus color changed to green ---> style should change', (assert) => {
    const $slider = document.querySelector('#slider-31');
    $slider.pointerBgFocus = 'green';
    assert.equal($slider.shadowRoot.querySelector('.range-slider').style.getPropertyValue('--pointer-bg-focus'), 'green');
  });

});
