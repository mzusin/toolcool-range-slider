QUnit.module('pointer2 radius 2', (hooks) => {
  initFixtures(hooks, `
     <toolcool-range-slider value1="10" value2="30" id="slider-1"></toolcool-range-slider>
     <toolcool-range-slider value1="10" value2="30" pointer2-radius="5px" id="slider-22"></toolcool-range-slider>
  `);

  QUnit.test('pointer2 radius by default should be undefined', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.pointer2Radius, undefined);
  });

  QUnit.test('provided pointer2 radius should be 5px', (assert) => {
    const $slider = document.querySelector('#slider-22');
    assert.equal($slider.pointer2Radius, '5px');
  });

  QUnit.test('pointer2 radius changed to 3rem', (assert) => {
    const $slider = document.querySelector('#slider-22');
    $slider.pointer2Radius = '3rem';
    assert.equal($slider.pointer2Radius, '3rem');
  });

  QUnit.test('by default pointer2 radius style is empty', (assert) => {
    const $slider = document.querySelector('#slider-1');
    const $pointer2 = $slider.shadowRoot.querySelector('.pointer-1');
    assert.equal($pointer2.style.getPropertyValue('--pointer-border-radius'), '');
  });

  QUnit.test('provided pointer2 radius style should be 5px', (assert) => {
    const $slider = document.querySelector('#slider-22');
    const $pointer2 = $slider.shadowRoot.querySelector('.pointer-1');
    assert.equal($pointer2.style.getPropertyValue('--pointer-border-radius'), '5px');
  });

  QUnit.test('pointer2 radius changed to 30rem ---> style should change', (assert) => {
    const $slider = document.querySelector('#slider-22');
    $slider.pointer2Radius = '3rem';
    const $pointer2 = $slider.shadowRoot.querySelector('.pointer-1');
    assert.equal($pointer2.style.getPropertyValue('--pointer-border-radius'), '3rem');
  });

});
