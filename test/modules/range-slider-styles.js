
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

QUnit.module('Panel Background', () => {

    QUnit.test('slider bg color by default should be undefined', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.sliderBg, undefined);
    });

    QUnit.test('provided slider bg color should be red', (assert) => {
        const $slider = document.querySelector('#slider-24');
        assert.equal($slider.sliderBg, 'red');
    });

    QUnit.test('slider bg color changed to blue', (assert) => {
        const $slider = document.querySelector('#slider-24');
        $slider.sliderBg = 'blue';
        assert.equal($slider.sliderBg, 'blue');
    });

    QUnit.test('by default slider bg color style is empty', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-panel-bg'), '');
    });

    QUnit.test('provided slider bg color style should be red', (assert) => {
        const $slider = document.querySelector('#slider-24');
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-panel-bg'), 'red');
    });

    QUnit.test('slider bg color changed to green ---> style should change', (assert) => {
        const $slider = document.querySelector('#slider-24');
        $slider.sliderBg = 'green';
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-panel-bg'), 'green');
    });
});

QUnit.module('Panel Background Hover', () => {

    QUnit.test('slider bg hover color by default should be undefined', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.sliderBgHover, undefined);
    });

    QUnit.test('provided slider bg hover color should be red', (assert) => {
        const $slider = document.querySelector('#slider-24');
        assert.equal($slider.sliderBgHover, 'red');
    });

    QUnit.test('slider bg hover color changed to blue', (assert) => {
        const $slider = document.querySelector('#slider-24');
        $slider.sliderBgHover = 'blue';
        assert.equal($slider.sliderBgHover, 'blue');
    });

    QUnit.test('by default slider bg hover color style is empty', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-panel-bg-hover'), '');
    });

    QUnit.test('provided slider bg hover color style should be red', (assert) => {
        const $slider = document.querySelector('#slider-24');
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-panel-bg-hover'), 'red');
    });

    QUnit.test('slider bg hover color changed to green ---> style should change', (assert) => {
        const $slider = document.querySelector('#slider-24');
        $slider.sliderBgHover = 'green';
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-panel-bg-hover'), 'green');
    });
});

QUnit.module('Pointer Background', () => {

    QUnit.test('pointer bg color by default should be undefined', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.pointerBg, undefined);
    });

    QUnit.test('provided pointer bg color should be red', (assert) => {
        const $slider = document.querySelector('#slider-25');
        assert.equal($slider.pointerBg, 'red');
    });

    QUnit.test('pointer bg color changed to blue', (assert) => {
        const $slider = document.querySelector('#slider-25');
        $slider.pointerBg = 'blue';
        assert.equal($slider.pointerBg, 'blue');
    });

    QUnit.test('by default pointer bg color style is empty', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-pointer-bg'), '');
    });

    QUnit.test('provided pointer bg color style should be red', (assert) => {
        const $slider = document.querySelector('#slider-25');
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-pointer-bg'), 'red');
    });

    QUnit.test('pointer bg color changed to green ---> style should change', (assert) => {
        const $slider = document.querySelector('#slider-25');
        $slider.pointerBg = 'green';
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-pointer-bg'), 'green');
    });
});

QUnit.module('Pointer Background Hover', () => {

    QUnit.test('pointer bg hover color by default should be undefined', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.pointerBgHover, undefined);
    });

    QUnit.test('provided pointer bg hover color should be red', (assert) => {
        const $slider = document.querySelector('#slider-25');
        assert.equal($slider.pointerBgHover, 'red');
    });

    QUnit.test('pointer bg hover color changed to blue', (assert) => {
        const $slider = document.querySelector('#slider-25');
        $slider.pointerBgHover = 'blue';
        assert.equal($slider.pointerBgHover, 'blue');
    });

    QUnit.test('by default pointer bg hover color style is empty', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-pointer-bg-hover'), '');
    });

    QUnit.test('provided pointer bg hover color style should be red', (assert) => {
        const $slider = document.querySelector('#slider-25');
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-pointer-bg-hover'), 'red');
    });

    QUnit.test('pointer bg hover color changed to green ---> style should change', (assert) => {
        const $slider = document.querySelector('#slider-25');
        $slider.pointerBgHover = 'green';
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-pointer-bg-hover'), 'green');
    });
});