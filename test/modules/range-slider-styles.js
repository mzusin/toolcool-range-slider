
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
        const $pointerShape = $slider.shadowRoot.querySelector('.pointer-shape');
        assert.equal($pointerShape.style.getPropertyValue('--toolcool-range-slider-pointer-border-radius'), '');
    });

    QUnit.test('provided pointer radius style should be 5px', (assert) => {
        const $slider = document.querySelector('#slider-22');
        const $pointerShape = $slider.shadowRoot.querySelector('.pointer-shape');
        assert.equal($pointerShape.style.getPropertyValue('--toolcool-range-slider-pointer-border-radius'), '5px');
    });

    QUnit.test('pointer radius changed to 30rem ---> style should change', (assert) => {
        const $slider = document.querySelector('#slider-22');
        $slider.pointerRadius = '3rem';
        const $pointerShape = $slider.shadowRoot.querySelector('.pointer-shape');
        assert.equal($pointerShape.style.getPropertyValue('--toolcool-range-slider-pointer-border-radius'), '3rem');
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
        const $panel = $slider.shadowRoot.querySelector('.panel');
        assert.equal($panel.style.getPropertyValue('--toolcool-range-slider-panel-bg-border-radius'), '');
    });

    QUnit.test('provided panel radius style should be 5px', (assert) => {
        const $slider = document.querySelector('#slider-23');
        const $panel = $slider.shadowRoot.querySelector('.panel');
        assert.equal($panel.style.getPropertyValue('--toolcool-range-slider-panel-bg-border-radius'), '5px');
    });

    QUnit.test('panel radius changed to 30rem ---> style should change', (assert) => {
        const $slider = document.querySelector('#slider-23');
        $slider.sliderRadius = '3rem';
        const $panel = $slider.shadowRoot.querySelector('.panel');
        assert.equal($panel.style.getPropertyValue('--toolcool-range-slider-panel-bg-border-radius'), '3rem');
    });
});
