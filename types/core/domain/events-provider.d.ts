export declare const sendPointerClickedEvent: ($component: HTMLElement, $pointer: HTMLElement) => void;
export declare const sendMouseDownEvent: ($component: HTMLElement, evt: MouseEvent) => void;
export declare const sendMouseUpEvent: ($component: HTMLElement, evt: MouseEvent) => void;
export declare const sendOnKeyDownEvent: ($component: HTMLElement, evt: KeyboardEvent) => void;
export interface IChangeEventDetail {
    value?: number | string | undefined;
    value2?: number | string | undefined;
}
export declare const sendChangeEvent: ($component: HTMLElement, value1: string | number | undefined, value2: string | number | undefined) => void;
//# sourceMappingURL=events-provider.d.ts.map