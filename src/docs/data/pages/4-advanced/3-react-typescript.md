## Usage with React & TypeScript

The range slider can also be used in React applications. 

Install the package from npm:

```js
npm i toolcool-range-slider
```

Then it can be used like this:

```typescript
import 'toolcool-range-slider';

const RangeSliderExample = () => {

    return (
        <tc-range-slider />
    )
};

export default RangeSliderExample;
```

Event listener example:

```typescript
import { useEffect, useRef } from 'react';
import { RangeSlider } from 'toolcool-range-slider';
import 'toolcool-range-slider';

const RangeSliderExample = () => {

  const sliderRef = useRef<RangeSlider>(null);

  useEffect(() => {

      const slider = sliderRef.current;

      const onChange = (evt: Event) => {
          const customEvent = evt as CustomEvent;
          console.log(customEvent.detail.value);
      };

      slider?.addEventListener('change', onChange);

      return () => {
        slider?.removeEventListener('change', onChange);
      };
  }, []);

  return (
    <div>
      <tc-range-slider ref={ sliderRef } />
    </div>
  );
}

export default RangeSliderExample;
```

