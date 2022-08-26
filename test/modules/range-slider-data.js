
QUnit.module('Range Slider Data', () => {

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
        const $slider = document.querySelector('#slider-1');
        $slider.setAttribute('data', '10, 20, 30');
        assert.deepEqual($slider.data, [10, 20, 30]);
    });

    QUnit.test('change data value via attribute to list of string', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.setAttribute('data', 'aaa, bbb');
        assert.deepEqual($slider.data, ['aaa', 'bbb']);
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
        const $slider = document.querySelector('#slider-71');
        $slider.setAttribute('value', '2');
        assert.equal($slider.value, 2);
    });

    QUnit.test('when data="a, b, c" ---> change value via attribute to c', (assert) => {
        const $slider = document.querySelector('#slider-67');
        $slider.setAttribute('value', 'c');
        assert.equal($slider.value, 'c');
    });

    QUnit.test('when data="sky, blue" ---> change value via attribute to blue', (assert) => {
        const $slider = document.querySelector('#slider-68');
        $slider.setAttribute('value', 'blue');
        assert.equal($slider.value, 'blue');
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

    QUnit.test('when data="0, 1, 2, 3, 4, 5" ---> min should be 0', (assert) => {
        const $slider = document.querySelector('#slider-69');
        assert.equal($slider.min, 0);
    });

    QUnit.test('when data="sky, blue" ---> min should be sky', (assert) => {
        const $slider = document.querySelector('#slider-68');
        assert.equal($slider.min, 'sky');
    });

});
