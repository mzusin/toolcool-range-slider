import { createCanvas } from './dom-provider';
import { createProgram, createShader, createShaderAttribute, getContext } from './webgl-provider';
import vertex from '../shaders/vertex.glsl';
import fireFragment from '../shaders/fire-fragment.glsl';

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

export const createFire = ($container: HTMLElement, fire: IFireSettings) : (IFire | null) => {
  // animation start time
  let startTime: number | undefined = undefined;

  // used to pause fragment shader;
  // the requestAnimationFrame is still running
  const isRunning = true;

  // if true, the whole animation should be stopped;
  // used when the whole program should be replaced with another instance
  const stop = false;

  // generate canvas element (if not generated before)
  const $canvas = createCanvas($container, fire.fireWidth, fire.fireHeight);
  if(!$canvas) return null;

  // create webgl context
  // eslint-disable-next-line
  const gl = getContext($canvas) as any as WebGLRenderingContextStrict;
  if(!gl) return null;

  // define webgl viewport
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  // init shaders
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertex);
  if(!vertexShader) return null;

  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fireFragment);
  if(!fragmentShader) return null;

  // compile shader
  const program = createProgram(gl, [vertexShader, fragmentShader]);
  if(!program) return null;

  gl.useProgram(program);

  // init position attribute: 3 dots by (x, y)
  const aPosition = new Float32Array([
    -1,-1,  1, 1,
    1,-1, -1,-1,
    1, 1, -1, 1]);
  createShaderAttribute(gl, program, 'aPosition', 2, 0, 0, aPosition);

  // init resolution uniform
  const uResolution = gl.getUniformLocation(program, 'uResolution');
  gl.uniform2fv(uResolution, new Float32Array([gl.drawingBufferWidth, gl.drawingBufferHeight]));

  // init time uniform
  const uTime = gl.getUniformLocation(program, 'uTime');

  // init 'isRunning' uniform
  const uRunning = gl.getUniformLocation(program, 'uRunning');

  const uBaseColor1 = gl.getUniformLocation(program, 'uBaseColor1');
  gl.uniform3fv(uBaseColor1, new Float32Array(fire.fireBaseColor1));

  const uBaseColor2 = gl.getUniformLocation(program, 'uBaseColor2');
  gl.uniform3fv(uBaseColor2, new Float32Array(fire.fireBaseColor2));

  const uFireShape = gl.getUniformLocation(program, 'uFireShape');
  gl.uniform1f(uFireShape, fire.fireShape);

  const uSpeed = gl.getUniformLocation(program, 'uSpeed');
  gl.uniform1f(uSpeed, fire.fireSpeed);

  const uFireStrength = gl.getUniformLocation(program, 'uFireStrength');
  gl.uniform1f(uFireStrength, fire.fireStrength);

  const uFireDetalization = gl.getUniformLocation(program, 'uFireDetalization');
  gl.uniform1f(uFireDetalization, fire.fireDetalization);

  /**
   * draw
   */
  const draw = (timestamp: number) => {

    if(timestamp === undefined) return;

    if(!stop){

      // the first call
      if(startTime === undefined){
        startTime = timestamp;
      }

      const uTimeValue = (timestamp - startTime) / 1000; // seconds

      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(program);
      gl.uniform1f(uTime, timestamp / 1000);
      gl.uniform1f(uRunning, isRunning ? 1 : 0);
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      // if the time > 10 min -> reset the timer
      if(uTimeValue > 10 * 60) {
        startTime = undefined;
      }

      requestAnimationFrame(draw);
    }
  };
  requestAnimationFrame(draw);

  return {
    $canvas,

    setColors: (_color1: number[], _color2: number[]) => {
      gl.uniform3fv(uBaseColor1, new Float32Array(_color1));
      gl.uniform3fv(uBaseColor2, new Float32Array(_color2));
    },
  };
};