
QUnit.module('Range Slider Panel Fill', () => {

    QUnit.test('panel fill element should exist', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.ok($slider.shadowRoot.querySelector('.panel-fill'));
    });

    QUnit.test('by default, panel fill width = 0%', (assert) => {
        const $slider = document.querySelector('#slider-1');
        const $fill = $slider.shadowRoot.querySelector('.panel-fill');
        assert.strictEqual($fill.style.width, '0%');
    });

    QUnit.test('by default, panel fill right = auto', (assert) => {
        const $slider = document.querySelector('#slider-1');
        const $fill = $slider.shadowRoot.querySelector('.panel-fill');
        assert.strictEqual($fill.style.right, 'auto');
    });

    QUnit.test('by default, panel fill left = 0%', (assert) => {
        const $slider = document.querySelector('#slider-1');
        const $fill = $slider.shadowRoot.querySelector('.panel-fill');
        assert.strictEqual($fill.style.left, '0%');
    });

    // <toolcool-range-slider id="slider-2" value="50" min="1" max="99"></toolcool-range-slider>
    QUnit.test('when value = 50 ---> fill width = 0%', (assert) => {
        const $slider = document.querySelector('#slider-2');
        const $fill = $slider.shadowRoot.querySelector('.panel-fill');
        assert.strictEqual($fill.style.width, '50%');
    });

    QUnit.test('when value = 50 ---> fill left = 0%', (assert) => {
        const $slider = document.querySelector('#slider-2');
        const $fill = $slider.shadowRoot.querySelector('.panel-fill');
        assert.strictEqual($fill.style.left, '0%');
    });

    QUnit.test('when value = 50 ---> fill right = auto', (assert) => {
        const $slider = document.querySelector('#slider-2');
        const $fill = $slider.shadowRoot.querySelector('.panel-fill');
        assert.strictEqual($fill.style.right, 'auto');
    });

    // <toolcool-range-slider id="slider-101" value1="60" value2="80"></toolcool-range-slider>
    QUnit.test('when value1 = 60, and value2 = 80 ---> fill width = 20%', (assert) => {
        const $slider = document.querySelector('#slider-101');
        const $fill = $slider.shadowRoot.querySelector('.panel-fill');
        assert.strictEqual($fill.style.width, '20%');
    });

    QUnit.test('when value1 = 60, and value2 = 80 ---> fill right = auto', (assert) => {
        const $slider = document.querySelector('#slider-101');
        const $fill = $slider.shadowRoot.querySelector('.panel-fill');
        assert.strictEqual($fill.style.right, 'auto');
    });

    QUnit.test('when value1 = 60, and value2 = 80 ---> fill left = 60%', (assert) => {
        const $slider = document.querySelector('#slider-101');
        const $fill = $slider.shadowRoot.querySelector('.panel-fill');
        assert.strictEqual($fill.style.left, '60%');
    });

});

