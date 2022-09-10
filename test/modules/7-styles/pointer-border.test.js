QUnit.module('Pointer Border', (hooks) => {
  initFixtures(hooks, `
     <toolcool-range-slider id="slider-1"></toolcool-range-slider>
     <toolcool-range-slider pointer-border="0" pointer-border-hover="0" pointer-border-focus="0" id="slider-27"></toolcool-range-slider>
  `);

  QUnit.test('pointer border by default should be undefined', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.pointerBorder, undefined);
  });

  QUnit.test('provided pointer border should be 0', (assert) => {
    const $slider = document.querySelector('#slider-27');
    assert.equal($slider.pointerBorder, '0');
  });

  QUnit.test('Pointer border changed to 0', (assert) => {
    const $slider = document.querySelector('#slider-27');
    $slider.pointerBorder = '0';
    assert.equal($slider.pointerBorder, '0');
  });

  QUnit.test('by default pointer border style is empty', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.style.getPropertyValue('--pointer-border'), '');
  });

  QUnit.test('provided pointer border style should be none', (assert) => {
    const $slider = document.querySelector('#slider-27');
    assert.equal($slider.shadowRoot.querySelector('.range-slider').style.getPropertyValue('--pointer-border'), '0');
  });

  QUnit.test('pointer border changed to "0 0 2px red" ---> style should change', (assert) => {
    const $slider = document.querySelector('#slider-27');
    $slider.pointerBorder = '1px solid red';
    assert.equal($slider.shadowRoot.querySelector('.range-slider').style.getPropertyValue('--pointer-border'), '1px solid red');
  });

});
