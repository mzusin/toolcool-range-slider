
QUnit.module('Range Slider Value Label', () => {

    QUnit.test('default value label should be undefined', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.valueLabel, undefined);
    });

    QUnit.test('provided value label should be .value-1', (assert) => {
        const $slider = document.querySelector('#slider-34');
        assert.equal($slider.valueLabel, '.value-1');
    });

    QUnit.test('change value label via API to .value-2', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.valueLabel = '.value-2';
        assert.equal($slider.valueLabel, '.value-2');
    });

    QUnit.test('change value via attribute to .value-3', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.setAttribute('value-label', '.value-3');
        assert.equal($slider.valueLabel, '.value-3');
    });

    QUnit.test('provided value label is .value-1 ---> the label should contain zero', (assert) => {
        const $slider = document.querySelector('#slider-34');
        const $label = document.querySelector('.value-1');
        assert.equal($label.textContent, '0');
    });

    QUnit.test('provided value label is .value-1 and value = 50 ---> the label should contain 50', (assert) => {
        const $slider = document.querySelector('#slider-34');
        $slider.value = 50;
        const $label = document.querySelector('.value-1');
        assert.equal($label.textContent, '50');
    });

    QUnit.test('change value label via API to .value-2 ---> the label should contain 0', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.valueLabel = '.value-2';
        const $label = document.querySelector('.value-1');
        assert.equal($label.textContent, '0');
    });

    QUnit.test('change value via attribute to .value-2 ---> the label should contain 0', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.setAttribute('value-label', '.value-2');
        $slider.valueLabel = '.value-2';
        const $label = document.querySelector('.value-1');
        assert.equal($label.textContent, '0');
    });


    QUnit.test('data="a, b", provided value label is .value-4 ---> the label should contain "a"', (assert) => {
        const $slider = document.querySelector('#slider-72');
        const $label = document.querySelector('.value-3');
        assert.equal($label.textContent, 'a');
    });

    QUnit.test('data="100, 200, 300", provided value label is .value-4 ---> the label should contain "100"', (assert) => {
        const $slider = document.querySelector('#slider-73');
        const $label = document.querySelector('.value-4');
        assert.equal($label.textContent, '100');
    });

});

