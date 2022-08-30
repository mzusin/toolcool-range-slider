
QUnit.module('Range Slider Type', () => {

    QUnit.test('by default type should be undefined', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.type, undefined);
    });

    QUnit.test('vertical type', (assert) => {
        const $slider = document.querySelector('#slider-28');
        assert.equal($slider.type, 'vertical');
    });

    QUnit.test('add type property via set', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.type = 'fake';
        assert.equal($slider.type, 'fake');
    });

    QUnit.test('add type property via attribute', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.setAttribute('type', 'fake-1');
        assert.equal($slider.type, 'fake-1');
    });

    QUnit.test('vertical type ---> class should be added', (assert) => {
        const $slider = document.querySelector('#slider-28');
        const $inner = $slider.shadowRoot.querySelector('.range-slider-box');
        assert.equal($inner.classList.contains('type-vertical'), true);
    });

    QUnit.test('add type property via set ---> class should be added', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.type = 'fake';
        const $inner = $slider.shadowRoot.querySelector('.range-slider-box');
        assert.equal($inner.classList.contains('type-fake'), true);
    });

    QUnit.test('add type property via attribute ---> class should be added', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.setAttribute('type', 'fake-1');
        const $inner = $slider.shadowRoot.querySelector('.range-slider-box');
        assert.equal($inner.classList.contains('type-fake-1'), true);
    });

});
