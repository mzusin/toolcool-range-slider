QUnit.module('Pointer Border Focus', (hooks) => {
  initFixtures(hooks, `
     <toolcool-range-slider id="slider-1"></toolcool-range-slider>
     <toolcool-range-slider pointer-border="0" pointer-border-hover="0" pointer-border-focus="0" id="slider-27"></toolcool-range-slider>
  `);

  QUnit.test('pointer border focus by default should be undefined', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.pointerBorderFocus, undefined);
  });

  QUnit.test('provided pointer border focus should be 0', (assert) => {
    const $slider = document.querySelector('#slider-27');
    assert.equal($slider.pointerBorderFocus, '0');
  });

  QUnit.test('pointer border focus changed to 0', (assert) => {
    const $slider = document.querySelector('#slider-27');
    $slider.pointerBorderFocus = '0';
    assert.equal($slider.pointerBorderFocus, '0');
  });

  QUnit.test('by default pointer border focus style is empty', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.style.getPropertyValue('--pointer-border-focus'), '');
  });

  QUnit.test('provided pointer border focus style should be none', (assert) => {
    const $slider = document.querySelector('#slider-27');
    assert.equal($slider.shadowRoot.querySelector('.range-slider').style.getPropertyValue('--pointer-border-focus'), '0');
  });

  QUnit.test('pointer border focus changed to "0 0 2px red" ---> style should change', (assert) => {
    const $slider = document.querySelector('#slider-27');
    $slider.pointerBorderFocus = '1px solid red';
    assert.equal($slider.shadowRoot.querySelector('.range-slider').style.getPropertyValue('--pointer-border-focus'), '1px solid red');
  });

});
