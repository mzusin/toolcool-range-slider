QUnit.module('Disabled / Enabled - Keyboard', (hooks) => {
  initFixtures(hooks, `
      <toolcool-range-slider id="slider-1"></toolcool-range-slider>
      <toolcool-range-slider id="slider-126" keyboard-disabled="true"></toolcool-range-slider>
      <toolcool-range-slider id="slider-127" keyboard-disabled="false"></toolcool-range-slider>
      <toolcool-range-slider id="slider-128" keyboard-disabled="test"></toolcool-range-slider>
  `);

  QUnit.test('if not provided ---> keyboardDisabled value should be false', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.keyboardDisabled, false);
  });

  QUnit.test('keyboardDisabled = true', (assert) => {
    const $slider = document.querySelector('#slider-126');
    assert.equal($slider.keyboardDisabled, true);
  });

  QUnit.test('keyboardDisabled = false', (assert) => {
    const $slider = document.querySelector('#slider-127');
    assert.equal($slider.keyboardDisabled, false);
  });

  QUnit.test('keyboardDisabled = test ---> keyboardDisabled should be false', (assert) => {
    const $slider = document.querySelector('#slider-128');
    assert.equal($slider.keyboardDisabled, false);
  });

  QUnit.test('change keyboardDisabled via API to true', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.keyboardDisabled = true;
    assert.equal($slider.keyboardDisabled, true);
  });

  QUnit.test('change keyboardDisabled via API to false', (assert) => {
    const $slider = document.querySelector('#slider-127');
    $slider.keyboardDisabled = false;
    assert.equal($slider.keyboardDisabled, false);
  });

  QUnit.test('change keyboardDisabled via attribute to true', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-1');
    $slider.setAttribute('keyboard-disabled', 'true');

    window.setTimeout(() => {
      assert.equal($slider.keyboardDisabled, true);
      done();
    }, 10);
  });

  QUnit.test('change keyboardDisabled via attribute to false', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-127');
    $slider.setAttribute('keyboard-disabled', 'false');

    window.setTimeout(() => {
      assert.equal($slider.keyboardDisabled, false);
      done();
    }, 10);
  });

  QUnit.test('if keyboardDisabled === true and send keyboard event ---> the value should not change', (assert) => {
    const $slider = document.querySelector('#slider-126');
    const $pointer = $slider.shadowRoot.querySelector('.pointer');

    $pointer.dispatchEvent(new KeyboardEvent('keydown', {
      view: window,
      bubbles: true,
      cancelable: true,
      key: 'ArrowRight',
    }));
    $pointer.dispatchEvent(new KeyboardEvent('keydown', {
      view: window,
      bubbles: true,
      cancelable: true,
      key: 'ArrowRight',
    }));
    $pointer.dispatchEvent(new KeyboardEvent('keydown', {
      view: window,
      bubbles: true,
      cancelable: true,
      key: 'ArrowRight',
    }));

    const left = $pointer.style.left;
    assert.equal(left, '0%');
  });

});
