QUnit.module('Disabled / Enabled - Mousewheel', (hooks) => {
  initFixtures(hooks, `
      <toolcool-range-slider id="slider-1"></toolcool-range-slider>
      <toolcool-range-slider id="slider-126" mousewheel-disabled="true"></toolcool-range-slider>
      <toolcool-range-slider id="slider-127" mousewheel-disabled="false"></toolcool-range-slider>
      <toolcool-range-slider id="slider-128" mousewheel-disabled="test"></toolcool-range-slider>
  `);

  QUnit.test('if not provided ---> mousewheelDisabled value should be false', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.mousewheelDisabled, false);
  });

  QUnit.test('mousewheelDisabled = true', (assert) => {
    const $slider = document.querySelector('#slider-126');
    assert.equal($slider.mousewheelDisabled, true);
  });

  QUnit.test('mousewheelDisabled = false', (assert) => {
    const $slider = document.querySelector('#slider-127');
    assert.equal($slider.mousewheelDisabled, false);
  });

  QUnit.test('mousewheelDisabled = test ---> mousewheelDisabled should be false', (assert) => {
    const $slider = document.querySelector('#slider-128');
    assert.equal($slider.mousewheelDisabled, false);
  });

  QUnit.test('change mousewheelDisabled via API to true', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.mousewheelDisabled = true;
    assert.equal($slider.mousewheelDisabled, true);
  });

  QUnit.test('change mousewheelDisabled via API to false', (assert) => {
    const $slider = document.querySelector('#slider-127');
    $slider.mousewheelDisabled = false;
    assert.equal($slider.mousewheelDisabled, false);
  });

  QUnit.test('change mousewheelDisabled via attribute to true', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-1');
    $slider.setAttribute('mousewheel-disabled', 'true');

    window.setTimeout(() => {
      assert.equal($slider.mousewheelDisabled, true);
      done();
    }, 10);
  });

  QUnit.test('change mousewheelDisabled via attribute to false', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-127');
    $slider.setAttribute('mousewheel-disabled', 'false');

    window.setTimeout(() => {
      assert.equal($slider.mousewheelDisabled, false);
      done();
    }, 10);
  });


});
