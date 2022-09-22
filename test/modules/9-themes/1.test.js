QUnit.module('Themes', (hooks) => {
  initFixtures(hooks, `
     <toolcool-range-slider id="slider-1"></toolcool-range-slider>
     <toolcool-range-slider pointer-radius="5px" id="slider-22"></toolcool-range-slider>
     <toolcool-range-slider theme="fake" id="slider-29"></toolcool-range-slider>
  `);

  QUnit.test('by default theme should be undefined', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.theme, undefined);
  });

  QUnit.test('provided theme', (assert) => {
    const $slider = document.querySelector('#slider-29');
    assert.equal($slider.theme, 'fake');
  });

  QUnit.test('change theme via api', (assert) => {
    const $slider = document.querySelector('#slider-22');
    $slider.theme = 'fake-1';
    assert.equal($slider.theme, 'fake-1');
  });

  QUnit.test('change theme via attribute', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-1');
    $slider.setAttribute('theme', 'fake-2')

    window.setTimeout(() => {
      assert.equal($slider.theme, 'fake-2');
      done();
    }, 1);
  });
});
