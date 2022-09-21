QUnit.module('Disabled / Enabled - Pointer 1', (hooks) => {
  initFixtures(hooks, `
     <toolcool-range-slider id="slider-1"></toolcool-range-slider>
     <toolcool-range-slider id="slider-131" pointer1-disabled="true"></toolcool-range-slider>
     <toolcool-range-slider id="slider-132" pointer1-disabled="false"></toolcool-range-slider>
     <toolcool-range-slider id="slider-133" pointer1-disabled="test"></toolcool-range-slider>
  `);

  QUnit.test('if not provided ---> pointer1Disabled value should be false', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.pointer1Disabled, false);
  });

  QUnit.test('pointer1Disabled = true', (assert) => {
    const $slider = document.querySelector('#slider-131');
    assert.equal($slider.pointer1Disabled, true);
  });

  QUnit.test('pointer1Disabled = false', (assert) => {
    const $slider = document.querySelector('#slider-132');
    assert.equal($slider.pointer1Disabled, false);
  });

  QUnit.test('pointer1Disabled = test ---> pointer1Disabled should be false', (assert) => {
    const $slider = document.querySelector('#slider-133');
    assert.equal($slider.pointer1Disabled, false);
  });

  QUnit.test('change pointer1Disabled via API to true', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.pointer1Disabled = true;
    assert.equal($slider.pointer1Disabled, true);
  });

  QUnit.test('change pointer1Disabled via API to false', (assert) => {
    const $slider = document.querySelector('#slider-131');
    $slider.pointer1Disabled = false;
    assert.equal($slider.pointer1Disabled, false);
  });

  QUnit.test('change pointer1Disabled via attribute to true', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-1');
    $slider.setAttribute('pointer1-disabled', 'true');

    window.setTimeout(() => {
      assert.equal($slider.pointer1Disabled, true);
      done();
    }, 10);
  });

  QUnit.test('change pointer1Disabled via attribute to false', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-131');
    $slider.setAttribute('pointer1-disabled', 'false');

    window.setTimeout(() => {
      assert.equal($slider.pointer1Disabled, false);
      done();
    }, 10);
  });

});
