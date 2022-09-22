QUnit.module('Step', (hooks) => {
  initFixtures(hooks, `
     <toolcool-range-slider id="slider-1"></toolcool-range-slider>
     <toolcool-range-slider id="slider-2" value="50" min="1" max="99"></toolcool-range-slider>
     <toolcool-range-slider id="slider-3" value="string"></toolcool-range-slider>
     <toolcool-range-slider step="1" id="slider-16"></toolcool-range-slider>
     <toolcool-range-slider step="5" id="slider-17"></toolcool-range-slider>
     <toolcool-range-slider step="fake" id="slider-18"></toolcool-range-slider>
     <toolcool-range-slider step="150" min="0" max="100" id="slider-19"></toolcool-range-slider>
  `);

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
    const done = assert.async();

    const $slider = document.querySelector('#slider-1');
    $slider.setAttribute('step', 4);

    window.setTimeout(() => {
      assert.equal($slider.step, 4);
      done();
    }, 1);
  });

  /*QUnit.test('change step to 2 and then perform arrow right --> the value should jump 2 places', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-1');
    $slider.setAttribute('step', 2);

    const $pointer = $slider.shadowRoot.querySelector('.pointer');

    $pointer.dispatchEvent(new KeyboardEvent('keydown', {
      view: window,
      bubbles: true,
      cancelable: true,
      key: 'ArrowRight',
    }));

    window.setTimeout(() => {
      assert.equal($slider.value, 2);
      done();
    }, 10);
  });*/

  QUnit.test('set step to a string value ---> it should be undefined', (assert) => {
    const $slider = document.querySelector('#slider-2');
    $slider.step = 'test';
    assert.strictEqual($slider.step, undefined);
  });

});
