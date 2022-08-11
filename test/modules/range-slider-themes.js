
QUnit.module('Range Slider Themes', () => {

    QUnit.test('by default theme should be undefined', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.theme, undefined);
    });

    QUnit.test('provided theme', (assert) => {
        const $slider = document.querySelector('#slider-29');
        assert.equal($slider.theme, 'fake');
    });

    QUnit.test('change theme via api', (assert) => {
        const $slider = document.querySelector('#slider-22');
        $slider.theme = 'fake-1';
        assert.equal($slider.theme, 'fake-1');
    });

    QUnit.test('change theme via attribute', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.setAttribute('theme', 'fake-2')
        assert.equal($slider.theme, 'fake-2');
    });
});