# "Setters" Object Interface

```typescript
export interface IPluginSetters {
  setValues: (values: (string | number | undefined)[]) => void;
  setMin: (min: number | string | undefined | null) => void;
  setMax: (max: number | string | undefined | null) => void;
  setStep: (step: TStep) => void;
  setRound: (val: number) => void;
  setType: (val: string) => void;
  setData: (val: TData) => void;

  setPointersOverlap: (val: boolean) => void;
  setPointersMinDistance: (val: number) => void;
  setPointersMaxDistance: (val: number) => void;
  setRangeDragging: (val: boolean) => void;

  setDisabled: (val: boolean) => void;
  setKeyboardDisabled: (val: boolean) => void;

  setRightToLeft: (val: boolean) => void;
  setBottomToTop: (val: boolean) => void;
}
```