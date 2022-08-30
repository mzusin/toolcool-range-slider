
QUnit.module('Accessibility', () => {

  QUnit.test('first pointer should have role="slider"', (assert) => {
    const $slider = document.querySelector('#slider-1');
    const $pointer = $slider.shadowRoot.querySelector('.pointer-1');
    assert.strictEqual($pointer.getAttribute('role'), 'slider');
  });

  QUnit.test('second pointer should have role="slider"', (assert) => {
    const $slider = document.querySelector('#slider-107');
    const $pointer = $slider.shadowRoot.querySelector('.pointer-2');
    assert.strictEqual($pointer.getAttribute('role'), 'slider');
  });

  QUnit.test('first pointer in horizontal slider should have horizontal orientation', (assert) => {
    const $slider = document.querySelector('#slider-1');
    const $pointer = $slider.shadowRoot.querySelector('.pointer-1');
    assert.strictEqual($pointer.getAttribute('aria-orientation'), 'horizontal');
  });

  QUnit.test('second pointer in horizontal slider should have horizontal orientation', (assert) => {
    const $slider = document.querySelector('#slider-107');
    const $pointer = $slider.shadowRoot.querySelector('.pointer-2');
    assert.strictEqual($pointer.getAttribute('aria-orientation'), 'horizontal');
  });

  QUnit.test('first pointer vertical slider should have horizontal orientation', (assert) => {
    const $slider = document.querySelector('#slider-28');
    const $pointer = $slider.shadowRoot.querySelector('.pointer-1');
    assert.strictEqual($pointer.getAttribute('aria-orientation'), 'vertical');
  });

  QUnit.test('second pointer vertical slider should have horizontal orientation', (assert) => {
    const $slider = document.querySelector('#slider-105');
    const $pointer = $slider.shadowRoot.querySelector('.pointer-2');
    assert.strictEqual($pointer.getAttribute('aria-orientation'), 'vertical');
  });

  // <toolcool-range-slider id="slider-2" value="50" min="1" max="99"></toolcool-range-slider>
  QUnit.test('first pointer should have aria-valuenow = 50', (assert) => {
    const $slider = document.querySelector('#slider-2');
    const $pointer = $slider.shadowRoot.querySelector('.pointer-1');
    assert.strictEqual($pointer.getAttribute('aria-valuenow'), '50');
  });

  QUnit.test('first pointer should have aria-valuetext = 50', (assert) => {
    const $slider = document.querySelector('#slider-2');
    const $pointer = $slider.shadowRoot.querySelector('.pointer-1');
    assert.strictEqual($pointer.getAttribute('aria-valuetext'), '50');
  });

  QUnit.test('first pointer should have aria-valuemin = 1', (assert) => {
    const $slider = document.querySelector('#slider-2');
    const $pointer = $slider.shadowRoot.querySelector('.pointer-1');
    assert.strictEqual($pointer.getAttribute('aria-valuemin'), '1');
  });

  QUnit.test('first pointer should have aria-valuemax = 99', (assert) => {
    const $slider = document.querySelector('#slider-2');
    const $pointer = $slider.shadowRoot.querySelector('.pointer-1');
    assert.strictEqual($pointer.getAttribute('aria-valuemax'), '99');
  });

  // <toolcool-range-slider id="slider-109" type="vertical" value1="50" value2="55" min="1" max="99"></toolcool-range-slider>
  QUnit.test('second pointer should have aria-valuenow = 50', (assert) => {
    const $slider = document.querySelector('#slider-109');
    const $pointer = $slider.shadowRoot.querySelector('.pointer-2');
    assert.strictEqual($pointer.getAttribute('aria-valuenow'), '55');
  });

  QUnit.test('second pointer should have aria-valuetext = 50', (assert) => {
    const $slider = document.querySelector('#slider-109');
    const $pointer = $slider.shadowRoot.querySelector('.pointer-2');
    assert.strictEqual($pointer.getAttribute('aria-valuetext'), '55');
  });

  //  <toolcool-range-slider id="slider-109" type="vertical" value1="50" value2="55" min="1" max="99"></toolcool-range-slider>

  QUnit.test('second pointer should have aria-valuemin = 1', (assert) => {
    const $slider = document.querySelector('#slider-109');
    const $pointer = $slider.shadowRoot.querySelector('.pointer-2');
    assert.strictEqual($pointer.getAttribute('aria-valuemin'), '50');
  });

  QUnit.test('second pointer should have aria-valuemax = 99', (assert) => {
    const $slider = document.querySelector('#slider-109');
    const $pointer = $slider.shadowRoot.querySelector('.pointer-2');
    assert.strictEqual($pointer.getAttribute('aria-valuemax'), '99');
  });
});

QUnit.module('Accessibility - 2 Pointers', () => {

  //  <toolcool-range-slider id="slider-113" value1="50" value2="55" pointers-overlap="true" min="-100" max="200"></toolcool-range-slider>
  QUnit.test('pointers-overlap="true", pointer1 aria-valuemin should be -100', (assert) => {
    const $slider = document.querySelector('#slider-113');
    const $pointer = $slider.shadowRoot.querySelector('.pointer-1');
    assert.strictEqual($pointer.getAttribute('aria-valuemin'), '-100');
  });

  QUnit.test('pointers-overlap="true", pointer1 aria-valuemin should be -100', (assert) => {
    const $slider = document.querySelector('#slider-113');
    const $pointer = $slider.shadowRoot.querySelector('.pointer-1');
    assert.strictEqual($pointer.getAttribute('aria-valuemax'), '200');
  });

  QUnit.test('pointers-overlap="true", pointer2 aria-valuemin should be -100', (assert) => {
    const $slider = document.querySelector('#slider-113');
    const $pointer = $slider.shadowRoot.querySelector('.pointer-2');
    assert.strictEqual($pointer.getAttribute('aria-valuemin'), '-100');
  });

  QUnit.test('pointers-overlap="true", pointer2 aria-valuemin should be -100', (assert) => {
    const $slider = document.querySelector('#slider-113');
    const $pointer = $slider.shadowRoot.querySelector('.pointer-2');
    assert.strictEqual($pointer.getAttribute('aria-valuemax'), '200');
  });

  // <toolcool-range-slider id="slider-114" value1="50" value2="55" min="-100" max="200"></toolcool-range-slider>
  QUnit.test('pointers-overlap="false", pointer1 aria-valuemin should be -100', (assert) => {
    const $slider = document.querySelector('#slider-114');
    const $pointer = $slider.shadowRoot.querySelector('.pointer-1');
    assert.strictEqual($pointer.getAttribute('aria-valuemin'), '-100');
  });

  QUnit.test('pointers-overlap="false", pointer1 aria-valuemin should be 55', (assert) => {
    const $slider = document.querySelector('#slider-114');
    const $pointer = $slider.shadowRoot.querySelector('.pointer-1');
    assert.strictEqual($pointer.getAttribute('aria-valuemax'), '55');
  });

  QUnit.test('pointers-overlap="false", pointer2 aria-valuemin should be -50', (assert) => {
    const $slider = document.querySelector('#slider-114');
    const $pointer = $slider.shadowRoot.querySelector('.pointer-2');
    assert.strictEqual($pointer.getAttribute('aria-valuemin'), '50');
  });

  QUnit.test('pointers-overlap="false", pointer2 aria-valuemin should be -100', (assert) => {
    const $slider = document.querySelector('#slider-114');
    const $pointer = $slider.shadowRoot.querySelector('.pointer-2');
    assert.strictEqual($pointer.getAttribute('aria-valuemax'), '200');
  });

});
