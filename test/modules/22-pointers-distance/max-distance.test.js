QUnit.module('Pointers Min Distance', (hooks) => {
  initFixtures(hooks, `
      <toolcool-range-slider id="slider-1"></toolcool-range-slider>
      <toolcool-range-slider id="slider-2" value="50" min="1" max="99"></toolcool-range-slider>
      <toolcool-range-slider id="slider-118" value1="50" value2="55" min="-100" max="200" pointers-max-distance="1"></toolcool-range-slider>
      <toolcool-range-slider id="slider-120" value1="50" value2="55" min="-100" max="200" pointers-max-distance="test"></toolcool-range-slider><toolcool-range-slider id="slider-122" value1="50" value2="60" pointers-max-distance="50"></toolcool-range-slider>
      <toolcool-range-slider id="slider-123" value1="40" value2="50" pointers-max-distance="10"></toolcool-range-slider>
      <toolcool-range-slider id="slider-124" data="a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z" value1="d" value2="s" pointers-min-distance="1"></toolcool-range-slider>
      <toolcool-range-slider id="slider-125" data="a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z" value1="i" value2="j" pointers-max-distance="2"></toolcool-range-slider>
  `);

  QUnit.test('default pointers max distance value should be Infinity', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.pointersMaxDistance, Infinity);
  });

  QUnit.test('provided pointers max distance value should be 1', (assert) => {
    const $slider = document.querySelector('#slider-118');
    assert.equal($slider.pointersMaxDistance, 1);
  });

  QUnit.test('if provided pointers max distance value <0 ---> it should be Infinity', (assert) => {
    const $slider = document.querySelector('#slider-120');
    assert.equal($slider.pointersMaxDistance, Infinity);
  });

  QUnit.test('change pointers max distance value via API to 2', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.pointersMaxDistance = 2;
    assert.equal($slider.pointersMaxDistance, 2);
  });

  QUnit.test('change pointers max distance value via attribute to 10', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-1');
    $slider.setAttribute('pointers-max-distance', '10');

    window.setTimeout(() => {
      assert.equal($slider.pointersMaxDistance, 10);
      done();
    }, 1);
  });

  QUnit.test('change pointers max distance value via API to -1 ---> it should be Infinity', (assert) => {
    const $slider = document.querySelector('#slider-118');
    $slider.pointersMaxDistance = -1;
    assert.equal($slider.pointersMaxDistance, Infinity);
  });

  QUnit.test('change pointers max distance value via attribute to 5', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-118');
    $slider.setAttribute('pointers-max-distance', '5');

    window.setTimeout(() => {
      assert.equal($slider.pointersMaxDistance, 5);
      done();
    }, 1);
  });

  // <toolcool-range-slider id="slider-122" value1="50" value2="60" pointers-max-distance="50"></toolcool-range-slider>
  QUnit.test('max distance = 50, value1=50, value2=60 ---> change value1 to be 0, it should be 10', (assert) => {
    const $slider = document.querySelector('#slider-122');
    $slider.value1 = 0;
    assert.equal($slider.value1, 10);
  });

  // <toolcool-range-slider id="slider-123" value1="40" value2="50" pointers-max-distance="10"></toolcool-range-slider>
  QUnit.test('max distance = 50, value1=40, value2=50 ---> change value2 to be 90, it still should be 50', (assert) => {
    const $slider = document.querySelector('#slider-123');
    $slider.value2 = 90;
    assert.equal($slider.value2, 50);
  });

  //  <toolcool-range-slider id="slider-124" data="a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z" value1="d" value2="s" pointers-min-distance="1" ></toolcool-range-slider>

  QUnit.test('string data, min distance = 1 change value1 to s ---> it should be r', (assert) => {
    const $slider = document.querySelector('#slider-124');
    $slider.value1 = 's';
    assert.equal($slider.value1, 'r');
  });

  QUnit.test('string data, min distance = 1 = 10, change value2 to d ---> it should be e', (assert) => {
    const $slider = document.querySelector('#slider-124');
    $slider.value2 = 'd';
    assert.equal($slider.value2, 'e');
  });

  //  <toolcool-range-slider id="slider-125" data="a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z" value1="i" value2="j" pointers-max-distance="2"></toolcool-range-slider>
  QUnit.test('string data, max distance = 2 change value1 to a ---> it should be h', (assert) => {
    const $slider = document.querySelector('#slider-125');
    $slider.value1 = 'a';
    assert.equal($slider.value1, 'h');
  });

  // <toolcool-range-slider id="slider-125" data="a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z" value1="i" value2="j" pointers-max-distance="2"></toolcool-range-slider>
  QUnit.test('string data, max distance = 2 change value2 to z ---> it should be k', (assert) => {
    const $slider = document.querySelector('#slider-125');
    $slider.value2 = 'z';
    assert.equal($slider.value2, 'k');
  });

  QUnit.test('set pointersMinDistance to a string value ---> it should be 0', (assert) => {
    const $slider = document.querySelector('#slider-2');
    $slider.pointersMinDistance = 'test';
    assert.strictEqual($slider.pointersMinDistance, 0);
  });

  QUnit.test('set pointersMaxDistance to a string value ---> it should be Infinity', (assert) => {
    const $slider = document.querySelector('#slider-2');
    $slider.pointersMaxDistance = 'test';
    assert.strictEqual($slider.pointersMaxDistance, Infinity);
  });
});
