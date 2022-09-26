QUnit.module('Animation', (hooks) => {
  initFixtures(hooks, `
      <toolcool-range-slider id="slider-1"></toolcool-range-slider>
      <toolcool-range-slider id="slider-76" animate-onclick="0.3s"></toolcool-range-slider>
  `);

  QUnit.test('if animate-onclick is not provided ---> animateOnClick should be 0.3s', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.strictEqual($slider.animateOnClick, '0.3s');
  });

  QUnit.test('if animate-onclick is not provided ---> --animate-onclick should be ""', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.strictEqual($slider.style.getPropertyValue('--animate-onclick'), '');
  });

  QUnit.test('animateOnClick = 0.3s', (assert) => {
    const $slider = document.querySelector('#slider-76');
    assert.strictEqual($slider.animateOnClick, '0.3s');
  });

  QUnit.test('animateOnClick = 0.3s ---> --animate-onclick should be 0.3s', (assert) => {
    const $slider = document.querySelector('#slider-76');
    const $inner = $slider.shadowRoot.querySelector('.range-slider');
    assert.strictEqual($inner.style.getPropertyValue('--animate-onclick'), '0.3s');
  });

  QUnit.test('change animateOnClick via API to 0.5s', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.animateOnClick = '0.5s';
    assert.equal($slider.animateOnClick, '0.5s');
  });

  QUnit.test('change animateOnClick via attribute to 1s', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-1');
    $slider.setAttribute('animate-onclick', '1s');

    window.setTimeout(() => {
      assert.equal($slider.animateOnClick, '1s');
      done();
    }, 10);
  });

});
