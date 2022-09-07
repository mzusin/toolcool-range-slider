QUnit.module('Panel Fill', (hooks) => {
  initFixtures(hooks, `
    <toolcool-range-slider id="slider-110" value1="50" value2="55" pointers-overlap="true"></toolcool-range-slider>
  `);

  QUnit.test('when value1 = 70, and value2 = 50 ---> left should be min(50, 70) = 50', (assert) => {
    const $slider = document.querySelector('#slider-110');
    $slider.value = 70;
    $slider.value2 = 50;
    const $fill = $slider.shadowRoot.querySelector('.panel-fill');
    assert.strictEqual($fill.style.left, '50%');
  });

  QUnit.test('when rtl="true", value1 = 70, and value2 = 50 ---> left should be min(100 - 50, 100 - 70) = 30', (assert) => {
    const $slider = document.querySelector('#slider-110');
    $slider.rtl = true;
    $slider.value = 70;
    $slider.value2 = 50;
    const $fill = $slider.shadowRoot.querySelector('.panel-fill');
    assert.strictEqual($fill.style.left, '30%');
  });

  QUnit.test('type="vertical", when value1 = 70, and value2 = 50 ---> top should be min(50, 70) = 50', (assert) => {
    const $slider = document.querySelector('#slider-110');
    $slider.type = 'vertical';
    $slider.value = 70;
    $slider.value2 = 50;
    const $fill = $slider.shadowRoot.querySelector('.panel-fill');
    assert.strictEqual($fill.style.top, '50%');
  });

  QUnit.test('type="vertical", btt="true", when value1 = 70, and value2 = 50 ---> top should be min(100 - 50, 100 - 70) = 30', (assert) => {
    const $slider = document.querySelector('#slider-110');
    $slider.type = 'vertical';
    $slider.btt = true;
    $slider.value = 70;
    $slider.value2 = 50;
    const $fill = $slider.shadowRoot.querySelector('.panel-fill');
    assert.strictEqual($fill.style.top, '30%');
  });

});
