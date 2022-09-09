QUnit.module('Range Dragging', (hooks) => {
  initFixtures(hooks, `
      <toolcool-range-slider id="slider-1" value1="30" value2="50"></toolcool-range-slider>
      <toolcool-range-slider id="slider-2" value="30"></toolcool-range-slider>
      
      <!--<toolcool-range-slider id="slider-3" min="-300" max="300" value1="30" value2="50"></toolcool-range-slider>
      <toolcool-range-slider id="slider-4" data="a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z" value1="g" value2="p"></toolcool-range-slider>-->
      
      <toolcool-range-slider id="slider-5" range-dragging="true"></toolcool-range-slider>
      <toolcool-range-slider id="slider-6" range-dragging="true" value1="30" value2="50"></toolcool-range-slider>
      <toolcool-range-slider id="slider-8" range-dragging="false" value1="30" value2="50"></toolcool-range-slider>
      <toolcool-range-slider id="slider-9" range-dragging="test" value1="30" value2="50"></toolcool-range-slider>
  `);

  QUnit.test('default rangeDragging on slider with 2 pointers should be false', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.rangeDragging, false);
  });

  QUnit.test('provided rangeDragging on slider with 2 pointers should be true', (assert) => {
    const $slider = document.querySelector('#slider-6');
    assert.equal($slider.rangeDragging, true);
  });

  QUnit.test('provided string instead boolean for rangeDragging on slider with 2 pointers should be false', (assert) => {
    const $slider = document.querySelector('#slider-9');
    assert.equal($slider.rangeDragging, false);
  });

  QUnit.test('provided range-dragging on slider with 2 pointers should be true', (assert) => {
    const $slider = document.querySelector('#slider-8');
    assert.equal($slider.rangeDragging, false);
  });

  QUnit.test('default range-dragging on slider with 1 pointer should be false', (assert) => {
    const $slider = document.querySelector('#slider-2');
    assert.equal($slider.rangeDragging, false);
  });

  QUnit.test('on slider with 1 pointer ---> rangeDragging should always be false (event if provided true)', (assert) => {
    const $slider = document.querySelector('#slider-5');
    assert.equal($slider.rangeDragging, false);
  });

  QUnit.test('change rangeDragging via API to true', (assert) => {
    const $slider = document.querySelector('#slider-8');
    $slider.rangeDragging = true;
    assert.equal($slider.rangeDragging, true);
  });

  QUnit.test('change rangeDragging via API to false', (assert) => {
    const $slider = document.querySelector('#slider-6');
    $slider.rangeDragging = false;
    assert.equal($slider.rangeDragging, false);
  });

  QUnit.test('change rangeDragging via API to test ---> it should be false', (assert) => {
    const $slider = document.querySelector('#slider-8');
    $slider.rangeDragging = 'test';
    assert.equal($slider.rangeDragging, false);
  });

  // <toolcool-range-slider id="slider-8" range-dragging="false" value1="30" value2="50"></toolcool-range-slider>
  QUnit.test('change rangeDragging via attributes to true', (assert) => {
    const $slider = document.querySelector('#slider-8');
    $slider.setAttribute('range-dragging', 'true');
    assert.equal($slider.rangeDragging, true);
  });

  QUnit.test('change rangeDragging via attributes to false', (assert) => {
    const $slider = document.querySelector('#slider-6');
    $slider.setAttribute('range-dragging', 'false');
    assert.equal($slider.rangeDragging, false);
  });

  QUnit.test('change rangeDragging via attributes to test ---> it should be false', (assert) => {
    const $slider = document.querySelector('#slider-8');
    $slider.setAttribute('range-dragging', 'test');
    assert.equal($slider.rangeDragging, false);
  });

  // <toolcool-range-slider id="slider-6" range-dragging="true" value1="30" value2="50"></toolcool-range-slider>
  QUnit.test('give slider with 2 pointers and range slider true; remove the second pointer ---> rangeDragging should become false', (assert) => {
    const $slider = document.querySelector('#slider-6');
    $slider.value2 = undefined;
    assert.equal($slider.rangeDragging, false);
  });

});
