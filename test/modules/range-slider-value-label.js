
QUnit.module('Range Slider Value Label', () => {

    QUnit.test('default value label should be undefined', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.valueLabel, undefined);
    });

    QUnit.test('provided value label should be .value-1', (assert) => {
        const $slider = document.querySelector('#slider-34');
        assert.equal($slider.valueLabel, '.value-1');
    });

    QUnit.test('change value label via API to .value-2', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.valueLabel = '.value-2';
        assert.equal($slider.valueLabel, '.value-2');
    });

    QUnit.test('change value via attribute to .value-3', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.setAttribute('value-label', '.value-3');
        assert.equal($slider.valueLabel, '.value-3');
    });

    QUnit.test('provided value label is .value-1 ---> the label should contain zero', (assert) => {
        const $slider = document.querySelector('#slider-34');
        const $label = document.querySelector('.value-1');
        assert.equal($label.textContent, '0');
    });

    QUnit.test('provided value label is .value-1 and value = 50 ---> the label should contain 50', (assert) => {
        const $slider = document.querySelector('#slider-34');
        $slider.value = 50;
        const $label = document.querySelector('.value-1');
        assert.equal($label.textContent, '50');
    });

    QUnit.test('change value label via API to .value-2 ---> the label should contain 0', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.valueLabel = '.value-2';
        const $label = document.querySelector('.value-1');
        assert.equal($label.textContent, '0');
    });

    QUnit.test('change value via attribute to .value-2 ---> the label should contain 0', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.setAttribute('value-label', '.value-2');
        $slider.valueLabel = '.value-2';
        const $label = document.querySelector('.value-1');
        assert.equal($label.textContent, '0');
    });

});