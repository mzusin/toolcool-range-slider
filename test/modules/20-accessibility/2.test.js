QUnit.module('Area Labels', (hooks) => {
  initFixtures(hooks, `
      <toolcool-range-slider id="slider-1"></toolcool-range-slider>
      <toolcool-range-slider id="slider-110" value1="50" value2="55" pointers-overlap="true"></toolcool-range-slider>
      <toolcool-range-slider id="slider-129" aria-label1="lower"></toolcool-range-slider>
      <toolcool-range-slider id="slider-130" aria-label2="upper" value2="50"></toolcool-range-slider>
  `);

  QUnit.test('ariaLabel1 should be undefined by default', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.strictEqual($slider.ariaLabel1, undefined);
  });

  QUnit.test('ariaLabel2 should be undefined by default', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.strictEqual($slider.ariaLabel2, undefined);
  });

  // <toolcool-range-slider id="slider-129" aria-label1="lower"></toolcool-range-slider>
  // <toolcool-range-slider id="slider-130" aria-label2="upper"></toolcool-range-slider>

  QUnit.test('ariaLabel1 should be = lower', (assert) => {
    const $slider = document.querySelector('#slider-129');
    assert.strictEqual($slider.ariaLabel1, 'lower');
  });

  QUnit.test('ariaLabel2 should be = upper', (assert) => {
    const $slider = document.querySelector('#slider-130');
    assert.strictEqual($slider.ariaLabel2, 'upper');
  });

  QUnit.test('change ariaLabel1 via API to test', (assert) => {
    const $slider = document.querySelector('#slider-129');
    $slider.ariaLabel1 = 'test';
    assert.strictEqual($slider.ariaLabel1, 'test');
  });

  QUnit.test('change ariaLabel2 via API to test', (assert) => {
    const $slider = document.querySelector('#slider-130');
    $slider.ariaLabel2 = 'test';
    assert.strictEqual($slider.ariaLabel2, 'test');
  });

  QUnit.test('change ariaLabel1 via attributes to test', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-129');
    $slider.setAttribute('aria-label1', 'test');

    window.setTimeout(() => {
      assert.strictEqual($slider.ariaLabel1, 'test');
      done();
    }, 10);
  });

  QUnit.test('change ariaLabel2 via attributes to test', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-130');
    $slider.setAttribute('aria-label2', 'test');

    window.setTimeout(() => {
      assert.strictEqual($slider.ariaLabel2, 'test');
      done();
    }, 10);
  });

  QUnit.test('first pointer should have aria-label = lower', (assert) => {
    const $slider = document.querySelector('#slider-129');
    const $pointer = $slider.shadowRoot.querySelector('.pointer-0');
    assert.strictEqual($pointer.getAttribute('aria-label'), 'lower');
  });

  QUnit.test('second pointer should have aria-label = upper', (assert) => {
    const $slider = document.querySelector('#slider-130');
    const $pointer = $slider.shadowRoot.querySelector('.pointer-1');
    assert.strictEqual($pointer.getAttribute('aria-label'), 'upper');
  });

  QUnit.test('by default, the first pointer should not have aria-label attribute', (assert) => {
    const $slider = document.querySelector('#slider-1');
    const $pointer = $slider.shadowRoot.querySelector('.pointer-0');
    assert.strictEqual($pointer.getAttribute('aria-label'), null);
  });

  QUnit.test('by default, the second pointer should not have aria-label attribute', (assert) => {
    const $slider = document.querySelector('#slider-110');
    const $pointer = $slider.shadowRoot.querySelector('.pointer-1');
    assert.strictEqual($pointer.getAttribute('aria-label'), null);
  });
});