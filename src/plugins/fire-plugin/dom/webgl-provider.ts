/**
 * get WebGL context
 */
export const getContext = ($canvas: HTMLCanvasElement) => {

  // edge still needs 'experimental-webgl'
  const context = $canvas.getContext('webgl') || $canvas.getContext('experimental-webgl');

  if(!context ){
    console.error('This browser doesn\'t support WebGL.');
  }

  return context;
};


/**
 * create a shader
 */
// @ts-ignore
export const createShader = (gl: WebGLRenderingContextStrict, shaderType: GL.ShaderType, shaderCode: string) => {

  const shader = gl.createShader(shaderType);
  if(!shader) return null;

  gl.shaderSource(shader, shaderCode);
  gl.compileShader(shader);

  if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)){
    console.error(`Error compiling shader: ${gl.getShaderInfoLog(shader)}`);
    return null;
  }

  return shader;
};

/**
 * create program and attach shaders
 */
export const createProgram = (gl: WebGLRenderingContextStrict, shaders: WebGLShader[]) => {

  const program = gl.createProgram();
  if(!program) return null;

  for(let i=0; i<shaders.length; i++){
    gl.attachShader(program, shaders[i]);
  }

  gl.linkProgram(program);

  if(!gl.getProgramParameter(program, gl.LINK_STATUS)){
    console.error(`Error linking program: ${gl.getProgramInfoLog(program)}`);
    return null;
  }

  // for debug only
  gl.validateProgram(program);

  /*if(!gl.getProgramParameter(program, gl.VALIDATE_STATUS)){
    console.error(`Error validation program: ${gl.getProgramInfoLog(program)}`);
    return null;
  }*/

  return program;
};

/**
 * create shader attribute
 */
export const createShaderAttribute = (
  gl: WebGLRenderingContextStrict,
  program: WebGLProgram,
  attrName: string,
  elementsNum: 1 | 2 | 3 | 4,
  vertexSize: number,
  offset: number,
  // eslint-disable-next-line
  data: any) => {

  const vertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

  if(data) {
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
  }

  const attrLocation = gl.getAttribLocation(program, attrName);

  gl.vertexAttribPointer(
    attrLocation, // attribute location
    elementsNum, // number of elements per attribute (x, y) or (x, y, z) etc.
    gl.FLOAT, // 32 bit floats
    false,
    vertexSize * Float32Array.BYTES_PER_ELEMENT, // size of an individual vertex
    offset * Float32Array.BYTES_PER_ELEMENT // offset from the beginning of a single vertex to this attribute
  );

  gl.enableVertexAttribArray(attrLocation);

  return attrLocation;
};

