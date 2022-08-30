
QUnit.module('Range Slider Pointer Shape', () => {

    QUnit.test('by default pointer shape should be undefined', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.pointerShape, undefined);
    });

    QUnit.test('defined pointer shape', (assert) => {
        const $slider = document.querySelector('#slider-33');
        assert.equal($slider.pointerShape, 'fake');
    });

    QUnit.test('add pointer shape via set', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.pointerShape = 'fake1';
        assert.equal($slider.pointerShape, 'fake1');
    });

    QUnit.test('add pointer shape via attribute', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.setAttribute('pointer-shape', 'fake-1');
        assert.equal($slider.pointerShape, 'fake-1');
    });

    QUnit.test('fake pointerShape ---> class should be added', (assert) => {
        const $slider = document.querySelector('#slider-33');
        const $inner = $slider.shadowRoot.querySelector('.range-slider');
        assert.equal($inner.classList.contains('shape-fake'), true);
    });

    QUnit.test('add pointer shape via set ---> class should be added', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.pointerShape = 'fake1';
        const $inner = $slider.shadowRoot.querySelector('.range-slider');
        assert.equal($inner.classList.contains('shape-fake1'), true);
    });

    QUnit.test('add pointer shape via attribute ---> class should be added', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.setAttribute('pointer-shape', 'fake-2');
        const $inner = $slider.shadowRoot.querySelector('.range-slider');
        assert.equal($inner.classList.contains('shape-fake-2'), true);
    });

});