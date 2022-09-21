QUnit.module('pointer2 border 2', (hooks) => {
  initFixtures(hooks, `
     <toolcool-range-slider value1="10" value2="30" id="slider-1"></toolcool-range-slider>
     <toolcool-range-slider value1="10" value2="30" pointer2-border="0" pointer-border-hover="0" pointer-border-focus="0" id="slider-27"></toolcool-range-slider>
  `);

  QUnit.test('pointer2 border by default should be undefined', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.pointer2Border, undefined);
  });

  QUnit.test('provided pointer2 border should be 0', (assert) => {
    const $slider = document.querySelector('#slider-27');
    assert.equal($slider.pointer2Border, '0');
  });

  QUnit.test('pointer2 border changed to 0', (assert) => {
    const $slider = document.querySelector('#slider-27');
    $slider.pointer2Border = '0';
    assert.equal($slider.pointer2Border, '0');
  });

  QUnit.test('by default pointer2 border style is empty', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.style.getPropertyValue('--pointer-border'), '');
  });

  QUnit.test('provided pointer2 border style should be none', (assert) => {
    const $slider = document.querySelector('#slider-27');
    const $pointer2 = $slider.shadowRoot.querySelector('.pointer-1');
    assert.equal($pointer2.style.getPropertyValue('--pointer-border'), '0');
  });

  QUnit.test('pointer2 border changed to "0 0 2px red" ---> style should change', (assert) => {
    const $slider = document.querySelector('#slider-27');
    $slider.pointer2Border = '1px solid red';
    const $pointer2 = $slider.shadowRoot.querySelector('.pointer-1');
    assert.equal($pointer2.style.getPropertyValue('--pointer-border'), '1px solid red');
  });

});
