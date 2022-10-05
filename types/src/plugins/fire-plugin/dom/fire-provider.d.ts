export interface IFireSettings {
    fireBaseColor1: number[];
    fireBaseColor2: number[];
    fireShape: number;
    fireSpeed: number;
    fireStrength: number;
    fireDetalization: number;
    fireWidth: number;
    fireHeight: number;
}
export interface IFire {
    $canvas: HTMLCanvasElement;
    setColors: (_color1: number[], _color2: number[]) => void;
}
export declare const createFire: ($container: HTMLElement, fire: IFireSettings) => (IFire | null);
