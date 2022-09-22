QUnit.module('Pointer Overlap', (hooks) => {
  initFixtures(hooks, `
      <toolcool-range-slider id="slider-1"></toolcool-range-slider>
      <toolcool-range-slider id="slider-110" value1="50" value2="55" pointers-overlap="true"></toolcool-range-slider>
      <toolcool-range-slider id="slider-111" value1="50" value2="55" pointers-overlap="false"></toolcool-range-slider>
      <toolcool-range-slider id="slider-112" value1="50" value2="55" pointers-overlap="test"></toolcool-range-slider>
  `);

  QUnit.test('default pointers overlap value should be false', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.pointersOverlap, false);
  });

  QUnit.test('provided pointers overlap value should be true', (assert) => {
    const $slider = document.querySelector('#slider-110');
    assert.equal($slider.pointersOverlap, true);
  });

  QUnit.test('provided pointers overlap value should be false', (assert) => {
    const $slider = document.querySelector('#slider-111');
    assert.equal($slider.pointersOverlap, false);
  });

  QUnit.test('if provided pointers overlap value is string it should be false', (assert) => {
    const $slider = document.querySelector('#slider-112');
    assert.equal($slider.pointersOverlap, false);
  });

  QUnit.test('change pointers overlap value via API to true', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.pointersOverlap = true;
    assert.equal($slider.pointersOverlap, true);
  });

  QUnit.test('change pointers overlap value via attribute to true', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-1');
    $slider.setAttribute('pointers-overlap', 'true');

    window.setTimeout(() => {
      assert.equal($slider.pointersOverlap, true);
      done();
    }, 10);
  });

  QUnit.test('change pointers overlap value via API to false', (assert) => {
    const $slider = document.querySelector('#slider-110');
    $slider.pointersOverlap = false;
    assert.equal($slider.pointersOverlap, false);
  });

  QUnit.test('change pointers overlap value via attribute to false', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-110');
    $slider.setAttribute('pointers-overlap', 'false');

    window.setTimeout(() => {
      assert.equal($slider.pointersOverlap, false);
      done();
    }, 10);
  });
});
