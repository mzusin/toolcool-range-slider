## TypeScript Usage


```typescript
import 'toolcool-range-slider';
import RangeSlider from 'toolcool-range-slider';

// ...

const $slider = document.getElementById('slider-1') as RangeSlider;

$slider.addEventListener('change', (evt: Event) => {
    const customEvent = evt as CustomEvent;
    const value = Math.round(evt.detail.value);
    console.log(value);
});

$slider.value = 10;
```


## Usage with React and TypeScript

```typescript
import 'toolcool-range-slider';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'toolcool-range-slider': any;
        }
    }
}

const RangeSliderExample = () => {

    const rangeSliderRef = useRef<HTMLElement>();

    useEffect(() => {

        const slider = rangeSliderRef.current;

        const onChange = (evt: Event) => {
            const customEvent = evt as CustomEvent;
            const value = Math.round(evt.detail.value);
            console.log(value);
        };

        slider?.addEventListener('change', onChange);

        return () => {
          slider?.removeEventListener('change', onChange);
        };
    }, []);

    return (
        <toolcool-range-slider ref={ rangeSliderRef } />;
    )
};

export default RangeSliderExample;
```