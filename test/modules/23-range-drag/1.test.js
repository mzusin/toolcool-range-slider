QUnit.module('Range Dragging', (hooks) => {
  initFixtures(hooks, `
      <toolcool-range-slider id="slider-1" value1="30" value2="50"></toolcool-range-slider>
      <toolcool-range-slider id="slider-2" value="30"></toolcool-range-slider>
      <toolcool-range-slider id="slider-3" value1="30" value2="50"></toolcool-range-slider>
      <toolcool-range-slider id="slider-5" range-dragging="true"></toolcool-range-slider>
      <toolcool-range-slider id="slider-6" range-dragging="true" value1="30" value2="50"></toolcool-range-slider>
      <toolcool-range-slider id="slider-8" range-dragging="false" value1="30" value2="50"></toolcool-range-slider>
      <toolcool-range-slider id="slider-9" range-dragging="test" value1="30" value2="50"></toolcool-range-slider>
  `);

  QUnit.test('default rangeDragging on slider with 2 pointers should be false', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.strictEqual($slider.rangeDragging, false);
  });

  QUnit.test('by default the slider with 2 pointers should not have class range-dragging', (assert) => {
    const $slider = document.querySelector('#slider-3');
    const $inner = $slider.shadowRoot.querySelector('.range-slider');
    assert.strictEqual($inner.classList.contains('range-dragging'), false);
  });

  QUnit.test('provided rangeDragging on slider with 2 pointers should be true', (assert) => {
    const $slider = document.querySelector('#slider-6');
    assert.equal($slider.rangeDragging, true);
  });

  QUnit.test('slider with 2 pointers and rangeDragging = true should have class range-dragging', (assert) => {
    const $slider = document.querySelector('#slider-6');
    const $inner = $slider.shadowRoot.querySelector('.range-slider');
    assert.equal($inner.classList.contains('range-dragging'), true);
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

  QUnit.test('change rangeDragging via API to true ---> slider should have class range-dragging', (assert) => {
    const $slider = document.querySelector('#slider-8');
    $slider.rangeDragging = true;
    const $inner = $slider.shadowRoot.querySelector('.range-slider');
    assert.strictEqual($inner.classList.contains('range-dragging'), true);
  });

  QUnit.test('change rangeDragging via API to false', (assert) => {
    const $slider = document.querySelector('#slider-6');
    $slider.rangeDragging = false;
    assert.equal($slider.rangeDragging, false);
  });

  QUnit.test('change rangeDragging via API to false ---> slider should not have class range-dragging', (assert) => {
    const $slider = document.querySelector('#slider-6');
    $slider.rangeDragging = false;
    const $inner = $slider.shadowRoot.querySelector('.range-slider');
    assert.strictEqual($inner.classList.contains('range-dragging'), false);
  });

  QUnit.test('change rangeDragging via API to test ---> it should be false', (assert) => {
    const $slider = document.querySelector('#slider-8');
    $slider.rangeDragging = 'test';
    assert.equal($slider.rangeDragging, false);
  });

  // <toolcool-range-slider id="slider-8" range-dragging="false" value1="30" value2="50"></toolcool-range-slider>
  QUnit.test('change rangeDragging via attributes to true', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-8');
    $slider.setAttribute('range-dragging', 'true');

    window.setTimeout(() => {
      assert.equal($slider.rangeDragging, true);
      done();
    }, 1);
  });

  QUnit.test('change rangeDragging via attributes to true ---> slider should have class range-dragging', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-8');
    $slider.setAttribute('range-dragging', 'true');
    const $inner = $slider.shadowRoot.querySelector('.range-slider');

    window.setTimeout(() => {
      assert.strictEqual($inner.classList.contains('range-dragging'), true);
      done();
    }, 1);
  });

  QUnit.test('change rangeDragging via attributes to false', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-6');
    $slider.setAttribute('range-dragging', 'false');

    window.setTimeout(() => {
      assert.equal($slider.rangeDragging, false);
      done();
    }, 1);
  });

  QUnit.test('change rangeDragging via attributes to false ---> slider should not have class range-dragging', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-6');
    $slider.setAttribute('range-dragging', 'false');
    const $inner = $slider.shadowRoot.querySelector('.range-slider');

    window.setTimeout(() => {
      assert.strictEqual($inner.classList.contains('range-dragging'), false);
      done();
    }, 1);
  });

  QUnit.test('change rangeDragging via attributes to test ---> it should be false', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-8');
    $slider.setAttribute('range-dragging', 'test');

    window.setTimeout(() => {
      assert.equal($slider.rangeDragging, false);
      done();
    }, 10);
  });

  // <toolcool-range-slider id="slider-6" range-dragging="true" value1="30" value2="50"></toolcool-range-slider>
  QUnit.test('give slider with 2 pointers and range slider true; remove the second pointer ---> rangeDragging should become false', (assert) => {
    const $slider = document.querySelector('#slider-6');
    $slider.removePointer();
    assert.equal($slider.rangeDragging, false);
  });

});
