QUnit.module('Pointer2 Shape', (hooks) => {
  initFixtures(hooks, `
     <toolcool-range-slider value1="10" value2="30" id="slider-1"></toolcool-range-slider>
     <toolcool-range-slider value1="10" value2="30" pointer2-shape="fake" id="slider-33"></toolcool-range-slider>
  `);

  QUnit.test('by default pointer2 shape should be undefined', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.pointer2Shape, undefined);
  });

  QUnit.test('defined pointer2 shape', (assert) => {
    const $slider = document.querySelector('#slider-33');
    assert.equal($slider.pointer2Shape, 'fake');
  });

  QUnit.test('add pointer2 shape via set', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.pointer2Shape = 'fake1';
    assert.equal($slider.pointer2Shape, 'fake1');
  });

  QUnit.test('add pointer2 shape via attribute', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.setAttribute('pointer2-shape', 'fake-1');
    assert.equal($slider.pointer2Shape, 'fake-1');
  });

  QUnit.test('fake pointerShape ---> class should be added', (assert) => {
    const $slider = document.querySelector('#slider-33');
    const $inner = $slider.shadowRoot.querySelector('.range-slider');
    assert.equal($inner.classList.contains('shape2-fake'), true);
  });

  QUnit.test('add pointer2 shape via set ---> class should be added', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.pointer2Shape = 'fake1';
    const $inner = $slider.shadowRoot.querySelector('.range-slider');
    assert.equal($inner.classList.contains('shape2-fake1'), true);
  });

  QUnit.test('add pointer2 shape via attribute ---> class should be added', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.setAttribute('pointer2-shape', 'fake-2');
    const $inner = $slider.shadowRoot.querySelector('.range-slider');
    assert.equal($inner.classList.contains('shape2-fake-2'), true);
  });
});
