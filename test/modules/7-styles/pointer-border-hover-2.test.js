QUnit.module('Pointer2 Border Hover', (hooks) => {
  initFixtures(hooks, `
     <toolcool-range-slider value1="10" value2="30" id="slider-1"></toolcool-range-slider>
     <toolcool-range-slider value1="10" value2="30" pointer2-border="0" pointer2-border-hover="0" pointer2-border-focus="0" id="slider-27"></toolcool-range-slider>
  `);

  QUnit.test('pointer2 border hover by default should be undefined', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.pointer2BorderHover, undefined);
  });

  QUnit.test('provided pointer2 border hover should be 0', (assert) => {
    const $slider = document.querySelector('#slider-27');
    assert.equal($slider.pointer2BorderHover, '0');
  });

  QUnit.test('pointer2 border hover changed to 0', (assert) => {
    const $slider = document.querySelector('#slider-27');
    $slider.pointer2BorderHover = '0';
    assert.equal($slider.pointer2BorderHover, '0');
  });

  QUnit.test('by default pointer2 border hover style is empty', (assert) => {
    const $slider = document.querySelector('#slider-1');
    const $pointer2 = $slider.shadowRoot.querySelector('.pointer-1');
    assert.equal($pointer2.style.getPropertyValue('--pointer-border-hover'), '');
  });

  QUnit.test('provided pointer2 border hover style should be none', (assert) => {
    const $slider = document.querySelector('#slider-27');
    const $pointer2 = $slider.shadowRoot.querySelector('.pointer-1');
    assert.equal($pointer2.style.getPropertyValue('--pointer-border-hover'), '0');
  });

  QUnit.test('pointer2 border hover changed to "0 0 2px red" ---> style should change', (assert) => {
    const $slider = document.querySelector('#slider-27');
    $slider.pointer2BorderHover = '1px solid red';
    const $pointer2 = $slider.shadowRoot.querySelector('.pointer-1');
    assert.equal($pointer2.style.getPropertyValue('--pointer-border-hover'), '1px solid red');
  });

});
