QUnit.module('Pointer Background Hover 2', (hooks) => {
  initFixtures(hooks, `
     <toolcool-range-slider value1="10" value2="30" id="slider-1"></toolcool-range-slider>
     <toolcool-range-slider value1="10" value2="30" pointer2-bg="red" pointer2-bg-hover="red" id="slider-25"></toolcool-range-slider>
  `);

  QUnit.test('pointer2 bg hover color by default should be undefined', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.pointer2BgHover, undefined);
  });

  QUnit.test('provided pointer2 bg hover color should be red', (assert) => {
    const $slider = document.querySelector('#slider-25');
    assert.equal($slider.pointer2BgHover, 'red');
  });

  QUnit.test('pointer2 bg hover color changed to blue', (assert) => {
    const $slider = document.querySelector('#slider-25');
    $slider.pointer2BgHover = 'blue';
    assert.equal($slider.pointer2BgHover, 'blue');
  });

  QUnit.test('by default pointer2 bg hover color style is empty', (assert) => {
    const $slider = document.querySelector('#slider-1');
    const $pointer2 = $slider.shadowRoot.querySelector('.pointer-1');
    assert.equal($pointer2.style.getPropertyValue('--pointer-bg-hover'), '');
  });

  QUnit.test('provided pointer2 bg hover color style should be red', (assert) => {
    const $slider = document.querySelector('#slider-25');
    const $pointer2 = $slider.shadowRoot.querySelector('.pointer-1');
    assert.equal($pointer2.style.getPropertyValue('--pointer-bg-hover'), 'red');
  });

  QUnit.test('pointer2 bg hover color changed to green ---> style should change', (assert) => {
    const $slider = document.querySelector('#slider-25');
    $slider.pointer2BgHover = 'green';
    const $pointer2 = $slider.shadowRoot.querySelector('.pointer-1');
    assert.equal($pointer2.style.getPropertyValue('--pointer-bg-hover'), 'green');
  });

});
