
QUnit.module('Range Slider Step', () => {

  QUnit.test('default step should be undefined', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.step, undefined);
  });

  QUnit.test('provided step should be 1', (assert) => {
    const $slider = document.querySelector('#slider-16');
    assert.equal($slider.step, 1);
  });

  QUnit.test('provided step should be 5', (assert) => {
    const $slider = document.querySelector('#slider-17');
    assert.equal($slider.step, 5);
  });

  QUnit.test('if provided step is string it should be undefined', (assert) => {
    const $slider = document.querySelector('#slider-3');
    assert.equal($slider.step, undefined);
  });

  QUnit.test('if provided value is negative it should be 0', (assert) => {
    const $slider = document.querySelector('#slider-18');
    assert.equal($slider.step, undefined);
  });

  QUnit.test('if provided value > (min - mix) ---> it should be undefined', (assert) => {
    const $slider = document.querySelector('#slider-19');
    assert.equal($slider.step, undefined);
  });

  QUnit.test('change step via API to 3', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.step = 3;
    assert.equal($slider.step, 3);
  });

  QUnit.test('change value via attribute to 4', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.setAttribute('step', 4);
    assert.equal($slider.step, 4);
  });

});
