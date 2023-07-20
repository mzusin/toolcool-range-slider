## Usage with Next.js

The range slider can also be added to Next.js applications as follows. 


```tsx
import Script from 'next/script';

export default function Home() {

    return (
        <main>
            <Script src="https://cdn.jsdelivr.net/npm/toolcool-range-slider/dist/toolcool-range-slider.min.js" />
            <div>
                <tc-range-slider value={ 0 } />
            </div>
        </main>
    )
}
```
