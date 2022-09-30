QUnit.module('Moving Tooltip Plugin: Elements Creation', (hooks) => {
  initFixtures(hooks, `
      <tc-range-slider
              id="slider-1"
              
              value1="30"
              value2="50"
              value3="70"
              round="0"

              moving-tooltip="true"
              moving-tooltip-distance-to-pointer="40"
              moving-tooltip-width="35"
              moving-tooltip-height="30"
              moving-tooltip-bg="#721d82"
              moving-tooltip-text-color="#efefef"

              slider-bg="#CBD5E1"
              slider-bg-hover="#94A3B8"
              slider-bg-fill="#475569"
              slider-width="100%"></tc-range-slider>
              
      <tc-range-slider
              id="slider-2"
              
              value1="30"
              value2="50"
              value3="70"
              round="0"

              moving-tooltip="false"
              moving-tooltip-distance-to-pointer="40"
              moving-tooltip-width="35"
              moving-tooltip-height="30"
              moving-tooltip-bg="#721d82"
              moving-tooltip-text-color="#efefef"

              slider-bg="#CBD5E1"
              slider-bg-hover="#94A3B8"
              slider-bg-fill="#475569"
              slider-width="100%"></tc-range-slider>
  `);

  QUnit.test('tooltips container should be created', (assert) => {
    const $slider = document.querySelector('#slider-1');
    const $tooltips = $slider.shadowRoot.querySelector('.tooltips');
    assert.ok($tooltips);
  });

  QUnit.test('moving-tooltip="false" ---> tooltips container should not be created', (assert) => {
    const $slider = document.querySelector('#slider-2');
    const $tooltips = $slider.shadowRoot.querySelector('.tooltips');
    assert.deepEqual($tooltips, null);
  });

  QUnit.test('first tooltip should be created', (assert) => {
    const $slider = document.querySelector('#slider-1');
    const $tooltip = $slider.shadowRoot.querySelector('.tooltip-1');
    assert.ok($tooltip);
  });

  QUnit.test('moving-tooltip="false" ---> first tooltip should not be created', (assert) => {
    const $slider = document.querySelector('#slider-2');
    const $tooltip = $slider.shadowRoot.querySelector('.tooltip-1');
    assert.deepEqual($tooltip, null);
  });

  QUnit.test('second tooltip should be created', (assert) => {
    const $slider = document.querySelector('#slider-1');
    const $tooltip = $slider.shadowRoot.querySelector('.tooltip-2');
    assert.ok($tooltip);
  });

  QUnit.test('third tooltip should be created', (assert) => {
    const $slider = document.querySelector('#slider-1');
    const $tooltip = $slider.shadowRoot.querySelector('.tooltip-3');
    assert.ok($tooltip);
  });

  QUnit.test('first tooltip left style should be 30%', (assert) => {
    const $slider = document.querySelector('#slider-1');
    const $tooltip = $slider.shadowRoot.querySelector('.tooltip-1');
    assert.deepEqual($tooltip.style.left, '30%');
  });

  QUnit.test('second tooltip left style should be 30%', (assert) => {
    const $slider = document.querySelector('#slider-1');
    const $tooltip = $slider.shadowRoot.querySelector('.tooltip-2');
    assert.deepEqual($tooltip.style.left, '50%');
  });

  QUnit.test('third tooltip left style should be 70%', (assert) => {
    const $slider = document.querySelector('#slider-1');
    const $tooltip = $slider.shadowRoot.querySelector('.tooltip-3');
    assert.deepEqual($tooltip.style.left, '70%');
  });

  QUnit.test('distance to pointer: first tooltip top style should be -40px', (assert) => {
    const $slider = document.querySelector('#slider-1');
    const $tooltip = $slider.shadowRoot.querySelector('.tooltip-1');
    assert.deepEqual($tooltip.style.top, '-40px');
  });

  QUnit.test('distance to pointer: second tooltip top style should be -40px', (assert) => {
    const $slider = document.querySelector('#slider-1');
    const $tooltip = $slider.shadowRoot.querySelector('.tooltip-2');
    assert.deepEqual($tooltip.style.top, '-40px');
  });

  QUnit.test('distance to pointer: third tooltip top style should be -40px', (assert) => {
    const $slider = document.querySelector('#slider-1');
    const $tooltip = $slider.shadowRoot.querySelector('.tooltip-3');
    assert.deepEqual($tooltip.style.top, '-40px');
  });

  QUnit.test('first tooltip width style should be 35px', (assert) => {
    const $slider = document.querySelector('#slider-1');
    const $tooltip = $slider.shadowRoot.querySelector('.tooltip-1');
    assert.deepEqual($tooltip.style.width, '35px');
  });

  QUnit.test('second tooltip width style should be 35px', (assert) => {
    const $slider = document.querySelector('#slider-1');
    const $tooltip = $slider.shadowRoot.querySelector('.tooltip-2');
    assert.deepEqual($tooltip.style.width, '35px');
  });

  QUnit.test('third tooltip width style should be 35px', (assert) => {
    const $slider = document.querySelector('#slider-1');
    const $tooltip = $slider.shadowRoot.querySelector('.tooltip-3');
    assert.deepEqual($tooltip.style.width, '35px');
  });

  QUnit.test('first tooltip height style should be 30px', (assert) => {
    const $slider = document.querySelector('#slider-1');
    const $tooltip = $slider.shadowRoot.querySelector('.tooltip-1');
    assert.deepEqual($tooltip.style.height, '30px');
  });

  QUnit.test('second tooltip height style should be 30px', (assert) => {
    const $slider = document.querySelector('#slider-1');
    const $tooltip = $slider.shadowRoot.querySelector('.tooltip-2');
    assert.deepEqual($tooltip.style.height, '30px');
  });

  QUnit.test('third tooltip height style should be 30px', (assert) => {
    const $slider = document.querySelector('#slider-1');
    const $tooltip = $slider.shadowRoot.querySelector('.tooltip-3');
    assert.deepEqual($tooltip.style.height, '30px');
  });

  QUnit.test('first tooltip background style should be #721d82', (assert) => {
    const $slider = document.querySelector('#slider-1');
    const $tooltip = $slider.shadowRoot.querySelector('.tooltip-1');
    assert.deepEqual($tooltip.style.background, 'rgb(114, 29, 130)');
  });

  QUnit.test('second tooltip background style should be #721d82', (assert) => {
    const $slider = document.querySelector('#slider-1');
    const $tooltip = $slider.shadowRoot.querySelector('.tooltip-2');
    assert.deepEqual($tooltip.style.background, 'rgb(114, 29, 130)');
  });

  QUnit.test('third tooltip background style should be #721d82', (assert) => {
    const $slider = document.querySelector('#slider-1');
    const $tooltip = $slider.shadowRoot.querySelector('.tooltip-3');
    assert.deepEqual($tooltip.style.background, 'rgb(114, 29, 130)');
  });

  QUnit.test('first tooltip color style should be #efefef', (assert) => {
    const $slider = document.querySelector('#slider-1');
    const $tooltip = $slider.shadowRoot.querySelector('.tooltip-1');
    assert.deepEqual($tooltip.style.color, 'rgb(239, 239, 239)');
  });

  QUnit.test('second tooltip color style should be #efefef', (assert) => {
    const $slider = document.querySelector('#slider-1');
    const $tooltip = $slider.shadowRoot.querySelector('.tooltip-2');
    assert.deepEqual($tooltip.style.color, 'rgb(239, 239, 239)');
  });

  QUnit.test('third tooltip color style should be #efefef', (assert) => {
    const $slider = document.querySelector('#slider-1');
    const $tooltip = $slider.shadowRoot.querySelector('.tooltip-3');
    assert.deepEqual($tooltip.style.color, 'rgb(239, 239, 239)');
  });


});
