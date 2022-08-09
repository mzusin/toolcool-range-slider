
QUnit.module('Range Slider Width & Height', () => {

    QUnit.test('slider width by default should be undefined', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.sliderWidth, undefined);
    });

    QUnit.test('slider height by default should be undefined', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.sliderHeight, undefined);
    });

    QUnit.test('provided slider width should be 200px', (assert) => {
        const $slider = document.querySelector('#slider-20');
        assert.equal($slider.sliderWidth, '200px');
    });

    QUnit.test('provided slider height should be 20px', (assert) => {
        const $slider = document.querySelector('#slider-20');
        assert.equal($slider.sliderHeight, '20px');
    });

    QUnit.test('slider width changed to 30rem', (assert) => {
        const $slider = document.querySelector('#slider-20');
        $slider.sliderWidth = '30rem';
        assert.equal($slider.sliderWidth, '30rem');
    });

    QUnit.test('slider height changed to 2rem', (assert) => {
        const $slider = document.querySelector('#slider-20');
        $slider.sliderHeight = '2rem';
        assert.equal($slider.sliderHeight, '2rem');
    });

    QUnit.test('by default width style is empty', (assert) => {
        const $slider = document.querySelector('#slider-1').shadowRoot.querySelector('.range-slider');
        assert.equal($slider.style.width, '');
    });

    QUnit.test('by default height style is empty', (assert) => {
        const $slider = document.querySelector('#slider-1').shadowRoot.querySelector('.range-slider');
        assert.equal($slider.style.height, '');
    });

    QUnit.test('provided slider width style should be 200px', (assert) => {
        const $slider = document.querySelector('#slider-20').shadowRoot.querySelector('.range-slider');
        assert.equal($slider.style.width, '200px');
    });

    QUnit.test('provided slider height style should be 20px', (assert) => {
        const $slider = document.querySelector('#slider-20').shadowRoot.querySelector('.range-slider');
        assert.equal($slider.style.height, '20px');
    });

    QUnit.test('slider width changed to 30rem ---> style should change', (assert) => {
        const $slider = document.querySelector('#slider-20');
        $slider.sliderWidth = '30rem';

        const $inner = $slider.shadowRoot.querySelector('.range-slider')
        assert.equal($inner.style.width, '30rem');
    });

    QUnit.test('slider height changed to 2rem ---> style should change', (assert) => {
        const $slider = document.querySelector('#slider-20');
        $slider.sliderHeight = '2rem';
        const $inner = $slider.shadowRoot.querySelector('.range-slider')
        assert.equal($inner.style.height, '2rem');
    });
});

QUnit.module('Pointer Width & Height', () => {

    QUnit.test('pointer width by default should be undefined', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.pointerWidth, undefined);
    });

    QUnit.test('pointer height by default should be undefined', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.pointerHeight, undefined);
    });

    QUnit.test('provided pointer width should be 50px', (assert) => {
        const $slider = document.querySelector('#slider-21');
        assert.equal($slider.pointerWidth, '50px');
    });

    QUnit.test('provided pointer height should be 50px', (assert) => {
        const $slider = document.querySelector('#slider-21');
        assert.equal($slider.pointerHeight, '50px');
    });

    QUnit.test('pointer width changed to 30rem', (assert) => {
        const $slider = document.querySelector('#slider-21');
        $slider.pointerWidth = '2rem';
        assert.equal($slider.pointerWidth, '2rem');
    });

    QUnit.test('pointer height changed to 2rem', (assert) => {
        const $slider = document.querySelector('#slider-21');
        $slider.pointerHeight = '2rem';
        assert.equal($slider.pointerHeight, '2rem');
    });

    QUnit.test('by default pointer width style is empty', (assert) => {
        const $slider = document.querySelector('#slider-1');
        const $pointer = $slider.shadowRoot.querySelector('.pointer-shape');
        assert.equal($pointer.style.width, '');
    });

    QUnit.test('by default pointer height style is empty', (assert) => {
        const $slider = document.querySelector('#slider-1');
        const $pointer = $slider.shadowRoot.querySelector('.pointer-shape');
        assert.equal($pointer.style.height, '');
    });

    QUnit.test('provided pointer width style should be 50px', (assert) => {
        const $slider = document.querySelector('#slider-21');
        const $pointer = $slider.shadowRoot.querySelector('.pointer-shape');
        assert.equal($pointer.style.width, '50px');
    });

    QUnit.test('provided pointer height style should be 50px', (assert) => {
        const $slider = document.querySelector('#slider-21');
        const $pointer = $slider.shadowRoot.querySelector('.pointer-shape');
        assert.equal($pointer.style.height, '50px');
    });

    QUnit.test('pointer width changed to 30rem ---> style should change', (assert) => {
        const $slider = document.querySelector('#slider-21');
        $slider.pointerWidth = '30rem';

        const $pointer = $slider.shadowRoot.querySelector('.pointer-shape');
        assert.equal($pointer.style.width, '30rem');
    });

    QUnit.test('pointer height changed to 2rem ---> style should change', (assert) => {
        const $slider = document.querySelector('#slider-21');
        $slider.pointerHeight = '2rem';

        const $pointer = $slider.shadowRoot.querySelector('.pointer-shape');
        assert.equal($pointer.style.height, '2rem');
    });
});
