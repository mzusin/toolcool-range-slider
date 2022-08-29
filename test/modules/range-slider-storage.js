
QUnit.module('Range Slider Storage', () => {

    QUnit.test('by default storage should be undefined', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.storage, undefined);
    });

    QUnit.test('local storage', (assert) => {
        const $slider = document.querySelector('#slider-39');
        assert.equal($slider.storage, 'local-storage');
    });

    QUnit.test('session storage', (assert) => {
        const $slider = document.querySelector('#slider-40');
        assert.equal($slider.storage, 'session-storage');
    });

    QUnit.test('add session storage property via set', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.storage = 'session-storage';
        assert.equal($slider.storage, 'session-storage');
    });

    QUnit.test('add local storage property via set', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.storage = 'local-storage';
        assert.equal($slider.storage, 'local-storage');
    });

    QUnit.test('add session storage property via attribute', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.setAttribute('storage', 'session-storage');
        assert.equal($slider.storage, 'session-storage');
    });

    QUnit.test('add local storage property via attribute', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.setAttribute('storage', 'local-storage');
        assert.equal($slider.storage, 'local-storage');
    });

});

QUnit.module('Range Slider Storage Key', () => {

    QUnit.test('by default storage key should be "tc-range-slider"', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.storageKey, 'tc-range-slider');
    });

    QUnit.test('provided storage key', (assert) => {
        const $slider = document.querySelector('#slider-41');
        assert.equal($slider.storageKey, 'test');
    });

    QUnit.test('add storage key property via set', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.storageKey = 'test-1';
        assert.equal($slider.storageKey, 'test-1');
    });

    QUnit.test('add storage key property via attribute', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.setAttribute('storage-key', 'test-2');
        assert.equal($slider.storageKey, 'test-2');
    });

    QUnit.test('in case of 2 pointers and storage enabled, storageKey2 should be "test-2"', (assert) => {
        const $slider = document.querySelector('#slider-99');
        assert.equal($slider.storageKey2, 'test-2');
    });
});
