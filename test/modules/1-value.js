
QUnit.module('Range Slider Value & Pointer', () => {

    QUnit.test('default value should be 0', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.strictEqual($slider.value, 0);
    });

    QUnit.test('if min = 50 ---> default value should be 50', (assert) => {
        const $slider = document.querySelector('#slider-7');
        assert.strictEqual($slider.value, 50);
    });

    QUnit.test('if min = -50 ---> default value should be -50', (assert) => {
        const $slider = document.querySelector('#slider-8');
        assert.strictEqual($slider.value, -50);
    });

    QUnit.test('if min = 150 ---> default value should be 150', (assert) => {
        const $slider = document.querySelector('#slider-9');
        assert.strictEqual($slider.value, 150);
    });

    QUnit.test('provided value should be 50', (assert) => {
        const $slider = document.querySelector('#slider-2');
        assert.strictEqual($slider.value, 50);
    });

    QUnit.test('provided value should be 100', (assert) => {
        const $slider = document.querySelector('#slider-6');
        assert.strictEqual($slider.value, 100);
    });

    QUnit.test('if provided value is string it should be 0', (assert) => {
        const $slider = document.querySelector('#slider-3');
        assert.strictEqual($slider.value, 0);
    });

    QUnit.test('if provided value is negative it should be 0', (assert) => {
        const $slider = document.querySelector('#slider-4');
        assert.strictEqual($slider.value, 0);
    });

    QUnit.test('if provided value > 100 it should be = 100', (assert) => {
        const $slider = document.querySelector('#slider-5');
        assert.strictEqual($slider.value, 100);
    });

    QUnit.test('change value via API to 30', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.value = 30;
        assert.strictEqual($slider.value, 30);
    });

    QUnit.test('change value via attribute to 41.5', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.setAttribute('value', 41.5);
        assert.strictEqual($slider.value, 41.5);
    });

    QUnit.test('by default pointer left should be 0%', (assert) => {
        const $slider = document.querySelector('#slider-1');
        const $pointer = $slider.shadowRoot.querySelector('.pointer');
        assert.strictEqual($pointer.style.left, '0%');
    });

    QUnit.test('provided value 50 ---> pointer left should be 50%', (assert) => {
        const $slider = document.querySelector('#slider-2');
        const $pointer = $slider.shadowRoot.querySelector('.pointer');
        assert.strictEqual($pointer.style.left, '50%');
    });

    QUnit.test('provided value should be 100 ---> pointer left should be 100%', (assert) => {
        const $slider = document.querySelector('#slider-6');
        const $pointer = $slider.shadowRoot.querySelector('.pointer');
        assert.strictEqual($pointer.style.left, '100%');
    });

    QUnit.test('if provided value is string ---> pointer left should be 0%', (assert) => {
        const $slider = document.querySelector('#slider-3');
        const $pointer = $slider.shadowRoot.querySelector('.pointer');
        assert.strictEqual($pointer.style.left, '0%');
    });

    QUnit.test('if provided value is negative --> pointer left should be 0%', (assert) => {
        const $slider = document.querySelector('#slider-4');
        const $pointer = $slider.shadowRoot.querySelector('.pointer');
        assert.strictEqual($pointer.style.left, '0%');
    });

    QUnit.test('if provided value > 100  ---> pointer left should be 100%', (assert) => {
        const $slider = document.querySelector('#slider-5');
        const $pointer = $slider.shadowRoot.querySelector('.pointer');
        assert.strictEqual($pointer.style.left, '100%');
    });

    QUnit.test('change value via API to 30 ---> pointer left should be 30%', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.value = 30;
        const $pointer = $slider.shadowRoot.querySelector('.pointer');
        assert.strictEqual($pointer.style.left, '30%');
    });

    QUnit.test('change value via attribute to 41.5 ---> pointer left should be 41.5%', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.setAttribute('value', 41.5);
        const $pointer = $slider.shadowRoot.querySelector('.pointer');
        assert.strictEqual($pointer.style.left, '41.5%');
    });

    // <toolcool-range-slider min="50" max="100" id="slider-12"></toolcool-range-slider>
    QUnit.test('min="50" max="100" ---> value should be 50', (assert) => {
        const $slider = document.querySelector('#slider-12');
        assert.strictEqual($slider.value, 50);
    });

    QUnit.test('min should be 50', (assert) => {
        const $slider = document.querySelector('#slider-12');
        assert.strictEqual($slider.min, 50);
    });

    //   <toolcool-range-slider min="50" max="100" id="slider-12"></toolcool-range-slider>
    QUnit.test('max should be 100', (assert) => {
        const $slider = document.querySelector('#slider-12');
        assert.strictEqual($slider.max, 100);
    });

    QUnit.test('if min = -50, max = 50, and value = 0 ---> pointer position should be 50%', (assert) => {
        const $slider = document.querySelector('#slider-15');
        const $pointer = $slider.shadowRoot.querySelector('.pointer');
        assert.strictEqual($pointer.style.left, '50%');
    });

    QUnit.test('range slider value should be no more that 5 decimal places after the dot', (assert) => {
        // used to fix values like '50.300000000000004' ---> 50.3
        const $slider = document.querySelector('#slider-42');
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

        assert.strictEqual($slider.value, 50.3);
    });
});

