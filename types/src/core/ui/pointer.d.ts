export interface IPointer {
    readonly percent: number;
    readonly $pointer: HTMLElement;
    updatePosition: (percent: number, leftWall: number | undefined, rightWall: number | undefined, type: string, rightToLeft: boolean, bottomToTop: boolean) => void;
    disabled: boolean;
    isClicked: ($target: HTMLElement) => boolean;
    setCallbacks: (arrowLeft: (pointerIndex: number) => void, arrowRight: (pointerIndex: number) => void, arrowUp: (pointerIndex: number) => void, arrowDown: (pointerIndex: number) => void) => void;
    setAttr: (key: string, value: string | null | undefined) => void;
    getAttr: (key: string) => string | null;
    destroy: () => void;
}
export declare const Pointer: ($component: HTMLElement, $pointer: HTMLElement, index: number) => IPointer;
