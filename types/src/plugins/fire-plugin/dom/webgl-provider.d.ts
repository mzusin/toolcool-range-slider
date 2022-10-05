/**
 * get WebGL context
 */
export declare const getContext: ($canvas: HTMLCanvasElement) => RenderingContext | null;
/**
 * create a shader
 */
export declare const createShader: (gl: WebGLRenderingContextStrict, shaderType: GL.ShaderType, shaderCode: string) => WebGLShader | null;
/**
 * create program and attach shaders
 */
export declare const createProgram: (gl: WebGLRenderingContextStrict, shaders: WebGLShader[]) => WebGLProgram | null;
/**
 * create shader attribute
 */
export declare const createShaderAttribute: (gl: WebGLRenderingContextStrict, program: WebGLProgram, attrName: string, elementsNum: 1 | 2 | 3 | 4, vertexSize: number, offset: number, data: any) => number;
