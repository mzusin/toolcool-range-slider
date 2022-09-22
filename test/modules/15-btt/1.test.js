QUnit.module('Bottom to Top', (hooks) => {
  initFixtures(hooks, `
      <toolcool-range-slider id="slider-1"></toolcool-range-slider>
      <toolcool-range-slider rtl="true" id="slider-50" value="100"></toolcool-range-slider>
      <toolcool-range-slider btt="true" type="vertical" id="slider-51"></toolcool-range-slider>
      <toolcool-range-slider btt="aaa" type="vertical" id="slider-52"></toolcool-range-slider>
      <toolcool-range-slider btt="false" type="vertical" id="slider-53"></toolcool-range-slider>
      <toolcool-range-slider btt="true" type="vertical" id="slider-54" min="50"></toolcool-range-slider>
      <toolcool-range-slider btt="true" type="vertical" id="slider-55" min="-50"></toolcool-range-slider>
      <toolcool-range-slider btt="true" type="vertical" id="slider-56" value="50" min="0" max="100"></toolcool-range-slider>
      <toolcool-range-slider btt="true" type="vertical" id="slider-57" value="40" min="0" max="100"></toolcool-range-slider>
      <toolcool-range-slider btt="true" type="vertical" id="slider-58" value="100"></toolcool-range-slider>
  `);

  QUnit.test('if not provided ---> btt value should be false', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.btt, false);
  });

  QUnit.test('disabled = true', (assert) => {
    const $slider = document.querySelector('#slider-51');
    assert.equal($slider.btt, true);
  });

  QUnit.test('btt = false', (assert) => {
    const $slider = document.querySelector('#slider-53');
    assert.equal($slider.btt, false);
  });

  QUnit.test('btt = aaa ---> btt should be false', (assert) => {
    const $slider = document.querySelector('#slider-52');
    assert.equal($slider.btt, false);
  });

  QUnit.test('change btt via API to true', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.btt = true;
    assert.equal($slider.btt, true);
  });

  QUnit.test('change btt via API to false', (assert) => {
    const $slider = document.querySelector('#slider-51');
    $slider.btt = false;
    assert.equal($slider.btt, false);
  });

  QUnit.test('change btt via attribute to true', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-53');
    $slider.setAttribute('btt', 'true');

    window.setTimeout(() => {
      assert.equal($slider.btt, true);
      done();
    }, 10);
  });

  QUnit.test('change btt via attribute to false', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-51');
    $slider.setAttribute('btt', 'false');

    window.setTimeout(() => {
      assert.equal($slider.btt, false);
      done();
    }, 10);
  });

  // ------

  QUnit.test('btt support - default value should be 0', (assert) => {
    const $slider = document.querySelector('#slider-51');
    assert.equal($slider.value, '0');
  });

  QUnit.test('btt support - if min = 50 ---> default value should be 50', (assert) => {
    const $slider = document.querySelector('#slider-54');
    assert.equal($slider.value, '50');
  });

  QUnit.test('btt support - if min = -50 ---> default value should be -50', (assert) => {
    const $slider = document.querySelector('#slider-55');
    assert.equal($slider.value, '-50');
  });

  QUnit.test('btt support - by default pointer top should be 100%', (assert) => {
    const $slider = document.querySelector('#slider-51');
    const $pointer = $slider.shadowRoot.querySelector('.pointer');
    assert.equal($pointer.style.top, '100%');
  });

  QUnit.test('btt support provided value 50 ---> pointer top should be 50%', (assert) => {
    const $slider = document.querySelector('#slider-56');
    const $pointer = $slider.shadowRoot.querySelector('.pointer');
    assert.equal($pointer.style.top, '50%');
  });

  QUnit.test('btt support provided value 40 ---> pointer top should be 60%', (assert) => {
    const $slider = document.querySelector('#slider-57');
    const $pointer = $slider.shadowRoot.querySelector('.pointer');
    assert.equal($pointer.style.top, '60%');
  });

  QUnit.test('provided value should be 100 ---> pointer top should be 0%', (assert) => {
    const $slider = document.querySelector('#slider-58');
    const $pointer = $slider.shadowRoot.querySelector('.pointer');
    assert.equal($pointer.style.top, '0%');
  });

});
