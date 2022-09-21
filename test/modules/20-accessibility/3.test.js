QUnit.module('Accessibility - 2 Pointers', (hooks) => {
  initFixtures(hooks, `
      <toolcool-range-slider id="slider-113" value1="50" value2="55" pointers-overlap="true" min="-100" max="200"></toolcool-range-slider>
      <toolcool-range-slider id="slider-114" value1="50" value2="55" min="-100" max="200"></toolcool-range-slider>
  `);

  //  <toolcool-range-slider id="slider-113" value1="50" value2="55" pointers-overlap="true" min="-100" max="200"></toolcool-range-slider>
  QUnit.test('pointers-overlap="true", pointer1 aria-valuemin should be -100', (assert) => {
    const $slider = document.querySelector('#slider-113');
    const $pointer = $slider.shadowRoot.querySelector('.pointer-0');
    assert.strictEqual($pointer.getAttribute('aria-valuemin'), '-100');
  });

  QUnit.test('pointers-overlap="true", pointer1 aria-valuemin should be -100', (assert) => {
    const $slider = document.querySelector('#slider-113');
    const $pointer = $slider.shadowRoot.querySelector('.pointer-0');
    assert.strictEqual($pointer.getAttribute('aria-valuemax'), '200');
  });

  QUnit.test('pointers-overlap="true", pointer2 aria-valuemin should be -100', (assert) => {
    const $slider = document.querySelector('#slider-113');
    const $pointer = $slider.shadowRoot.querySelector('.pointer-1');
    assert.strictEqual($pointer.getAttribute('aria-valuemin'), '-100');
  });

  QUnit.test('pointers-overlap="true", pointer2 aria-valuemin should be -100', (assert) => {
    const $slider = document.querySelector('#slider-113');
    const $pointer = $slider.shadowRoot.querySelector('.pointer-1');
    assert.strictEqual($pointer.getAttribute('aria-valuemax'), '200');
  });

  // <toolcool-range-slider id="slider-114" value1="50" value2="55" min="-100" max="200"></toolcool-range-slider>
  QUnit.test('pointers-overlap="false", pointer1 aria-valuemin should be -100', (assert) => {
    const $slider = document.querySelector('#slider-114');
    const $pointer = $slider.shadowRoot.querySelector('.pointer-0');
    assert.strictEqual($pointer.getAttribute('aria-valuemin'), '-100');
  });

  QUnit.test('pointers-overlap="false", pointer1 aria-valuemin should be 55', (assert) => {
    const $slider = document.querySelector('#slider-114');
    const $pointer = $slider.shadowRoot.querySelector('.pointer-0');
    assert.strictEqual($pointer.getAttribute('aria-valuemax'), '55');
  });

  // <toolcool-range-slider id="slider-114" value1="50" value2="55" min="-100" max="200"></toolcool-range-slider>
  QUnit.test('pointers-overlap="false", pointer2 aria-valuemin should be -50', (assert) => {
    const $slider = document.querySelector('#slider-114');
    const $pointer = $slider.shadowRoot.querySelector('.pointer-1');
    assert.strictEqual($pointer.getAttribute('aria-valuemin'), '50');
  });

  QUnit.test('pointers-overlap="false", pointer2 aria-valuemin should be -100', (assert) => {
    const $slider = document.querySelector('#slider-114');
    const $pointer = $slider.shadowRoot.querySelector('.pointer-1');
    assert.strictEqual($pointer.getAttribute('aria-valuemax'), '200');
  });

});