QUnit.module('Range Slider Value1 & Pointer', () => {

    QUnit.test('default value1 should be 0 (if value provided instead of value1)', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.strictEqual($slider.value1, 0);
    });

    QUnit.test('value1 = 60', (assert) => {
        const $slider = document.querySelector('#slider-100');
        assert.strictEqual($slider.value1, 60);
    });

    QUnit.test('value1 = 60 ---> value = 60', (assert) => {
        const $slider = document.querySelector('#slider-100');
        assert.strictEqual($slider.value, 60);
    });

    QUnit.test('if min = 50 ---> default value1 should be 50 (if value provided instead of value1)', (assert) => {
        const $slider = document.querySelector('#slider-7');
        assert.strictEqual($slider.value1, 50);
    });

    QUnit.test('if min = -50 ---> default value1 should be -50 (if value provided instead of value1)', (assert) => {
        const $slider = document.querySelector('#slider-8');
        assert.strictEqual($slider.value1, -50);
    });

    QUnit.test('if min = 150 ---> default value1 should be 150 (if value provided instead of value1)', (assert) => {
        const $slider = document.querySelector('#slider-9');
        assert.strictEqual($slider.value1, 150);
    });

    QUnit.test('provided value1 should be 50 (if value provided instead of value1)', (assert) => {
        const $slider = document.querySelector('#slider-2');
        assert.strictEqual($slider.value1, 50);
    });

    QUnit.test('provided value1 should be 100 (if value provided instead of value1)', (assert) => {
        const $slider = document.querySelector('#slider-6');
        assert.strictEqual($slider.value1, 100);
    });

    QUnit.test('if provided value1 is string it should be 0 (if value provided instead of value1)', (assert) => {
        const $slider = document.querySelector('#slider-3');
        assert.strictEqual($slider.value1, 0);
    });

    QUnit.test('if provided value1 is negative it should be 0 (if value provided instead of value1)', (assert) => {
        const $slider = document.querySelector('#slider-4');
        assert.strictEqual($slider.value1, 0);
    });

    QUnit.test('if provided value1 > 100 it should be = 100 (if value provided instead of value1)', (assert) => {
        const $slider = document.querySelector('#slider-5');
        assert.strictEqual($slider.value1, 100);
    });

    QUnit.test('change value1 via API to 30 (if value provided instead of value1)', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.value1 = 30;
        assert.strictEqual($slider.value1, 30);
    });

    QUnit.test('change value1 via attribute to 41.5 (if value provided instead of value1)', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.setAttribute('value1', 41.5);
        assert.strictEqual($slider.value1, 41.5);
    });

    QUnit.test('by default pointer left should be 0% (if value provided instead of value1)', (assert) => {
        const $slider = document.querySelector('#slider-1');
        const $pointer = $slider.shadowRoot.querySelector('.pointer');
        assert.strictEqual($pointer.style.left, '0%');
    });

    QUnit.test('provided value1 50 ---> pointer left should be 50% (if value provided instead of value1)', (assert) => {
        const $slider = document.querySelector('#slider-2');
        const $pointer = $slider.shadowRoot.querySelector('.pointer');
        assert.strictEqual($pointer.style.left, '50%');
    });

    QUnit.test('provided value1 should be 100 ---> pointer left should be 100% (if value provided instead of value1)', (assert) => {
        const $slider = document.querySelector('#slider-6');
        const $pointer = $slider.shadowRoot.querySelector('.pointer');
        assert.strictEqual($pointer.style.left, '100%');
    });

    QUnit.test('if provided value1 is string ---> pointer left should be 0% (if value provided instead of value1)', (assert) => {
        const $slider = document.querySelector('#slider-3');
        const $pointer = $slider.shadowRoot.querySelector('.pointer');
        assert.strictEqual($pointer.style.left, '0%');
    });

    QUnit.test('if provided value1 is negative --> pointer left should be 0% (if value provided instead of value1)', (assert) => {
        const $slider = document.querySelector('#slider-4');
        const $pointer = $slider.shadowRoot.querySelector('.pointer');
        assert.strictEqual($pointer.style.left, '0%');
    });

    QUnit.test('if provided value1 > 100  ---> pointer left should be 100% (if value provided instead of value1)', (assert) => {
        const $slider = document.querySelector('#slider-5');
        const $pointer = $slider.shadowRoot.querySelector('.pointer');
        assert.strictEqual($pointer.style.left, '100%');
    });

    QUnit.test('change value1 via API to 30 ---> pointer left should be 30% (if value provided instead of value1)', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.value1 = 30;
        const $pointer = $slider.shadowRoot.querySelector('.pointer');
        assert.strictEqual($pointer.style.left, '30%');
    });

    QUnit.test('change value1 via attribute to 41.5 ---> pointer left should be 41.5% (if value provided instead of value1)', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.setAttribute('value1', 41.5);
        const $pointer = $slider.shadowRoot.querySelector('.pointer');
        assert.strictEqual($pointer.style.left, '41.5%');
    });

    // <toolcool-range-slider min="50" max="100" id="slider-12"></toolcool-range-slider>
    QUnit.test('min="50" max="100" ---> value1 should be 50 (if value provided instead of value1)', (assert) => {
        const $slider = document.querySelector('#slider-12');
        assert.strictEqual($slider.value1, 50);
    });

    QUnit.test('min should be 50 (if value provided instead of value1)', (assert) => {
        const $slider = document.querySelector('#slider-12');
        assert.strictEqual($slider.min, 50);
    });

    QUnit.test('max should be 100 (if value provided instead of value1)', (assert) => {
        const $slider = document.querySelector('#slider-12');
        assert.strictEqual($slider.max, 100);
    });

    QUnit.test('if min = -50, max = 50, and value1 = 0 ---> pointer position should be 50% (if value provided instead of value1)', (assert) => {
        const $slider = document.querySelector('#slider-15');
        const $pointer = $slider.shadowRoot.querySelector('.pointer');
        assert.strictEqual($pointer.style.left, '50%');
    });

    QUnit.test('range slider value1 should be no more that 5 decimal places after the dot (if value provided instead of value1)', (assert) => {
        // used to fix value1s like '50.300000000000004' ---> 50.3
        const $slider = document.querySelector('#slider-42');
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

        assert.strictEqual($slider.value1, 50.3);
    });
});

