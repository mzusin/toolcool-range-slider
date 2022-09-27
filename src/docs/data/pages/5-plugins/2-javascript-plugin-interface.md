# JavaScript Plugin Interface

The full interface of the plugin looks like this:

```typescript
export interface IPlugin {
  readonly name: string,

  init?: (
    $component: HTMLElement,
    requestUpdate: () => void,
    setters: IPluginSetters,
    getters: IPluginGetters,
  ) => void;

  update?: (data: IPluginUpdateData) => void;

  onAttrChange?: (attrName: string, newValue: string) =>  void;

  gettersAndSetters?: ({
    name: PropertyKey,
    attributes:  PropertyDescriptor & ThisType<any>
  })[];

  css?: string,

  destroy?: () => void;
}
```