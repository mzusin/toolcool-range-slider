QUnit.module('Disabled / Enabled', (hooks) => {
  initFixtures(hooks, `
     <toolcool-range-slider id="slider-1"></toolcool-range-slider>
     <toolcool-range-slider disabled="true" id="slider-36"></toolcool-range-slider>
     <toolcool-range-slider disabled="false" id="slider-37"></toolcool-range-slider>
     <toolcool-range-slider disabled="aaa" id="slider-38"></toolcool-range-slider>
  `);

  QUnit.test('if not provided ---> disabled value should be false', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.disabled, false);
  });

  QUnit.test('if not provided ---> aria-disabled attribute should not present', (assert) => {
    const $slider = document.querySelector('#slider-1');
    const $inner = $slider.shadowRoot.querySelector('.range-slider');
    assert.equal($inner.getAttribute('aria-disabled'), undefined);
  });

  QUnit.test('disabled = true', (assert) => {
    const $slider = document.querySelector('#slider-36');
    assert.equal($slider.disabled, true);
  });

  QUnit.test('if provided ---> aria-disabled attribute should be true', (assert) => {
    const $slider = document.querySelector('#slider-36');
    const $inner = $slider.shadowRoot.querySelector('.range-slider');
    assert.equal($inner.getAttribute('aria-disabled'), 'true');
  });

  QUnit.test('disabled = false', (assert) => {
    const $slider = document.querySelector('#slider-37');
    assert.equal($slider.disabled, false);
  });

  QUnit.test('disabled = aaa ---> disabled should be false', (assert) => {
    const $slider = document.querySelector('#slider-38');
    assert.equal($slider.disabled, false);
  });

  QUnit.test('change disabled via API to true', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.disabled = true;
    assert.equal($slider.disabled, true);
  });

  QUnit.test('change disabled via API to false', (assert) => {
    const $slider = document.querySelector('#slider-36');
    $slider.disabled = false;
    assert.equal($slider.disabled, false);
  });

  QUnit.test('change disabled via attribute to true', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-1');
    $slider.setAttribute('disabled', 'true');

    window.setTimeout(() => {
      assert.equal($slider.disabled, true);
      done();
    }, 10);
  });

  QUnit.test('change disabled via attribute to false', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-36');
    $slider.setAttribute('disabled', 'false');

    window.setTimeout(() => {
      assert.equal($slider.disabled, false);
      done();
    }, 10);
  });

  QUnit.test('if disabled === false ---> should not have class "disabled"', (assert) => {
    const $slider = document.querySelector('#slider-37');
    const $inner = $slider.shadowRoot.querySelector('.range-slider');
    assert.equal($inner.classList.contains('disabled'), false);
  });

  QUnit.test('if disabled === true ---> should have class "disabled"', (assert) => {
    const $slider = document.querySelector('#slider-36');
    const $inner = $slider.shadowRoot.querySelector('.range-slider');
    assert.equal($inner.classList.contains('disabled'), true);
  });

  QUnit.test('if disabled === true and send keyboard event ---> the value should not change', (assert) => {
    const $slider = document.querySelector('#slider-36');
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
