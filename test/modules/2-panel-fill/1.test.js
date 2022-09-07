QUnit.module('Panel Fill', (hooks) => {
  initFixtures(hooks, `
    <toolcool-range-slider id="slider-1"></toolcool-range-slider>
    <toolcool-range-slider id="slider-2" value="50" min="1" max="99"></toolcool-range-slider>
    <toolcool-range-slider type="vertical" id="slider-28"></toolcool-range-slider>
    <toolcool-range-slider rtl="true" id="slider-43"></toolcool-range-slider>
    <toolcool-range-slider rtl="true" id="slider-48" value="50" min="0" max="100"></toolcool-range-slider>
    <toolcool-range-slider btt="true" type="vertical" id="slider-51"></toolcool-range-slider>
    <toolcool-range-slider id="slider-101" value1="60" value2="80"></toolcool-range-slider>
    <toolcool-range-slider type="vertical" value="50" id="slider-102"></toolcool-range-slider>
    <toolcool-range-slider type="vertical" value1="40" value2="60" id="slider-103"></toolcool-range-slider>
    <toolcool-range-slider rtl="true" id="slider-104" value1="50" value2="70"></toolcool-range-slider>
    <toolcool-range-slider btt="true" type="vertical" id="slider-105" value1="50" value2="70"></toolcool-range-slider>
  `);

  QUnit.test('panel fill element should exist', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.ok($slider.shadowRoot.querySelector('.panel-fill'));
  });

  QUnit.test('by default, panel fill width = 0%', (assert) => {
    const $slider = document.querySelector('#slider-1');
    const $fill = $slider.shadowRoot.querySelector('.panel-fill');
    assert.strictEqual($fill.style.width, '0%');
  });

  QUnit.test('by default, panel fill right = auto', (assert) => {
    const $slider = document.querySelector('#slider-1');
    const $fill = $slider.shadowRoot.querySelector('.panel-fill');
    assert.strictEqual($fill.style.right, 'auto');
  });

  QUnit.test('by default, panel fill left = 0%', (assert) => {
    const $slider = document.querySelector('#slider-1');
    const $fill = $slider.shadowRoot.querySelector('.panel-fill');
    assert.strictEqual($fill.style.left, '0%');
  });

  // <toolcool-range-slider id="slider-2" value="50" min="1" max="99"></toolcool-range-slider>
  QUnit.test('when value = 50 ---> fill width = 0%', (assert) => {
    const $slider = document.querySelector('#slider-2');
    const $fill = $slider.shadowRoot.querySelector('.panel-fill');
    assert.strictEqual($fill.style.width, '50%');
  });

  QUnit.test('when value = 50 ---> fill left = 0%', (assert) => {
    const $slider = document.querySelector('#slider-2');
    const $fill = $slider.shadowRoot.querySelector('.panel-fill');
    assert.strictEqual($fill.style.left, '0%');
  });

  QUnit.test('when value = 50 ---> fill right = auto', (assert) => {
    const $slider = document.querySelector('#slider-2');
    const $fill = $slider.shadowRoot.querySelector('.panel-fill');
    assert.strictEqual($fill.style.right, 'auto');
  });

  // <toolcool-range-slider id="slider-101" value1="60" value2="80"></toolcool-range-slider>
  QUnit.test('when value1 = 60, and value2 = 80 ---> fill width = 20%', (assert) => {
    const $slider = document.querySelector('#slider-101');
    const $fill = $slider.shadowRoot.querySelector('.panel-fill');
    assert.strictEqual($fill.style.width, '20%');
  });

  QUnit.test('when value1 = 60, and value2 = 80 ---> fill right = auto', (assert) => {
    const $slider = document.querySelector('#slider-101');
    const $fill = $slider.shadowRoot.querySelector('.panel-fill');
    assert.strictEqual($fill.style.right, 'auto');
  });

  QUnit.test('when value1 = 60, and value2 = 80 ---> fill left = 60%', (assert) => {
    const $slider = document.querySelector('#slider-101');
    const $fill = $slider.shadowRoot.querySelector('.panel-fill');
    assert.strictEqual($fill.style.left, '60%');
  });

  // <toolcool-range-slider type="vertical" id="slider-28"></toolcool-range-slider>
  QUnit.test('when type = vertical, height = 0%', (assert) => {
    const $slider = document.querySelector('#slider-28');
    const $fill = $slider.shadowRoot.querySelector('.panel-fill');
    assert.strictEqual($fill.style.height, '0%');
  });

  QUnit.test('when type = vertical, bottom = auto', (assert) => {
    const $slider = document.querySelector('#slider-28');
    const $fill = $slider.shadowRoot.querySelector('.panel-fill');
    assert.strictEqual($fill.style.bottom, 'auto');
  });

  QUnit.test('when type = vertical, top = 0%', (assert) => {
    const $slider = document.querySelector('#slider-28');
    const $fill = $slider.shadowRoot.querySelector('.panel-fill');
    assert.strictEqual($fill.style.top, '0%');
  });

  // <toolcool-range-slider type="vertical" value="50" id="slider-102"></toolcool-range-slider>
  QUnit.test('when type = vertical, height = 50%', (assert) => {
    const $slider = document.querySelector('#slider-102');
    const $fill = $slider.shadowRoot.querySelector('.panel-fill');
    assert.strictEqual($fill.style.height, '50%');
  });

  QUnit.test('when type = vertical, bottom = auto', (assert) => {
    const $slider = document.querySelector('#slider-102');
    const $fill = $slider.shadowRoot.querySelector('.panel-fill');
    assert.strictEqual($fill.style.bottom, 'auto');
  });

  QUnit.test('when type = vertical, top = 0%', (assert) => {
    const $slider = document.querySelector('#slider-102');
    const $fill = $slider.shadowRoot.querySelector('.panel-fill');
    assert.strictEqual($fill.style.top, '0%');
  });

  //  <toolcool-range-slider type="vertical" value1="40" value2="60" id="slider-103"></toolcool-range-slider>
  QUnit.test('when type = vertical, height = 20%', (assert) => {
    const $slider = document.querySelector('#slider-103');
    const $fill = $slider.shadowRoot.querySelector('.panel-fill');
    assert.strictEqual($fill.style.height, '20%');
  });

  QUnit.test('when type = vertical, bottom = auto', (assert) => {
    const $slider = document.querySelector('#slider-103');
    const $fill = $slider.shadowRoot.querySelector('.panel-fill');
    assert.strictEqual($fill.style.bottom, 'auto');
  });

  QUnit.test('when type = vertical, top = 40%', (assert) => {
    const $slider = document.querySelector('#slider-103');
    const $fill = $slider.shadowRoot.querySelector('.panel-fill');
    assert.strictEqual($fill.style.top, '40%');
  });

  // <toolcool-range-slider rtl="true" id="slider-43"></toolcool-range-slider>
  QUnit.test('when rtl="true" ---> panel fill width = 0%', (assert) => {
    const $slider = document.querySelector('#slider-43');
    const $fill = $slider.shadowRoot.querySelector('.panel-fill');
    assert.strictEqual($fill.style.width, '0%');
  });

  QUnit.test('when rtl="true" ---> panel fill right = 0%', (assert) => {
    const $slider = document.querySelector('#slider-43');
    const $fill = $slider.shadowRoot.querySelector('.panel-fill');
    assert.strictEqual($fill.style.right, '0%');
  });

  QUnit.test('when rtl="true" ---> panel fill left = auto', (assert) => {
    const $slider = document.querySelector('#slider-43');
    const $fill = $slider.shadowRoot.querySelector('.panel-fill');
    assert.strictEqual($fill.style.left, 'auto');
  });

  //  <toolcool-range-slider rtl="true" id="slider-48" value="50" min="0" max="100"></toolcool-range-slider>
  QUnit.test('when rtl="true" ---> panel fill width = 50%', (assert) => {
    const $slider = document.querySelector('#slider-48');
    const $fill = $slider.shadowRoot.querySelector('.panel-fill');
    assert.strictEqual($fill.style.width, '50%');
  });

  QUnit.test('when rtl="true" ---> panel fill right = 0%', (assert) => {
    const $slider = document.querySelector('#slider-48');
    const $fill = $slider.shadowRoot.querySelector('.panel-fill');
    assert.strictEqual($fill.style.right, '0%');
  });

  QUnit.test('when rtl="true" ---> panel fill left = auto', (assert) => {
    const $slider = document.querySelector('#slider-48');
    const $fill = $slider.shadowRoot.querySelector('.panel-fill');
    assert.strictEqual($fill.style.left, 'auto');
  });

  // <toolcool-range-slider rtl="true" id="slider-104" value1="50" value2="70"></toolcool-range-slider>

  QUnit.test('when rtl="true" and 2 pointers ---> panel fill width = 20%', (assert) => {
    const $slider = document.querySelector('#slider-104');
    const $fill = $slider.shadowRoot.querySelector('.panel-fill');
    assert.strictEqual($fill.style.width, '20%');
  });

  QUnit.test('when rtl="true" and 2 pointers ---> panel fill right = 0%', (assert) => {
    const $slider = document.querySelector('#slider-104');
    const $fill = $slider.shadowRoot.querySelector('.panel-fill');
    assert.strictEqual($fill.style.right, '0%');
  });

  QUnit.test('when rtl="true" and 2 pointers ---> panel fill left = 30%', (assert) => {
    const $slider = document.querySelector('#slider-104');
    const $fill = $slider.shadowRoot.querySelector('.panel-fill');
    assert.strictEqual($fill.style.left, '30%');
  });

  // ----

  // <<toolcool-range-slider btt="true" type="vertical" id="slider-51"></toolcool-range-slider>
  QUnit.test('when type = vertical and btt="true", height = 0%', (assert) => {
    const $slider = document.querySelector('#slider-51');
    const $fill = $slider.shadowRoot.querySelector('.panel-fill');
    assert.strictEqual($fill.style.height, '0%');
  });

  QUnit.test('when type = vertical and btt="true", bottom = 0%', (assert) => {
    const $slider = document.querySelector('#slider-51');
    const $fill = $slider.shadowRoot.querySelector('.panel-fill');
    assert.strictEqual($fill.style.bottom, '0%');
  });

  QUnit.test('when type = vertical and btt="true", top = auto%', (assert) => {
    const $slider = document.querySelector('#slider-51');
    const $fill = $slider.shadowRoot.querySelector('.panel-fill');
    assert.strictEqual($fill.style.top, 'auto');
  });

  //   <toolcool-range-slider btt="true" type="vertical" id="slider-105" value1="50" value2="70"></toolcool-range-slider>
  QUnit.test('when type = vertical, 2 pointers, and btt="true", height = 20%', (assert) => {
    const $slider = document.querySelector('#slider-105');
    const $fill = $slider.shadowRoot.querySelector('.panel-fill');
    assert.strictEqual($fill.style.height, '20%');
  });

  QUnit.test('when type = vertical, 2 pointers, and btt="true", bottom = 0%', (assert) => {
    const $slider = document.querySelector('#slider-105');
    const $fill = $slider.shadowRoot.querySelector('.panel-fill');
    assert.strictEqual($fill.style.bottom, '0%');
  });

  QUnit.test('when type = vertical, 2 pointers, and btt="true", top = 30%', (assert) => {
    const $slider = document.querySelector('#slider-105');
    const $fill = $slider.shadowRoot.querySelector('.panel-fill');
    assert.strictEqual($fill.style.top, '30%');
  });


});
