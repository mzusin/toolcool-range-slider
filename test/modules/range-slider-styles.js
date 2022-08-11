
QUnit.module('Range Slider Pointer Radius', () => {

    QUnit.test('pointer radius by default should be undefined', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.pointerRadius, undefined);
    });

    QUnit.test('provided pointer radius should be 5px', (assert) => {
        const $slider = document.querySelector('#slider-22');
        assert.equal($slider.pointerRadius, '5px');
    });

    QUnit.test('pointer radius changed to 3rem', (assert) => {
        const $slider = document.querySelector('#slider-22');
        $slider.pointerRadius = '3rem';
        assert.equal($slider.pointerRadius, '3rem');
    });

    QUnit.test('by default pointer radius style is empty', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-pointer-border-radius'), '');
    });

    QUnit.test('provided pointer radius style should be 5px', (assert) => {
        const $slider = document.querySelector('#slider-22').shadowRoot.querySelector('.range-slider')
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-pointer-border-radius'), '5px');
    });

    QUnit.test('pointer radius changed to 30rem ---> style should change', (assert) => {
        const $slider = document.querySelector('#slider-22');
        $slider.pointerRadius = '3rem';
        assert.equal($slider.shadowRoot.querySelector('.range-slider').style.getPropertyValue('--toolcool-range-slider-pointer-border-radius'), '3rem');
    });
});

QUnit.module('Range Slider Panel Radius', () => {

    QUnit.test('panel radius by default should be undefined', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.sliderRadius, undefined);
    });

    QUnit.test('provided panel radius should be 5px', (assert) => {
        const $slider = document.querySelector('#slider-23');
        assert.equal($slider.sliderRadius, '5px');
    });

    QUnit.test('panel radius changed to 3rem', (assert) => {
        const $slider = document.querySelector('#slider-23');
        $slider.sliderRadius = '3rem';
        assert.equal($slider.sliderRadius, '3rem');
    });

    QUnit.test('by default panel radius style is empty', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-panel-bg-border-radius'), '');
    });

    QUnit.test('provided panel radius style should be 5px', (assert) => {
        const $slider = document.querySelector('#slider-23').shadowRoot.querySelector('.range-slider');
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-panel-bg-border-radius'), '5px');
    });

    QUnit.test('panel radius changed to 30rem ---> style should change', (assert) => {
        const $slider = document.querySelector('#slider-23');
        $slider.sliderRadius = '3rem';
        assert.equal($slider.shadowRoot.querySelector('.range-slider').style.getPropertyValue('--toolcool-range-slider-panel-bg-border-radius'), '3rem');
    });
});

QUnit.module('Panel Background', () => {

    QUnit.test('slider bg color by default should be undefined', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.sliderBg, undefined);
    });

    QUnit.test('provided slider bg color should be red', (assert) => {
        const $slider = document.querySelector('#slider-24');
        assert.equal($slider.sliderBg, 'red');
    });

    QUnit.test('slider bg color changed to blue', (assert) => {
        const $slider = document.querySelector('#slider-24');
        $slider.sliderBg = 'blue';
        assert.equal($slider.sliderBg, 'blue');
    });

    QUnit.test('by default slider bg color style is empty', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-panel-bg'), '');
    });

    QUnit.test('provided slider bg color style should be red', (assert) => {
        const $slider = document.querySelector('#slider-24').shadowRoot.querySelector('.range-slider')
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-panel-bg'), 'red');
    });

    QUnit.test('slider bg color changed to green ---> style should change', (assert) => {
        const $slider = document.querySelector('#slider-24');
        $slider.sliderBg = 'green';
        assert.equal($slider.shadowRoot.querySelector('.range-slider').style.getPropertyValue('--toolcool-range-slider-panel-bg'), 'green');
    });
});

QUnit.module('Panel Background Hover', () => {

    QUnit.test('slider bg hover color by default should be undefined', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.sliderBgHover, undefined);
    });

    QUnit.test('provided slider bg hover color should be red', (assert) => {
        const $slider = document.querySelector('#slider-24');
        assert.equal($slider.sliderBgHover, 'red');
    });

    QUnit.test('slider bg hover color changed to blue', (assert) => {
        const $slider = document.querySelector('#slider-24');
        $slider.sliderBgHover = 'blue';
        assert.equal($slider.sliderBgHover, 'blue');
    });

    QUnit.test('by default slider bg hover color style is empty', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-panel-bg-hover'), '');
    });

    QUnit.test('provided slider bg hover color style should be red', (assert) => {
        const $slider = document.querySelector('#slider-24').shadowRoot.querySelector('.range-slider')
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-panel-bg-hover'), 'red');
    });

    QUnit.test('slider bg hover color changed to green ---> style should change', (assert) => {
        const $slider = document.querySelector('#slider-24');
        $slider.sliderBgHover = 'green';
        assert.equal($slider.shadowRoot.querySelector('.range-slider').style.getPropertyValue('--toolcool-range-slider-panel-bg-hover'), 'green');
    });
});

