QUnit.module('Pointer2 Shadow Focus', (hooks) => {
  initFixtures(hooks, `
     <toolcool-range-slider value1="10" value2="30" id="slider-1"></toolcool-range-slider>
     <toolcool-range-slider value1="10" value2="30" pointer2-shadow-focus="none" id="slider-30"></toolcool-range-slider>
  `);

  QUnit.test('pointer2 shadow focus by default should be undefined', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.pointer2ShadowFocus, undefined);
  });

  QUnit.test('provided pointer2 shadow focus should be none', (assert) => {
    const $slider = document.querySelector('#slider-30');
    assert.equal($slider.pointer2ShadowFocus, 'none');
  });

  QUnit.test('pointer2 shadow focus changed to none', (assert) => {
    const $slider = document.querySelector('#slider-30');
    $slider.pointer2ShadowFocus = 'none';
    assert.equal($slider.pointer2ShadowFocus, 'none');
  });

  QUnit.test('by default pointer2 shadow focus style is empty', (assert) => {
    const $slider = document.querySelector('#slider-1');
    const $pointer2 = $slider.shadowRoot.querySelector('.pointer-1');
    assert.equal($pointer2.style.getPropertyValue('--pointer-shadow-focus'), '');
  });

  QUnit.test('provided pointer2 shadow focus style should be none', (assert) => {
    const $slider = document.querySelector('#slider-30');
    const $pointer2 = $slider.shadowRoot.querySelector('.pointer-1');
    assert.equal($pointer2.style.getPropertyValue('--pointer-shadow-focus'), 'none');
  });

  QUnit.test('pointer2 shadow focus changed to "0 0 2px red" ---> style should change', (assert) => {
    const $slider = document.querySelector('#slider-30');
    $slider.pointer2ShadowFocus = '0 0 2px red';
    const $pointer2 = $slider.shadowRoot.querySelector('.pointer-1');
    assert.equal($pointer2.style.getPropertyValue('--pointer-shadow-focus'), '0 0 2px red');
  });

});
