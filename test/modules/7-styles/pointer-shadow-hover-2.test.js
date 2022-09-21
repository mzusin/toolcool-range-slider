QUnit.module('Pointer2 Shadow Hover', (hooks) => {
  initFixtures(hooks, `
     <toolcool-range-slider value1="10" value2="30" id="slider-1"></toolcool-range-slider>
     <toolcool-range-slider value1="10" value2="30" pointer2-shadow="none" pointer2-shadow-hover="none" id="slider-26"></toolcool-range-slider>
  `);

  QUnit.test('pointer2 shadow hover by default should be undefined', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.pointer2ShadowHover, undefined);
  });

  QUnit.test('provided pointer2 shadow hover should be none', (assert) => {
    const $slider = document.querySelector('#slider-26');
    assert.equal($slider.pointer2ShadowHover, 'none');
  });

  QUnit.test('pointer2 shadow hover changed to none', (assert) => {
    const $slider = document.querySelector('#slider-26');
    $slider.pointer2ShadowHover = 'none';
    assert.equal($slider.pointer2ShadowHover, 'none');
  });

  QUnit.test('by default pointer2 shadow hover style is empty', (assert) => {
    const $slider = document.querySelector('#slider-1');
    const $pointer2 = $slider.shadowRoot.querySelector('.pointer-1');
    assert.equal($pointer2.style.getPropertyValue('--pointer-shadow-hover'), '');
  });

  QUnit.test('provided pointer2 shadow hover style should be none', (assert) => {
    const $slider = document.querySelector('#slider-26');
    const $pointer2 = $slider.shadowRoot.querySelector('.pointer-1');
    assert.equal($pointer2.style.getPropertyValue('--pointer-shadow-hover'), 'none');
  });

  QUnit.test('pointer2 shadow hover changed to "0 0 2px red" ---> style should change', (assert) => {
    const $slider = document.querySelector('#slider-26');
    $slider.pointer2ShadowHover = '0 0 2px red';
    const $pointer2 = $slider.shadowRoot.querySelector('.pointer-1');
    assert.equal($pointer2.style.getPropertyValue('--pointer-shadow-hover'), '0 0 2px red');
  });

});
