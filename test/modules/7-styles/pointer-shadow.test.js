QUnit.module('Pointer Shadow', (hooks) => {
  initFixtures(hooks, `
     <toolcool-range-slider id="slider-1"></toolcool-range-slider>
     <toolcool-range-slider pointer-shadow="none" pointer-shadow-hover="none" id="slider-26"></toolcool-range-slider>
  `);

  QUnit.test('pointer shadow by default should be undefined', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.pointerShadow, undefined);
  });

  QUnit.test('provided pointer shadow should be none', (assert) => {
    const $slider = document.querySelector('#slider-26');
    assert.equal($slider.pointerShadow, 'none');
  });

  QUnit.test('pointer shadow changed to none', (assert) => {
    const $slider = document.querySelector('#slider-26');
    $slider.pointerShadow = 'none';
    assert.equal($slider.pointerShadow, 'none');
  });

  QUnit.test('by default pointer shadow style is empty', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.style.getPropertyValue('--pointer-shadow'), '');
  });

  QUnit.test('provided pointer shadow style should be none', (assert) => {
    const $slider = document.querySelector('#slider-26').shadowRoot.querySelector('.range-slider')
    assert.equal($slider.style.getPropertyValue('--pointer-shadow'), 'none');
  });

  QUnit.test('pointer shadow changed to "0 0 2px red" ---> style should change', (assert) => {
    const $slider = document.querySelector('#slider-26');
    $slider.pointerShadow = '0 0 2px red';
    assert.equal($slider.shadowRoot.querySelector('.range-slider').style.getPropertyValue('--pointer-shadow'), '0 0 2px red');
  });

});
