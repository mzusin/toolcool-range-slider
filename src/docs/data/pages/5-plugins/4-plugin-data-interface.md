# Plugin Data Interface

The structure of the data object that is passed to the **update** hook:

```typescript
export interface IPluginUpdateData {
  percents: number[],
  values: (string | number | undefined)[],
  $pointers: HTMLElement[],

  min: number;
  max: number;
  round: number;

  step: TStep;
  data: TData;
  type: string;

  textMin: number | string | undefined;
  textMax: number | string | undefined;

  rightToLeft: boolean;
  bottomToTop: boolean;

  pointersOverlap: boolean;
  pointersMinDistance: number;
  pointersMaxDistance: number;
  rangeDragging: boolean;

  disabled: boolean;
  keyboardDisabled: boolean;
}
```