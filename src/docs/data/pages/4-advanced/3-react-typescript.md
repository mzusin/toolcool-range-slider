## Usage with React & TypeScript

The range slider can also be used in React applications. 

Install the package from npm:

```js
npm i toolcool-range-slider
```

First **tc-range-slider** html element should be declared as follows:

```typescript
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'tc-range-slider': any;
        }
    }
}
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
import 'toolcool-range-slider';

const RangeSliderExample = () => {

    const rangeSliderRef = useRef<HTMLElement>();

    useEffect(() => {

        const slider = rangeSliderRef.current;

        const onChange = (evt: Event) => {
            const customEvent = evt as CustomEvent;
            console.log(evt.detail.value);
        };

        slider?.addEventListener('change', onChange);

        return () => {
          slider?.removeEventListener('change', onChange);
        };
    }, []);

    return (
        <tc-range-slider ref={ rangeSliderRef } />;
    )
};

export default RangeSliderExample;
```
