QUnit.module('Disabled / Enabled - Pointer 2', (hooks) => {
  initFixtures(hooks, `
     <toolcool-range-slider id="slider-1"></toolcool-range-slider>
     <toolcool-range-slider id="slider-134" pointer2-disabled="true" value1="10" value2="20"></toolcool-range-slider>
     <toolcool-range-slider id="slider-135" pointer2-disabled="false" value1="10" value2="20"></toolcool-range-slider>
     <toolcool-range-slider id="slider-136" pointer2-disabled="test" value1="10" value2="20"></toolcool-range-slider>
  `);

  QUnit.test('pointer2Disabled = true', (assert) => {
    const $slider = document.querySelector('#slider-134');
    assert.equal($slider.pointer2Disabled, true);
  });

  QUnit.test('pointer2Disabled = false', (assert) => {
    const $slider = document.querySelector('#slider-135');
    assert.equal($slider.pointer2Disabled, false);
  });

  QUnit.test('pointer2Disabled = test ---> pointer2Disabled should be false', (assert) => {
    const $slider = document.querySelector('#slider-136');
    assert.equal($slider.pointer2Disabled, false);
  });

  QUnit.test('change pointer2Disabled via API to true', (assert) => {
    const $slider = document.querySelector('#slider-135');
    $slider.pointer2Disabled = true;
    assert.equal($slider.pointer2Disabled, true);
  });

  QUnit.test('change pointer2Disabled via API to false', (assert) => {
    const $slider = document.querySelector('#slider-134');
    $slider.pointer2Disabled = false;
    assert.equal($slider.pointer2Disabled, false);
  });

  QUnit.test('change pointer2Disabled via attribute to true', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-135');
    $slider.setAttribute('pointer2-disabled', 'true');

    window.setTimeout(() => {
      assert.equal($slider.pointer2Disabled, true);
      done();
    }, 10);
  });

  QUnit.test('change pointer2Disabled via attribute to false', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-134');
    $slider.setAttribute('pointer2-disabled', 'false');

    window.setTimeout(() => {
      assert.equal($slider.pointer2Disabled, false);
      done();
    }, 10);
  });

});