QUnit.module('Range Slider Generate Labels', () => {

    QUnit.test('by default generateLabels should be false', (assert) => {
        const $slider = document.querySelector('#slider-1');
        assert.equal($slider.generateLabels, false);
    });

    QUnit.test('generate-labels="true"', (assert) => {
        const $slider = document.querySelector('#slider-77');
        assert.equal($slider.generateLabels, true);
    });

    QUnit.test('generate-labels="true"', (assert) => {
        const $slider = document.querySelector('#slider-78');
        assert.equal($slider.generateLabels, false);
    });

    QUnit.test('generate-labels="test" ---> generateLabels should be false', (assert) => {
        const $slider = document.querySelector('#slider-79');
        assert.equal($slider.generateLabels, false);
    });

    QUnit.test('change generateLabels via API to true', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.generateLabels = true;
        assert.equal($slider.generateLabels, true);
    });

    QUnit.test('change generateLabels via API to false', (assert) => {
        const $slider = document.querySelector('#slider-78');
        $slider.generateLabels = false;
        assert.equal($slider.generateLabels, false);
    });

    QUnit.test('change generateLabels via attribute to true', (assert) => {
        const $slider = document.querySelector('#slider-1');
        $slider.setAttribute('generate-labels', 'true');
        assert.equal($slider.generateLabels, true);
    });

    QUnit.test('change generateLabels via attribute to false', (assert) => {
        const $slider = document.querySelector('#slider-78');
        $slider.setAttribute('generate-labels', 'false');
        assert.equal($slider.generateLabels, false);
    });

    QUnit.test('generate-labels="false" ----> min label should not exist', (assert) => {
        const $slider = document.querySelector('#slider-71');
        const $min = $slider.shadowRoot.querySelector('.min-label');
        assert.deepEqual($min, null);
    });

    QUnit.test('generate-labels="true" ----> min label should exist', (assert) => {
        const $slider = document.querySelector('#slider-77');
        const $min = $slider.shadowRoot.querySelector('.min-label');
        assert.ok($min);
    });

    QUnit.test('generate-labels="false" ----> max label should not exist', (assert) => {
        const $slider = document.querySelector('#slider-71');
        const $max = $slider.shadowRoot.querySelector('.max-label');
        assert.deepEqual($max, null);
    });

    QUnit.test('generate-labels="true" ----> max label should exist', (assert) => {
        const $slider = document.querySelector('#slider-77');
        const $max = $slider.shadowRoot.querySelector('.max-label');
        assert.ok($max);
    });

    QUnit.test('generate-labels="false" ----> value label should not exist', (assert) => {
        const $slider = document.querySelector('#slider-71');
        const $valueLabel = $slider.shadowRoot.querySelector('.value-label');
        assert.deepEqual($valueLabel, null);
    });

    QUnit.test('generate-labels="true" ----> max label should exist', (assert) => {
        const $slider = document.querySelector('#slider-77');
        const $valueLabel = $slider.shadowRoot.querySelector('.value-label');
        assert.ok($valueLabel);
    });

    QUnit.test('generate-labels="true" ----> min label should have 0', (assert) => {
        const $slider = document.querySelector('#slider-77');
        const $min = $slider.shadowRoot.querySelector('.min-label');
        assert.deepEqual($min.textContent, '0');
    });

    QUnit.test('generate-labels="true" ----> max label should have 100', (assert) => {
        const $slider = document.querySelector('#slider-77');
        const $max = $slider.shadowRoot.querySelector('.max-label');
        assert.deepEqual($max.textContent, '100');
    });

    QUnit.test('generate-labels="true" ----> value label should have 77', (assert) => {
        const $slider = document.querySelector('#slider-80');
        const $valueLabel = $slider.shadowRoot.querySelector('.value-label');
        assert.deepEqual($valueLabel.textContent, '77');
    });

    QUnit.test('generate-labels="true", change min to 1 via API ----> min label should have 0', (assert) => {
        const $slider = document.querySelector('#slider-77');
        $slider.min = 1;
        const $min = $slider.shadowRoot.querySelector('.min-label');
        assert.deepEqual($min.textContent, '1');
    });

    QUnit.test('generate-labels="true", change min to 1 via attribute ----> min label should have 0', (assert) => {
        const $slider = document.querySelector('#slider-77');
        $slider.setAttribute('min', '1');
        const $min = $slider.shadowRoot.querySelector('.min-label');
        assert.deepEqual($min.textContent, '1');
    });

    QUnit.test('generate-labels="true", change max to 99 via API ----> max label should have 99', (assert) => {
        const $slider = document.querySelector('#slider-77');
        $slider.max = 99;
        const $max = $slider.shadowRoot.querySelector('.max-label');
        assert.deepEqual($max.textContent, '99');
    });

    QUnit.test('generate-labels="true", change max to 99 via attribute ----> max label should have 99', (assert) => {
        const $slider = document.querySelector('#slider-77');
        $slider.setAttribute('max', '99');
        const $max = $slider.shadowRoot.querySelector('.max-label');
        assert.deepEqual($max.textContent, '99');
    });

    QUnit.test('generate-labels="true", change value to 50 via API ----> value label should have 50', (assert) => {
        const $slider = document.querySelector('#slider-80');
        $slider.value = 50;
        const $valueLabel = $slider.shadowRoot.querySelector('.value-label');
        assert.deepEqual($valueLabel.textContent, '50');
    });

    QUnit.test('generate-labels="true", change value to 50 via attribute ----> value label should have 50', (assert) => {
        const $slider = document.querySelector('#slider-80');
        $slider.setAttribute('value', '50');
        const $valueLabel = $slider.shadowRoot.querySelector('.value-label');
        assert.deepEqual($valueLabel.textContent, '50');
    });

    QUnit.test('generate-labels="true", arrow right ----> value label should have 78', (assert) => {
        const $slider = document.querySelector('#slider-80');

        const $pointer = $slider.shadowRoot.querySelector('.pointer');
        $pointer.dispatchEvent(new KeyboardEvent('keydown', {
            view: window,
            bubbles: true,
            cancelable: true,
            key: 'ArrowRight',
        }));

        const $valueLabel = $slider.shadowRoot.querySelector('.value-label');
        assert.deepEqual($valueLabel.textContent, '78');
    });
});

