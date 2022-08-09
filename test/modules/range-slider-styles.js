
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
        assert.equal($pointerShape.style.borderRadius, '');
    });

    QUnit.test('provided pointer radius style should be 5px', (assert) => {
        const $slider = document.querySelector('#slider-22');
        const $pointerShape = $slider.shadowRoot.querySelector('.pointer-shape');
        assert.equal($pointerShape.style.borderRadius, '5px');
    });

    QUnit.test('pointer radius changed to 30rem ---> style should change', (assert) => {
        const $slider = document.querySelector('#slider-22');
        $slider.pointerRadius = '3rem';
        const $pointerShape = $slider.shadowRoot.querySelector('.pointer-shape');
        assert.equal($pointerShape.style.borderRadius, '3rem');
    });
});
