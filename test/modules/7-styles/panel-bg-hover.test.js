QUnit.module('Panel Background Hover', (hooks) => {
  initFixtures(hooks, `
     <toolcool-range-slider id="slider-1"></toolcool-range-slider>
     <toolcool-range-slider slider-bg="red" slider-bg-hover="red" id="slider-24"></toolcool-range-slider>
  `);

  QUnit.test('slider bg hover color by default should be undefined', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.sliderBgHover, undefined);
  });

  QUnit.test('provided slider bg hover color should be red', (assert) => {
    const $slider = document.querySelector('#slider-24');
    assert.equal($slider.sliderBgHover, 'red');
  });

  QUnit.test('slider bg hover color changed to blue', (assert) => {
    const $slider = document.querySelector('#slider-24');
    $slider.sliderBgHover = 'blue';
    assert.equal($slider.sliderBgHover, 'blue');
  });

  QUnit.test('by default slider bg hover color style is empty', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.style.getPropertyValue('--panel-bg-hover'), '');
  });

  QUnit.test('provided slider bg hover color style should be red', (assert) => {
    const $slider = document.querySelector('#slider-24').shadowRoot.querySelector('.range-slider')
    assert.equal($slider.style.getPropertyValue('--panel-bg-hover'), 'red');
  });

  QUnit.test('slider bg hover color changed to green ---> style should change', (assert) => {
    const $slider = document.querySelector('#slider-24');
    $slider.sliderBgHover = 'green';
    assert.equal($slider.shadowRoot.querySelector('.range-slider').style.getPropertyValue('--panel-bg-hover'), 'green');
  });

});
