

QUnit.module('Keyboard Disabled / Enabled', () => {


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

});

