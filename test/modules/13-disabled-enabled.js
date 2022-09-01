
QUnit.module('Disabled / Enabled', () => {

    QUnit.test('if not provided ---> disabled value should be false', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.disabled, false);
    });

    QUnit.test('if not provided ---> aria-disabled attribute should not present', (assert) => {
        const $slider = document.querySelector('#slider-1');
        const $inner = $slider.shadowRoot.querySelector('.range-slider');
        assert.equal($inner.getAttribute('aria-disabled'), undefined);
    });

    QUnit.test('disabled = true', (assert) => {
        const $slider = document.querySelector('#slider-36');
        assert.equal($slider.disabled, true);
    });

    QUnit.test('if provided ---> aria-disabled attribute should be true', (assert) => {
        const $slider = document.querySelector('#slider-36');
        const $inner = $slider.shadowRoot.querySelector('.range-slider');
        assert.equal($inner.getAttribute('aria-disabled'), 'true');
    });

    QUnit.test('disabled = false', (assert) => {
        const $slider = document.querySelector('#slider-37');
        assert.equal($slider.disabled, false);
    });

    QUnit.test('disabled = aaa ---> disabled should be false', (assert) => {
        const $slider = document.querySelector('#slider-38');
        assert.equal($slider.disabled, false);
    });

    QUnit.test('change disabled via API to true', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.disabled = true;
        assert.equal($slider.disabled, true);
    });

    QUnit.test('change disabled via API to false', (assert) => {
        const $slider = document.querySelector('#slider-36');
        $slider.disabled = false;
        assert.equal($slider.disabled, false);
    });

    QUnit.test('change disabled via attribute to true', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.setAttribute('disabled', 'true');
        assert.equal($slider.disabled, true);
    });

    QUnit.test('change disabled via attribute to false', (assert) => {
        const $slider = document.querySelector('#slider-36');
        $slider.setAttribute('disabled', 'false');
        assert.equal($slider.disabled, false);
    });

    QUnit.test('if disabled === false ---> should not have class "disabled"', (assert) => {
        const $slider = document.querySelector('#slider-37');
        const $inner = $slider.shadowRoot.querySelector('.range-slider');
        assert.equal($inner.classList.contains('disabled'), false);
    });

    QUnit.test('if disabled === true ---> should have class "disabled"', (assert) => {
        const $slider = document.querySelector('#slider-36');
        const $inner = $slider.shadowRoot.querySelector('.range-slider');
        assert.equal($inner.classList.contains('disabled'), true);
    });

    QUnit.test('if disabled === true and send keyboard event ---> the value should not change', (assert) => {
        const $slider = document.querySelector('#slider-36');
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

        const left = $pointer.style.left;
        assert.equal(left, '0%');
    });


});

QUnit.module('Keyboard Disabled / Enabled', () => {

    QUnit.test('if not provided ---> keyboardDisabled value should be false', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.keyboardDisabled, false);
    });

    QUnit.test('keyboardDisabled = true', (assert) => {
        const $slider = document.querySelector('#slider-126');
        assert.equal($slider.keyboardDisabled, true);
    });

    QUnit.test('keyboardDisabled = false', (assert) => {
        const $slider = document.querySelector('#slider-127');
        assert.equal($slider.keyboardDisabled, false);
    });

    QUnit.test('keyboardDisabled = test ---> keyboardDisabled should be false', (assert) => {
        const $slider = document.querySelector('#slider-128');
        assert.equal($slider.keyboardDisabled, false);
    });

    QUnit.test('change keyboardDisabled via API to true', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.keyboardDisabled = true;
        assert.equal($slider.keyboardDisabled, true);
    });

    QUnit.test('change keyboardDisabled via API to false', (assert) => {
        const $slider = document.querySelector('#slider-127');
        $slider.keyboardDisabled = false;
        assert.equal($slider.keyboardDisabled, false);
    });

    QUnit.test('change keyboardDisabled via attribute to true', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.setAttribute('keyboard-disabled', 'true');
        assert.equal($slider.keyboardDisabled, true);
    });

    QUnit.test('change keyboardDisabled via attribute to false', (assert) => {
        const $slider = document.querySelector('#slider-127');
        $slider.setAttribute('keyboard-disabled', 'false');
        assert.equal($slider.keyboardDisabled, false);
    });

    QUnit.test('if keyboardDisabled === true and send keyboard event ---> the value should not change', (assert) => {
        const $slider = document.querySelector('#slider-126');
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

        const left = $pointer.style.left;
        assert.equal(left, '0%');
    });

});

