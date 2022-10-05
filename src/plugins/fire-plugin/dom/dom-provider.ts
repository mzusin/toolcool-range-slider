/**
 * create canvas dynamically
 */
export const createCanvas = ($box: HTMLElement, fireWidth: number, fireHeight: number) => {

  // create canvas element
  const $canvas = document.createElement('canvas') as HTMLCanvasElement;
  $canvas.classList.add('fire-canvas');

  $canvas.width = fireWidth;
  $canvas.height = fireHeight;
  $canvas.style.width = `${ fireWidth }px`;
  $canvas.style.height = `${ fireHeight }px`;

  // add the canvas to the box
  $box.prepend($canvas);

  return $canvas;
};