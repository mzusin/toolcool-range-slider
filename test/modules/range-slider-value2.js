
QUnit.module('Range Slider Value2', () => {

    QUnit.test('default value2 should be undefined', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.strictEqual($slider.value2, undefined);
    });

    QUnit.test('provided value2 should be 50', (assert) => {
        const $slider = document.querySelector('#slider-86');
        assert.strictEqual($slider.value2, 50);
    });

    QUnit.test('provided value2 should be 100', (assert) => {
        const $slider = document.querySelector('#slider-87');
        assert.strictEqual($slider.value2, 100);
    });

    QUnit.test('if provided value2 is string it should be 0', (assert) => {
        const $slider = document.querySelector('#slider-88');
        assert.strictEqual($slider.value2, 0);
    });

    QUnit.test('if provided value2 is negative when min="0" ---> value2 should be 0', (assert) => {
        const $slider = document.querySelector('#slider-89');
        assert.strictEqual($slider.value2, 0);
    });

    QUnit.test('if provided value2 > 100 it should be = 100', (assert) => {
        const $slider = document.querySelector('#slider-90');
        assert.strictEqual($slider.value2, 100);
    });

    QUnit.test('change value2 via API to 30', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.value2 = 30;
        assert.strictEqual($slider.value2, 30);
    });

    QUnit.test('change value2 via attribute to 41.5', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.setAttribute('value2', 41.5);
        assert.strictEqual($slider.value2, 41.5);
    });

    // <toolcool-range-slider min="50" max="100" id="slider-12"></toolcool-range-slider>
    QUnit.test('min="50" max="100", value2="0" ---> value2 should be 50', (assert) => {
        const $slider = document.querySelector('#slider-91');
        assert.strictEqual($slider.value2, 50);
    });

    QUnit.test('2 pointers should be rendered', (assert) => {
        const $slider = document.querySelector('#slider-92');
        assert.strictEqual($slider.shadowRoot.querySelectorAll('.pointer').length, 2);
    });

    QUnit.test('one pointer should have class pointer-1', (assert) => {
        const $slider = document.querySelector('#slider-92');
        assert.ok($slider.shadowRoot.querySelector('.pointer-1'));
    });

    QUnit.test('one pointer should have class pointer-2', (assert) => {
        const $slider = document.querySelector('#slider-92');
        assert.ok($slider.shadowRoot.querySelector('.pointer-2'));
    });

    QUnit.test('if min = -50, max = 50, and value2 = 0 ---> pointer 2 position should be 50%', (assert) => {
        const $slider = document.querySelector('#slider-92');
        const $pointer2 = $slider.shadowRoot.querySelector('.pointer-2');
        assert.strictEqual($pointer2.style.left, '50%');
    });

    QUnit.test('provided value2 50 ---> pointer left should be 50%', (assert) => {
        const $slider = document.querySelector('#slider-86');
        const $pointer2 = $slider.shadowRoot.querySelector('.pointer-2');
        assert.equal($pointer2.style.left, '50%');
    });

    QUnit.test('provided value2 should be 100 ---> pointer left should be 100%', (assert) => {
        const $slider = document.querySelector('#slider-87');
        const $pointer2 = $slider.shadowRoot.querySelector('.pointer-2');
        assert.equal($pointer2.style.left, '100%');
    });

    QUnit.test('if provided value2 is string ---> pointer left should be 0%', (assert) => {
        const $slider = document.querySelector('#slider-88');
        const $pointer2 = $slider.shadowRoot.querySelector('.pointer-2');
        assert.equal($pointer2.style.left, '0%');
    });

    QUnit.test('if provided value2 is negative and min="0" --> pointer left should be 0%', (assert) => {
        const $slider = document.querySelector('#slider-89');
        const $pointer2 = $slider.shadowRoot.querySelector('.pointer-2');
        assert.equal($pointer2.style.left, '0%');
    });

    QUnit.test('if provided value2 > 100, and max="100"  ---> pointer left should be 100%', (assert) => {
        const $slider = document.querySelector('#slider-90');
        const $pointer2 = $slider.shadowRoot.querySelector('.pointer-2');
        assert.equal($pointer2.style.left, '100%');
    });

    QUnit.test('change value2 via API to 30 ---> pointer left should be 30%', (assert) => {
        const $slider = document.querySelector('#slider-86');
        $slider.value2 = 30;
        const $pointer = $slider.shadowRoot.querySelector('.pointer-2');
        assert.equal($pointer.style.left, '30%');
    });

    QUnit.test('change value2 via attribute to 41.5 ---> pointer left should be 41.5%', (assert) => {
        const $slider = document.querySelector('#slider-86');
        $slider.setAttribute('value2', 41.5);
        const $pointer = $slider.shadowRoot.querySelector('.pointer-2');
        assert.equal($pointer.style.left, '41.5%');
    });

    QUnit.test('range slider value2 should be no more that 5 decimal places after the dot', (assert) => {
        // used to fix value2 like '50.300000000000004' ---> 50.3
        const $slider = document.querySelector('#slider-93');
        const $pointer = $slider.shadowRoot.querySelector('.pointer');

        $pointer.dispatchEvent(new KeyboardEvent('keydown', {
            view: window,
            bubbles: true,
            cancelable: true,
            key: 'ArrowRight',
        }));
        $pointer.dispatchEvent(new KeyboardEvent('keydown', {
            view: window,
            bubbles: true,
            cancelable: true,
            key: 'ArrowRight',
        }));
        $pointer.dispatchEvent(new KeyboardEvent('keydown', {
            view: window,
            bubbles: true,
            cancelable: true,
            key: 'ArrowRight',
        }));

        assert.equal($slider.value2, 50.3);
    });
});