QUnit.module('Pointer 1 Disabled / Enabled', () => {

    QUnit.test('if not provided ---> pointer1Disabled value should be false', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.pointer1Disabled, false);
    });

    QUnit.test('pointer1Disabled = true', (assert) => {
        const $slider = document.querySelector('#slider-131');
        assert.equal($slider.pointer1Disabled, true);
    });

    QUnit.test('pointer1Disabled = false', (assert) => {
        const $slider = document.querySelector('#slider-132');
        assert.equal($slider.pointer1Disabled, false);
    });

    QUnit.test('pointer1Disabled = test ---> pointer1Disabled should be false', (assert) => {
        const $slider = document.querySelector('#slider-133');
        assert.equal($slider.pointer1Disabled, false);
    });

    QUnit.test('change pointer1Disabled via API to true', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.pointer1Disabled = true;
        assert.equal($slider.pointer1Disabled, true);
    });

    QUnit.test('change pointer1Disabled via API to false', (assert) => {
        const $slider = document.querySelector('#slider-131');
        $slider.pointer1Disabled = false;
        assert.equal($slider.pointer1Disabled, false);
    });

    QUnit.test('change pointer1Disabled via attribute to true', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.setAttribute('pointer1-disabled', 'true');
        assert.equal($slider.pointer1Disabled, true);
    });

    QUnit.test('change pointer1Disabled via attribute to false', (assert) => {
        const $slider = document.querySelector('#slider-131');
        $slider.setAttribute('pointer1-disabled', 'false');
        assert.equal($slider.pointer1Disabled, false);
    });

    QUnit.test('if pointer1Disabled === true and send keyboard event ---> the value should not change', (assert) => {
        const $slider = document.querySelector('#slider-131');
        const $pointer = $slider.shadowRoot.querySelector('.pointer-1');

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

        const left = $pointer.style.left;
        assert.equal(left, '0%');
    });

});

QUnit.module('Pointer 2 Disabled / Enabled', () => {

    QUnit.test('if not provided ---> pointer2Disabled value should be false', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.pointer2Disabled, false);
    });

    QUnit.test('pointer2Disabled = true', (assert) => {
        const $slider = document.querySelector('#slider-134');
        assert.equal($slider.pointer2Disabled, true);
    });

    QUnit.test('pointer2Disabled = false', (assert) => {
        const $slider = document.querySelector('#slider-135');
        assert.equal($slider.pointer2Disabled, false);
    });

    QUnit.test('pointer2Disabled = test ---> pointer2Disabled should be false', (assert) => {
        const $slider = document.querySelector('#slider-136');
        assert.equal($slider.pointer2Disabled, false);
    });

    QUnit.test('change pointer2Disabled via API to true', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.pointer2Disabled = true;
        assert.equal($slider.pointer2Disabled, true);
    });

    QUnit.test('change pointer2Disabled via API to false', (assert) => {
        const $slider = document.querySelector('#slider-134');
        $slider.pointer2Disabled = false;
        assert.equal($slider.pointer2Disabled, false);
    });

    QUnit.test('change pointer2Disabled via attribute to true', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.setAttribute('pointer2-disabled', 'true');
        assert.equal($slider.pointer2Disabled, true);
    });

    QUnit.test('change pointer2Disabled via attribute to false', (assert) => {
        const $slider = document.querySelector('#slider-134');
        $slider.setAttribute('pointer2-disabled', 'false');
        assert.equal($slider.pointer2Disabled, false);
    });

    QUnit.test('if pointer2Disabled === true and send keyboard event ---> the value should not change', (assert) => {
        const $slider = document.querySelector('#slider-134');
        const $pointer = $slider.shadowRoot.querySelector('.pointer-2');

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

        const left = $pointer.style.left;
        assert.equal(left, '0%');
    });

});

