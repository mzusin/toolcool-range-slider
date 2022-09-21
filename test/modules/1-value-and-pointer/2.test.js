QUnit.module('Value-1', (hooks) => {
  initFixtures(hooks, `
    <toolcool-range-slider id="slider-1"></toolcool-range-slider>
    <toolcool-range-slider id="slider-2" value="50" min="1" max="99"></toolcool-range-slider>
    <toolcool-range-slider id="slider-3" value="string"></toolcool-range-slider>
    <toolcool-range-slider id="slider-4" value="-10"></toolcool-range-slider>
    <toolcool-range-slider id="slider-5" value="110"></toolcool-range-slider>
    <toolcool-range-slider id="slider-6" value="100"></toolcool-range-slider>
    <toolcool-range-slider id="slider-7" min="50"></toolcool-range-slider>
    <toolcool-range-slider id="slider-8" min="-50"></toolcool-range-slider>
    <toolcool-range-slider id="slider-9" min="150"></toolcool-range-slider>
    <toolcool-range-slider min="50" max="100" id="slider-12"></toolcool-range-slider>
    <toolcool-range-slider min="-50" max="50" value="0" id="slider-15"></toolcool-range-slider>
    <toolcool-range-slider
              min="0"
              max="100"
              step="0.1"
              value="50"
              id="slider-42"></toolcool-range-slider>
    <toolcool-range-slider id="slider-100" value1="60"></toolcool-range-slider>
  `);

  QUnit.test('default value1 should be 0 (if value provided instead of value1)', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.strictEqual($slider.value1, 0);
  });

  QUnit.test('value1 = 60', (assert) => {
    const $slider = document.querySelector('#slider-100');
    assert.strictEqual($slider.value1, 60);
  });

  QUnit.test('value1 = 60 ---> value = 60', (assert) => {
    const $slider = document.querySelector('#slider-100');
    assert.strictEqual($slider.value, 60);
  });

  QUnit.test('if min = 50 ---> default value1 should be 50 (if value provided instead of value1)', (assert) => {
    const $slider = document.querySelector('#slider-7');
    assert.strictEqual($slider.value1, 50);
  });

  QUnit.test('if min = -50 ---> default value1 should be -50 (if value provided instead of value1)', (assert) => {
    const $slider = document.querySelector('#slider-8');
    assert.strictEqual($slider.value1, -50);
  });

  QUnit.test('if min = 150 ---> default value1 should be 150 (if value provided instead of value1)', (assert) => {
    const $slider = document.querySelector('#slider-9');
    assert.strictEqual($slider.value1, 150);
  });

  QUnit.test('provided value1 should be 50 (if value provided instead of value1)', (assert) => {
    const $slider = document.querySelector('#slider-2');
    assert.strictEqual($slider.value1, 50);
  });

  QUnit.test('provided value1 should be 100 (if value provided instead of value1)', (assert) => {
    const $slider = document.querySelector('#slider-6');
    assert.strictEqual($slider.value1, 100);
  });

  QUnit.test('if provided value1 is string it should be 0 (if value provided instead of value1)', (assert) => {
    const $slider = document.querySelector('#slider-3');
    assert.strictEqual($slider.value1, 0);
  });

  QUnit.test('if provided value1 is negative it should be 0 (if value provided instead of value1)', (assert) => {
    const $slider = document.querySelector('#slider-4');
    assert.strictEqual($slider.value1, 0);
  });

  QUnit.test('if provided value1 > 100 it should be = 100 (if value provided instead of value1)', (assert) => {
    const $slider = document.querySelector('#slider-5');
    assert.strictEqual($slider.value1, 100);
  });

  QUnit.test('change value1 via API to 30 (if value provided instead of value1)', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.value1 = 30;
    assert.strictEqual($slider.value1, 30);
  });

  QUnit.test('change value1 via attribute to 41.5 (if value provided instead of value1)', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-1');
    $slider.setAttribute('value1', 41.5);

    window.setTimeout(() => {
      assert.strictEqual($slider.value1, 41.5);
      done();
    }, 10);
  });

  QUnit.test('by default pointer left should be 0% (if value provided instead of value1)', (assert) => {
    const $slider = document.querySelector('#slider-1');
    const $pointer = $slider.shadowRoot.querySelector('.pointer');
    assert.strictEqual($pointer.style.left, '0%');
  });

  QUnit.test('provided value1 50 ---> pointer left should be 50% (if value provided instead of value1)', (assert) => {
    const $slider = document.querySelector('#slider-2');
    const $pointer = $slider.shadowRoot.querySelector('.pointer');
    assert.strictEqual($pointer.style.left, '50%');
  });

  QUnit.test('provided value1 should be 100 ---> pointer left should be 100% (if value provided instead of value1)', (assert) => {
    const $slider = document.querySelector('#slider-6');
    const $pointer = $slider.shadowRoot.querySelector('.pointer');
    assert.strictEqual($pointer.style.left, '100%');
  });

  QUnit.test('if provided value1 is string ---> pointer left should be 0% (if value provided instead of value1)', (assert) => {
    const $slider = document.querySelector('#slider-3');
    const $pointer = $slider.shadowRoot.querySelector('.pointer');
    assert.strictEqual($pointer.style.left, '0%');
  });

  QUnit.test('if provided value1 is negative --> pointer left should be 0% (if value provided instead of value1)', (assert) => {
    const $slider = document.querySelector('#slider-4');
    const $pointer = $slider.shadowRoot.querySelector('.pointer');
    assert.strictEqual($pointer.style.left, '0%');
  });

  QUnit.test('if provided value1 > 100  ---> pointer left should be 100% (if value provided instead of value1)', (assert) => {
    const $slider = document.querySelector('#slider-5');
    const $pointer = $slider.shadowRoot.querySelector('.pointer');
    assert.strictEqual($pointer.style.left, '100%');
  });

  QUnit.test('change value1 via API to 30 ---> pointer left should be 30% (if value provided instead of value1)', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.value1 = 30;
    const $pointer = $slider.shadowRoot.querySelector('.pointer');
    assert.strictEqual($pointer.style.left, '30%');
  });

  QUnit.test('change value1 via attribute to 41.5 ---> pointer left should be 41.5% (if value provided instead of value1)', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-1');
    $slider.setAttribute('value1', 41.5);
    const $pointer = $slider.shadowRoot.querySelector('.pointer');

    window.setTimeout(() => {
      assert.strictEqual($pointer.style.left, '41.5%');
      done();
    }, 10);
  });

  // <toolcool-range-slider min="50" max="100" id="slider-12"></toolcool-range-slider>
  QUnit.test('min="50" max="100" ---> value1 should be 50 (if value provided instead of value1)', (assert) => {
    const $slider = document.querySelector('#slider-12');
    assert.strictEqual($slider.value1, 50);
  });

  QUnit.test('min should be 50 (if value provided instead of value1)', (assert) => {
    const $slider = document.querySelector('#slider-12');
    assert.strictEqual($slider.min, 50);
  });

  QUnit.test('max should be 100 (if value provided instead of value1)', (assert) => {
    const $slider = document.querySelector('#slider-12');
    assert.strictEqual($slider.max, 100);
  });

  QUnit.test('if min = -50, max = 50, and value1 = 0 ---> pointer position should be 50% (if value provided instead of value1)', (assert) => {
    const $slider = document.querySelector('#slider-15');
    const $pointer = $slider.shadowRoot.querySelector('.pointer');
    assert.strictEqual($pointer.style.left, '50%');
  });

  QUnit.test('range slider value1 should be no more that 5 decimal places after the dot (if value provided instead of value1)', (assert) => {
    // used to fix value1 like '50.300000000000004' ---> 50.3
    const $slider = document.querySelector('#slider-42');
    const $pointer = $slider.shadowRoot.querySelector('.pointer');

    $pointer.dispatchEvent(new KeyboardEvent('keydown', {
      view: window,
      bubbles: true,
      cancelable: true,
      key: 'ArrowRight',
    }));
    $pointer.dispatchEvent(new KeyboardEvent('keydown', {
      view: window,
      bubbles: true,
      cancelable: true,
      key: 'ArrowRight',
    }));
    $pointer.dispatchEvent(new KeyboardEvent('keydown', {
      view: window,
      bubbles: true,
      cancelable: true,
      key: 'ArrowRight',
    }));

    assert.strictEqual($slider.value1, 50.3);
  });

});
