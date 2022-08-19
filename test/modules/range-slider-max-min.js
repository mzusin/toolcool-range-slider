
QUnit.module('Range Slider Max & Min', () => {

    QUnit.test('default min should be 0', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.min, '0');
    });

    QUnit.test('default max should be 100', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.max, '100');
    });

    QUnit.test('provided min should be 1', (assert) => {
        const $slider = document.querySelector('#slider-2');
        assert.equal($slider.min, '1');
    });

    QUnit.test('provided max should be 99', (assert) => {
        const $slider = document.querySelector('#slider-2');
        assert.equal($slider.max, '99');
    });

    QUnit.test('if provided value is string it should be 0', (assert) => {
        const $slider = document.querySelector('#slider-3');
        assert.equal($slider.value, '0');
    });

    QUnit.test('change min via API to 2', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.min = 2;
        assert.equal($slider.min, '2');
    });

    QUnit.test('change max via API to 98', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.max = 98;
        assert.equal($slider.max, '98');
    });

    QUnit.test('change value via attribute to 3', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.setAttribute('min', 3);
        assert.equal($slider.min, 3);
    });

    QUnit.test('change value via attribute to 97', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.setAttribute('max', 97);
        assert.equal($slider.max, 97);
    });

    QUnit.test('if min defined & max not defined: max will be 100', (assert) => {
        const $slider = document.querySelector('#slider-7');
        $slider.setAttribute('max', 100);
        assert.equal($slider.max, 100);
    });

    QUnit.test('if min defined & max not defined and min > 100: max will be min + 100', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.setAttribute('max', 97);
        assert.equal($slider.max, 97);
    });

    QUnit.test('if provided value > max ---> value = max', (assert) => {
        const $slider = document.querySelector('#slider-10');
        assert.equal($slider.value, 20);
    });

    QUnit.test('if provided value < min ---> value = min', (assert) => {
        const $slider = document.querySelector('#slider-11');
        assert.equal($slider.value, 10);
    });

    QUnit.test('min = -1000000, max = 1000000  ---> value should be 0', (assert) => {
        const $slider = document.querySelector('#slider-35');
        assert.equal($slider.value, -1000000);
    });

});

