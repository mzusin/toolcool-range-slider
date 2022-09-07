QUnit.module('Keyboard Arrows - Data', (hooks) => {
  initFixtures(hooks, `
     <toolcool-range-slider id="slider-74" value="50" data="0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100"></toolcool-range-slider>
     <toolcool-range-slider id="slider-75" value="10" data="0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100"></toolcool-range-slider>
  `);

  QUnit.test('data="0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100", provided value 50 ---> pointer left should be 50%', (assert) => {
    const $slider = document.querySelector('#slider-74');
    const $pointer = $slider.shadowRoot.querySelector('.pointer');
    assert.equal($pointer.style.left, '50%');
  });

  QUnit.test('data="0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100", pointer arrow right ---> left pointer position should be 60%', (assert) => {
    const $slider = document.querySelector('#slider-74');
    const $pointer = $slider.shadowRoot.querySelector('.pointer');

    $pointer.dispatchEvent(new KeyboardEvent('keydown', {
      view: window,
      bubbles: true,
      cancelable: true,
      key: 'ArrowRight',
    }));

    const left = $pointer.style.left;
    assert.equal(left, '60%');
  });

  QUnit.test('data="0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100", pointer arrow left ---> left pointer position should be 40%', (assert) => {
    const $slider = document.querySelector('#slider-74');
    const $pointer = $slider.shadowRoot.querySelector('.pointer');

    $pointer.dispatchEvent(new KeyboardEvent('keydown', {
      view: window,
      bubbles: true,
      cancelable: true,
      key: 'ArrowLeft',
    }));

    const left = $pointer.style.left;
    assert.equal(left, '40%');
  });

  QUnit.test('data="0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100", value="10", pointer arrow left ---> left pointer position should be 0%', (assert) => {
    const $slider = document.querySelector('#slider-75');
    const $pointer = $slider.shadowRoot.querySelector('.pointer');

    $pointer.dispatchEvent(new KeyboardEvent('keydown', {
      view: window,
      bubbles: true,
      cancelable: true,
      key: 'ArrowLeft',
    }));

    const left = $pointer.style.left;
    assert.equal(left, '0%');
  });
});
