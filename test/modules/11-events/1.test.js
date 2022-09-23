QUnit.module('Events', (hooks) => {
  initFixtures(hooks, `
     <toolcool-range-slider id="slider-1"></toolcool-range-slider>
     <toolcool-range-slider id="slider-2" value1="10" value2="20" value3="30"></toolcool-range-slider>
     <toolcool-range-slider id="slider-107" generate-labels="true" value1="50" value2="60"></toolcool-range-slider>
  `);

  QUnit.test('slider should send change event', (assert) => {

    const done = assert.async();

    const $slider = document.querySelector('#slider-1');
    const $pointer = $slider.shadowRoot.querySelector('.pointer');

    $slider.addEventListener('change', (evt) => {
      const value = Math.round(evt.detail.value);
      assert.equal(value, 1);
      done();
    });

    $pointer.dispatchEvent(new KeyboardEvent('keydown', {
      view: window,
      bubbles: true,
      cancelable: true,
      key: 'ArrowRight',
    }));
  });

  QUnit.test('change event: value0', (assert) => {

    const done = assert.async();

    const $slider = document.querySelector('#slider-1');
    const $pointer = $slider.shadowRoot.querySelector('.pointer');

    $slider.addEventListener('change', (evt) => {
      const value0 = Math.round(evt.detail.value0);
      assert.equal(value0, 1);
      done();
    });

    $pointer.dispatchEvent(new KeyboardEvent('keydown', {
      view: window,
      bubbles: true,
      cancelable: true,
      key: 'ArrowRight',
    }));
  });

  QUnit.test('change event: value1', (assert) => {

    const done = assert.async();

    const $slider = document.querySelector('#slider-1');
    const $pointer = $slider.shadowRoot.querySelector('.pointer');

    $slider.addEventListener('change', (evt) => {
      const value1 = Math.round(evt.detail.value1);
      assert.equal(value1, 1);
      done();
    });

    $pointer.dispatchEvent(new KeyboardEvent('keydown', {
      view: window,
      bubbles: true,
      cancelable: true,
      key: 'ArrowRight',
    }));
  });

  QUnit.test('slider with 2 pointers should send change event with value = 51', (assert) => {

    const done = assert.async();

    const $slider = document.querySelector('#slider-107');
    const $pointer = $slider.shadowRoot.querySelector('.pointer');

    $slider.addEventListener('change', (evt) => {
      const value = Math.round(evt.detail.value);
      assert.equal(value, 51);
      done();
    });

    $pointer.dispatchEvent(new KeyboardEvent('keydown', {
      view: window,
      bubbles: true,
      cancelable: true,
      key: 'ArrowRight',
    }));
  });

  QUnit.test('slider with 2 pointers should send change event with value2 = 60', (assert) => {

    const done = assert.async();

    const $slider = document.querySelector('#slider-107');
    const $pointer = $slider.shadowRoot.querySelector('.pointer');

    $slider.addEventListener('change', (evt) => {
      const value2 = Math.round(evt.detail.value2);
      assert.equal(value2, 60);
      done();
    });

    $pointer.dispatchEvent(new KeyboardEvent('keydown', {
      view: window,
      bubbles: true,
      cancelable: true,
      key: 'ArrowRight',
    }));
  });

  QUnit.test('slider with 3 pointers should send change event with value3 = 30', (assert) => {

    const done = assert.async();

    const $slider = document.querySelector('#slider-2');
    const $pointer = $slider.shadowRoot.querySelector('.pointer');

    $slider.addEventListener('change', (evt) => {
      const value3 = Math.round(evt.detail.value3);
      assert.equal(value3, 30);
      done();
    });

    $pointer.dispatchEvent(new KeyboardEvent('keydown', {
      view: window,
      bubbles: true,
      cancelable: true,
      key: 'ArrowRight',
    }));
  });

  QUnit.test('slider should send onMouseDown event', (assert) => {

    const done = assert.async();

    const $slider = document.querySelector('#slider-1');
    const $pointer = $slider.shadowRoot.querySelector('.pointer');

    $slider.addEventListener('onMouseDown', (evt) => {
      assert.equal(evt.detail.nativeEvent.clientX, 10);
      done();
    });

    $pointer.dispatchEvent(new MouseEvent('mousedown', {
      view: window,
      bubbles: true,
      cancelable: true,
      clientX: 10,
    }));
  });

  QUnit.test('slider should send onMouseUp event', (assert) => {

    const done = assert.async();

    const $slider = document.querySelector('#slider-1');
    const $pointer = $slider.shadowRoot.querySelector('.pointer');

    $slider.addEventListener('onMouseUp', (evt) => {
      assert.equal(evt.detail.nativeEvent.clientX, 10);
      done();
    });

    $pointer.dispatchEvent(new MouseEvent('mouseup', {
      view: window,
      bubbles: true,
      cancelable: true,
      clientX: 10,
    }));
  });

  QUnit.test('slider should send onPointerClicked event', (assert) => {

    const done = assert.async();

    const $slider = document.querySelector('#slider-1');
    const $pointer = $slider.shadowRoot.querySelector('.pointer');

    $slider.addEventListener('onPointerClicked', (evt) => {
      assert.ok(evt.detail.$pointer);
      done();
    });

    $pointer.dispatchEvent(new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
    }));
  });

  QUnit.test('slider should send onKeyDownEvent event', (assert) => {

    const done = assert.async();

    const $slider = document.querySelector('#slider-1');
    const $pointer = $slider.shadowRoot.querySelector('.pointer');

    $slider.addEventListener('onKeyDown', (evt) => {
      assert.equal(evt.detail.nativeEvent.key, 'ArrowLeft');
      done();
    });

    $pointer.dispatchEvent(new KeyboardEvent('keydown', {
      view: window,
      bubbles: true,
      cancelable: true,
      key: 'ArrowLeft',
    }));
  });

});
