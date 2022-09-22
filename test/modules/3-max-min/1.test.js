QUnit.module('Min & Max', (hooks) => {
  initFixtures(hooks, `
     <toolcool-range-slider id="slider-1"></toolcool-range-slider>
     <toolcool-range-slider id="slider-2" value="50" min="1" max="99"></toolcool-range-slider>
     <toolcool-range-slider id="slider-3" value="string"></toolcool-range-slider>
     <toolcool-range-slider id="slider-7" min="50"></toolcool-range-slider>
     <toolcool-range-slider id="slider-10" min="10" max="20" value="30"></toolcool-range-slider>
     <toolcool-range-slider id="slider-11" min="10" max="20" value="5"></toolcool-range-slider>
     <toolcool-range-slider min="-1000000" max="1000000" id="slider-35"></toolcool-range-slider>
  `);

  QUnit.test('default min should be 0', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.strictEqual($slider.min, 0);
  });

  QUnit.test('default max should be 100', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.strictEqual($slider.max, 100);
  });

  QUnit.test('provided min should be 1', (assert) => {
    const $slider = document.querySelector('#slider-2');
    assert.strictEqual($slider.min, 1);
  });

  QUnit.test('set min to a string value ---> it should be 0', (assert) => {
    const $slider = document.querySelector('#slider-2');
    $slider.min = 'test';
    assert.strictEqual($slider.min, 0);
  });

  QUnit.test('set max to a string value ---> it should be 100', (assert) => {
    const $slider = document.querySelector('#slider-2');
    $slider.max = 'test';
    assert.strictEqual($slider.max, 100);
  });

  QUnit.test('provided max should be 99', (assert) => {
    const $slider = document.querySelector('#slider-2');
    assert.strictEqual($slider.max, 99);
  });

  QUnit.test('if provided value is string it should be 0', (assert) => {
    const $slider = document.querySelector('#slider-3');
    assert.strictEqual($slider.value, 0);
  });

  QUnit.test('change min via API to 2', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.min = 2;
    assert.strictEqual($slider.min, 2);
  });

  QUnit.test('change max via API to 98', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.max = 98;
    assert.strictEqual($slider.max, 98);
  });

  QUnit.test('change value via attribute to 3', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-1');
    $slider.setAttribute('min', 3);

    window.setTimeout(() => {
      assert.strictEqual($slider.min, 3);
      done();
    }, 10);
  });

  QUnit.test('change value via attribute to 97', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-1');
    $slider.setAttribute('max', 97);

    window.setTimeout(() => {
      assert.strictEqual($slider.max, 97);
      done();
    }, 1);
  });

  QUnit.test('if min defined & max not defined: max will be 100', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-7');
    $slider.setAttribute('max', 100);

    window.setTimeout(() => {
      assert.strictEqual($slider.max, 100);
      done();
    }, 1);
  });

  QUnit.test('if min defined & max not defined and min > 100: max will be min + 100', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-1');
    $slider.setAttribute('max', 97);

    window.setTimeout(() => {
      assert.strictEqual($slider.max, 97);
      done();
    }, 1);
  });

  QUnit.test('if provided value > max ---> value = max', (assert) => {
    const $slider = document.querySelector('#slider-10');
    assert.strictEqual($slider.value, 20);
  });

  QUnit.test('if provided value < min ---> value = min', (assert) => {
    const $slider = document.querySelector('#slider-11');
    assert.strictEqual($slider.value, 10);
  });

  QUnit.test('min = -1000000, max = 1000000  ---> value should be 0', (assert) => {
    const $slider = document.querySelector('#slider-35');
    assert.strictEqual($slider.value, -1000000);
  });

});