QUnit.module('Pointer Background', () => {

    QUnit.test('pointer bg color by default should be undefined', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.pointerBg, undefined);
    });

    QUnit.test('provided pointer bg color should be red', (assert) => {
        const $slider = document.querySelector('#slider-25');
        assert.equal($slider.pointerBg, 'red');
    });

    QUnit.test('pointer bg color changed to blue', (assert) => {
        const $slider = document.querySelector('#slider-25');
        $slider.pointerBg = 'blue';
        assert.equal($slider.pointerBg, 'blue');
    });

    QUnit.test('by default pointer bg color style is empty', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-pointer-bg'), '');
    });

    QUnit.test('provided pointer bg color style should be red', (assert) => {
        const $slider = document.querySelector('#slider-25').shadowRoot.querySelector('.range-slider')
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-pointer-bg'), 'red');
    });

    QUnit.test('pointer bg color changed to green ---> style should change', (assert) => {
        const $slider = document.querySelector('#slider-25');
        $slider.pointerBg = 'green';
        assert.equal($slider.shadowRoot.querySelector('.range-slider').style.getPropertyValue('--toolcool-range-slider-pointer-bg'), 'green');
    });
});

QUnit.module('Pointer Background Hover', () => {

    QUnit.test('pointer bg hover color by default should be undefined', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.pointerBgHover, undefined);
    });

    QUnit.test('provided pointer bg hover color should be red', (assert) => {
        const $slider = document.querySelector('#slider-25');
        assert.equal($slider.pointerBgHover, 'red');
    });

    QUnit.test('pointer bg hover color changed to blue', (assert) => {
        const $slider = document.querySelector('#slider-25');
        $slider.pointerBgHover = 'blue';
        assert.equal($slider.pointerBgHover, 'blue');
    });

    QUnit.test('by default pointer bg hover color style is empty', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-pointer-bg-hover'), '');
    });

    QUnit.test('provided pointer bg hover color style should be red', (assert) => {
        const $slider = document.querySelector('#slider-25').shadowRoot.querySelector('.range-slider')
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-pointer-bg-hover'), 'red');
    });

    QUnit.test('pointer bg hover color changed to green ---> style should change', (assert) => {
        const $slider = document.querySelector('#slider-25');
        $slider.pointerBgHover = 'green';
        assert.equal($slider.shadowRoot.querySelector('.range-slider').style.getPropertyValue('--toolcool-range-slider-pointer-bg-hover'), 'green');
    });
});

QUnit.module('Pointer Shadow', () => {

    QUnit.test('pointer shadow by default should be undefined', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.pointerShadow, undefined);
    });

    QUnit.test('provided pointer shadow should be none', (assert) => {
        const $slider = document.querySelector('#slider-26');
        assert.equal($slider.pointerShadow, 'none');
    });

    QUnit.test('pointer shadow changed to none', (assert) => {
        const $slider = document.querySelector('#slider-26');
        $slider.pointerShadow = 'none';
        assert.equal($slider.pointerShadow, 'none');
    });

    QUnit.test('by default pointer shadow style is empty', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-pointer-shadow'), '');
    });

    QUnit.test('provided pointer shadow style should be none', (assert) => {
        const $slider = document.querySelector('#slider-26').shadowRoot.querySelector('.range-slider')
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-pointer-shadow'), 'none');
    });

    QUnit.test('pointer shadow changed to "0 0 2px red" ---> style should change', (assert) => {
        const $slider = document.querySelector('#slider-26');
        $slider.pointerShadow = '0 0 2px red';
        assert.equal($slider.shadowRoot.querySelector('.range-slider').style.getPropertyValue('--toolcool-range-slider-pointer-shadow'), '0 0 2px red');
    });
});

QUnit.module('Pointer Shadow Hover', () => {

    QUnit.test('pointer shadow hover by default should be undefined', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.pointerShadowHover, undefined);
    });

    QUnit.test('provided pointer shadow hover should be none', (assert) => {
        const $slider = document.querySelector('#slider-26');
        assert.equal($slider.pointerShadowHover, 'none');
    });

    QUnit.test('pointer shadow hover changed to none', (assert) => {
        const $slider = document.querySelector('#slider-26');
        $slider.pointerShadowHover = 'none';
        assert.equal($slider.pointerShadowHover, 'none');
    });

    QUnit.test('by default pointer shadow hover style is empty', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-pointer-shadow-hover'), '');
    });

    QUnit.test('provided pointer shadow hover style should be none', (assert) => {
        const $slider = document.querySelector('#slider-26').shadowRoot.querySelector('.range-slider')
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-pointer-shadow-hover'), 'none');
    });

    QUnit.test('pointer shadow hover changed to "0 0 2px red" ---> style should change', (assert) => {
        const $slider = document.querySelector('#slider-26');
        $slider.pointerShadowHover = '0 0 2px red';
        assert.equal($slider.shadowRoot.querySelector('.range-slider').style.getPropertyValue('--toolcool-range-slider-pointer-shadow-hover'), '0 0 2px red');
    });
});

