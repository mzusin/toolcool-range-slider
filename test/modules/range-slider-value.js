
QUnit.module('Range Slider Value', () => {

    QUnit.test('default value should be 0', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.value, '0');
    });

    QUnit.test('if min = 50 ---> default value should be 50', (assert) => {
        const $slider = document.querySelector('#slider-7');
        assert.equal($slider.value, '50');
    });

    QUnit.test('if min = -50 ---> default value should be -50', (assert) => {
        const $slider = document.querySelector('#slider-8');
        assert.equal($slider.value, '-50');
    });

    QUnit.test('if min = 150 ---> default value should be 150', (assert) => {
        const $slider = document.querySelector('#slider-9');
        assert.equal($slider.value, '150');
    });

    QUnit.test('provided value should be 50', (assert) => {
        const $slider = document.querySelector('#slider-2');
        assert.equal($slider.value, '50');
    });

    QUnit.test('provided value should be 100', (assert) => {
        const $slider = document.querySelector('#slider-6');
        assert.equal($slider.value, '100');
    });

    QUnit.test('if provided value is string it should be 0', (assert) => {
        const $slider = document.querySelector('#slider-3');
        assert.equal($slider.value, '0');
    });

    QUnit.test('if provided value is negative it should be 0', (assert) => {
        const $slider = document.querySelector('#slider-4');
        assert.equal($slider.value, '0');
    });

    QUnit.test('if provided value > 100 it should be = 100', (assert) => {
        const $slider = document.querySelector('#slider-5');
        assert.equal($slider.value, '100');
    });

    QUnit.test('change value via API to 30', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.value = 30;
        assert.equal($slider.value, '30');
    });

    QUnit.test('change value via attribute to 41.5', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.setAttribute('value', 41.5);
        assert.equal($slider.value, '41.5');
    });

    QUnit.test('by default pointer left should be 0%', (assert) => {
        const $slider = document.querySelector('#slider-1');
        const $pointer = $slider.shadowRoot.querySelector('.pointer');
        assert.equal($pointer.style.left, '0%');
    });

    QUnit.test('provided value 50 ---> pointer left should be 50%', (assert) => {
        const $slider = document.querySelector('#slider-2');
        const $pointer = $slider.shadowRoot.querySelector('.pointer');
        assert.equal($pointer.style.left, '50%');
    });

    QUnit.test('provided value should be 100 ---> pointer left should be 100%', (assert) => {
        const $slider = document.querySelector('#slider-6');
        const $pointer = $slider.shadowRoot.querySelector('.pointer');
        assert.equal($pointer.style.left, '100%');
    });

    QUnit.test('if provided value is string ---> pointer left should be 0%', (assert) => {
        const $slider = document.querySelector('#slider-3');
        const $pointer = $slider.shadowRoot.querySelector('.pointer');
        assert.equal($pointer.style.left, '0%');
    });

    QUnit.test('if provided value is negative --> pointer left should be 0%', (assert) => {
        const $slider = document.querySelector('#slider-4');
        const $pointer = $slider.shadowRoot.querySelector('.pointer');
        assert.equal($pointer.style.left, '0%');
    });

    QUnit.test('if provided value > 100  ---> pointer left should be 100%', (assert) => {
        const $slider = document.querySelector('#slider-5');
        const $pointer = $slider.shadowRoot.querySelector('.pointer');
        assert.equal($pointer.style.left, '100%');
    });

    QUnit.test('change value via API to 30 ---> pointer left should be 30%', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.value = 30;
        const $pointer = $slider.shadowRoot.querySelector('.pointer');
        assert.equal($pointer.style.left, '30%');
    });

    QUnit.test('change value via attribute to 41.5 ---> pointer left should be 41.5%', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.setAttribute('value', 41.5);
        const $pointer = $slider.shadowRoot.querySelector('.pointer');
        assert.equal($pointer.style.left, '41.5%');
    });

    // <toolcool-range-slider min="50" max="100" id="slider-12"></toolcool-range-slider>
    QUnit.test('min="50" max="100" ---> value should be 50', (assert) => {
        const $slider = document.querySelector('#slider-12');
        assert.equal($slider.value, '50');
    });
    
    QUnit.test('min should be 50', (assert) => {
        const $slider = document.querySelector('#slider-12');
        assert.equal($slider.min, '50');
    });

    QUnit.test('max should be 100', (assert) => {
        const $slider = document.querySelector('#slider-12');
        assert.equal($slider.max, '100');
    });

    QUnit.test('if min = -50, max = 50, and value = 0 ---> pointer position should be 50%', (assert) => {
        const $slider = document.querySelector('#slider-15');
        const $pointer = $slider.shadowRoot.querySelector('.pointer');
        assert.equal($pointer.style.left, '50%');
    });
});