import GL = WebGLRenderingContextStrict;
import GL2 = WebGL2RenderingContextStrict;
declare const gl: GL;
declare const x: GL.BlendFuncSrcFactor;
declare const OES_standard_derivatives2: GL.OES_standard_derivatives | null;
declare function attachRenderbufferToFramebuffer(gl: GL, fb: WebGLFramebuffer, rb: WebGLRenderbuffer): void;
declare function testWebGL1or2(gl: GL | GL2): void;
declare const unknown: {};
