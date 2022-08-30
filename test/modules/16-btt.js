
QUnit.module('Bottom to Top', () => {

    QUnit.test('if not provided ---> btt value should be false', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.btt, false);
    });

    QUnit.test('disabled = true', (assert) => {
        const $slider = document.querySelector('#slider-51');
        assert.equal($slider.btt, true);
    });

    QUnit.test('btt = false', (assert) => {
        const $slider = document.querySelector('#slider-53');
        assert.equal($slider.btt, false);
    });

    QUnit.test('btt = aaa ---> btt should be false', (assert) => {
        const $slider = document.querySelector('#slider-52');
        assert.equal($slider.btt, false);
    });

    QUnit.test('change btt via API to true', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.btt = true;
        assert.equal($slider.btt, true);
    });

    QUnit.test('change btt via API to false', (assert) => {
        const $slider = document.querySelector('#slider-51');
        $slider.btt = false;
        assert.equal($slider.btt, false);
    });

    QUnit.test('change btt via attribute to true', (assert) => {
        const $slider = document.querySelector('#slider-53');
        $slider.setAttribute('btt', 'true');
        assert.equal($slider.btt, true);
    });

    QUnit.test('change btt via attribute to false', (assert) => {
        const $slider = document.querySelector('#slider-51');
        $slider.setAttribute('btt', 'false');
        assert.equal($slider.btt, false);
    });

    // ------

    QUnit.test('btt support - default value should be 0', (assert) => {
        const $slider = document.querySelector('#slider-51');
        assert.equal($slider.value, '0');
    });

    QUnit.test('btt support - if min = 50 ---> default value should be 50', (assert) => {
        const $slider = document.querySelector('#slider-54');
        assert.equal($slider.value, '50');
    });

    QUnit.test('btt support - if min = -50 ---> default value should be -50', (assert) => {
        const $slider = document.querySelector('#slider-55');
        assert.equal($slider.value, '-50');
    });

    QUnit.test('btt support - by default pointer top should be 100%', (assert) => {
        const $slider = document.querySelector('#slider-51');
        const $pointer = $slider.shadowRoot.querySelector('.pointer');
        assert.equal($pointer.style.top, '100%');
    });

    QUnit.test('btt support provided value 50 ---> pointer top should be 50%', (assert) => {
        const $slider = document.querySelector('#slider-56');
        const $pointer = $slider.shadowRoot.querySelector('.pointer');
        assert.equal($pointer.style.top, '50%');
    });

    QUnit.test('btt support provided value 40 ---> pointer top should be 60%', (assert) => {
        const $slider = document.querySelector('#slider-57');
        const $pointer = $slider.shadowRoot.querySelector('.pointer');
        assert.equal($pointer.style.top, '60%');
    });

    QUnit.test('provided value should be 100 ---> pointer top should be 0%', (assert) => {
        const $slider = document.querySelector('#slider-58');
        const $pointer = $slider.shadowRoot.querySelector('.pointer');
        assert.equal($pointer.style.top, '0%');
    });

});