QUnit.module('Pointer Shadow Focus', () => {

    QUnit.test('pointer shadow focus by default should be undefined', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.pointerShadowFocus, undefined);
    });

    QUnit.test('provided pointer shadow focus should be none', (assert) => {
        const $slider = document.querySelector('#slider-30');
        assert.equal($slider.pointerShadowFocus, 'none');
    });

    QUnit.test('pointer shadow focus changed to none', (assert) => {
        const $slider = document.querySelector('#slider-30');
        $slider.pointerShadowFocus = 'none';
        assert.equal($slider.pointerShadowFocus, 'none');
    });

    QUnit.test('by default pointer shadow focus style is empty', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-pointer-shadow-focus'), '');
    });

    QUnit.test('provided pointer shadow focus style should be none', (assert) => {
        const $slider = document.querySelector('#slider-30').shadowRoot.querySelector('.range-slider')
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-pointer-shadow-focus'), 'none');
    });

    QUnit.test('pointer shadow focus changed to "0 0 2px red" ---> style should change', (assert) => {
        const $slider = document.querySelector('#slider-30');
        $slider.pointerShadowFocus = '0 0 2px red';
        assert.equal($slider.shadowRoot.querySelector('.range-slider').style.getPropertyValue('--toolcool-range-slider-pointer-shadow-focus'), '0 0 2px red');
    });
});

QUnit.module('Pointer Border', () => {

    QUnit.test('pointer border by default should be undefined', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.pointerBorder, undefined);
    });

    QUnit.test('provided pointer border should be 0', (assert) => {
        const $slider = document.querySelector('#slider-27');
        assert.equal($slider.pointerBorder, '0');
    });

    QUnit.test('Pointer border changed to 0', (assert) => {
        const $slider = document.querySelector('#slider-27');
        $slider.pointerBorder = '0';
        assert.equal($slider.pointerBorder, '0');
    });

    QUnit.test('by default pointer border style is empty', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-pointer-border'), '');
    });

    QUnit.test('provided pointer border style should be none', (assert) => {
        const $slider = document.querySelector('#slider-27');
        assert.equal($slider.shadowRoot.querySelector('.range-slider').style.getPropertyValue('--toolcool-range-slider-pointer-border'), '0');
    });

    QUnit.test('pointer border changed to "0 0 2px red" ---> style should change', (assert) => {
        const $slider = document.querySelector('#slider-27');
        $slider.pointerBorder = '1px solid red';
        assert.equal($slider.shadowRoot.querySelector('.range-slider').style.getPropertyValue('--toolcool-range-slider-pointer-border'), '1px solid red');
    });
});

QUnit.module('Pointer Border Hover', () => {

    QUnit.test('pointer border hover by default should be undefined', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.pointerBorderHover, undefined);
    });

    QUnit.test('provided pointer border hover should be 0', (assert) => {
        const $slider = document.querySelector('#slider-27');
        assert.equal($slider.pointerBorderHover, '0');
    });

    QUnit.test('pointer border hover changed to 0', (assert) => {
        const $slider = document.querySelector('#slider-27');
        $slider.pointerBorderHover = '0';
        assert.equal($slider.pointerBorderHover, '0');
    });

    QUnit.test('by default pointer border hover style is empty', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-pointer-border-hover'), '');
    });

    QUnit.test('provided pointer border hover style should be none', (assert) => {
        const $slider = document.querySelector('#slider-27');
        assert.equal($slider.shadowRoot.querySelector('.range-slider').style.getPropertyValue('--toolcool-range-slider-pointer-border-hover'), '0');
    });

    QUnit.test('pointer border hover changed to "0 0 2px red" ---> style should change', (assert) => {
        const $slider = document.querySelector('#slider-27');
        $slider.pointerBorderHover = '1px solid red';
        assert.equal($slider.shadowRoot.querySelector('.range-slider').style.getPropertyValue('--toolcool-range-slider-pointer-border-hover'), '1px solid red');
    });
});

QUnit.module('Pointer Border Focus', () => {

    QUnit.test('pointer border focus by default should be undefined', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.pointerBorderFocus, undefined);
    });

    QUnit.test('provided pointer border focus should be 0', (assert) => {
        const $slider = document.querySelector('#slider-27');
        assert.equal($slider.pointerBorderFocus, '0');
    });

    QUnit.test('pointer border focus changed to 0', (assert) => {
        const $slider = document.querySelector('#slider-27');
        $slider.pointerBorderFocus = '0';
        assert.equal($slider.pointerBorderFocus, '0');
    });

    QUnit.test('by default pointer border focus style is empty', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.style.getPropertyValue('--toolcool-range-slider-pointer-border-focus'), '');
    });

    QUnit.test('provided pointer border focus style should be none', (assert) => {
        const $slider = document.querySelector('#slider-27');
        assert.equal($slider.shadowRoot.querySelector('.range-slider').style.getPropertyValue('--toolcool-range-slider-pointer-border-focus'), '0');
    });

    QUnit.test('pointer border focus changed to "0 0 2px red" ---> style should change', (assert) => {
        const $slider = document.querySelector('#slider-27');
        $slider.pointerBorderFocus = '1px solid red';
        assert.equal($slider.shadowRoot.querySelector('.range-slider').style.getPropertyValue('--toolcool-range-slider-pointer-border-focus'), '1px solid red');
    });
});