QUnit.module('Keyboard Arrows', (hooks) => {
  initFixtures(hooks, `
     <toolcool-range-slider id="slider-1"></toolcool-range-slider>
     <toolcool-range-slider id="slider-2" value="50" min="1" max="99"></toolcool-range-slider>
     <toolcool-range-slider min="-50" max="50" value="0" id="slider-15"></toolcool-range-slider>
  `);

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
  QUnit.test('if min = -50, max = 50, value = -1 and arrow right ---> left position should be 50%', (assert) => {
    const $slider = document.querySelector('#slider-15');
    $slider.value = -1;
    const $pointer = $slider.shadowRoot.querySelector('.pointer');

    $pointer.dispatchEvent(new KeyboardEvent('keydown', {
      view: window,
      bubbles: true,
      cancelable: true,
      key: 'ArrowRight',
    }));

    const left = $pointer.style.left;
    assert.equal(left, '50%');
  });

  QUnit.test('if step = 10 and pointer arrow right ---> left pointer position should be 10%', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.step = 10;
    const $pointer = $slider.shadowRoot.querySelector('.pointer');

    $pointer.dispatchEvent(new KeyboardEvent('keydown', {
      view: window,
      bubbles: true,
      cancelable: true,
      key: 'ArrowRight',
    }));

    const left = $pointer.style.left;
    assert.equal(left, '10%');
  });

  QUnit.test('if step = 10 and pointer arrow right 3 times, then arrow left ---> left pointer position should be 20%', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.step = 10;
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
    assert.equal(left, '20%');
  });

  QUnit.test('go 3 times to the left, and then press down arrow ---> value should be 100', (assert) => {
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
      key: 'ArrowDown',
    }));

    const left = $pointer.style.left;
    assert.equal(left, '100%');
  });

  QUnit.test('go 3 times to the left, and then press up arrow ---> value should be 0', (assert) => {
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
      key: 'ArrowUp',
    }));

    const left = $pointer.style.left;
    assert.equal(left, '0%');
  });

});
