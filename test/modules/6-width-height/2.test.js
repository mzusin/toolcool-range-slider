QUnit.module('Width & Height - Pointer', (hooks) => {
  initFixtures(hooks, `
     <toolcool-range-slider id="slider-1"></toolcool-range-slider>
     <toolcool-range-slider pointer-width="50px" pointer-height="50px" id="slider-21"></toolcool-range-slider>
  `);

  QUnit.test('pointer width by default should be undefined', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.pointerWidth, undefined);
  });

  QUnit.test('pointer height by default should be undefined', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.pointerHeight, undefined);
  });

  QUnit.test('provided pointer width should be 50px', (assert) => {
    const $slider = document.querySelector('#slider-21');
    assert.equal($slider.pointerWidth, '50px');
  });

  QUnit.test('provided pointer height should be 50px', (assert) => {
    const $slider = document.querySelector('#slider-21');
    assert.equal($slider.pointerHeight, '50px');
  });

  QUnit.test('pointer width changed to 30rem', (assert) => {
    const $slider = document.querySelector('#slider-21');
    $slider.pointerWidth = '2rem';
    assert.equal($slider.pointerWidth, '2rem');
  });

  QUnit.test('pointer height changed to 2rem', (assert) => {
    const $slider = document.querySelector('#slider-21');
    $slider.pointerHeight = '2rem';
    assert.equal($slider.pointerHeight, '2rem');
  });

  QUnit.test('by default pointer width style is empty', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.style.getPropertyValue('--pointer-width'), '');
  });

  QUnit.test('by default pointer height style is empty', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.style.getPropertyValue('--pointer-height'), '');
  });

  QUnit.test('provided pointer width style should be 50px', (assert) => {
    const $slider = document.querySelector('#slider-21').shadowRoot.querySelector('.range-slider');
    assert.equal($slider.style.getPropertyValue('--pointer-width'), '50px');
  });

  QUnit.test('provided pointer height style should be 50px', (assert) => {
    const $slider = document.querySelector('#slider-21').shadowRoot.querySelector('.range-slider');
    assert.equal($slider.style.getPropertyValue('--pointer-height'), '50px');
  });

  QUnit.test('pointer width changed to 30rem ---> style should change', (assert) => {
    const $slider = document.querySelector('#slider-21');
    $slider.pointerWidth = '30rem';
    assert.equal($slider.shadowRoot.querySelector('.range-slider').style.getPropertyValue('--pointer-width'), '30rem');
  });

  QUnit.test('pointer height changed to 2rem ---> style should change', (assert) => {
    const $slider = document.querySelector('#slider-21');
    $slider.pointerHeight = '2rem';
    assert.equal($slider.shadowRoot.querySelector('.range-slider').style.getPropertyValue('--pointer-height'), '2rem');
  });
});
