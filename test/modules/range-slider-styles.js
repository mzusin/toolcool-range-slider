
QUnit.module('Range Slider Pointer Radius', () => {

    QUnit.test('pointer radius by default should be undefined', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.pointerRadius, undefined);
    });

    QUnit.test('provided pointer radius should be 5px', (assert) => {
        const $slider = document.querySelector('#slider-22');
        assert.equal($slider.pointerRadius, '5px');
    });

    QUnit.test('pointer radius changed to 3rem', (assert) => {
        const $slider = document.querySelector('#slider-22');
        $slider.pointerRadius = '3rem';
        assert.equal($slider.pointerRadius, '3rem');
    });

    QUnit.test('by default pointer radius style is empty', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-pointer-border-radius'), '');
    });

    QUnit.test('provided pointer radius style should be 5px', (assert) => {
        const $slider = document.querySelector('#slider-22');
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-pointer-border-radius'), '5px');
    });

    QUnit.test('pointer radius changed to 30rem ---> style should change', (assert) => {
        const $slider = document.querySelector('#slider-22');
        $slider.pointerRadius = '3rem';
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-pointer-border-radius'), '3rem');
    });
});

QUnit.module('Range Slider Panel Radius', () => {

    QUnit.test('panel radius by default should be undefined', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.sliderRadius, undefined);
    });

    QUnit.test('provided panel radius should be 5px', (assert) => {
        const $slider = document.querySelector('#slider-23');
        assert.equal($slider.sliderRadius, '5px');
    });

    QUnit.test('panel radius changed to 3rem', (assert) => {
        const $slider = document.querySelector('#slider-23');
        $slider.sliderRadius = '3rem';
        assert.equal($slider.sliderRadius, '3rem');
    });

    QUnit.test('by default panel radius style is empty', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-panel-bg-border-radius'), '');
    });

    QUnit.test('provided panel radius style should be 5px', (assert) => {
        const $slider = document.querySelector('#slider-23');
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-panel-bg-border-radius'), '5px');
    });

    QUnit.test('panel radius changed to 30rem ---> style should change', (assert) => {
        const $slider = document.querySelector('#slider-23');
        $slider.sliderRadius = '3rem';
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-panel-bg-border-radius'), '3rem');
    });
});

QUnit.module('Range Slider Panel Background Color', () => {

    QUnit.test('slider bg color by default should be undefined', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.sliderBgColor, undefined);
    });

    QUnit.test('provided slider bg color should be red', (assert) => {
        const $slider = document.querySelector('#slider-24');
        assert.equal($slider.sliderBgColor, 'red');
    });

    QUnit.test('slider bg color changed to blue', (assert) => {
        const $slider = document.querySelector('#slider-24');
        $slider.sliderBgColor = 'blue';
        assert.equal($slider.sliderBgColor, 'blue');
    });

    QUnit.test('by default slider bg color style is empty', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-panel-bg-color'), '');
    });

    QUnit.test('provided slider bg color style should be red', (assert) => {
        const $slider = document.querySelector('#slider-24');
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-panel-bg-color'), 'red');
    });

    QUnit.test('slider bg color changed to green ---> style should change', (assert) => {
        const $slider = document.querySelector('#slider-24');
        $slider.sliderBgColor = 'green';
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-panel-bg-color'), 'green');
    });
});

QUnit.module('Pointer Background Color', () => {

    QUnit.test('pointer bg color by default should be undefined', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.pointerBgColor, undefined);
    });

    QUnit.test('provided pointer bg color should be red', (assert) => {
        const $slider = document.querySelector('#slider-25');
        assert.equal($slider.pointerBgColor, 'red');
    });

    QUnit.test('pointer bg color changed to blue', (assert) => {
        const $slider = document.querySelector('#slider-25');
        $slider.pointerBgColor = 'blue';
        assert.equal($slider.pointerBgColor, 'blue');
    });

    QUnit.test('by default pointer bg color style is empty', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-pointer-bg-color'), '');
    });

    QUnit.test('provided pointer bg color style should be red', (assert) => {
        const $slider = document.querySelector('#slider-25');
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-pointer-bg-color'), 'red');
    });

    QUnit.test('pointer bg color changed to green ---> style should change', (assert) => {
        const $slider = document.querySelector('#slider-25');
        $slider.pointerBgColor = 'green';
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-pointer-bg-color'), 'green');
    });
});
