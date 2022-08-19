
QUnit.module('Disabled / Enabled', () => {

    QUnit.test('if not provided ---> disabled value should be false', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.disabled, false);
    });

    QUnit.test('disabled = true', (assert) => {
        const $slider = document.querySelector('#slider-36');
        assert.equal($slider.disabled, true);
    });

    QUnit.test('disabled = false', (assert) => {
        const $slider = document.querySelector('#slider-37');
        assert.equal($slider.disabled, false);
    });

    QUnit.test('disabled = aaa ---> disabled should be false', (assert) => {
        const $slider = document.querySelector('#slider-38');
        assert.equal($slider.disabled, false);
    });

    QUnit.test('change min via API to true', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.disabled = true;
        assert.equal($slider.disabled, true);
    });

    QUnit.test('change min via API to false', (assert) => {
        const $slider = document.querySelector('#slider-36');
        $slider.disabled = false;
        assert.equal($slider.disabled, false);
    });

    QUnit.test('change value via attribute to true', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.setAttribute('disabled', 'true');
        assert.equal($slider.disabled, true);
    });

    QUnit.test('change value via attribute to false', (assert) => {
        const $slider = document.querySelector('#slider-36');
        $slider.setAttribute('disabled', 'false');
        assert.equal($slider.disabled, false);
    });

    QUnit.test('if disabled === false ---> opacity should be 1', (assert) => {
        const $slider = document.querySelector('#slider-37');
        const $inner = $slider.shadowRoot.querySelector('.range-slider');
        assert.equal($inner.style.getPropertyValue('--tc-range-slider-opacity'), '1');
    });

    QUnit.test('if disabled === true ---> opacity should be 1', (assert) => {
        const $slider = document.querySelector('#slider-36');
        const $inner = $slider.shadowRoot.querySelector('.range-slider');
        assert.equal($inner.style.getPropertyValue('--tc-range-slider-opacity'), '0.4');
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

    QUnit.test('if disabled === true ---> slider should not send change event', (assert) => {

        const done = assert.async();

        const $slider = document.querySelector('#slider-36');
        const $pointer = $slider.shadowRoot.querySelector('.pointer');

        $slider.addEventListener('change', (evt) => {
            const value = Math.round(evt.detail.value);
            assert.equal(value, 1);
            done();
        });

        $pointer.dispatchEvent(new KeyboardEvent('keydown', {
            view: window,
            bubbles: true,
            cancelable: true,
            key: 'ArrowRight',
        }));
    });

    QUnit.test('if disabled === true ---> slider should not send onMouseDown event', (assert) => {

        const done = assert.async();

        const $slider = document.querySelector('#slider-36');
        const $pointer = $slider.shadowRoot.querySelector('.pointer');

        $slider.addEventListener('onMouseDown', (evt) => {
            assert.equal(evt.detail.nativeEvent.clientX, 10);
            done();
        });

        $pointer.dispatchEvent(new MouseEvent('mousedown', {
            view: window,
            bubbles: true,
            cancelable: true,
            clientX: 10,
        }));
    });

    QUnit.test('if disabled === true ---> slider should not send onMouseUp event', (assert) => {

        const done = assert.async();

        const $slider = document.querySelector('#slider-36');
        const $pointer = $slider.shadowRoot.querySelector('.pointer');

        $slider.addEventListener('onMouseUp', (evt) => {
            assert.equal(evt.detail.nativeEvent.clientX, 10);
            done();
        });

        $pointer.dispatchEvent(new MouseEvent('mouseup', {
            view: window,
            bubbles: true,
            cancelable: true,
            clientX: 10,
        }));
    });

    QUnit.test('if disabled === true ---> slider should not send onPointerClicked event', (assert) => {

        const done = assert.async();

        const $slider = document.querySelector('#slider-36');
        const $pointer = $slider.shadowRoot.querySelector('.pointer');

        $slider.addEventListener('onPointerClicked', (evt) => {
            assert.ok(evt.detail.$pointer);
            done();
        });

        $pointer.dispatchEvent(new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true,
        }));
    });

    QUnit.test('if disabled === true ---> slider should not send onKeyDownEvent event', (assert) => {

        const done = assert.async();

        const $slider = document.querySelector('#slider-36');
        const $pointer = $slider.shadowRoot.querySelector('.pointer');

        $slider.addEventListener('onKeyDown', (evt) => {
            assert.equal(evt.detail.nativeEvent.key, 'ArrowLeft');
            done();
        });

        $pointer.dispatchEvent(new KeyboardEvent('keydown', {
            view: window,
            bubbles: true,
            cancelable: true,
            key: 'ArrowLeft',
        }));
    });

});

