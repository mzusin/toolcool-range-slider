QUnit.module('Value Label', (hooks) => {
  initFixtures(hooks, `
     <toolcool-range-slider id="slider-1"></toolcool-range-slider>
     <toolcool-range-slider value-label=".value-1" id="slider-34"></toolcool-range-slider>
     <div class="value-1">10</div>
     <div class="value-2">20</div>
     <toolcool-range-slider data="a, b" value-label=".value-3" id="slider-72"></toolcool-range-slider>
     <div class="value-3"></div>
     <toolcool-range-slider data="100, 200, 300" value-label=".value-4" id="slider-73"></toolcool-range-slider>
     <div class="value-4"></div>
  `);

  QUnit.test('default value label should be null', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.valueLabel, null);
  });

  QUnit.test('provided value label should be .value-1', (assert) => {
    const $slider = document.querySelector('#slider-34');
    assert.equal($slider.valueLabel, '.value-1');
  });

  QUnit.test('change value label via API to .value-2', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.valueLabel = '.value-2';
    assert.equal($slider.valueLabel, '.value-2');
  });

  QUnit.test('change value via attribute to .value-3', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-1');
    $slider.setAttribute('value-label', '.value-3');

    window.setTimeout(() => {
      assert.equal($slider.valueLabel, '.value-3');
      done();
    }, 10);
  });

  QUnit.test('provided value label is .value-1 ---> the label should contain zero', (assert) => {
    const $slider = document.querySelector('#slider-34');
    const $label = document.querySelector('.value-1');
    assert.equal($label.textContent, '0');
  });

  QUnit.test('provided value label is .value-1 and value = 50 ---> the label should contain 50', (assert) => {
    const $slider = document.querySelector('#slider-34');
    $slider.value = 50;
    const $label = document.querySelector('.value-1');
    assert.equal($label.textContent, '50');
  });

  QUnit.test('change value label via API to .value-2 ---> the label should contain 0', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.valueLabel = '.value-2';
    const $label = document.querySelector('.value-1');
    assert.equal($label.textContent, '0');
  });

  QUnit.test('change value via attribute to .value-2 ---> the label should contain 0', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.setAttribute('value-label', '.value-2');
    $slider.valueLabel = '.value-2';
    const $label = document.querySelector('.value-1');
    assert.equal($label.textContent, '0');
  });


  QUnit.test('data="a, b", provided value label is .value-4 ---> the label should contain "a"', (assert) => {
    const $slider = document.querySelector('#slider-72');
    const $label = document.querySelector('.value-3');
    assert.equal($label.textContent, 'a');
  });

  QUnit.test('data="100, 200, 300", provided value label is .value-4 ---> the label should contain "100"', (assert) => {
    const $slider = document.querySelector('#slider-73');
    const $label = document.querySelector('.value-4');
    assert.equal($label.textContent, '100');
  });
});
