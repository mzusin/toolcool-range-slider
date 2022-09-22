QUnit.module('Data', (hooks) => {
  initFixtures(hooks, `
      <toolcool-range-slider id="slider-1"></toolcool-range-slider>
      <toolcool-range-slider data="red, green, blue, yellow, silver, gold" id="slider-108" value1="green" value2="gold"></toolcool-range-slider>
      <toolcool-range-slider data="1" id="slider-59"></toolcool-range-slider>
      <toolcool-range-slider data="1, 2" id="slider-60"></toolcool-range-slider>
      <toolcool-range-slider data="a, b" id="slider-61"></toolcool-range-slider>
      <toolcool-range-slider data="a, 1, b" id="slider-62"></toolcool-range-slider>
      <toolcool-range-slider data="-1, -2, -3" id="slider-63"></toolcool-range-slider>
      <toolcool-range-slider data="а, б, в" id="slider-64"></toolcool-range-slider>
      <toolcool-range-slider data="" id="slider-65"></toolcool-range-slider>
      <toolcool-range-slider data=" " id="slider-66"></toolcool-range-slider>
      <toolcool-range-slider data="a, b, c" id="slider-67"></toolcool-range-slider>
      <toolcool-range-slider data="sky, blue" id="slider-68"></toolcool-range-slider>
      <toolcool-range-slider data="0, 1, 2, 3, 4, 5" id="slider-69"></toolcool-range-slider>
      <toolcool-range-slider data="-1, -2" id="slider-70"></toolcool-range-slider>
      <toolcool-range-slider data="1, 2, 3" id="slider-71"></toolcool-range-slider>
      <toolcool-range-slider id="slider-74" value="50" data="0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100"></toolcool-range-slider>
  `);

  QUnit.test('default data should be undefined', (assert) => {
    const $slider = document.querySelector('#slider-1');
    assert.equal($slider.data, undefined);
  });

  QUnit.test('when data array is empty it should be undefined', (assert) => {
    const $slider = document.querySelector('#slider-65');
    assert.deepEqual($slider.data, undefined);
  });

  QUnit.test('when data array contains only spaces it should be undefined', (assert) => {
    const $slider = document.querySelector('#slider-66');
    assert.deepEqual($slider.data, undefined);
  });

  QUnit.test('data = "1"', (assert) => {
    const $slider = document.querySelector('#slider-59');
    assert.deepEqual($slider.data, [1]);
  });

  QUnit.test('data = "1, 2"', (assert) => {
    const $slider = document.querySelector('#slider-60');
    assert.deepEqual($slider.data, [1, 2]);
  });

  QUnit.test('data = "a, b"', (assert) => {
    const $slider = document.querySelector('#slider-61');
    assert.deepEqual($slider.data, ['a', 'b']);
  });

  QUnit.test('data = "a, 1, b"', (assert) => {
    const $slider = document.querySelector('#slider-62');
    assert.deepEqual($slider.data, ['a', '1', 'b']);
  });

  QUnit.test('data = "-1, -2, -3"', (assert) => {
    const $slider = document.querySelector('#slider-63');
    assert.deepEqual($slider.data, [-1, -2, -3]);
  });

  QUnit.test('change data value via api to list of numbers', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.data = [10, 20, 30];
    assert.deepEqual($slider.data, [10, 20, 30]);
  });

  QUnit.test('change data value via api to list of string', (assert) => {
    const $slider = document.querySelector('#slider-1');
    $slider.data = ['a', 'b', 'c'];
    assert.deepEqual($slider.data, ['a', 'b', 'c']);
  });

  QUnit.test('change data value via attribute to list of numbers', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-1');
    $slider.setAttribute('data', '10, 20, 30');

    window.setTimeout(() => {
      assert.deepEqual($slider.data, [10, 20, 30]);
      done();
    }, 10);
  });

  QUnit.test('change data value via attribute to list of string', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-1');
    $slider.setAttribute('data', 'aaa, bbb');

    window.setTimeout(() => {
      assert.deepEqual($slider.data, ['aaa', 'bbb']);
      done();
    }, 10);
  });

  QUnit.test('non-english letters', (assert) => {
    const $slider = document.querySelector('#slider-64');
    assert.deepEqual($slider.data, ['а', 'б', 'в']);
  });

  QUnit.test('when data="1", the default value is 1', (assert) => {
    const $slider = document.querySelector('#slider-59');
    assert.equal($slider.value, 1);
  });

  QUnit.test('when data="a, b", the default value is a', (assert) => {
    const $slider = document.querySelector('#slider-67');
    assert.equal($slider.value, 'a');
  });

  QUnit.test('when data="sky, blue", the default value is sky', (assert) => {
    const $slider = document.querySelector('#slider-68');
    assert.equal($slider.value, 'sky');
  });

  QUnit.test('when data="0, 1, 2, 3, 4, 5", the default value is 0', (assert) => {
    const $slider = document.querySelector('#slider-69');
    assert.equal($slider.value, 0);
  });

  QUnit.test('when data="-1, -2", the default value is -1', (assert) => {
    const $slider = document.querySelector('#slider-70');
    assert.equal($slider.value, -1);
  });

  QUnit.test('when data="1, 2, 3" ---> change value to 2 (number)', (assert) => {
    const $slider = document.querySelector('#slider-71');
    $slider.value = 2;
    assert.equal($slider.value, 2);
  });

  QUnit.test('when data="1, 2, 3" ---> change value to 2 (string)', (assert) => {
    const $slider = document.querySelector('#slider-71');
    $slider.value = '2';
    assert.equal($slider.value, 2);
  });

  QUnit.test('when data="a, b, c" ---> change value to c', (assert) => {
    const $slider = document.querySelector('#slider-67');
    $slider.value = 'c';
    assert.equal($slider.value, 'c');
  });

  QUnit.test('when data="a, b, c" ---> change value to non existing item', (assert) => {
    const $slider = document.querySelector('#slider-67');
    $slider.value = 'k';
    assert.equal($slider.value, 'a');
  });

  QUnit.test('when data="1, 2, 3" ---> change value to non existing item', (assert) => {
    const $slider = document.querySelector('#slider-71');
    $slider.value = 100;
    assert.equal($slider.value, 1);
  });

  QUnit.test('when data="1, 2, 3" ---> change value via attribute to 2', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-71');
    $slider.setAttribute('value', '2');

    window.setTimeout(() => {
      assert.equal($slider.value, 2);
      done();
    }, 10);
  });

  QUnit.test('when data="a, b, c" ---> change value via attribute to c', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-67');
    $slider.setAttribute('value', 'c');

    window.setTimeout(() => {
      assert.equal($slider.value, 'c');
      done();
    }, 10);
  });

  QUnit.test('when data="sky, blue" ---> change value via attribute to blue', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-68');
    $slider.setAttribute('value', 'blue');

    window.setTimeout(() => {
      assert.equal($slider.value, 'blue');
      done();
    }, 10);
  });

  QUnit.test('when data="a, b, c" ---> change value via attribute to non existing item', (assert) => {
    const $slider = document.querySelector('#slider-67');
    $slider.setAttribute('value', 'k');
    assert.equal($slider.value, 'a');
  });

  QUnit.test('when data="1, 2, 3" ---> change value via attribute to non existing item', (assert) => {
    const $slider = document.querySelector('#slider-71');
    $slider.setAttribute('value', '100');
    assert.equal($slider.value, 1);
  });

  QUnit.test('when data="1, 2, 3" ---> min should be 1', (assert) => {
    const $slider = document.querySelector('#slider-71');
    assert.equal($slider.min, 1);
  });

  QUnit.test('when data="1, 2, 3" ---> max should be 3', (assert) => {
    const $slider = document.querySelector('#slider-71');
    assert.equal($slider.max, 3);
  });

  QUnit.test('when data="0, 1, 2, 3, 4, 5" ---> min should be 0', (assert) => {
    const $slider = document.querySelector('#slider-69');
    assert.equal($slider.min, 0);
  });

  QUnit.test('when data="sky, blue" ---> min should be sky', (assert) => {
    const $slider = document.querySelector('#slider-68');
    assert.equal($slider.min, 'sky');
  });

  QUnit.test('when data="0, 1, 2, 3, 4, 5" ---> max should be 5', (assert) => {
    const $slider = document.querySelector('#slider-69');
    assert.equal($slider.max, 5);
  });

  QUnit.test('when data="sky, blue" ---> max should be blue', (assert) => {
    const $slider = document.querySelector('#slider-68');
    assert.equal($slider.max, 'blue');
  });

  QUnit.test('when data="0, 1, 2, 3, 4, 5" ---> try to change max to 4 (via API)', (assert) => {
    const $slider = document.querySelector('#slider-69');
    $slider.max = 4;
    assert.equal($slider.max, 4);
  });

  QUnit.test('when data="0, 1, 2, 3, 4, 5" ---> try to change min to 2 (via API)', (assert) => {
    const $slider = document.querySelector('#slider-69');
    $slider.min = 2;
    assert.equal($slider.min, 2);
  });

  QUnit.test('when data="0, 1, 2, 3, 4, 5" ---> try to change max to 4 (via attribute)', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-69');
    $slider.setAttribute('max', '4');

    window.setTimeout(() => {
      assert.equal($slider.max, 4);
      done();
    }, 10);
  });

  QUnit.test('when data="0, 1, 2, 3, 4, 5" ---> try to change min to 2 (via attribute)', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-69');
    $slider.setAttribute('min', '2');

    window.setTimeout(() => {
      assert.equal($slider.min, 2);
      done();
    }, 10);
  });

  QUnit.test('when data="0, 1, 2, 3, 4, 5" ---> change value to 3 via API', (assert) => {
    const $slider = document.querySelector('#slider-69');
    $slider.value = 3;
    assert.equal($slider.value, 3);
  });

  QUnit.test('when data="0, 1, 2, 3, 4, 5" ---> change value to 3 via attributes', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-69');
    $slider.setAttribute('value', '3');

    window.setTimeout(() => {
      assert.equal($slider.value, 3);
      done();
    }, 10);
  });

  // ------

  QUnit.test('when data="sky, blue" ---> change value to "blue" via API.', (assert) => {
    const $slider = document.querySelector('#slider-68');
    $slider.value = 'blue';
    assert.equal($slider.value, 'blue');
  });

  QUnit.test('when data="sky, blue" ---> change value to "blue" via attribute.', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-68');
    $slider.setAttribute('value', 'blue');

    window.setTimeout(() => {
      assert.equal($slider.value, 'blue');
      done();
    }, 10);
  });

  QUnit.test('data="0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100", min should be 0', (assert) => {
    const $slider = document.querySelector('#slider-74');
    assert.equal($slider.min, 0);
  });

  // ---

  // <toolcool-range-slider data="red, green, blue, yellow, silver, gold" id="slider-108" value1="green" value2="gold"></toolcool-range-slider>
  QUnit.test('2 pointers, when data="red, green, blue, yellow, silver, gold" ---> value = green', (assert) => {
    const $slider = document.querySelector('#slider-108');
    assert.equal($slider.value, 'green');
  });

  QUnit.test('2 pointers, when data="red, green, blue, yellow, silver, gold" ---> value1 = green', (assert) => {
    const $slider = document.querySelector('#slider-108');
    assert.equal($slider.value1, 'green');
  });

  QUnit.test('2 pointers, when data="red, green, blue, yellow, silver, gold" ---> value2 = gold', (assert) => {
    const $slider = document.querySelector('#slider-108');
    assert.equal($slider.value2, 'gold');
  });

  QUnit.test('2 pointers, when data="red, green, blue, yellow, silver, gold" ---> change value1 to "red" via API.', (assert) => {
    const $slider = document.querySelector('#slider-108');
    $slider.value = 'red';
    assert.equal($slider.value, 'red');
  });

  QUnit.test('2 pointers, when data="red, green, blue, yellow, silver, gold" ---> change value2 to "blue" via API.', (assert) => {
    const $slider = document.querySelector('#slider-108');
    $slider.value2 = 'blue';
    assert.equal($slider.value2, 'blue');
  });

  QUnit.test('2 pointers, when data="red, green, blue, yellow, silver, gold" ---> change value1 to "red" via attribute.', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-108');
    $slider.setAttribute('value', 'red');

    window.setTimeout(() => {
      assert.equal($slider.value, 'red');
      done();
    }, 10);
  });

  QUnit.test('2 pointers, when data="red, green, blue, yellow, silver, gold" ---> change value2 to "blue" via attribute.', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-108');
    $slider.setAttribute('value2', 'blue');

    window.setTimeout(() => {
      assert.equal($slider.value2, 'blue');
      done();
    }, 10);
  });

});
