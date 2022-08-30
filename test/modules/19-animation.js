
QUnit.module('Animation', () => {

    QUnit.test('if animate-onclick is not provided ---> animateOnClick should be undefined', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.strictEqual($slider.animateOnClick, undefined);
    });

    QUnit.test('if animate-onclick is not provided ---> --tc-range-slider-animate-onclick should be ""', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.strictEqual($slider.style.getPropertyValue('--tc-range-slider-animate-onclick'), '');
    });

    QUnit.test('animateOnClick = 0.3s', (assert) => {
        const $slider = document.querySelector('#slider-76');
        assert.strictEqual($slider.animateOnClick, '0.3s');
    });

    QUnit.test('animateOnClick = 0.3s ---> --tc-range-slider-animate-onclick should be 0.3s', (assert) => {
        const $slider = document.querySelector('#slider-76');
        const $inner = $slider.shadowRoot.querySelector('.range-slider');
        assert.strictEqual($inner.style.getPropertyValue('--tc-range-slider-animate-onclick'), '0.3s');
    });

    QUnit.test('change animateOnClick via API to 0.5s', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.animateOnClick = '0.5s';
        assert.equal($slider.animateOnClick, '0.5s');
    });

    QUnit.test('change animateOnClick via attribute to 1s', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.setAttribute('animate-onclick', '1s');
        assert.equal($slider.animateOnClick, '1s');
    });

});

