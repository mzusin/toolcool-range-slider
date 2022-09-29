# "Getters" Object Interface

```typescript
export interface IPluginGetters {
  getPercents: () => number[];
  getValues: () => (string | number | undefined)[];
  getPointerElements: () => HTMLElement[];

  getMin: () => number;
  getMax: () => number;

  getTextMin: () => string | number;
  getTextMax: () => string | number;

  getStep: () => TStep;
  getData: () => TData;
  getType: () => string;
  getRound: () => number;

  isRightToLeft: () => boolean;
  isBottomToTop: () => boolean;
  isDisabled: () => boolean;
  isKeyboardDisabled: () => boolean;

  isPointersOverlap: () => boolean;
  isRangeDraggingEnabled: () => boolean;
  getPointersMinDistance: () => number;
  getPointersMaxDistance: () => number;
}
```