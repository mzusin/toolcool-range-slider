QUnit.module('Pointers Max Distance', (hooks) => {
  initFixtures(hooks, `
      <toolcool-range-slider id="slider-1"></toolcool-range-slider>
      <toolcool-range-slider id="slider-115" value1="50" value2="55" min="-100" max="200" pointers-min-distance="1"></toolcool-range-slider>
      <toolcool-range-slider id="slider-117" value1="50" value2="55" min="-100" max="200" pointers-min-distance="test"></toolcool-range-slider>
      <toolcool-range-slider id="slider-121" value1="50" value2="60" pointers-min-distance="10"></toolcool-range-slider>
  `);

  QUnit.test('default pointers min distance value should be 0', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.pointersMinDistance, 0);
  });

  QUnit.test('provided pointers min distance value should be 1', (assert) => {
    const $slider = document.querySelector('#slider-115');
    assert.equal($slider.pointersMinDistance, 1);
  });

  QUnit.test('if min distance value < 0 it should be 0', (assert) => {
    const $slider = document.querySelector('#slider-117');
    assert.equal($slider.pointersMinDistance, 0);
  });

  QUnit.test('change pointers min distance value via API to 2', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.pointersMinDistance = 2;
    assert.equal($slider.pointersMinDistance, 2);
  });

  QUnit.test('change pointers min distance value via attribute to 3', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-1');
    $slider.setAttribute('pointers-min-distance', '3');

    window.setTimeout(() => {
      assert.equal($slider.pointersMinDistance, 3);
      done();
    }, 1);
  });

  QUnit.test('change pointers min distance value via API to -1 ---> it should be 0', (assert) => {
    const $slider = document.querySelector('#slider-115');
    $slider.pointersMinDistance = -1;
    assert.equal($slider.pointersMinDistance, 0);
  });

  QUnit.test('change pointers min distance value via attribute to 10', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-115');
    $slider.setAttribute('pointers-min-distance', '10');

    window.setTimeout(() => {
      assert.equal($slider.pointersMinDistance, 10);
      done();
    }, 1);
  });

  // <toolcool-range-slider id="slider-121" value1="50" value2="60" pointers-min-distance="10"></toolcool-range-slider>
  QUnit.test('min distance = 10, value1=50, value2=60 ---> change value1 to be 55, it still should be 50', (assert) => {
    const $slider = document.querySelector('#slider-121');
    $slider.value1 = 55;
    assert.equal($slider.value1, 50);
  });

  QUnit.test('min distance = 10, value1=50, value2=60 ---> change value2 to be 55, it still should be 60', (assert) => {
    const $slider = document.querySelector('#slider-121');
    $slider.value2 = 55;
    assert.equal($slider.value2, 60);
  });
});
