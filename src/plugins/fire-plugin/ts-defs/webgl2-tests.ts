window.onload = () => {
    const canvas: HTMLCanvasElement = document.createElement("canvas");
    canvas.getContext('webgl') as any as WebGLRenderingContextStrict;
    const gl: WebGL2RenderingContext = canvas.getContext("webgl2", { antialias: false })! as any as WebGL2RenderingContext;

    if (gl === null) {
        console.log("WebGL2 not available");
        return;
    }

    const maxsize = gl.getParameter(gl.MAX_3D_TEXTURE_SIZE);
    console.log(`Attempting to create super useful, empty, NPOT 3D texture of size ${maxsize} x 13 x 5...`);

    const texture = gl.createTexture();

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_3D, texture);
    gl.texImage3D(gl.TEXTURE_3D, 0, gl.R32F, maxsize, 13, 5, 0, gl.RED, gl.FLOAT, null);

    if (gl.getError() !== gl.NO_ERROR) {
        console.log("Oh noes!");
    } else {
        console.log("Success!");
    }

    gl.deleteTexture(texture);

    gl.texParameteri(gl.TEXTURE_3D, gl.TEXTURE_WRAP_R, gl.CLAMP_TO_EDGE);

    const etc = gl.getExtension('WEBGL_compressed_texture_etc')!;
    gl.compressedTexImage3D(gl.TEXTURE_3D, 0, etc.COMPRESSED_RGB8_ETC2, 1024, 1024, 1024, 0, 0, 0);
};

import GL = WebGLRenderingContextStrict;
import GL2 = WebGL2RenderingContextStrict;

declare const gl: GL;
gl.texImage2D(0 as any, 0, gl.RGBA, 1024, 1024, 0, gl.RGBA, gl.FLOAT, new Float32Array([]));
if (gl.getExtension('OES_texture_float')) {
    gl.texImage2D(0 as any, 0, gl.RGBA, 1024, 1024, 0, gl.RGBA, gl.FLOAT, new Float32Array([]));
}
const x: GL.BlendFuncSrcFactor = gl.getParameter(gl.BLEND_SRC_RGB);
gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

const OES_standard_derivatives2 = gl.getExtension('OES_standard_derivatives');
if (OES_standard_derivatives2) {
    const go = gl.getParameter(OES_standard_derivatives2.FRAGMENT_SHADER_DERIVATIVE_HINT_OES);
}
gl.texImage2D(gl.TEXTURE_2D, 0, gl.ALPHA, 64, 64, 0, gl.ALPHA, gl.UNSIGNED_BYTE, null);

function attachRenderbufferToFramebuffer(gl: GL, fb: WebGLFramebuffer, rb: WebGLRenderbuffer) {
    const currentFramebuffer = gl.getParameter(gl.FRAMEBUFFER_BINDING);
    currentFramebuffer !== fb && gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, rb);
    currentFramebuffer !== fb && gl.bindFramebuffer(gl.FRAMEBUFFER, currentFramebuffer);
}

// a variable which is either GL or GL2 should allow common methods to be called.
function testWebGL1or2(gl: GL | GL2) {
    gl.bufferData(gl.ARRAY_BUFFER, 12, gl.STREAM_DRAW);

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);

    const buffer = gl.createBuffer();
    console.log(buffer instanceof WebGLBuffer);

    new WebGLBuffer();
}

// instanceof should work with GL and GL2; and type narrowing should work as expected
declare const unknown: {};
if (unknown instanceof WebGLRenderingContext) {
    const gl: WebGLRenderingContext = unknown;
}
if (unknown instanceof WebGL2RenderingContext) {
    const gl2: WebGL2RenderingContext = unknown;
}
