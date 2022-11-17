QUnit.module('Value-2', (hooks) => {
  initFixtures(hooks, `
    <toolcool-range-slider id="slider-1"></toolcool-range-slider>
    <toolcool-range-slider id="slider-86" value2="50"></toolcool-range-slider>
    <toolcool-range-slider id="slider-87" value="50" value2="100"></toolcool-range-slider>
    <toolcool-range-slider id="slider-88" value="50" value2="test"></toolcool-range-slider>
    <toolcool-range-slider id="slider-89" value2="-10"></toolcool-range-slider>
    <toolcool-range-slider id="slider-90" value2="110"></toolcool-range-slider>
    <toolcool-range-slider min="50" max="100" value2="0" id="slider-91"></toolcool-range-slider>
    <toolcool-range-slider min="-50" max="50" value2="0" id="slider-92"></toolcool-range-slider>
  `);

  QUnit.test('default value2 should be undefined', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.strictEqual($slider.value2, undefined);
  });

  QUnit.test('provided value2 should be 50', (assert) => {
    const $slider = document.querySelector('#slider-86');
    assert.strictEqual($slider.value2, 50);
  });

  QUnit.test('provided value2 should be 100', (assert) => {
    const $slider = document.querySelector('#slider-87');
    assert.strictEqual($slider.value2, 100);
  });

  QUnit.test('if provided value2 is string it should be 0', (assert) => {
    const $slider = document.querySelector('#slider-88');
    assert.strictEqual($slider.value2, 0);
  });

  QUnit.test('if provided value2 is negative when min="0" ---> value2 should be 0', (assert) => {
    const $slider = document.querySelector('#slider-89');
    assert.strictEqual($slider.value2, 0);
  });

  QUnit.test('if provided value2 > 100 it should be = 100', (assert) => {
    const $slider = document.querySelector('#slider-90');
    assert.strictEqual($slider.value2, 100);
  });

  // <toolcool-range-slider id="slider-86" value2="50"></toolcool-range-slider>
  QUnit.test('change value2 via API to 80', (assert) => {
    const $slider = document.querySelector('#slider-86');
    $slider.value2 = 80;
    assert.strictEqual($slider.value2, 80);
  });

  QUnit.test('change value2 via attribute to 80', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-86');
    $slider.setAttribute('value2', '80');

    window.setTimeout(() => {
      assert.strictEqual($slider.value2, 80);
      done();
    }, 10);
  });

  // <toolcool-range-slider id="slider-1"></toolcool-range-slider>
  QUnit.test('change value2 via API to 30', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.value2 = 30;
    assert.strictEqual($slider.value2, 30);
  });

  // <toolcool-range-slider id="slider-1"></toolcool-range-slider>
  QUnit.test('addPointer: 41.5', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.addPointer(41.5);
    assert.strictEqual($slider.value2, 41.5);
  });

  // <toolcool-range-slider min="50" max="100" id="slider-12"></toolcool-range-slider>
  QUnit.test('min="50" max="100", value2="0" ---> value2 should be 50', (assert) => {
    const $slider = document.querySelector('#slider-91');
    $slider.addPointer(50);
    assert.strictEqual($slider.value2, 50);
  });

  QUnit.test('2 pointers should be rendered', (assert) => {
    const $slider = document.querySelector('#slider-92');
    assert.strictEqual($slider.shadowRoot.querySelectorAll('.pointer').length, 2);
  });

  QUnit.test('the first pointer should have class pointer-1', (assert) => {
    const $slider = document.querySelector('#slider-92');
    assert.ok($slider.shadowRoot.querySelector('.pointer-0'));
  });

  QUnit.test('the first should not have class pointer-2', (assert) => {
    const $slider = document.querySelector('#slider-92');
    const $first = $slider.shadowRoot.querySelector('.pointer-0');
    assert.deepEqual($first.classList.contains('pointer-2'), false);
  });

  QUnit.test('the second pointer should have class pointer-2', (assert) => {
    const $slider = document.querySelector('#slider-92');
    assert.ok($slider.shadowRoot.querySelector('.pointer-1'));
  });

  QUnit.test('the second should not have class pointer-0', (assert) => {
    const $slider = document.querySelector('#slider-92');
    const $first = $slider.shadowRoot.querySelector('.pointer-1');
    assert.deepEqual($first.classList.contains('pointer-0'), false);
  });

  QUnit.test('if min = -50, max = 50, and value2 = 0 ---> pointer 2 position should be 50%', (assert) => {
    const $slider = document.querySelector('#slider-92');
    const $pointer2 = $slider.shadowRoot.querySelector('.pointer-1');
    assert.strictEqual($pointer2.style.left, '50%');
  });

  QUnit.test('provided value2 50 ---> pointer left should be 50%', (assert) => {
    const $slider = document.querySelector('#slider-86');
    const $pointer2 = $slider.shadowRoot.querySelector('.pointer-1');
    assert.equal($pointer2.style.left, '50%');
  });

  QUnit.test('provided value2 should be 100 ---> pointer left should be 100%', (assert) => {
    const $slider = document.querySelector('#slider-87');
    const $pointer2 = $slider.shadowRoot.querySelector('.pointer-1');
    assert.equal($pointer2.style.left, '100%');
  });

  QUnit.test('if provided value2 is string ---> pointer left should be 0%', (assert) => {
    const $slider = document.querySelector('#slider-88');
    const $pointer2 = $slider.shadowRoot.querySelector('.pointer-1');
    assert.equal($pointer2.style.left, '0%');
  });

  QUnit.test('if provided value2 is negative and min="0" --> pointer left should be 0%', (assert) => {
    const $slider = document.querySelector('#slider-89');
    const $pointer2 = $slider.shadowRoot.querySelector('.pointer-1');
    assert.equal($pointer2.style.left, '0%');
  });

  QUnit.test('if provided value2 > 100, and max="100"  ---> pointer left should be 100%', (assert) => {
    const $slider = document.querySelector('#slider-90');
    const $pointer2 = $slider.shadowRoot.querySelector('.pointer-1');
    assert.equal($pointer2.style.left, '100%');
  });

  QUnit.test('change value2 via API to 30 ---> pointer left should be 30%', (assert) => {
    const $slider = document.querySelector('#slider-86');
    $slider.value2 = 30;
    const $pointer = $slider.shadowRoot.querySelector('.pointer-1');
    assert.equal($pointer.style.left, '30%');
  });

  QUnit.test('change value2 via attribute to 41.5 ---> pointer left should be 41.5%', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-86');
    $slider.setAttribute('value2', 41.5);
    const $pointer = $slider.shadowRoot.querySelector('.pointer-1');

    window.setTimeout(() => {
      assert.equal($pointer.style.left, '41.5%');
      done();
    }, 10);
  });

  QUnit.test('addPointer: given 1 pointers slider ---> add second pointer with value 50', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.addPointer(50);
    const $pointer = $slider.shadowRoot.querySelector('.pointer-1');
    assert.ok($pointer);
  });

  QUnit.test('addPointer: given 1 pointers slider ---> add second pointer', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.addPointer(50);
    const $pointer = $slider.shadowRoot.querySelector('.pointer-1');
    assert.ok($pointer);
  });

  QUnit.test('change to the text value via api', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.value1 = 's';
    assert.strictEqual($slider.value1, 0);
  });

  QUnit.test('addPointer: add letter s', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.addPointer('s');
    assert.strictEqual($slider.value2, 0);
  });

  // <toolcool-range-slider id="slider-1"></toolcool-range-slider>
  QUnit.test('set value2 on a one-value slider ---> the second pointer should be added dynamically.', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.value2 = 50;
    const $pointer = $slider.shadowRoot.querySelector('.pointer-1');
    assert.ok($pointer);
  });

  QUnit.test('set value3 on a 2-values slider ---> the third pointer should be added dynamically.', (assert) => {
    const $slider = document.querySelector('#slider-86');
    $slider.value3 = 50;
    const $pointer = $slider.shadowRoot.querySelector('.pointer-2');
    assert.ok($pointer);
  });

});
