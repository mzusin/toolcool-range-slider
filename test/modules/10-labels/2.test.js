QUnit.module('Value Label 2', (hooks) => {
  initFixtures(hooks, `
      <toolcool-range-slider id="slider-1"></toolcool-range-slider>
      <toolcool-range-slider value2-label=".value-2" id="slider-94" value2="0"></toolcool-range-slider>
      <toolcool-range-slider value2-label=".value-2" id="slider-95" value2="50"></toolcool-range-slider>
      <toolcool-range-slider value2-label=".value-5" id="slider-96" value2="0"></toolcool-range-slider>
      <toolcool-range-slider data="a, b, c, d" value="a" value2="c" value2-label=".value-6" id="slider-97"></toolcool-range-slider>
      <toolcool-range-slider data="100, 200, 300" value="100" value2="300" value2-label=".value-7" id="slider-98"></toolcool-range-slider>
      
      <div class="value-2">20</div>
      <div class="value-5">20</div>
      <div class="value-6">20</div>
      <div class="value-7">20</div>
      <div class="value-8">20</div>
      <div class="value-9">20</div>
  `);

  QUnit.test('default value label 2 should be null', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.value2Label, null);
  });

  QUnit.test('provided value label should be .value-2', (assert) => {
    const $slider = document.querySelector('#slider-94');
    assert.equal($slider.value2Label, '.value-2');
  });

  QUnit.test('change value label via API to .value-1', (assert) => {
    const $slider = document.querySelector('#slider-94');
    $slider.value2Label = '.value-1';
    assert.equal($slider.value2Label, '.value-1');
  });

  QUnit.test('provided value label is .value-6 ---> the label should contain zero', (assert) => {
    const $slider = document.querySelector('#slider-96');
    const $label = document.querySelector('.value-5');
    assert.equal($label.textContent, '0');
  });

  QUnit.test('change value via attribute to .value-3', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-94');
    $slider.setAttribute('value2-label', '.value-3');

    window.setTimeout(() => {
      assert.equal($slider.value2Label, '.value-3');
      done();
    }, 10);
  });

  QUnit.test('provided value label is .value-2 and value2 = 50 ---> the label should contain 50', (assert) => {
    const $slider = document.querySelector('#slider-95');
    $slider.value2 = 50;
    const $label = document.querySelector('.value-2');
    assert.equal($label.textContent, '50');
  });

  // <toolcool-range-slider value2-label=".value-2" id="slider-94" value2="0"></toolcool-range-slider>
  QUnit.test('change value label via API to .value-8 ---> the label should contain 0', (assert) => {
    const $slider = document.querySelector('#slider-94');
    $slider.value2Label = '.value-8';
    const $label = document.querySelector('.value-8');
    assert.equal($label.textContent, '0');
  });

  QUnit.test('change value via attribute to .value-9 ---> the label should contain 0', (assert) => {
    const $slider = document.querySelector('#slider-94');
    $slider.setAttribute('value-label', '.value-2');
    $slider.value2Label = '.value-9';
    const $label = document.querySelector('.value-9');
    assert.equal($label.textContent, '0');
  });


  QUnit.test('data="a, b, c, d", provided value label is .value-6 ---> the label should contain "c"', (assert) => {
    const $slider = document.querySelector('#slider-97');
    const $label = document.querySelector('.value-6');
    assert.deepEqual($label.textContent, 'c');
  });

  QUnit.test('data="100, 200, 300", provided value label is .value-7 ---> the label should contain "300"', (assert) => {
    const $slider = document.querySelector('#slider-98');
    const $label = document.querySelector('.value-7');
    assert.deepEqual($label.textContent, '300');
  });
});
