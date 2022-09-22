QUnit.module('Round', (hooks) => {
  initFixtures(hooks, `
      <toolcool-range-slider id="slider-1"></toolcool-range-slider>
      <toolcool-range-slider id="slider-2" value="50" min="1" max="99"></toolcool-range-slider>
      <toolcool-range-slider id="slider-82" round="4"></toolcool-range-slider>
      <toolcool-range-slider id="slider-83" round="0"></toolcool-range-slider>
      <toolcool-range-slider id="slider-84" round="test"></toolcool-range-slider>
      <toolcool-range-slider id="slider-85" round="-1"></toolcool-range-slider>
  `);

  QUnit.test('default round should be 2', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.round, 2);
  });

  QUnit.test('provided round should be 4', (assert) => {
    const $slider = document.querySelector('#slider-82');
    assert.equal($slider.round, 4);
  });

  QUnit.test('provided round should be 0', (assert) => {
    const $slider = document.querySelector('#slider-83');
    assert.equal($slider.round, 0);
  });

  QUnit.test('if provided round is string it should be 2', (assert) => {
    const $slider = document.querySelector('#slider-84');
    assert.equal($slider.round, 2);
  });

  QUnit.test('if provided value is negative it should be 2', (assert) => {
    const $slider = document.querySelector('#slider-85');
    assert.equal($slider.round, 2);
  });

  QUnit.test('change round via API to 3', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.round = 3;
    assert.equal($slider.round, 3);
  });

  QUnit.test('change value via attribute to 4', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-1');
    $slider.setAttribute('round', 4);

    window.setTimeout(() => {
      assert.equal($slider.round, 4);
      done();
    }, 10);
  });

  QUnit.test('1.55678 when round is 4 ---> should be equal 1.56', (assert) => {
    const $slider = document.querySelector('#slider-82'); // provided round is 2
    $slider.value = 1.55678999;
    assert.equal($slider.value, 1.5568);
  });

  QUnit.test('1.55678 when round is 2 ---> should be equal 2', (assert) => {
    const $slider = document.querySelector('#slider-83'); // provided round is 2
    $slider.value = 1.55678;
    assert.equal($slider.value, 2);
  });

  QUnit.test('set round to a string value ---> it should be 2', (assert) => {
    const $slider = document.querySelector('#slider-2');
    $slider.round = 'test';
    assert.strictEqual($slider.round, 2);
  });

});
