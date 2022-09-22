QUnit.module('Storage', (hooks) => {
  initFixtures(hooks, `
     <toolcool-range-slider id="slider-1"></toolcool-range-slider>
     <toolcool-range-slider storage="local-storage" id="slider-39"></toolcool-range-slider>
     <toolcool-range-slider storage="session-storage" id="slider-40"></toolcool-range-slider>
  `);

  QUnit.test('by default storage should be undefined', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.storage, undefined);
  });

  QUnit.test('local storage', (assert) => {
    const $slider = document.querySelector('#slider-39');
    assert.equal($slider.storage, 'local-storage');
  });

  QUnit.test('session storage', (assert) => {
    const $slider = document.querySelector('#slider-40');
    assert.equal($slider.storage, 'session-storage');
  });

  QUnit.test('add session storage property via set', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.storage = 'session-storage';
    assert.equal($slider.storage, 'session-storage');
  });

  QUnit.test('add local storage property via set', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.storage = 'local-storage';
    assert.equal($slider.storage, 'local-storage');
  });

  QUnit.test('add session storage property via attribute', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-1');
    $slider.setAttribute('storage', 'session-storage');

    window.setTimeout(() => {
      assert.equal($slider.storage, 'session-storage');
      done();
    }, 10);
  });

  QUnit.test('add local storage property via attribute', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-1');
    $slider.setAttribute('storage', 'local-storage');

    window.setTimeout(() => {
      assert.equal($slider.storage, 'local-storage');
      done();
    }, 10);
  });
});
