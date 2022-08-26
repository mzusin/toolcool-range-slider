
QUnit.module('Range Slider Data', () => {

    QUnit.test('default data should be undefined', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.data, undefined);
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
        assert.deepEqual($slider.value, 1);
    });

});
