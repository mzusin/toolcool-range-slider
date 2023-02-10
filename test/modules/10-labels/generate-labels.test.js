QUnit.module('Generated Labels', (hooks) => {
  initFixtures(hooks, `
     <toolcool-range-slider id="slider-1"></toolcool-range-slider>
     <toolcool-range-slider data="1, 2, 3" id="slider-71"></toolcool-range-slider>
     <toolcool-range-slider id="slider-77" generate-labels="true"></toolcool-range-slider>
     <toolcool-range-slider id="slider-78" generate-labels="false"></toolcool-range-slider>
     <toolcool-range-slider id="slider-79" generate-labels="test"></toolcool-range-slider>
     <toolcool-range-slider id="slider-80" generate-labels="true" value="77"></toolcool-range-slider>
     <toolcool-range-slider
              generate-labels="true"
              value="50"
              id="slider-81">
                <div slot="min-label" class="label-1"><label class="min-label"></label> px</div>
                <div slot="max-label" class="label-1"><label class="max-label"></label> px</div>
                <div slot="value-label" class="label-2"><label class="value-label"></label> px</div>
            </toolcool-range-slider>
     <toolcool-range-slider
              generate-labels="true"
              value1="50"
              value2="60"
              id="slider-106">
                <div slot="min-label" class="label-1"><label class="min-label"></label> px</div>
                <div slot="max-label" class="label-1"><label class="max-label"></label> px</div>
                <div slot="value-label" class="label-2"><label class="value-label"></label> px</div>
                <div slot="value2-label" class="label-2"><label class="value2-label"></label> px</div>
            </toolcool-range-slider>
     <toolcool-range-slider id="slider-107" generate-labels="true" value1="50" value2="60"></toolcool-range-slider>
  `);

  QUnit.test('add labels unit dynamically', (assert) => {
    const $slider = document.querySelector('#slider-80');
    $slider.units = '%';
    const $value1Label = $slider.shadowRoot.querySelector('.value1-label.generated-label');
    assert.equal($value1Label.textContent, '77%');
  });

  QUnit.test('add labels unit dynamically using "generateLabelsUnits" property', (assert) => {
    const $slider = document.querySelector('#slider-80');
    $slider.generateLabelsUnits = '%';
    const $value1Label = $slider.shadowRoot.querySelector('.value1-label.generated-label');
    assert.equal($value1Label.textContent, '77%');
  });

  QUnit.test('set labels text color dynamically', (assert) => {
    const $slider = document.querySelector('#slider-80');
    $slider.textColor = 'rgb(68, 85, 68)';
    const $value1Label = $slider.shadowRoot.querySelector('.value1-label.generated-label');
    assert.equal($value1Label.style.color, 'rgb(68, 85, 68)');
  });

  QUnit.test('set labels text color dynamically uisng "generateLabelsTextColor" property', (assert) => {
    const $slider = document.querySelector('#slider-80');
    $slider.generateLabelsTextColor = 'rgb(68, 85, 68)';
    const $value1Label = $slider.shadowRoot.querySelector('.value1-label.generated-label');
    assert.equal($value1Label.style.color, 'rgb(68, 85, 68)');
  });

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
    const done = assert.async();

    const $slider = document.querySelector('#slider-1');
    $slider.setAttribute('generate-labels', 'true');

    window.setTimeout(() => {
      assert.equal($slider.generateLabels, true);
      done();
    }, 10);
  });

  QUnit.test('change generateLabels via attribute to false', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-78');
    $slider.setAttribute('generate-labels', 'false');

    window.setTimeout(() => {
      assert.equal($slider.generateLabels, false);
      done();
    }, 10);
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
    const $valueLabel = $slider.shadowRoot.querySelector('.value1-label');
    assert.deepEqual($valueLabel, null);
  });

  QUnit.test('generate-labels="true" ----> max label should exist', (assert) => {
    const $slider = document.querySelector('#slider-77');
    const $valueLabel = $slider.shadowRoot.querySelector('.value1-label');
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
    const $valueLabel = $slider.shadowRoot.querySelector('.value1-label');
    assert.deepEqual($valueLabel.textContent, '77');
  });

  //  <toolcool-range-slider id="slider-107" generate-labels="true" value1="50" value2="60"></toolcool-range-slider>
  QUnit.test('generate-labels="true" ----> value 2 label should have 60', (assert) => {
    const $slider = document.querySelector('#slider-107');
    const $valueLabel = $slider.shadowRoot.querySelector('.value2-label');
    assert.deepEqual($valueLabel.textContent, '60');
  });

  QUnit.test('generate-labels="true", change min to 1 via API ----> min label should have 0', (assert) => {
    const $slider = document.querySelector('#slider-77');
    $slider.min = 1;
    const $min = $slider.shadowRoot.querySelector('.min-label');
    assert.deepEqual($min.textContent, '1');
  });

  QUnit.test('generate-labels="true", change min to 1 via attribute ----> min label should have 0', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-77');
    $slider.setAttribute('min', '1');
    const $min = $slider.shadowRoot.querySelector('.min-label');

    window.setTimeout(() => {
      assert.deepEqual($min.textContent, '1');
      done();
    }, 10);
  });

  QUnit.test('generate-labels="true", change max to 99 via API ----> max label should have 99', (assert) => {
    const $slider = document.querySelector('#slider-77');
    $slider.max = 99;
    const $max = $slider.shadowRoot.querySelector('.max-label');
    assert.deepEqual($max.textContent, '99');
  });

  QUnit.test('generate-labels="true", change max to 99 via attribute ----> max label should have 99', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-77');
    $slider.setAttribute('max', '99');
    const $max = $slider.shadowRoot.querySelector('.max-label');

    window.setTimeout(() => {
      assert.deepEqual($max.textContent, '99');
      done();
    }, 10);
  });

  QUnit.test('generate-labels="true", change value to 50 via API ----> value label should have 50', (assert) => {
    const $slider = document.querySelector('#slider-80');
    $slider.value = 50;
    const $valueLabel = $slider.shadowRoot.querySelector('.value1-label');
    assert.deepEqual($valueLabel.textContent, '50');
  });

  QUnit.test('generate-labels="true", change value to 50 via attribute ----> value label should have 50', (assert) => {
    const done = assert.async();

    const $slider = document.querySelector('#slider-80');
    $slider.setAttribute('value', '50');
    const $valueLabel = $slider.shadowRoot.querySelector('.value1-label');

    window.setTimeout(() => {
      assert.deepEqual($valueLabel.textContent, '50');
      done();
    }, 10);
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

    const $valueLabel = $slider.shadowRoot.querySelector('.value1-label');
    assert.deepEqual($valueLabel.textContent, '78');
  });

  QUnit.test('generateLabelsFormat, arrow right ----> value label should have $78.00', (assert) => {
    const $slider = document.querySelector('#slider-80');
    $slider.generateLabelsFormat = (value) => {
      if(value === undefined) return '';
      return '$' + Number(value).toFixed(2);
    };

    const $pointer = $slider.shadowRoot.querySelector('.pointer');
    $pointer.dispatchEvent(new KeyboardEvent('keydown', {
      view: window,
      bubbles: true,
      cancelable: true,
      key: 'ArrowRight',
    }));

    const $valueLabel = $slider.shadowRoot.querySelector('.value1-label');
    assert.deepEqual($valueLabel.textContent, '$78.00');
  });

  QUnit.test('generateLabelsFormat, arrow right ----> min should be $0.00', (assert) => {
    const $slider = document.querySelector('#slider-80');
    $slider.generateLabelsFormat = (value) => {
      if(value === undefined) return '';
      return '$' + Number(value).toFixed(2);
    };

    const $pointer = $slider.shadowRoot.querySelector('.pointer');
    $pointer.dispatchEvent(new KeyboardEvent('keydown', {
      view: window,
      bubbles: true,
      cancelable: true,
      key: 'ArrowRight',
    }));

    const $minLabel = $slider.shadowRoot.querySelector('.min-label');
    assert.deepEqual($minLabel.textContent, '$0.00');
  });

  QUnit.test('generateLabelsFormat, arrow right ----> max should be $100.00', (assert) => {
    const $slider = document.querySelector('#slider-80');
    $slider.generateLabelsFormat = (value) => {
      if(value === undefined) return '';
      return '$' + Number(value).toFixed(2);
    };

    const $pointer = $slider.shadowRoot.querySelector('.pointer');
    $pointer.dispatchEvent(new KeyboardEvent('keydown', {
      view: window,
      bubbles: true,
      cancelable: true,
      key: 'ArrowRight',
    }));

    const $maxLabel = $slider.shadowRoot.querySelector('.max-label');
    assert.deepEqual($maxLabel.textContent, '$100.00');
  });

});
