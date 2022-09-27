QUnit.module('Pointer Shape', (hooks) => {
  initFixtures(hooks, `
     <toolcool-range-slider id="slider-1"></toolcool-range-slider>
     <toolcool-range-slider pointer-shape="fake" id="slider-33"></toolcool-range-slider>
  `);

  QUnit.test('by default pointer shape should be undefined', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.pointerShape, undefined);
  });

  QUnit.test('defined pointer shape', (assert) => {
    const $slider = document.querySelector('#slider-33');
    assert.equal($slider.pointerShape, 'fake');
  });

  QUnit.test('add pointer shape via set', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.pointerShape = 'fake1';
    assert.equal($slider.pointerShape, 'fake1');
  });

  QUnit.test('add pointer shape via attribute', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-1');
    $slider.setAttribute('pointer-shape', 'fake-1');

    window.setTimeout(() => {
      assert.equal($slider.pointerShape, 'fake-1');
      done();
    }, 10);
  });

  QUnit.test('fake pointerShape ---> class should be added', (assert) => {
    const $slider = document.querySelector('#slider-33');
    const $inner = $slider.shadowRoot.querySelector('.range-slider');
    assert.equal($inner.classList.contains('shape-fake'), true);
  });

  QUnit.test('add pointer shape via set ---> class should be added', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.pointerShape = 'fake1';
    const $inner = $slider.shadowRoot.querySelector('.range-slider');
    assert.equal($inner.classList.contains('shape-fake1'), true);
  });

  QUnit.test('add pointer shape via attribute ---> class should be added', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-1');
    $slider.setAttribute('pointer-shape', 'fake-2');

    window.setTimeout(() => {
      const $inner = $slider.shadowRoot.querySelector('.range-slider');
      assert.equal($inner.classList.contains('shape-fake-2'), true);
      done();
    }, 10);

  });
});
