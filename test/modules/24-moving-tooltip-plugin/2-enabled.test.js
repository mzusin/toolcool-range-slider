QUnit.module('Moving Tooltip Plugin: enabled API', (hooks) => {
  initFixtures(hooks, `
      <tc-range-slider id="slider-1" moving-tooltip="true"></tc-range-slider>
      <tc-range-slider id="slider-2" moving-tooltip="false"></tc-range-slider>
      <tc-range-slider id="slider-3"></tc-range-slider>
  `);

  QUnit.test('movingTooltip property should be true', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.deepEqual($slider.movingTooltip, true);
  });

  QUnit.test('by default movingTooltip property should be false', (assert) => {
    const $slider = document.querySelector('#slider-3');
    assert.deepEqual($slider.movingTooltip, false);
  });

  QUnit.test('change movingTooltip from true to false', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.movingTooltip = false;
    assert.deepEqual($slider.movingTooltip, false);
  });

  QUnit.test('change movingTooltip from true to false ---> first tooltip should not present', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.movingTooltip = false;
    const $tooltip = $slider.shadowRoot.querySelector('.tooltip-1');
    assert.deepEqual($tooltip, null);
  });

  QUnit.test('change movingTooltip from false to true ---> first tooltip should present', (assert) => {
    const $slider = document.querySelector('#slider-2');
    $slider.movingTooltip = true;
    const $tooltip = $slider.shadowRoot.querySelector('.tooltip-1');
    assert.ok($tooltip);
  });

  QUnit.test('change movingTooltip from true to false ---> tooltips container should not present', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.movingTooltip = false;
    const $tooltips = $slider.shadowRoot.querySelector('.tooltips');
    assert.deepEqual($tooltips, null);
  });

  QUnit.test('change movingTooltip from false to true ---> tooltips container should present', (assert) => {
    const $slider = document.querySelector('#slider-2');
    $slider.movingTooltip = true;
    const $tooltips = $slider.shadowRoot.querySelector('.tooltips');
    assert.ok($tooltips);
  });
});
