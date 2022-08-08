
QUnit.module('Range Slider Keyboard Arrows', () => {

  QUnit.test('provided value 50 ---> pointer left should be 50%', (assert) => {
    const $slider = document.querySelector('#slider-2');
    const $pointer = $slider.shadowRoot.querySelector('.pointer');
    assert.equal($pointer.style.left, '50%');
  });

  QUnit.test('pointer arrow right ---> left pointer position should be 1%', (assert) => {
    const $slider = document.querySelector('#slider-1');
    const $pointer = $slider.shadowRoot.querySelector('.pointer');

    $pointer.dispatchEvent(new KeyboardEvent('keydown', {
      view: window,
      bubbles: true,
      cancelable: true,
      key: 'ArrowRight',
    }));

    const left = $pointer.style.left;
    assert.equal(left, '1%');
  });

  QUnit.test('pointer arrow right 3 times ---> left pointer position should be 3%', (assert) => {
    const $slider = document.querySelector('#slider-1');
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
    assert.equal(left, '3%');
  });

  QUnit.test('pointer arrow right 3 times, arrow left 1 time ---> left pointer position should be 2%', (assert) => {
    const $slider = document.querySelector('#slider-1');
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
    $pointer.dispatchEvent(new KeyboardEvent('keydown', {
      view: window,
      bubbles: true,
      cancelable: true,
      key: 'ArrowLeft',
    }));

    const left = $pointer.style.left;
    assert.equal(left, '2%');
  });

  QUnit.test('pointer arrow left ---> left pointer position should be 0%', (assert) => {
    const $slider = document.querySelector('#slider-1');
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

  QUnit.test('change value to 99, pointer arrow right ---> left pointer position should be 100%', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.value = 99;
    const $pointer = $slider.shadowRoot.querySelector('.pointer');

    $pointer.dispatchEvent(new KeyboardEvent('keydown', {
      view: window,
      bubbles: true,
      cancelable: true,
      key: 'ArrowRight',
    }));

    const left = $pointer.style.left;
    assert.equal(left, '100%');
  });

  QUnit.test('change value to 100, pointer arrow right ---> left pointer position still should be 100%', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.value = 100;
    const $pointer = $slider.shadowRoot.querySelector('.pointer');

    $pointer.dispatchEvent(new KeyboardEvent('keydown', {
      view: window,
      bubbles: true,
      cancelable: true,
      key: 'ArrowRight',
    }));

    const left = $pointer.style.left;
    assert.equal(left, '100%');
  });

  // <toolcool-range-slider min="50" max="100" id="slider-12"></toolcool-range-slider>
  QUnit.test('min="50" max="100" and arrow right ---> left position should be 2%', (assert) => {
    const $slider = document.querySelector('#slider-12');
    const $pointer = $slider.shadowRoot.querySelector('.pointer');

    $pointer.dispatchEvent(new KeyboardEvent('keydown', {
      view: window,
      bubbles: true,
      cancelable: true,
      key: 'ArrowRight',
    }));

    const left = $pointer.style.left;
    assert.equal(left, '2%');
  });

});
