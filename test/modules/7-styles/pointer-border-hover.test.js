QUnit.module('Pointer Border Hover', (hooks) => {
  initFixtures(hooks, `
     <toolcool-range-slider id="slider-1"></toolcool-range-slider>
     <toolcool-range-slider pointer-border="0" pointer-border-hover="0" pointer-border-focus="0" id="slider-27"></toolcool-range-slider>
  `);

  QUnit.test('pointer border hover by default should be undefined', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.pointerBorderHover, undefined);
  });

  QUnit.test('provided pointer border hover should be 0', (assert) => {
    const $slider = document.querySelector('#slider-27');
    assert.equal($slider.pointerBorderHover, '0');
  });

  QUnit.test('pointer border hover changed to 0', (assert) => {
    const $slider = document.querySelector('#slider-27');
    $slider.pointerBorderHover = '0';
    assert.equal($slider.pointerBorderHover, '0');
  });

  QUnit.test('by default pointer border hover style is empty', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.style.getPropertyValue('--pointer-border-hover'), '');
  });

  QUnit.test('provided pointer border hover style should be none', (assert) => {
    const $slider = document.querySelector('#slider-27');
    assert.equal($slider.shadowRoot.querySelector('.range-slider').style.getPropertyValue('--pointer-border-hover'), '0');
  });

  QUnit.test('pointer border hover changed to "0 0 2px red" ---> style should change', (assert) => {
    const $slider = document.querySelector('#slider-27');
    $slider.pointerBorderHover = '1px solid red';
    assert.equal($slider.shadowRoot.querySelector('.range-slider').style.getPropertyValue('--pointer-border-hover'), '1px solid red');
  });

});
