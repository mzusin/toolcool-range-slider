QUnit.module('Non Linear', (hooks) => {
  initFixtures(hooks, `
      <toolcool-range-slider id="slider-1"></toolcool-range-slider>
  `);

  QUnit.test('non linear step, arrow right 3 times ---> value should be ', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.step = (value, percent) => {
      return value < 50 ? 5 : 10;
    };

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

    assert.equal($slider.value, 15);
  });

});
