QUnit.module('Type', (hooks) => {
  initFixtures(hooks, `
     <toolcool-range-slider id="slider-1"></toolcool-range-slider>
     <toolcool-range-slider type="vertical" id="slider-28"></toolcool-range-slider>
  `);

  QUnit.test('by default type should be undefined', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.type, 'horizontal');
  });

  QUnit.test('vertical type', (assert) => {
    const $slider = document.querySelector('#slider-28');
    assert.equal($slider.type, 'vertical');
  });

  QUnit.test('add wrong type property via API ---> it should be "horizontal"', (assert) => {
    const $slider = document.querySelector('#slider-28');
    $slider.type = 'fake';
    assert.equal($slider.type, 'horizontal');
  });

  QUnit.test('add wrong type property via attribute ---> it should be "horizontal"', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.setAttribute('type', 'fake-1');
    assert.equal($slider.type, 'horizontal');
  });

  QUnit.test('vertical type ---> class should be added', (assert) => {
    const $slider = document.querySelector('#slider-28');
    const $inner = $slider.shadowRoot.querySelector('.range-slider-box');
    assert.equal($inner.classList.contains('type-vertical'), true);
  });

  QUnit.test('by default it should contain type-horizontal', (assert) => {
    const $slider = document.querySelector('#slider-1');
    const $inner = $slider.shadowRoot.querySelector('.range-slider-box');
    assert.equal($inner.classList.contains('type-horizontal'), true);
  });

  QUnit.test('add type property via attribute ---> class should be added', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-1');
    $slider.setAttribute('type', 'vertical');
    const $inner = $slider.shadowRoot.querySelector('.range-slider-box');

    window.setTimeout(() => {
      assert.equal($inner.classList.contains('type-vertical'), true);
      done();
    }, 1);
  });

});
