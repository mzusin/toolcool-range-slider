QUnit.module('Pointer Shadow Hover', (hooks) => {
  initFixtures(hooks, `
     <toolcool-range-slider id="slider-1"></toolcool-range-slider>
     <toolcool-range-slider pointer-shadow="none" pointer-shadow-hover="none" id="slider-26"></toolcool-range-slider>
  `);

  QUnit.test('pointer shadow hover by default should be undefined', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.pointerShadowHover, undefined);
  });

  QUnit.test('provided pointer shadow hover should be none', (assert) => {
    const $slider = document.querySelector('#slider-26');
    assert.equal($slider.pointerShadowHover, 'none');
  });

  QUnit.test('pointer shadow hover changed to none', (assert) => {
    const $slider = document.querySelector('#slider-26');
    $slider.pointerShadowHover = 'none';
    assert.equal($slider.pointerShadowHover, 'none');
  });

  QUnit.test('by default pointer shadow hover style is empty', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.style.getPropertyValue('--pointer-shadow-hover'), '');
  });

  QUnit.test('provided pointer shadow hover style should be none', (assert) => {
    const $slider = document.querySelector('#slider-26').shadowRoot.querySelector('.range-slider')
    assert.equal($slider.style.getPropertyValue('--pointer-shadow-hover'), 'none');
  });

  QUnit.test('pointer shadow hover changed to "0 0 2px red" ---> style should change', (assert) => {
    const $slider = document.querySelector('#slider-26');
    $slider.pointerShadowHover = '0 0 2px red';
    assert.equal($slider.shadowRoot.querySelector('.range-slider').style.getPropertyValue('--pointer-shadow-hover'), '0 0 2px red');
  });

});
