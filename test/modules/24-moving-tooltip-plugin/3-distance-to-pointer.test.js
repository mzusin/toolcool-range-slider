QUnit.module('Moving Tooltip Plugin: distanceToPointer API', (hooks) => {
  initFixtures(hooks, `
      <tc-range-slider id="slider-1" moving-tooltip="true"></tc-range-slider>
      <tc-range-slider id="slider-2" moving-tooltip="true" moving-tooltip-distance-to-pointer="50"></tc-range-slider>
      <tc-range-slider id="slider-3" moving-tooltip="true" moving-tooltip-distance-to-pointer="-50"></tc-range-slider>
  `);

  QUnit.test('by default distanceToPointer property should be 40', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.deepEqual($slider.distanceToPointer, 40);
  });

  QUnit.test('distanceToPointer property should be 50', (assert) => {
    const $slider = document.querySelector('#slider-2');
    assert.deepEqual($slider.distanceToPointer, 50);
  });

  QUnit.test('distanceToPointer property should be -50', (assert) => {
    const $slider = document.querySelector('#slider-3');
    assert.deepEqual($slider.distanceToPointer, -50);
  });
});
