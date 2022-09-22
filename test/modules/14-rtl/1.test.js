QUnit.module('RTL', (hooks) => {
  initFixtures(hooks, `
      <toolcool-range-slider id="slider-1"></toolcool-range-slider>
      <toolcool-range-slider rtl="true" id="slider-43"></toolcool-range-slider>
      <toolcool-range-slider rtl="aaa" id="slider-44"></toolcool-range-slider>
      <toolcool-range-slider rtl="false" id="slider-45"></toolcool-range-slider>
      <toolcool-range-slider rtl="true" id="slider-46" min="50"></toolcool-range-slider>
      <toolcool-range-slider rtl="true" id="slider-47" min="-50"></toolcool-range-slider>
      <toolcool-range-slider rtl="true" id="slider-48" value="50" min="0" max="100"></toolcool-range-slider>
      <toolcool-range-slider rtl="true" id="slider-49" value="40" min="0" max="100"></toolcool-range-slider>
      <toolcool-range-slider rtl="true" id="slider-50" value="100"></toolcool-range-slider>
  `);

  QUnit.test('if not provided ---> rtl value should be false', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.rtl, false);
  });

  QUnit.test('disabled = true', (assert) => {
    const $slider = document.querySelector('#slider-43');
    assert.equal($slider.rtl, true);
  });

  QUnit.test('rtl = false', (assert) => {
    const $slider = document.querySelector('#slider-45');
    assert.equal($slider.rtl, false);
  });

  QUnit.test('rtl = aaa ---> rtl should be false', (assert) => {
    const $slider = document.querySelector('#slider-44');
    assert.equal($slider.rtl, false);
  });

  QUnit.test('change rtl via API to true', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.rtl = true;
    assert.equal($slider.rtl, true);
  });

  QUnit.test('change rtl via API to false', (assert) => {
    const $slider = document.querySelector('#slider-43');
    $slider.rtl = false;
    assert.equal($slider.rtl, false);
  });

  QUnit.test('change rtl via attribute to true', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-45');
    $slider.setAttribute('rtl', 'true');

    window.setTimeout(() => {
      assert.equal($slider.rtl, true);
      done();
    }, 10);
  });

  QUnit.test('change rtl via attribute to false', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-43');
    $slider.setAttribute('rtl', 'false');

    window.setTimeout(() => {
      assert.equal($slider.rtl, false);
      done();
    }, 10);
  });

  // ------

  QUnit.test('rtl support - default value should be 0', (assert) => {
    const $slider = document.querySelector('#slider-43');
    assert.equal($slider.value, '0');
  });

  QUnit.test('rtl support - if min = 50 ---> default value should be 50', (assert) => {
    const $slider = document.querySelector('#slider-46');
    assert.equal($slider.value, '50');
  });

  QUnit.test('rtl support - if min = -50 ---> default value should be -50', (assert) => {
    const $slider = document.querySelector('#slider-47');
    assert.equal($slider.value, '-50');
  });

  QUnit.test('rtl support - by default pointer left should be 100%', (assert) => {
    const $slider = document.querySelector('#slider-43');
    const $pointer = $slider.shadowRoot.querySelector('.pointer');
    assert.equal($pointer.style.left, '100%');
  });

  QUnit.test('rtl support provided value 50 ---> pointer left should be 50%', (assert) => {
    const $slider = document.querySelector('#slider-48');
    const $pointer = $slider.shadowRoot.querySelector('.pointer');
    assert.equal($pointer.style.left, '50%');
  });

  QUnit.test('rtl support provided value 40 ---> pointer left should be 60%', (assert) => {
    const $slider = document.querySelector('#slider-49');
    const $pointer = $slider.shadowRoot.querySelector('.pointer');
    assert.equal($pointer.style.left, '60%');
  });

  QUnit.test('provided value should be 100 ---> pointer left should be 0%', (assert) => {
    const $slider = document.querySelector('#slider-50');
    const $pointer = $slider.shadowRoot.querySelector('.pointer');
    assert.equal($pointer.style.left, '0%');
  });

});