QUnit.module('Range Slider Value2 & Pointer', () => {

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

    QUnit.test('the first pointer should have class pointer-1', (assert) => {
        const $slider = document.querySelector('#slider-92');
        assert.ok($slider.shadowRoot.querySelector('.pointer-1'));
    });

    QUnit.test('the first should not have class pointer-2', (assert) => {
        const $slider = document.querySelector('#slider-92');
        const $first = $slider.shadowRoot.querySelector('.pointer-1');
        assert.deepEqual($first.classList.contains('pointer-2'), false);
    });

    QUnit.test('the second pointer should have class pointer-2', (assert) => {
        const $slider = document.querySelector('#slider-92');
        assert.ok($slider.shadowRoot.querySelector('.pointer-2'));
    });

    QUnit.test('the second should not have class pointer-1', (assert) => {
        const $slider = document.querySelector('#slider-92');
        const $first = $slider.shadowRoot.querySelector('.pointer-2');
        assert.deepEqual($first.classList.contains('pointer-1'), false);
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

    QUnit.test('given 1 pointers slider ---> add second pointer via API', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.value2 = 50;
        const $pointer = $slider.shadowRoot.querySelector('.pointer-2');
        assert.ok($pointer);
    });

    QUnit.test('given 1 pointers slider ---> add second pointer via attribute', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.setAttribute('value2', '50');
        const $pointer = $slider.shadowRoot.querySelector('.pointer-2');
        assert.ok($pointer);
    });

    QUnit.test('change to the text value via api', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.value1 = 's';
        assert.strictEqual($slider.value1, 0);
    });

    QUnit.test('change to the text value via api', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.value2 = 's';
        assert.strictEqual($slider.value2, 0);
    });
});


