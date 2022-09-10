QUnit.module('Pointer Shadow Focus', (hooks) => {
  initFixtures(hooks, `
     <toolcool-range-slider id="slider-1"></toolcool-range-slider>
     <toolcool-range-slider pointer-shadow-focus="none" id="slider-30"></toolcool-range-slider>
  `);

  QUnit.test('pointer shadow focus by default should be undefined', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.pointerShadowFocus, undefined);
  });

  QUnit.test('provided pointer shadow focus should be none', (assert) => {
    const $slider = document.querySelector('#slider-30');
    assert.equal($slider.pointerShadowFocus, 'none');
  });

  QUnit.test('pointer shadow focus changed to none', (assert) => {
    const $slider = document.querySelector('#slider-30');
    $slider.pointerShadowFocus = 'none';
    assert.equal($slider.pointerShadowFocus, 'none');
  });

  QUnit.test('by default pointer shadow focus style is empty', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.style.getPropertyValue('--pointer-shadow-focus'), '');
  });

  QUnit.test('provided pointer shadow focus style should be none', (assert) => {
    const $slider = document.querySelector('#slider-30').shadowRoot.querySelector('.range-slider')
    assert.equal($slider.style.getPropertyValue('--pointer-shadow-focus'), 'none');
  });

  QUnit.test('pointer shadow focus changed to "0 0 2px red" ---> style should change', (assert) => {
    const $slider = document.querySelector('#slider-30');
    $slider.pointerShadowFocus = '0 0 2px red';
    assert.equal($slider.shadowRoot.querySelector('.range-slider').style.getPropertyValue('--pointer-shadow-focus'), '0 0 2px red');
  });

});
