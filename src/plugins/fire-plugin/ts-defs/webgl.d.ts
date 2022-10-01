/**
 * Strict typings for WebGLRenderingContext, manually written from the spec.
 *
 * The [SharedArrayBuffer] attribute indicates that the view can be backed by a SharedArrayBuffer.
 * By default, ArrayBufferView parameters can not be a view of a SharedArrayBuffer, and will throw an exception in that case.
 *
 * USAGE: Because the built-in WebGLRenderingContext cannot be overriden, this type is called `WebGLRenderingContextStrict`.
 * You need to cast the context once you have it: `const gl = canvas.getContext('webgl') as any as WebGLRenderingContextStrict`
 */
// tslint:disable:max-line-length
// tslint:disable:typedef-whitespace
// tslint:disable:unified-signatures

// type GLboolean = boolean; // WebIDL: boolean;
// type GLbitfield = number; // WebIDL: unsigned long
// type GLbyte = number; // WebIDL: byte                   /* 'byte' should be a signed 8 bit type. */
// type GLshort = number; // WebIDL: short
// type GLint = number; // WebIDL: long
// type GLsizei = number; // WebIDL: long
// type GLintptr = number; // WebIDL: long long
// type GLsizeiptr = number; // WebIDL: long long
// type GLubyte = number; // ideally unsigned byte. WebIDL: octet /* 'octet' should be an unsigned 8 bit type. */
// type GLushort = number; // WebIDL: unsigned short
// type GLuint = number; // WebIDL: unsigned long
// type GLfloat = number; // WebIDL: unrestricted float
// type GLclampf = number; // WebIDL: unrestricted float
type DOMString = string;

interface WebGLObject {
	__WebGLObjectBrand: string;
}

interface WebGLBuffer extends WebGLObject {
	__WebGLObjectBrand: 'WebGLBuffer';
}
// declare var WebGLBuffer: {
// 	prototype: WebGLBuffer;
// 	new(_: never): WebGLBuffer;
// }

interface WebGLFramebuffer extends WebGLObject {
	__WebGLObjectBrand: 'WebGLFramebuffer';
}
// declare var WebGLFramebuffer: {
// 	prototype: WebGLFramebuffer;
// 	new(_: never): WebGLFramebuffer;
// }

interface WebGLProgram extends WebGLObject {
	__WebGLObjectBrand: 'WebGLProgram';
}
// declare var WebGLProgram: {
// 	prototype: WebGLProgram;
// 	new(_: never): WebGLProgram;
// }

interface WebGLRenderbuffer extends WebGLObject {
	__WebGLObjectBrand: 'WebGLRenderbuffer';
}
// declare var WebGLRenderbuffer: {
// 	prototype: WebGLRenderbuffer;
// 	new(_: never): WebGLRenderbuffer;
// }

interface WebGLShader extends WebGLObject {
	__WebGLObjectBrand: 'WebGLShader';
}
// declare var WebGLShader: {
// 	prototype: WebGLShader;
// 	new(_: never): WebGLShader;
// }

interface WebGLTexture extends WebGLObject {
	__WebGLObjectBrand: 'WebGLTexture';
}
// declare var WebGLTexture: {
// 	prototype: WebGLTexture;
// 	new(_: never): WebGLTexture;
// }

interface WebGLUniformLocation {
	__WebGLObjectBrand: 'WebGLUniformLocation';
}
// declare var WebGLUniformLocation: {
// 	prototype: WebGLUniformLocation;
// 	new(_: never): WebGLUniformLocation;
// }

// declare var WebGLActiveInfo: {
// 	prototype: WebGLActiveInfo;
// 	new(_: never): WebGLActiveInfo;
// }

interface WebGLShaderPrecisionFormat {
    readonly rangeMin: GLint;
    readonly rangeMax: GLint;
    readonly precision: GLint;
}

declare namespace WebGLRenderingContextStrict {
	interface WebGLContextAttributes {
		alpha: GLboolean; // = true
		depth: GLboolean; // = true
		stencil: GLboolean; // = false
		antialias: GLboolean; // = true
		premultipliedAlpha: GLboolean; // = true
		preserveDrawingBuffer: GLboolean; // = false
		powerPreference: WebGLPowerPreference; // = "default"
		failIfMajorPerformanceCaveat: GLboolean; // = false
	}
	interface WebGLActiveInfo<T = any> {
		readonly size: GLint;
		readonly type: T;
		readonly name: DOMString;
	}
	// interface GLConst {
	// 	__brandGlConst: true
	// }
	type GLenum<S extends string> = number & { __brand: S };
	interface Constants {
		/* ClearBufferMask: Used as ORed bits, so need to be actual numbers: */
		readonly DEPTH_BUFFER_BIT:                0x00000100;
		readonly STENCIL_BUFFER_BIT:              0x00000400;
		readonly COLOR_BUFFER_BIT:                0x00004000;

		/* BeginMode */
		readonly POINTS:                          /* 0x0000 */ GLenum<'POINTS'>;
		readonly LINES:                           /* 0x0001 */ GLenum<'LINES'>;
		readonly LINE_LOOP:                       /* 0x0002 */ GLenum<'LINE_LOOP'>;
		readonly LINE_STRIP:                      /* 0x0003 */ GLenum<'LINE_STRIP'>;
		readonly TRIANGLES:                       /* 0x0004 */ GLenum<'TRIANGLES'>;
		readonly TRIANGLE_STRIP:                  /* 0x0005 */ GLenum<'TRIANGLE_STRIP'>;
		readonly TRIANGLE_FAN:                    /* 0x0006 */ GLenum<'TRIANGLE_FAN'>;

		/* AlphaFunction (not supported in ES20) */
		/*      NEVER */
		/*      LESS */
		/*      EQUAL */
		/*      LEQUAL */
		/*      GREATER */
		/*      NOTEQUAL */
		/*      GEQUAL */
		/*      ALWAYS */

		/* BlendingFactorDest */
		readonly ZERO:                            /* 0 */ GLenum<'ZERO'>;
		readonly ONE:                             /* 1 */ GLenum<'ONE'>;
		readonly SRC_COLOR:                       /* 0x0300 */ GLenum<'SRC_COLOR'>;
		readonly ONE_MINUS_SRC_COLOR:             /* 0x0301 */ GLenum<'ONE_MINUS_SRC_COLOR'>;
		readonly SRC_ALPHA:                       /* 0x0302 */ GLenum<'SRC_ALPHA'>;
		readonly ONE_MINUS_SRC_ALPHA:             /* 0x0303 */ GLenum<'ONE_MINUS_SRC_ALPHA'>;
		readonly DST_ALPHA:                       /* 0x0304 */ GLenum<'DST_ALPHA'>;
		readonly ONE_MINUS_DST_ALPHA:             /* 0x0305 */ GLenum<'ONE_MINUS_DST_ALPHA'>;

		/* BlendingFactorSrc */
		/*      ZERO */
		/*      ONE */
		readonly DST_COLOR:                       /* 0x0306 */ GLenum<'DST_COLOR'>;
		readonly ONE_MINUS_DST_COLOR:             /* 0x0307 */ GLenum<'ONE_MINUS_DST_COLOR'>;
		readonly SRC_ALPHA_SATURATE:              /* 0x0308 */ GLenum<'SRC_ALPHA_SATURATE'>;
		/*      SRC_ALPHA */
		/*      ONE_MINUS_SRC_ALPHA */
		/*      DST_ALPHA */
		/*      ONE_MINUS_DST_ALPHA */

		/* BlendEquationSeparate */
		readonly FUNC_ADD:                        /* 0x8006 */ GLenum<'FUNC_ADD'>;
		readonly BLEND_EQUATION:                  /* 0x8009 */ GLenum<'BLEND_EQUATION'>;
		readonly BLEND_EQUATION_RGB:              /* 0x8009 */ GLenum<'BLEND_EQUATION_RGB'>;  /* same as BLEND_EQUATION */
		readonly BLEND_EQUATION_ALPHA:            /* 0x883D */ GLenum<'BLEND_EQUATION_ALPHA'>;

		/* BlendSubtract */
		readonly FUNC_SUBTRACT:                   /* 0x800A */ GLenum<'FUNC_SUBTRACT'>;
		readonly FUNC_REVERSE_SUBTRACT:           /* 0x800B */ GLenum<'FUNC_REVERSE_SUBTRACT'>;

		/* Separate Blend Functions */
		readonly BLEND_DST_RGB:                   /* 0x80C8 */ GLenum<'BLEND_DST_RGB'>;
		readonly BLEND_SRC_RGB:                   /* 0x80C9 */ GLenum<'BLEND_SRC_RGB'>;
		readonly BLEND_DST_ALPHA:                 /* 0x80CA */ GLenum<'BLEND_DST_ALPHA'>;
		readonly BLEND_SRC_ALPHA:                 /* 0x80CB */ GLenum<'BLEND_SRC_ALPHA'>;
		readonly CONSTANT_COLOR:                  /* 0x8001 */ GLenum<'CONSTANT_COLOR'>;
		readonly ONE_MINUS_CONSTANT_COLOR:        /* 0x8002 */ GLenum<'ONE_MINUS_CONSTANT_COLOR'>;
		readonly CONSTANT_ALPHA:                  /* 0x8003 */ GLenum<'CONSTANT_ALPHA'>;
		readonly ONE_MINUS_CONSTANT_ALPHA:        /* 0x8004 */ GLenum<'ONE_MINUS_CONSTANT_ALPHA'>;
		readonly BLEND_COLOR:                     /* 0x8005 */ GLenum<'BLEND_COLOR'>;

		/* Buffer Objects */
		readonly ARRAY_BUFFER:                    /* 0x8892 */ GLenum<'ARRAY_BUFFER'>;
		readonly ELEMENT_ARRAY_BUFFER:            /* 0x8893 */ GLenum<'ELEMENT_ARRAY_BUFFER'>;
		readonly ARRAY_BUFFER_BINDING:            /* 0x8894 */ GLenum<'ARRAY_BUFFER_BINDING'>;
		readonly ELEMENT_ARRAY_BUFFER_BINDING:    /* 0x8895 */ GLenum<'ELEMENT_ARRAY_BUFFER_BINDING'>;

		readonly STREAM_DRAW:                     /* 0x88E0 */ GLenum<'STREAM_DRAW'>;
		readonly STATIC_DRAW:                     /* 0x88E4 */ GLenum<'STATIC_DRAW'>;
		readonly DYNAMIC_DRAW:                    /* 0x88E8 */ GLenum<'DYNAMIC_DRAW'>;

		readonly BUFFER_SIZE:                     /* 0x8764 */ GLenum<'BUFFER_SIZE'>;
		readonly BUFFER_USAGE:                    /* 0x8765 */ GLenum<'BUFFER_USAGE'>;

		readonly CURRENT_VERTEX_ATTRIB:           /* 0x8626 */ GLenum<'CURRENT_VERTEX_ATTRIB'>;

		/* CullFaceMode */
		readonly FRONT:                           /* 0x0404 */ GLenum<'FRONT'>;
		readonly BACK:                            /* 0x0405 */ GLenum<'BACK'>;
		readonly FRONT_AND_BACK:                  /* 0x0408 */ GLenum<'FRONT_AND_BACK'>;

		/* DepthFunction */
		/*      NEVER */
		/*      LESS */
		/*      EQUAL */
		/*      LEQUAL */
		/*      GREATER */
		/*      NOTEQUAL */
		/*      GEQUAL */
		/*      ALWAYS */

		/* EnableCap */
		/* TEXTURE_2D */
		readonly CULL_FACE:                       /* 0x0B44 */ GLenum<'CULL_FACE'>;
		readonly BLEND:                           /* 0x0BE2 */ GLenum<'BLEND'>;
		readonly DITHER:                          /* 0x0BD0 */ GLenum<'DITHER'>;
		readonly STENCIL_TEST:                    /* 0x0B90 */ GLenum<'STENCIL_TEST'>;
		readonly DEPTH_TEST:                      /* 0x0B71 */ GLenum<'DEPTH_TEST'>;
		readonly SCISSOR_TEST:                    /* 0x0C11 */ GLenum<'SCISSOR_TEST'>;
		readonly POLYGON_OFFSET_FILL:             /* 0x8037 */ GLenum<'POLYGON_OFFSET_FILL'>;
		readonly SAMPLE_ALPHA_TO_COVERAGE:        /* 0x809E */ GLenum<'SAMPLE_ALPHA_TO_COVERAGE'>;
		readonly SAMPLE_COVERAGE:                 /* 0x80A0 */ GLenum<'SAMPLE_COVERAGE'>;

		/* ErrorCode */
		readonly NO_ERROR:                        /* 0 */ GLenum<'NO_ERROR'>;
		readonly INVALID_ENUM:                    /* 0x0500 */ GLenum<'INVALID_ENUM'>;
		readonly INVALID_VALUE:                   /* 0x0501 */ GLenum<'INVALID_VALUE'>;
		readonly INVALID_OPERATION:               /* 0x0502 */ GLenum<'INVALID_OPERATION'>;
		readonly OUT_OF_MEMORY:                   /* 0x0505 */ GLenum<'OUT_OF_MEMORY'>;

		/* FrontFaceDirection */
		readonly CW:                              /* 0x0900 */ GLenum<'CW'>;
		readonly CCW:                             /* 0x0901 */ GLenum<'CCW'>;

		/* GetPName */
		readonly LINE_WIDTH:                      /* 0x0B21 */ GLenum<'LINE_WIDTH'>;
		readonly ALIASED_POINT_SIZE_RANGE:        /* 0x846D */ GLenum<'ALIASED_POINT_SIZE_RANGE'>;
		readonly ALIASED_LINE_WIDTH_RANGE:        /* 0x846E */ GLenum<'ALIASED_LINE_WIDTH_RANGE'>;
		readonly CULL_FACE_MODE:                  /* 0x0B45 */ GLenum<'CULL_FACE_MODE'>;
		readonly FRONT_FACE:                      /* 0x0B46 */ GLenum<'FRONT_FACE'>;
		readonly DEPTH_RANGE:                     /* 0x0B70 */ GLenum<'DEPTH_RANGE'>;
		readonly DEPTH_WRITEMASK:                 /* 0x0B72 */ GLenum<'DEPTH_WRITEMASK'>;
		readonly DEPTH_CLEAR_VALUE:               /* 0x0B73 */ GLenum<'DEPTH_CLEAR_VALUE'>;
		readonly DEPTH_FUNC:                      /* 0x0B74 */ GLenum<'DEPTH_FUNC'>;
		readonly STENCIL_CLEAR_VALUE:             /* 0x0B91 */ GLenum<'STENCIL_CLEAR_VALUE'>;
		readonly STENCIL_FUNC:                    /* 0x0B92 */ GLenum<'STENCIL_FUNC'>;
		readonly STENCIL_FAIL:                    /* 0x0B94 */ GLenum<'STENCIL_FAIL'>;
		readonly STENCIL_PASS_DEPTH_FAIL:         /* 0x0B95 */ GLenum<'STENCIL_PASS_DEPTH_FAIL'>;
		readonly STENCIL_PASS_DEPTH_PASS:         /* 0x0B96 */ GLenum<'STENCIL_PASS_DEPTH_PASS'>;
		readonly STENCIL_REF:                     /* 0x0B97 */ GLenum<'STENCIL_REF'>;
		readonly STENCIL_VALUE_MASK:              /* 0x0B93 */ GLenum<'STENCIL_VALUE_MASK'>;
		readonly STENCIL_WRITEMASK:               /* 0x0B98 */ GLenum<'STENCIL_WRITEMASK'>;
		readonly STENCIL_BACK_FUNC:               /* 0x8800 */ GLenum<'STENCIL_BACK_FUNC'>;
		readonly STENCIL_BACK_FAIL:               /* 0x8801 */ GLenum<'STENCIL_BACK_FAIL'>;
		readonly STENCIL_BACK_PASS_DEPTH_FAIL:    /* 0x8802 */ GLenum<'STENCIL_BACK_PASS_DEPTH_FAIL'>;
		readonly STENCIL_BACK_PASS_DEPTH_PASS:    /* 0x8803 */ GLenum<'STENCIL_BACK_PASS_DEPTH_PASS'>;
		readonly STENCIL_BACK_REF:                /* 0x8CA3 */ GLenum<'STENCIL_BACK_REF'>;
		readonly STENCIL_BACK_VALUE_MASK:         /* 0x8CA4 */ GLenum<'STENCIL_BACK_VALUE_MASK'>;
		readonly STENCIL_BACK_WRITEMASK:          /* 0x8CA5 */ GLenum<'STENCIL_BACK_WRITEMASK'>;
		readonly VIEWPORT:                        /* 0x0BA2 */ GLenum<'VIEWPORT'>;
		readonly SCISSOR_BOX:                     /* 0x0C10 */ GLenum<'SCISSOR_BOX'>;
		/*      SCISSOR_TEST */
		readonly COLOR_CLEAR_VALUE:               /* 0x0C22 */ GLenum<'COLOR_CLEAR_VALUE'>;
		readonly COLOR_WRITEMASK:                 /* 0x0C23 */ GLenum<'COLOR_WRITEMASK'>;
		readonly UNPACK_ALIGNMENT:                /* 0x0CF5 */ GLenum<'UNPACK_ALIGNMENT'>;
		readonly PACK_ALIGNMENT:                  /* 0x0D05 */ GLenum<'PACK_ALIGNMENT'>;
		readonly MAX_TEXTURE_SIZE:                /* 0x0D33 */ GLenum<'MAX_TEXTURE_SIZE'>;
		readonly MAX_VIEWPORT_DIMS:               /* 0x0D3A */ GLenum<'MAX_VIEWPORT_DIMS'>;
		readonly SUBPIXEL_BITS:                   /* 0x0D50 */ GLenum<'SUBPIXEL_BITS'>;
		readonly RED_BITS:                        /* 0x0D52 */ GLenum<'RED_BITS'>;
		readonly GREEN_BITS:                      /* 0x0D53 */ GLenum<'GREEN_BITS'>;
		readonly BLUE_BITS:                       /* 0x0D54 */ GLenum<'BLUE_BITS'>;
		readonly ALPHA_BITS:                      /* 0x0D55 */ GLenum<'ALPHA_BITS'>;
		readonly DEPTH_BITS:                      /* 0x0D56 */ GLenum<'DEPTH_BITS'>;
		readonly STENCIL_BITS:                    /* 0x0D57 */ GLenum<'STENCIL_BITS'>;
		readonly POLYGON_OFFSET_UNITS:            /* 0x2A00 */ GLenum<'POLYGON_OFFSET_UNITS'>;
		/*      POLYGON_OFFSET_FILL */
		readonly POLYGON_OFFSET_FACTOR:           /* 0x8038 */ GLenum<'POLYGON_OFFSET_FACTOR'>;
		readonly TEXTURE_BINDING_2D:              /* 0x8069 */ GLenum<'TEXTURE_BINDING_2D'>;
		readonly SAMPLE_BUFFERS:                  /* 0x80A8 */ GLenum<'SAMPLE_BUFFERS'>;
		readonly SAMPLES:                         /* 0x80A9 */ GLenum<'SAMPLES'>;
		readonly SAMPLE_COVERAGE_VALUE:           /* 0x80AA */ GLenum<'SAMPLE_COVERAGE_VALUE'>;
		readonly SAMPLE_COVERAGE_INVERT:          /* 0x80AB */ GLenum<'SAMPLE_COVERAGE_INVERT'>;

		/* GetTextureParameter */
		/*      TEXTURE_MAG_FILTER */
		/*      TEXTURE_MIN_FILTER */
		/*      TEXTURE_WRAP_S */
		/*      TEXTURE_WRAP_T */

		readonly COMPRESSED_TEXTURE_FORMATS:      /* 0x86A3 */ GLenum<'COMPRESSED_TEXTURE_FORMATS'>;

		/* HintMode */
		readonly DONT_CARE:                       /* 0x1100 */ GLenum<'DONT_CARE'>;
		readonly FASTEST:                         /* 0x1101 */ GLenum<'FASTEST'>;
		readonly NICEST:                          /* 0x1102 */ GLenum<'NICEST'>;

		/* HintTarget */
		readonly GENERATE_MIPMAP_HINT:             /* 0x8192 */ GLenum<'GENERATE_MIPMAP_HINT'>;

		/* DataType */
		readonly BYTE:                            /* 0x1400 */ GLenum<'BYTE'>;
		readonly UNSIGNED_BYTE:                   /* 0x1401 */ GLenum<'UNSIGNED_BYTE'>;
		readonly SHORT:                           /* 0x1402 */ GLenum<'SHORT'>;
		readonly UNSIGNED_SHORT:                  /* 0x1403 */ GLenum<'UNSIGNED_SHORT'>;
		readonly INT:                             /* 0x1404 */ GLenum<'INT'>;
		readonly UNSIGNED_INT:                    /* 0x1405 */ GLenum<'UNSIGNED_INT'>;
		readonly FLOAT:                           /* 0x1406 */ GLenum<'FLOAT'>;

		/* PixelFormat */
		readonly DEPTH_COMPONENT:                 /* 0x1902 */ GLenum<'DEPTH_COMPONENT'>;
		readonly ALPHA:                           /* 0x1906 */ GLenum<'ALPHA'>;
		readonly RGB:                             /* 0x1907 */ GLenum<'RGB'>;
		readonly RGBA:                            /* 0x1908 */ GLenum<'RGBA'>;
		readonly LUMINANCE:                       /* 0x1909 */ GLenum<'LUMINANCE'>;
		readonly LUMINANCE_ALPHA:                 /* 0x190A */ GLenum<'LUMINANCE_ALPHA'>;

		/* PixelType */
		/*      UNSIGNED_BYTE */
		readonly UNSIGNED_SHORT_4_4_4_4:          /* 0x8033 */ GLenum<'UNSIGNED_SHORT_4_4_4_4'>;
		readonly UNSIGNED_SHORT_5_5_5_1:          /* 0x8034 */ GLenum<'UNSIGNED_SHORT_5_5_5_1'>;
		readonly UNSIGNED_SHORT_5_6_5:            /* 0x8363 */ GLenum<'UNSIGNED_SHORT_5_6_5'>;

		/* Shaders */
		readonly FRAGMENT_SHADER:                   /* 0x8B30 */ GLenum<'FRAGMENT_SHADER'>;
		readonly VERTEX_SHADER:                     /* 0x8B31 */ GLenum<'VERTEX_SHADER'>;
		readonly MAX_VERTEX_ATTRIBS:                /* 0x8869 */ GLenum<'MAX_VERTEX_ATTRIBS'>;
		readonly MAX_VERTEX_UNIFORM_VECTORS:        /* 0x8DFB */ GLenum<'MAX_VERTEX_UNIFORM_VECTORS'>;
		readonly MAX_VARYING_VECTORS:               /* 0x8DFC */ GLenum<'MAX_VARYING_VECTORS'>;
		readonly MAX_COMBINED_TEXTURE_IMAGE_UNITS:  /* 0x8B4D */ GLenum<'MAX_COMBINED_TEXTURE_IMAGE_UNITS'>;
		readonly MAX_VERTEX_TEXTURE_IMAGE_UNITS:    /* 0x8B4C */ GLenum<'MAX_VERTEX_TEXTURE_IMAGE_UNITS'>;
		readonly MAX_TEXTURE_IMAGE_UNITS:           /* 0x8872 */ GLenum<'MAX_TEXTURE_IMAGE_UNITS'>;
		readonly MAX_FRAGMENT_UNIFORM_VECTORS:      /* 0x8DFD */ GLenum<'MAX_FRAGMENT_UNIFORM_VECTORS'>;
		readonly SHADER_TYPE:                       /* 0x8B4F */ GLenum<'SHADER_TYPE'>;
		readonly DELETE_STATUS:                     /* 0x8B80 */ GLenum<'DELETE_STATUS'>;
		readonly LINK_STATUS:                       /* 0x8B82 */ GLenum<'LINK_STATUS'>;
		readonly VALIDATE_STATUS:                   /* 0x8B83 */ GLenum<'VALIDATE_STATUS'>;
		readonly ATTACHED_SHADERS:                  /* 0x8B85 */ GLenum<'ATTACHED_SHADERS'>;
		readonly ACTIVE_UNIFORMS:                   /* 0x8B86 */ GLenum<'ACTIVE_UNIFORMS'>;
		readonly ACTIVE_ATTRIBUTES:                 /* 0x8B89 */ GLenum<'ACTIVE_ATTRIBUTES'>;
		readonly SHADING_LANGUAGE_VERSION:          /* 0x8B8C */ GLenum<'SHADING_LANGUAGE_VERSION'>;
		readonly CURRENT_PROGRAM:                   /* 0x8B8D */ GLenum<'CURRENT_PROGRAM'>;

		/* StencilFunction */
		readonly NEVER:                           /* 0x0200 */ GLenum<'NEVER'>;
		readonly LESS:                            /* 0x0201 */ GLenum<'LESS'>;
		readonly EQUAL:                           /* 0x0202 */ GLenum<'EQUAL'>;
		readonly LEQUAL:                          /* 0x0203 */ GLenum<'LEQUAL'>;
		readonly GREATER:                         /* 0x0204 */ GLenum<'GREATER'>;
		readonly NOTEQUAL:                        /* 0x0205 */ GLenum<'NOTEQUAL'>;
		readonly GEQUAL:                          /* 0x0206 */ GLenum<'GEQUAL'>;
		readonly ALWAYS:                          /* 0x0207 */ GLenum<'ALWAYS'>;

		/* StencilOp */
		/*      ZERO */
		readonly KEEP:                            /* 0x1E00 */ GLenum<'KEEP'>;
		readonly REPLACE:                         /* 0x1E01 */ GLenum<'REPLACE'>;
		readonly INCR:                            /* 0x1E02 */ GLenum<'INCR'>;
		readonly DECR:                            /* 0x1E03 */ GLenum<'DECR'>;
		readonly INVERT:                          /* 0x150A */ GLenum<'INVERT'>;
		readonly INCR_WRAP:                       /* 0x8507 */ GLenum<'INCR_WRAP'>;
		readonly DECR_WRAP:                       /* 0x8508 */ GLenum<'DECR_WRAP'>;

		/* StringName */
		readonly VENDOR:                          /* 0x1F00 */ GLenum<'VENDOR'>;
		readonly RENDERER:                        /* 0x1F01 */ GLenum<'RENDERER'>;
		readonly VERSION:                         /* 0x1F02 */ GLenum<'VERSION'>;

		/* TextureMagFilter */
		readonly NEAREST:                         /* 0x2600 */ GLenum<'NEAREST'>;
		readonly LINEAR:                          /* 0x2601 */ GLenum<'LINEAR'>;

		/* TextureMinFilter */
		/*      NEAREST */
		/*      LINEAR */
		readonly NEAREST_MIPMAP_NEAREST:          /* 0x2700 */ GLenum<'NEAREST_MIPMAP_NEAREST'>;
		readonly LINEAR_MIPMAP_NEAREST:           /* 0x2701 */ GLenum<'LINEAR_MIPMAP_NEAREST'>;
		readonly NEAREST_MIPMAP_LINEAR:           /* 0x2702 */ GLenum<'NEAREST_MIPMAP_LINEAR'>;
		readonly LINEAR_MIPMAP_LINEAR:            /* 0x2703 */ GLenum<'LINEAR_MIPMAP_LINEAR'>;

		/* TextureParameterName */
		readonly TEXTURE_MAG_FILTER:              /* 0x2800 */ GLenum<'TEXTURE_MAG_FILTER'>;
		readonly TEXTURE_MIN_FILTER:              /* 0x2801 */ GLenum<'TEXTURE_MIN_FILTER'>;
		readonly TEXTURE_WRAP_S:                  /* 0x2802 */ GLenum<'TEXTURE_WRAP_S'>;
		readonly TEXTURE_WRAP_T:                  /* 0x2803 */ GLenum<'TEXTURE_WRAP_T'>;

		/* TextureTarget */
		readonly TEXTURE_2D:                      /* 0x0DE1 */ GLenum<'TEXTURE_2D'>;
		readonly TEXTURE:                         /* 0x1702 */ GLenum<'TEXTURE'>;

		readonly TEXTURE_CUBE_MAP:                /* 0x8513 */ GLenum<'TEXTURE_CUBE_MAP'>;
		readonly TEXTURE_BINDING_CUBE_MAP:        /* 0x8514 */ GLenum<'TEXTURE_BINDING_CUBE_MAP'>;
		readonly TEXTURE_CUBE_MAP_POSITIVE_X:     /* 0x8515 */ GLenum<'TEXTURE_CUBE_MAP_POSITIVE_X'>;
		readonly TEXTURE_CUBE_MAP_NEGATIVE_X:     /* 0x8516 */ GLenum<'TEXTURE_CUBE_MAP_NEGATIVE_X'>;
		readonly TEXTURE_CUBE_MAP_POSITIVE_Y:     /* 0x8517 */ GLenum<'TEXTURE_CUBE_MAP_POSITIVE_Y'>;
		readonly TEXTURE_CUBE_MAP_NEGATIVE_Y:     /* 0x8518 */ GLenum<'TEXTURE_CUBE_MAP_NEGATIVE_Y'>;
		readonly TEXTURE_CUBE_MAP_POSITIVE_Z:     /* 0x8519 */ GLenum<'TEXTURE_CUBE_MAP_POSITIVE_Z'>;
		readonly TEXTURE_CUBE_MAP_NEGATIVE_Z:     /* 0x851A */ GLenum<'TEXTURE_CUBE_MAP_NEGATIVE_Z'>;
		readonly MAX_CUBE_MAP_TEXTURE_SIZE:       /* 0x851C */ GLenum<'MAX_CUBE_MAP_TEXTURE_SIZE'>;

		/* TextureUnit */
		readonly TEXTURE0:                        /* 0x84C0 */ GLenum<'TEXTURE0'>;
		readonly TEXTURE1:                        /* 0x84C1 */ GLenum<'TEXTURE1'>;
		readonly TEXTURE2:                        /* 0x84C2 */ GLenum<'TEXTURE2'>;
		readonly TEXTURE3:                        /* 0x84C3 */ GLenum<'TEXTURE3'>;
		readonly TEXTURE4:                        /* 0x84C4 */ GLenum<'TEXTURE4'>;
		readonly TEXTURE5:                        /* 0x84C5 */ GLenum<'TEXTURE5'>;
		readonly TEXTURE6:                        /* 0x84C6 */ GLenum<'TEXTURE6'>;
		readonly TEXTURE7:                        /* 0x84C7 */ GLenum<'TEXTURE7'>;
		readonly TEXTURE8:                        /* 0x84C8 */ GLenum<'TEXTURE8'>;
		readonly TEXTURE9:                        /* 0x84C9 */ GLenum<'TEXTURE9'>;
		readonly TEXTURE10:                       /* 0x84CA */ GLenum<'TEXTURE10'>;
		readonly TEXTURE11:                       /* 0x84CB */ GLenum<'TEXTURE11'>;
		readonly TEXTURE12:                       /* 0x84CC */ GLenum<'TEXTURE12'>;
		readonly TEXTURE13:                       /* 0x84CD */ GLenum<'TEXTURE13'>;
		readonly TEXTURE14:                       /* 0x84CE */ GLenum<'TEXTURE14'>;
		readonly TEXTURE15:                       /* 0x84CF */ GLenum<'TEXTURE15'>;
		readonly TEXTURE16:                       /* 0x84D0 */ GLenum<'TEXTURE16'>;
		readonly TEXTURE17:                       /* 0x84D1 */ GLenum<'TEXTURE17'>;
		readonly TEXTURE18:                       /* 0x84D2 */ GLenum<'TEXTURE18'>;
		readonly TEXTURE19:                       /* 0x84D3 */ GLenum<'TEXTURE19'>;
		readonly TEXTURE20:                       /* 0x84D4 */ GLenum<'TEXTURE20'>;
		readonly TEXTURE21:                       /* 0x84D5 */ GLenum<'TEXTURE21'>;
		readonly TEXTURE22:                       /* 0x84D6 */ GLenum<'TEXTURE22'>;
		readonly TEXTURE23:                       /* 0x84D7 */ GLenum<'TEXTURE23'>;
		readonly TEXTURE24:                       /* 0x84D8 */ GLenum<'TEXTURE24'>;
		readonly TEXTURE25:                       /* 0x84D9 */ GLenum<'TEXTURE25'>;
		readonly TEXTURE26:                       /* 0x84DA */ GLenum<'TEXTURE26'>;
		readonly TEXTURE27:                       /* 0x84DB */ GLenum<'TEXTURE27'>;
		readonly TEXTURE28:                       /* 0x84DC */ GLenum<'TEXTURE28'>;
		readonly TEXTURE29:                       /* 0x84DD */ GLenum<'TEXTURE29'>;
		readonly TEXTURE30:                       /* 0x84DE */ GLenum<'TEXTURE30'>;
		readonly TEXTURE31:                       /* 0x84DF */ GLenum<'TEXTURE31'>;
		readonly ACTIVE_TEXTURE:                  /* 0x84E0 */ GLenum<'ACTIVE_TEXTURE'>;

		/* TextureWrapMode */
		readonly REPEAT:                          /* 0x2901 */ GLenum<'REPEAT'>;
		readonly CLAMP_TO_EDGE:                   /* 0x812F */ GLenum<'CLAMP_TO_EDGE'>;
		readonly MIRRORED_REPEAT:                 /* 0x8370 */ GLenum<'MIRRORED_REPEAT'>;

		/* Uniform Types */
		readonly FLOAT_VEC2:                      /* 0x8B50 */ GLenum<'FLOAT_VEC2'>;
		readonly FLOAT_VEC3:                      /* 0x8B51 */ GLenum<'FLOAT_VEC3'>;
		readonly FLOAT_VEC4:                      /* 0x8B52 */ GLenum<'FLOAT_VEC4'>;
		readonly INT_VEC2:                        /* 0x8B53 */ GLenum<'INT_VEC2'>;
		readonly INT_VEC3:                        /* 0x8B54 */ GLenum<'INT_VEC3'>;
		readonly INT_VEC4:                        /* 0x8B55 */ GLenum<'INT_VEC4'>;
		readonly BOOL:                            /* 0x8B56 */ GLenum<'BOOL'>;
		readonly BOOL_VEC2:                       /* 0x8B57 */ GLenum<'BOOL_VEC2'>;
		readonly BOOL_VEC3:                       /* 0x8B58 */ GLenum<'BOOL_VEC3'>;
		readonly BOOL_VEC4:                       /* 0x8B59 */ GLenum<'BOOL_VEC4'>;
		readonly FLOAT_MAT2:                      /* 0x8B5A */ GLenum<'FLOAT_MAT2'>;
		readonly FLOAT_MAT3:                      /* 0x8B5B */ GLenum<'FLOAT_MAT3'>;
		readonly FLOAT_MAT4:                      /* 0x8B5C */ GLenum<'FLOAT_MAT4'>;
		readonly SAMPLER_2D:                      /* 0x8B5E */ GLenum<'SAMPLER_2D'>;
		readonly SAMPLER_CUBE:                    /* 0x8B60 */ GLenum<'SAMPLER_CUBE'>;

		/* Vertex Arrays */
		readonly VERTEX_ATTRIB_ARRAY_ENABLED:         /* 0x8622 */ GLenum<'VERTEX_ATTRIB_ARRAY_ENABLED'>;
		readonly VERTEX_ATTRIB_ARRAY_SIZE:            /* 0x8623 */ GLenum<'VERTEX_ATTRIB_ARRAY_SIZE'>;
		readonly VERTEX_ATTRIB_ARRAY_STRIDE:          /* 0x8624 */ GLenum<'VERTEX_ATTRIB_ARRAY_STRIDE'>;
		readonly VERTEX_ATTRIB_ARRAY_TYPE:            /* 0x8625 */ GLenum<'VERTEX_ATTRIB_ARRAY_TYPE'>;
		readonly VERTEX_ATTRIB_ARRAY_NORMALIZED:      /* 0x886A */ GLenum<'VERTEX_ATTRIB_ARRAY_NORMALIZED'>;
		readonly VERTEX_ATTRIB_ARRAY_POINTER:         /* 0x8645 */ GLenum<'VERTEX_ATTRIB_ARRAY_POINTER'>;
		readonly VERTEX_ATTRIB_ARRAY_BUFFER_BINDING:  /* 0x889F */ GLenum<'VERTEX_ATTRIB_ARRAY_BUFFER_BINDING'>;

		/* Read Format */
		readonly IMPLEMENTATION_COLOR_READ_TYPE:    /* 0x8B9A */ GLenum<'IMPLEMENTATION_COLOR_READ_TYPE'>;
		readonly IMPLEMENTATION_COLOR_READ_FORMAT:  /* 0x8B9B */ GLenum<'IMPLEMENTATION_COLOR_READ_FORMAT'>;

		/* Shader Source */
		readonly COMPILE_STATUS:                  /* 0x8B81 */ GLenum<'COMPILE_STATUS'>;

		/* Shader Precision-Specified Types */
		readonly LOW_FLOAT:                       /* 0x8DF0 */ GLenum<'LOW_FLOAT'>;
		readonly MEDIUM_FLOAT:                    /* 0x8DF1 */ GLenum<'MEDIUM_FLOAT'>;
		readonly HIGH_FLOAT:                      /* 0x8DF2 */ GLenum<'HIGH_FLOAT'>;
		readonly LOW_INT:                         /* 0x8DF3 */ GLenum<'LOW_INT'>;
		readonly MEDIUM_INT:                      /* 0x8DF4 */ GLenum<'MEDIUM_INT'>;
		readonly HIGH_INT:                        /* 0x8DF5 */ GLenum<'HIGH_INT'>;

		/* Framebuffer Object. */
		readonly FRAMEBUFFER:                     /* 0x8D40 */ GLenum<'FRAMEBUFFER'>;
		readonly RENDERBUFFER:                    /* 0x8D41 */ GLenum<'RENDERBUFFER'>;

		readonly RGBA4:                           /* 0x8056 */ GLenum<'RGBA4'>;
		readonly RGB5_A1:                         /* 0x8057 */ GLenum<'RGB5_A1'>;
		readonly RGB565:                          /* 0x8D62 */ GLenum<'RGB565'>;
		readonly DEPTH_COMPONENT16:               /* 0x81A5 */ GLenum<'DEPTH_COMPONENT16'>;
		readonly STENCIL_INDEX8:                  /* 0x8D48 */ GLenum<'STENCIL_INDEX8'>;
		readonly DEPTH_STENCIL:                   /* 0x84F9 */ GLenum<'DEPTH_STENCIL'>;

		readonly RENDERBUFFER_WIDTH:              /* 0x8D42 */ GLenum<'RENDERBUFFER_WIDTH'>;
		readonly RENDERBUFFER_HEIGHT:             /* 0x8D43 */ GLenum<'RENDERBUFFER_HEIGHT'>;
		readonly RENDERBUFFER_INTERNAL_FORMAT:    /* 0x8D44 */ GLenum<'RENDERBUFFER_INTERNAL_FORMAT'>;
		readonly RENDERBUFFER_RED_SIZE:           /* 0x8D50 */ GLenum<'RENDERBUFFER_RED_SIZE'>;
		readonly RENDERBUFFER_GREEN_SIZE:         /* 0x8D51 */ GLenum<'RENDERBUFFER_GREEN_SIZE'>;
		readonly RENDERBUFFER_BLUE_SIZE:          /* 0x8D52 */ GLenum<'RENDERBUFFER_BLUE_SIZE'>;
		readonly RENDERBUFFER_ALPHA_SIZE:         /* 0x8D53 */ GLenum<'RENDERBUFFER_ALPHA_SIZE'>;
		readonly RENDERBUFFER_DEPTH_SIZE:         /* 0x8D54 */ GLenum<'RENDERBUFFER_DEPTH_SIZE'>;
		readonly RENDERBUFFER_STENCIL_SIZE:       /* 0x8D55 */ GLenum<'RENDERBUFFER_STENCIL_SIZE'>;

		readonly FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE:            /* 0x8CD0 */ GLenum<'FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE'>;
		readonly FRAMEBUFFER_ATTACHMENT_OBJECT_NAME:            /* 0x8CD1 */ GLenum<'FRAMEBUFFER_ATTACHMENT_OBJECT_NAME'>;
		readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL:          /* 0x8CD2 */ GLenum<'FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL'>;
		readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE:  /* 0x8CD3 */ GLenum<'FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE'>;

		readonly COLOR_ATTACHMENT0:               /* 0x8CE0 */ GLenum<'COLOR_ATTACHMENT0'>;
		readonly DEPTH_ATTACHMENT:                /* 0x8D00 */ GLenum<'DEPTH_ATTACHMENT'>;
		readonly STENCIL_ATTACHMENT:              /* 0x8D20 */ GLenum<'STENCIL_ATTACHMENT'>;
		readonly DEPTH_STENCIL_ATTACHMENT:        /* 0x821A */ GLenum<'DEPTH_STENCIL_ATTACHMENT'>;

		readonly NONE:                            /* 0 */ GLenum<'NONE'>;

		readonly FRAMEBUFFER_COMPLETE:                       /* 0x8CD5 */ GLenum<'FRAMEBUFFER_COMPLETE'>;
		readonly FRAMEBUFFER_INCOMPLETE_ATTACHMENT:          /* 0x8CD6 */ GLenum<'FRAMEBUFFER_INCOMPLETE_ATTACHMENT'>;
		readonly FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:  /* 0x8CD7 */ GLenum<'FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT'>;
		readonly FRAMEBUFFER_INCOMPLETE_DIMENSIONS:          /* 0x8CD9 */ GLenum<'FRAMEBUFFER_INCOMPLETE_DIMENSIONS'>;
		readonly FRAMEBUFFER_UNSUPPORTED:                    /* 0x8CDD */ GLenum<'FRAMEBUFFER_UNSUPPORTED'>;

		readonly FRAMEBUFFER_BINDING:             /* 0x8CA6 */ GLenum<'FRAMEBUFFER_BINDING'>;
		readonly RENDERBUFFER_BINDING:            /* 0x8CA7 */ GLenum<'RENDERBUFFER_BINDING'>;
		readonly MAX_RENDERBUFFER_SIZE:           /* 0x84E8 */ GLenum<'MAX_RENDERBUFFER_SIZE'>;

		readonly INVALID_FRAMEBUFFER_OPERATION:   /* 0x0506 */ GLenum<'INVALID_FRAMEBUFFER_OPERATION'>;

		/* WebGL-specific enums */
		readonly UNPACK_FLIP_Y_WEBGL:             /* 0x9240 */ GLenum<'UNPACK_FLIP_Y_WEBGL'>;
		readonly UNPACK_PREMULTIPLY_ALPHA_WEBGL:  /* 0x9241 */ GLenum<'UNPACK_PREMULTIPLY_ALPHA_WEBGL'>;
		readonly CONTEXT_LOST_WEBGL:              /* 0x9242 */ GLenum<'CONTEXT_LOST_WEBGL'>;
		readonly UNPACK_COLORSPACE_CONVERSION_WEBGL:  /* 0x9243 */ GLenum<'UNPACK_COLORSPACE_CONVERSION_WEBGL'>;
		readonly BROWSER_DEFAULT_WEBGL:           /* 0x9244 */ GLenum<'BROWSER_DEFAULT_WEBGL'>;
	}
	import GL = WebGLRenderingContextStrict;
	interface Base extends Constants {
		readonly canvas: HTMLCanvasElement;
		readonly drawingBufferWidth: GLsizei;
		readonly drawingBufferHeight: GLsizei;

		/* [WebGLHandlesContextLoss] */ getContextAttributes(): WebGLContextAttributes | null;
		/* [WebGLHandlesContextLoss] */ isContextLost(): boolean;

		getExtension(name: 'EXT_texture_filter_anisotropic'): EXT_texture_filter_anisotropic | null;
		getExtension(name: 'OES_texture_float_linear'): {} | null;
		getExtension(name: 'WEBGL_compressed_texture_astc'): WEBGL_compressed_texture_astc | null;
		getExtension(name: 'WEBGL_compressed_texture_atc'): WEBGL_compressed_texture_atc | null;
		getExtension(name: 'WEBGL_compressed_texture_etc'): WEBGL_compressed_texture_etc | null;
		getExtension(name: 'WEBGL_compressed_texture_etc1'): WEBGL_compressed_texture_etc1 | null;
		getExtension(name: 'WEBGL_compressed_texture_pvrtc'): WEBGL_compressed_texture_pvrtc | null;
		getExtension(name: 'WEBGL_compressed_texture_s3tc'): WEBGL_compressed_texture_s3tc | null;
		getExtension(name: 'WEBGL_compressed_texture_s3tc_srgb'): WEBGL_compressed_texture_s3tc_srgb | null;
		getExtension(name: 'WEBGL_debug_renderer_info'): WEBGL_debug_renderer_info | null;
		getExtension(name: 'WEBGL_debug_shaders'): WEBGL_debug_shaders | null;
		getExtension(name: 'WEBGL_lose_context'): WEBGL_lose_context | null;

		getSupportedExtensions(): DOMString[] | null;

		activeTexture(texture: TextureUnit): void;
		attachShader(program: WebGLProgram, shader: WebGLShader): void;
		bindAttribLocation(program: WebGLProgram, index: GLuint, name: DOMString): void;
		/** Bind a WebGLBuffer to a buffer target. Pass null to clear the current binding. */
		bindBuffer(target: BufferTarget, buffer: WebGLBuffer | null): void;
		/** Bind a WebGLFramebuffer to FRAMEBUFFER. Pass null to clear the current binding. */
		bindFramebuffer(target: GL['FRAMEBUFFER'], framebuffer: WebGLFramebuffer | null): void;
		/** Bind a WebGLFramebuffer to RENDERBUFFER. Pass null to clear the current binding. */
		bindRenderbuffer(target: GL['RENDERBUFFER'], renderbuffer: WebGLRenderbuffer | null): void;
		bindTexture(target: TextureTarget, texture: WebGLTexture | null): void;
		blendColor(red: GLclampf, green: GLclampf, blue: GLclampf, alpha: GLclampf): void;
		blendEquation(mode: BlendEquationMode): void;
		blendEquationSeparate(modeRGB: BlendEquationMode, modeAlpha: BlendEquationMode): void;
		// In the WebGL API, constant color and constant alpha cannot be used together as source and destination factors in the blend function. A call to blendFunc will generate an INVALID_OPERATION error if one of the two factors is set to CONSTANT_COLOR or ONE_MINUS_CONSTANT_COLOR and the other to CONSTANT_ALPHA or ONE_MINUS_CONSTANT_ALPHA.
		blendFunc(sfactor: GL['CONSTANT_COLOR'] | GL['ONE_MINUS_CONSTANT_COLOR'], dfactor: BlendFuncDstFactorNoConstantAlpha): void;
		blendFunc(sfactor: BlendFuncDstFactorNoConstantAlpha, dfactor: GL['CONSTANT_COLOR'] | GL['ONE_MINUS_CONSTANT_COLOR']): void;
		blendFunc(sfactor: GL['CONSTANT_ALPHA'] | GL['ONE_MINUS_CONSTANT_ALPHA'], dfactor: BlendFuncDstFactorNoConstantColor): void;
		blendFunc(sfactor: BlendFuncDstFactorNoConstantColor, dfactor: GL['CONSTANT_ALPHA'] | GL['ONE_MINUS_CONSTANT_ALPHA']): void;
		blendFunc(sfactor: BlendFuncDstFactorNoConstant | GL['SRC_ALPHA_SATURATE'], dfactor: BlendFuncDstFactorNoConstant): void;

		// A call to blendFuncSeparate will generate an INVALID_OPERATION error if srcRGB is set to CONSTANT_COLOR or ONE_MINUS_CONSTANT_COLOR and dstRGB is set to CONSTANT_ALPHA or ONE_MINUS_CONSTANT_ALPHA or vice versa.
		// This doesn't seem to apply to srcAlpha/dstAlpha.
		blendFuncSeparate(sfactor: GL['CONSTANT_COLOR'] | GL['ONE_MINUS_CONSTANT_COLOR'], dfactor: BlendFuncDstFactorNoConstantAlpha,
			srcAlpha: BlendFuncDstFactor | GL['SRC_ALPHA_SATURATE'], dstAlpha: BlendFuncDstFactor): void;
		blendFuncSeparate(sfactor: BlendFuncDstFactorNoConstantAlpha, dfactor: GL['CONSTANT_COLOR'] | GL['ONE_MINUS_CONSTANT_COLOR'],
			srcAlpha: BlendFuncDstFactor | GL['SRC_ALPHA_SATURATE'], dstAlpha: BlendFuncDstFactor): void;
		blendFuncSeparate(sfactor: GL['CONSTANT_ALPHA'] | GL['ONE_MINUS_CONSTANT_ALPHA'], dfactor: BlendFuncDstFactorNoConstantColor,
			srcAlpha: BlendFuncDstFactor | GL['SRC_ALPHA_SATURATE'], dstAlpha: BlendFuncDstFactor): void;
		blendFuncSeparate(sfactor: BlendFuncDstFactorNoConstantColor, dfactor: GL['CONSTANT_ALPHA'] | GL['ONE_MINUS_CONSTANT_ALPHA'],
			srcAlpha: BlendFuncDstFactor | GL['SRC_ALPHA_SATURATE'], dstAlpha: BlendFuncDstFactor): void;
		blendFuncSeparate(sfactor: BlendFuncDstFactorNoConstant | GL['SRC_ALPHA_SATURATE'], dfactor: BlendFuncDstFactorNoConstant,
			srcAlpha: BlendFuncDstFactor | GL['SRC_ALPHA_SATURATE'], dstAlpha: BlendFuncDstFactor): void;

		bufferData(target: BufferTarget, size: GLsizeiptr, usage: BufferDataUsage): void;
		bufferData(target: BufferTarget, /* [AllowShared] */ data: BufferSource | null, usage: BufferDataUsage): void;
		bufferSubData(target: BufferTarget, offset: GLintptr, /* [AllowShared] */ data: BufferSource): void;

		/* [WebGLHandlesContextLoss] */ checkFramebufferStatus(target: GL['FRAMEBUFFER']): FramebufferStatus;
		clear(mask: GLbitfield): void;
		clearColor(red: GLclampf, green: GLclampf, blue: GLclampf, alpha: GLclampf): void;
		clearDepth(depth: GLclampf): void;
		clearStencil(s: GLint): void;
		colorMask(red: GLboolean, green: GLboolean, blue: GLboolean, alpha: GLboolean): void;
		compileShader(shader: WebGLShader): void;

		createBuffer(): WebGLBuffer | null;
		createFramebuffer(): WebGLFramebuffer | null;
		createProgram(): WebGLProgram | null;
		createRenderbuffer(): WebGLRenderbuffer | null;
		createShader(type: ShaderType): WebGLShader | null;
		createTexture(): WebGLTexture | null;

		cullFace(mode: CullFaceMode): void;

		deleteBuffer(buffer: WebGLBuffer | null): void;
		deleteFramebuffer(framebuffer: WebGLFramebuffer | null): void;
		deleteProgram(program: WebGLProgram | null): void;
		deleteRenderbuffer(renderbuffer: WebGLRenderbuffer | null): void;
		deleteShader(shader: WebGLShader | null): void;
		deleteTexture(texture: WebGLTexture | null): void;

		depthFunc(func: ComparisonFunc): void;
		depthMask(flag: GLboolean): void;
		depthRange(zNear: GLclampf, zFar: GLclampf): void;
		detachShader(program: WebGLProgram, shader: WebGLShader): void;
		disable(cap: Capability): void;
		disableVertexAttribArray(index: GLuint): void;
		drawArrays(mode: DrawMode, first: GLint, count: GLsizei): void;
		drawElements(mode: DrawMode, count: GLsizei, type: GL['UNSIGNED_BYTE'] | GL['UNSIGNED_SHORT'], offset: GLintptr): void;

		enable(cap: Capability): void;
		enableVertexAttribArray(index: GLuint): void;
		finish(): void;
		flush(): void;
		framebufferRenderbuffer(target: GL['FRAMEBUFFER'], attachment: FramebufferRenderbufferAttachment, renderbuffertarget: GL['RENDERBUFFER'], renderbuffer: WebGLRenderbuffer | null): void;
		framebufferTexture2D(target: GL['FRAMEBUFFER'], attachment: FramebufferTexture2DAttachment, textarget: TexImage2DTarget, texture: WebGLTexture | null, level: 0): void;
		frontFace(mode: FrontFaceMode): void;

		generateMipmap(target: TextureTarget): void;

		getAttachedShaders(program: WebGLProgram): WebGLShader[] | null;

		/* [WebGLHandlesContextLoss] */ getAttribLocation(program: WebGLProgram, name: DOMString): GLint;

		getBufferParameter(target: BufferTarget, pname: GL['BUFFER_SIZE']): GLint;

		getParameter(pname: GL['ACTIVE_TEXTURE']): TextureUnit;
		getParameter(pname: GL['ALIASED_LINE_WIDTH_RANGE']): Float32Array; // (with 2 elements)
		getParameter(pname: GL['ALIASED_POINT_SIZE_RANGE']): Float32Array; // (with 2 elements)
		getParameter(pname: GL['ALPHA_BITS']): GLint;
		getParameter(pname: GL.BufferTargetBinding): WebGLBuffer;
		getParameter(pname: GL['BLEND']): GLboolean;
		getParameter(pname: GL['BLEND_COLOR']): Float32Array; // (with 4 values)
		getParameter(pname: GL['BLEND_DST_ALPHA']): BlendFuncDstFactor;
		getParameter(pname: GL['BLEND_DST_RGB']): BlendFuncDstFactor;
		getParameter(pname: GL['BLEND_EQUATION_ALPHA']): BlendEquationMode;
		getParameter(pname: GL['BLEND_EQUATION_RGB']): BlendEquationMode;
		getParameter(pname: GL['BLEND_SRC_ALPHA']): BlendFuncSrcFactor | GL['SRC_ALPHA_SATURATE'];
		getParameter(pname: GL['BLEND_SRC_RGB']): BlendFuncSrcFactor | GL['SRC_ALPHA_SATURATE'];
		getParameter(pname: GL['BLUE_BITS']): GLint;
		getParameter(pname: GL['COLOR_CLEAR_VALUE']): Float32Array; // (with 4 values)
		getParameter(pname: GL['COLOR_WRITEMASK']): GLboolean[]; // (with 4 values)
		getParameter(pname: GL['COMPRESSED_TEXTURE_FORMATS']): ArrayLike<GL.CompressedTextureFormatAstc> & Uint32Array;
		getParameter(pname: GL['CULL_FACE']): GLboolean;
		getParameter(pname: GL['CULL_FACE_MODE']): CullFaceMode;
		getParameter(pname: GL['CURRENT_PROGRAM']): WebGLProgram;
		getParameter(pname: GL['DEPTH_BITS']): GLint;
		getParameter(pname: GL['DEPTH_CLEAR_VALUE']): GLfloat;
		getParameter(pname: GL['DEPTH_FUNC']): ComparisonFunc;
		getParameter(pname: GL['DEPTH_RANGE']): Float32Array; // (with 2 elements)
		getParameter(pname: GL['DEPTH_TEST']): GLboolean;
		getParameter(pname: GL['DEPTH_WRITEMASK']): GLboolean;
		getParameter(pname: GL['DITHER']): GLboolean;
		getParameter(pname: GL['FRAMEBUFFER_BINDING']): WebGLFramebuffer;
		getParameter(pname: GL['FRONT_FACE']): FrontFaceMode;
		getParameter(pname: GL['GENERATE_MIPMAP_HINT']): HintMode;
		getParameter(pname: GL['GREEN_BITS']): GLint;
		getParameter(pname: GL['LINE_WIDTH']): GLfloat;
		getParameter(pname: GL['MAX_COMBINED_TEXTURE_IMAGE_UNITS']): GLint;
		getParameter(pname: GL['MAX_CUBE_MAP_TEXTURE_SIZE']): GLint;
		getParameter(pname: GL['MAX_FRAGMENT_UNIFORM_VECTORS']): GLint;
		getParameter(pname: GL['MAX_RENDERBUFFER_SIZE']): GLint;
		getParameter(pname: GL['MAX_TEXTURE_IMAGE_UNITS']): GLint;
		getParameter(pname: GL['MAX_TEXTURE_SIZE']): GLint;
		getParameter(pname: GL['MAX_VARYING_VECTORS']): GLint;
		getParameter(pname: GL['MAX_VERTEX_ATTRIBS']): GLint;
		getParameter(pname: GL['MAX_VERTEX_TEXTURE_IMAGE_UNITS']): GLint;
		getParameter(pname: GL['MAX_VERTEX_UNIFORM_VECTORS']): GLint;
		getParameter(pname: GL['MAX_VIEWPORT_DIMS']): Int32Array; // (with 2 elements)
		getParameter(pname: GL['PACK_ALIGNMENT']): GLint;
		getParameter(pname: GL['POLYGON_OFFSET_FACTOR']): GLfloat;
		getParameter(pname: GL['POLYGON_OFFSET_FILL']): GLboolean;
		getParameter(pname: GL['POLYGON_OFFSET_UNITS']): GLfloat;
		getParameter(pname: GL['RED_BITS']): GLint;
		getParameter(pname: GL['RENDERBUFFER_BINDING']): WebGLRenderbuffer;
		getParameter(pname: GL['RENDERER']): DOMString;
		getParameter(pname: GL['SAMPLE_ALPHA_TO_COVERAGE']): GLboolean;
		getParameter(pname: GL['SAMPLE_BUFFERS']): GLint;
		getParameter(pname: GL['SAMPLE_COVERAGE']): GLboolean;
		getParameter(pname: GL['SAMPLE_COVERAGE_INVERT']): GLboolean;
		getParameter(pname: GL['SAMPLE_COVERAGE_VALUE']): GLfloat;
		getParameter(pname: GL['SAMPLES']): GLint;
		getParameter(pname: GL['SCISSOR_BOX']): Int32Array; // (with 4 elements)
		getParameter(pname: GL['SCISSOR_TEST']): GLboolean;
		getParameter(pname: GL['SHADING_LANGUAGE_VERSION']): DOMString;
		getParameter(pname: GL['STENCIL_BACK_FAIL']): StencilOp;
		getParameter(pname: GL['STENCIL_BACK_FUNC']): ComparisonFunc;
		getParameter(pname: GL['STENCIL_BACK_PASS_DEPTH_FAIL']): StencilOp;
		getParameter(pname: GL['STENCIL_BACK_PASS_DEPTH_PASS']): StencilOp;
		getParameter(pname: GL['STENCIL_BACK_REF']): GLint;
		getParameter(pname: GL['STENCIL_BACK_VALUE_MASK']): GLuint;
		getParameter(pname: GL['STENCIL_BACK_WRITEMASK']): GLuint;
		getParameter(pname: GL['STENCIL_BITS']): GLint;
		getParameter(pname: GL['STENCIL_CLEAR_VALUE']): GLint;
		getParameter(pname: GL['STENCIL_FAIL']): StencilOp;
		getParameter(pname: GL['STENCIL_FUNC']): ComparisonFunc;
		getParameter(pname: GL['STENCIL_PASS_DEPTH_FAIL']): StencilOp;
		getParameter(pname: GL['STENCIL_PASS_DEPTH_PASS']): StencilOp;
		getParameter(pname: GL['STENCIL_REF']): GLint;
		getParameter(pname: GL['STENCIL_TEST']): GLboolean;
		getParameter(pname: GL['STENCIL_VALUE_MASK']): GLuint;
		getParameter(pname: GL['STENCIL_WRITEMASK']): GLuint;
		getParameter(pname: GL['SUBPIXEL_BITS']): GLint;
		getParameter(pname: GL['TEXTURE_BINDING_2D']): WebGLTexture;
		getParameter(pname: GL['TEXTURE_BINDING_CUBE_MAP']): WebGLTexture;
		getParameter(pname: GL['UNPACK_ALIGNMENT']): GLint;
		getParameter(pname: GL['UNPACK_COLORSPACE_CONVERSION_WEBGL']): GL['BROWSER_DEFAULT_WEBGL'] | GL['NONE'];
		getParameter(pname: GL['UNPACK_FLIP_Y_WEBGL']): GLboolean;
		getParameter(pname: GL['UNPACK_PREMULTIPLY_ALPHA_WEBGL']): GLboolean;
		getParameter(pname: GL['VENDOR']): DOMString;
		getParameter(pname: GL['VERSION']): DOMString;
		getParameter(pname: GL['VIEWPORT']): Int32Array; // (with 4 elements)

		/* [WebGLHandlesContextLoss] */ getError(): Error;

		getFramebufferAttachmentParameter(target: GL['FRAMEBUFFER'], attachment: FramebufferRenderbufferAttachment, pname: GL['FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE']):
			GL['RENDERBUFFER'] | GL['TEXTURE'] | GL['NONE'];
		getFramebufferAttachmentParameter(target: GL['FRAMEBUFFER'], attachment: FramebufferRenderbufferAttachment, pname: GL['FRAMEBUFFER_ATTACHMENT_OBJECT_NAME']): WebGLRenderbuffer | WebGLTexture;
		getFramebufferAttachmentParameter(target: GL['FRAMEBUFFER'], attachment: FramebufferRenderbufferAttachment, pname: GL['FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL']): GLint;
		getFramebufferAttachmentParameter(target: GL['FRAMEBUFFER'], attachment: FramebufferRenderbufferAttachment, pname: GL['FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE']): CubeMapFaces | 0;

		getProgramParameter(program: WebGLProgram, pname: GL['DELETE_STATUS']): GLboolean;
		getProgramParameter(program: WebGLProgram, pname: GL['LINK_STATUS']): GLboolean;
		getProgramParameter(program: WebGLProgram, pname: GL['VALIDATE_STATUS']): GLboolean;
		getProgramParameter(program: WebGLProgram, pname: GL['ATTACHED_SHADERS']): GLint;
		getProgramParameter(program: WebGLProgram, pname: GL['ACTIVE_ATTRIBUTES']): GLint;
		getProgramParameter(program: WebGLProgram, pname: GL['ACTIVE_UNIFORMS']): GLint;

		getProgramInfoLog(program: WebGLProgram): DOMString | null;

		getRenderbufferParameter(target: GL['RENDERBUFFER'], pname: GL['RENDERBUFFER_WIDTH']): GLint;
		getRenderbufferParameter(target: GL['RENDERBUFFER'], pname: GL['RENDERBUFFER_HEIGHT']): GLint;
		getRenderbufferParameter(target: GL['RENDERBUFFER'], pname: GL['RENDERBUFFER_RED_SIZE']): GLint;
		getRenderbufferParameter(target: GL['RENDERBUFFER'], pname: GL['RENDERBUFFER_GREEN_SIZE']): GLint;
		getRenderbufferParameter(target: GL['RENDERBUFFER'], pname: GL['RENDERBUFFER_BLUE_SIZE']): GLint;
		getRenderbufferParameter(target: GL['RENDERBUFFER'], pname: GL['RENDERBUFFER_ALPHA_SIZE']): GLint;
		getRenderbufferParameter(target: GL['RENDERBUFFER'], pname: GL['RENDERBUFFER_DEPTH_SIZE']): GLint;
		getRenderbufferParameter(target: GL['RENDERBUFFER'], pname: GL['RENDERBUFFER_STENCIL_SIZE']): GLint;

		getShaderParameter(shader: WebGLShader, pname: GL['SHADER_TYPE']): ShaderType;
		getShaderParameter(shader: WebGLShader, pname: GL['DELETE_STATUS']): GLboolean;
		getShaderParameter(shader: WebGLShader, pname: GL['COMPILE_STATUS']): GLboolean;

		getShaderPrecisionFormat(shadertype: ShaderType, precisiontype: ShaderPrecisionType): WebGLShaderPrecisionFormat | null;
		getShaderInfoLog(shader: WebGLShader): DOMString | null;

		getShaderSource(shader: WebGLShader): DOMString | null;

		getTexParameter(target: TextureTarget, pname: GL['TEXTURE_MAG_FILTER']): TextureMagFilter;
		getTexParameter(target: TextureTarget, pname: GL['TEXTURE_MIN_FILTER']): TextureMinFilter;
		getTexParameter(target: TextureTarget, pname: GL['TEXTURE_WRAP_S']): TextureWrap;
		getTexParameter(target: TextureTarget, pname: GL['TEXTURE_WRAP_T']): TextureWrap;

		getUniformLocation(program: WebGLProgram, name: DOMString): WebGLUniformLocation | null;

		getVertexAttrib(index: GLuint, pname: GL['VERTEX_ATTRIB_ARRAY_BUFFER_BINDING']): WebGLBuffer;
		getVertexAttrib(index: GLuint, pname: GL['VERTEX_ATTRIB_ARRAY_ENABLED']): GLboolean;
		getVertexAttrib(index: GLuint, pname: GL['VERTEX_ATTRIB_ARRAY_SIZE']): GLint;
		getVertexAttrib(index: GLuint, pname: GL['VERTEX_ATTRIB_ARRAY_STRIDE']): GLint;
		getVertexAttrib(index: GLuint, pname: GL['VERTEX_ATTRIB_ARRAY_TYPE']): ArrayType;
		getVertexAttrib(index: GLuint, pname: GL['VERTEX_ATTRIB_ARRAY_NORMALIZED']): GLboolean;
		getVertexAttrib(index: GLuint, pname: GL['CURRENT_VERTEX_ATTRIB']): Float32Array; // (with 4 elements)

		/* [WebGLHandlesContextLoss] */ getVertexAttribOffset(index: GLuint, pname: GL['VERTEX_ATTRIB_ARRAY_POINTER']): GLintptr;

		hint(target: GL['GENERATE_MIPMAP_HINT'], mode: HintMode): void;
		/* [WebGLHandlesContextLoss] */ isBuffer(buffer: WebGLBuffer | null): GLboolean;
		/* [WebGLHandlesContextLoss] */ isEnabled(cap: Capability): GLboolean;
		/* [WebGLHandlesContextLoss] */ isFramebuffer(framebuffer: WebGLFramebuffer | null): GLboolean;
		/* [WebGLHandlesContextLoss] */ isProgram(program: WebGLProgram | null): GLboolean;
		/* [WebGLHandlesContextLoss] */ isRenderbuffer(renderbuffer: WebGLRenderbuffer | null): GLboolean;
		/* [WebGLHandlesContextLoss] */ isShader(shader: WebGLShader | null): GLboolean;
		/* [WebGLHandlesContextLoss] */ isTexture(texture: WebGLTexture | null): GLboolean;
		lineWidth(width: GLfloat): void;
		linkProgram(program: WebGLProgram): void;

		pixelStorei(pname: GL['PACK_ALIGNMENT'], param: 1 | 2 | 4 | 8): void;
		pixelStorei(pname: GL['UNPACK_ALIGNMENT'], param: 1 | 2 | 4 | 8): void;
		pixelStorei(pname: GL['UNPACK_FLIP_Y_WEBGL'], param: boolean): void;
		pixelStorei(pname: GL['UNPACK_PREMULTIPLY_ALPHA_WEBGL'], param: boolean): void;
		pixelStorei(pname: GL['UNPACK_COLORSPACE_CONVERSION_WEBGL'], param: GL['BROWSER_DEFAULT_WEBGL'] | GL['NONE']): void;

		polygonOffset(factor: GLfloat, units: GLfloat): void;

		readPixels(x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: ReadPixelsFormat, type: GL['UNSIGNED_BYTE'], /* [AllowShared] */ pixels: Uint8Array): void;
		readPixels(x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: ReadPixelsFormat,
			type: GL['UNSIGNED_SHORT_5_6_5'] | GL['UNSIGNED_SHORT_4_4_4_4'] | GL['UNSIGNED_SHORT_5_5_5_1'],
			/* [AllowShared] */ pixels: Uint16Array): void;
		readPixels(x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: ReadPixelsFormat, type: GL['FLOAT'], /* [AllowShared] */ pixels: Float32Array): void;

		renderbufferStorage(target: GL['RENDERBUFFER'], internalformat: RenderbufferInternalFormat, width: GLsizei, height: GLsizei): void;
		sampleCoverage(value: GLclampf, invert: GLboolean): void;
		scissor(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;

		shaderSource(shader: WebGLShader, source: DOMString): void;

		stencilFunc(func: ComparisonFunc, ref: GLint, mask: GLuint): void;
		stencilFuncSeparate(face: CullFaceMode, func: ComparisonFunc, ref: GLint, mask: GLuint): void;
		stencilMask(mask: GLuint): void;
		stencilMaskSeparate(face: CullFaceMode, mask: GLuint): void;
		stencilOp(fail: StencilOp, zfail: StencilOp, zpass: StencilOp): void;
		stencilOpSeparate(face: CullFaceMode, fail: StencilOp, zfail: StencilOp, zpass: StencilOp): void;

		texImage2D(target: TexImage2DTarget, level: GLint, internalformat: GL['ALPHA'], width: GLsizei, height: GLsizei, border: 0, format: GL['ALPHA'], type: GL['UNSIGNED_BYTE'], /* [AllowShared] */ pixels: Uint8Array | null): void;
		texImage2D(target: TexImage2DTarget, level: GLint, internalformat: GL['RGB'], width: GLsizei, height: GLsizei, border: 0, format: GL['RGB'], type: GL['UNSIGNED_BYTE'], /* [AllowShared] */ pixels: Uint8Array | null): void;
		texImage2D(target: TexImage2DTarget, level: GLint, internalformat: GL['RGB'], width: GLsizei, height: GLsizei, border: 0, format: GL['RGB'], type: GL['UNSIGNED_SHORT_5_6_5'], /* [AllowShared] */ pixels: Uint16Array | null): void;
		texImage2D(target: TexImage2DTarget, level: GLint, internalformat: GL['RGBA'], width: GLsizei, height: GLsizei, border: 0, format: GL['RGBA'], type: GL['UNSIGNED_BYTE'], /* [AllowShared] */ pixels: Uint8Array | null): void;
		texImage2D(target: TexImage2DTarget, level: GLint, internalformat: GL['RGBA'], width: GLsizei, height: GLsizei, border: 0, format: GL['RGBA'], type: GL['UNSIGNED_SHORT_5_5_5_1'] | GL['UNSIGNED_SHORT_4_4_4_4'], /* [AllowShared] */ pixels: Uint16Array | null): void;
		texImage2D(target: TexImage2DTarget, level: GLint, internalformat: GL['LUMINANCE_ALPHA'], width: GLsizei, height: GLsizei, border: 0, format: GL['LUMINANCE_ALPHA'], type: GL['UNSIGNED_BYTE'], /* [AllowShared] */ pixels: Uint8Array | null): void;
		texImage2D(target: TexImage2DTarget, level: GLint, internalformat: GL['LUMINANCE'], width: GLsizei, height: GLsizei, border: 0, format: GL['LUMINANCE'], type: GL['UNSIGNED_BYTE'], /* [AllowShared] */ pixels: Uint8Array | null): void;

		// May throw DOMException:
		texImage2D(target: TexImage2DTarget, level: GLint, internalformat: GL['ALPHA'], format: GL['ALPHA'], type: GL['UNSIGNED_BYTE'], source: TexImageSource): void;
		texImage2D(target: TexImage2DTarget, level: GLint, internalformat: GL['RGB'], format: GL['RGB'], type: GL['UNSIGNED_BYTE'] | GL['UNSIGNED_SHORT_5_6_5'], source: TexImageSource): void;
		texImage2D(target: TexImage2DTarget, level: GLint, internalformat: GL['RGBA'], format: GL['RGBA'], type: GL['UNSIGNED_BYTE'] | GL['UNSIGNED_SHORT_5_5_5_1'] | GL['UNSIGNED_SHORT_4_4_4_4'], source: TexImageSource): void;
		texImage2D(target: TexImage2DTarget, level: GLint, internalformat: GL['LUMINANCE_ALPHA'], format: GL['LUMINANCE_ALPHA'], type: GL['UNSIGNED_BYTE'], source: TexImageSource): void;
		texImage2D(target: TexImage2DTarget, level: GLint, internalformat: GL['LUMINANCE'], format: GL['LUMINANCE'], type: GL['UNSIGNED_BYTE'], source: TexImageSource): void;

		texSubImage2D(target: TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GL['ALPHA'], type: GL['UNSIGNED_BYTE'], /* [AllowShared] */ pixels: Uint8Array | null): void;
		texSubImage2D(target: TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GL['RGB'], type: GL['UNSIGNED_BYTE'], /* [AllowShared] */ pixels: Uint8Array | null): void;
		texSubImage2D(target: TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GL['RGB'], type: GL['UNSIGNED_SHORT_5_6_5'], /* [AllowShared] */ pixels: Uint16Array | null): void;
		texSubImage2D(target: TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GL['RGBA'], type: GL['UNSIGNED_BYTE'], /* [AllowShared] */ pixels: Uint8Array | null): void;
		texSubImage2D(target: TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GL['RGBA'], type: GL['UNSIGNED_SHORT_5_5_5_1'] | GL['UNSIGNED_SHORT_4_4_4_4'], /* [AllowShared] */ pixels: Uint16Array | null): void;
		texSubImage2D(target: TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GL['LUMINANCE_ALPHA'], type: GL['UNSIGNED_BYTE'], /* [AllowShared] */ pixels: Uint8Array | null): void;
		texSubImage2D(target: TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GL['LUMINANCE'], type: GL['UNSIGNED_BYTE'], /* [AllowShared] */ pixels: Uint8Array | null): void;

		// May throw DOMException:
		texSubImage2D(target: TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, format: GL['ALPHA'], type: GL['UNSIGNED_BYTE'], source: TexImageSource): void;
		texSubImage2D(target: TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, format: GL['RGB'], type: GL['UNSIGNED_BYTE'] | GL['UNSIGNED_SHORT_5_6_5'], source: TexImageSource): void;
		texSubImage2D(target: TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, format: GL['RGBA'], type: GL['UNSIGNED_BYTE'] | GL['UNSIGNED_SHORT_5_5_5_1'] | GL['UNSIGNED_SHORT_4_4_4_4'], source: TexImageSource): void;
		texSubImage2D(target: TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, format: GL['LUMINANCE_ALPHA'], type: GL['UNSIGNED_BYTE'], source: TexImageSource): void;
		texSubImage2D(target: TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, format: GL['LUMINANCE'], type: GL['UNSIGNED_BYTE'], source: TexImageSource): void;

		compressedTexImage2D(target: TexImage2DTarget, level: GLint, internalformat: never, width: GLsizei, height: GLsizei, border: 0, /* [AllowShared] */ data: ArrayBufferView): void;
		compressedTexSubImage2D(target: TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: never, /* [AllowShared] */ data: ArrayBufferView): void;

		copyTexImage2D(target: TexImage2DTarget, level: GLint, internalformat: TextureInternalFormat, x: GLint, y: GLint, width: GLsizei, height: GLsizei, border: 0): void;
		copyTexSubImage2D(target: TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;

		texParameterf(target: TextureTarget, pname: never, param: GLfloat): void;
		texParameteri(target: TextureTarget, pname: GL['TEXTURE_MAG_FILTER'], param: TextureMagFilter): void;
		texParameteri(target: TextureTarget, pname: GL['TEXTURE_MIN_FILTER'], param: TextureMinFilter): void;
		texParameteri(target: TextureTarget, pname: GL['TEXTURE_WRAP_S'], param: TextureWrap): void;
		texParameteri(target: TextureTarget, pname: GL['TEXTURE_WRAP_T'], param: TextureWrap): void;

		uniform1f(location: WebGLUniformLocation | null, x: GLfloat): void;
		uniform2f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat): void;
		uniform3f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat, z: GLfloat): void;
		uniform4f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat, z: GLfloat, w: GLfloat): void;

		uniform1i(location: WebGLUniformLocation | null, x: GLint): void;
		uniform2i(location: WebGLUniformLocation | null, x: GLint, y: GLint): void;
		uniform3i(location: WebGLUniformLocation | null, x: GLint, y: GLint, z: GLint): void;
		uniform4i(location: WebGLUniformLocation | null, x: GLint, y: GLint, z: GLint, w: GLint): void;

		uniform1fv(location: WebGLUniformLocation | null, v: Float32List): void;
		uniform2fv(location: WebGLUniformLocation | null, v: Float32List): void;
		uniform3fv(location: WebGLUniformLocation | null, v: Float32List): void;
		uniform4fv(location: WebGLUniformLocation | null, v: Float32List): void;

		uniform1iv(location: WebGLUniformLocation | null, v: Int32List): void;
		uniform2iv(location: WebGLUniformLocation | null, v: Int32List): void;
		uniform3iv(location: WebGLUniformLocation | null, v: Int32List): void;
		uniform4iv(location: WebGLUniformLocation | null, v: Int32List): void;

		uniformMatrix2fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void;
		uniformMatrix3fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void;
		uniformMatrix4fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void;

		useProgram(program: WebGLProgram | null): void;
		validateProgram(program: WebGLProgram): void;

		vertexAttrib1f(index: GLuint, x: GLfloat): void;
		vertexAttrib2f(index: GLuint, x: GLfloat, y: GLfloat): void;
		vertexAttrib3f(index: GLuint, x: GLfloat, y: GLfloat, z: GLfloat): void;
		vertexAttrib4f(index: GLuint, x: GLfloat, y: GLfloat, z: GLfloat, w: GLfloat): void;

		vertexAttrib1fv(index: GLuint, values: Float32List): void;
		vertexAttrib2fv(index: GLuint, values: Float32List): void;
		vertexAttrib3fv(index: GLuint, values: Float32List): void;
		vertexAttrib4fv(index: GLuint, values: Float32List): void;

		vertexAttribPointer(index: GLuint, size: 1 | 2 | 3 | 4, type: ArrayType, normalized: GLboolean, stride: GLsizei, offset: GLintptr): void;

		viewport(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
	}

	// WebGLRenderingContext members which aren't common to WebGL2, mostly because their return values
	// are extended in WebGL2;
	interface Extra {
		// Khronos ratified WebGL Extensions
		getExtension(name: 'ANGLE_instanced_arrays '): ANGLE_instanced_arrays | null;
		getExtension(name: 'EXT_blend_minmax '): EXT_blend_minmax  | null;
		getExtension(name: 'EXT_frag_depth'): {} | null;
		getExtension(name: 'EXT_shader_texture_lod'): {} | null;
		getExtension(name: 'OES_element_index_uint'): {} | null;
		getExtension(name: 'OES_standard_derivatives'): OES_standard_derivatives | null;
		getExtension(name: 'OES_texture_float'): OES_texture_float | null;
		getExtension(name: 'OES_texture_half_float'): OES_texture_half_float | null;
		getExtension(name: 'OES_texture_half_float_linear'): {} | null;
		getExtension(name: 'OES_vertex_array_object'): OES_vertex_array_object | null;
		getExtension(name: 'WEBGL_depth_texture'): WEBGL_depth_texture | null;
		getExtension(name: 'WEBGL_draw_buffers'): WEBGL_draw_buffers | null;

		// Community approved WebGL Extensions
		getExtension(name: 'EXT_color_buffer_half_float'): EXT_color_buffer_half_float | null;
		getExtension(name: 'EXT_disjoint_timer_query'): EXT_disjoint_timer_query | null;
		getExtension(name: 'EXT_sRGB'): EXT_sRGB | null;
		getExtension(name: 'WEBGL_color_buffer_float'): WEBGL_color_buffer_float | null;

		getActiveAttrib(program: WebGLProgram, index: GLuint): WebGLActiveInfo<AttribType> | null;
		getActiveUniform(program: WebGLProgram, index: GLuint): WebGLActiveInfo<UniformType> | null;

		getRenderbufferParameter(target: GL['RENDERBUFFER'], pname: GL['RENDERBUFFER_INTERNAL_FORMAT']): RenderbufferInternalFormat;

		getParameter(pname: GL['IMPLEMENTATION_COLOR_READ_FORMAT']): ReadPixelsFormat;
		getParameter(pname: GL['IMPLEMENTATION_COLOR_READ_TYPE']): ReadPixelsType;

		getBufferParameter(target: BufferTarget, pname: GL['BUFFER_USAGE']): BufferDataUsage;

		getUniform(program: WebGLProgram, location: WebGLUniformLocation): UniformType;
	}

	// parameter types:
	type TextureUnit = GL['TEXTURE0']
		| GL['TEXTURE1']
		| GL['TEXTURE2']
		| GL['TEXTURE3']
		| GL['TEXTURE4']
		| GL['TEXTURE5']
		| GL['TEXTURE6']
		| GL['TEXTURE7']
		| GL['TEXTURE8']
		| GL['TEXTURE9']
		| GL['TEXTURE10']
		| GL['TEXTURE11']
		| GL['TEXTURE12']
		| GL['TEXTURE13']
		| GL['TEXTURE14']
		| GL['TEXTURE15']
		| GL['TEXTURE16']
		| GL['TEXTURE17']
		| GL['TEXTURE18']
		| GL['TEXTURE19']
		| GL['TEXTURE20']
		| GL['TEXTURE21']
		| GL['TEXTURE22']
		| GL['TEXTURE23']
		| GL['TEXTURE24']
		| GL['TEXTURE25']
		| GL['TEXTURE26']
		| GL['TEXTURE27']
		| GL['TEXTURE28']
		| GL['TEXTURE29']
		| GL['TEXTURE30']
		| GL['TEXTURE31'];
	type BufferTarget = GL['ARRAY_BUFFER'] | GL['ELEMENT_ARRAY_BUFFER'];
	type BufferTargetBinding = GL['ARRAY_BUFFER_BINDING'] | GL['ELEMENT_ARRAY_BUFFER'];
	type RenderbufferTarget = GL['RENDERBUFFER'];
	type RenderbufferInternalFormat = GL['RGBA4']
		| GL['RGB565']
		| GL['RGB5_A1']
		| GL['DEPTH_COMPONENT16']
		| GL['STENCIL_INDEX8']
		| GL['DEPTH_STENCIL'];
	type TextureInternalFormat = GL['ALPHA']
		| GL['RGB']
		| GL['RGBA']
		| GL['LUMINANCE']
		| GL['LUMINANCE_ALPHA'];
	type TextureTarget = GL['TEXTURE_2D'] | GL['TEXTURE_CUBE_MAP'];
	type BlendEquationMode = GL['FUNC_ADD'] | GL['FUNC_SUBTRACT'] | GL['FUNC_REVERSE_SUBTRACT'];
	type BlendFuncDstFactorNoConstant = GL['ZERO']
		| GL['ONE']
		| GL['SRC_COLOR']
		| GL['ONE_MINUS_SRC_COLOR']
		| GL['DST_COLOR']
		| GL['ONE_MINUS_DST_COLOR']
		| GL['SRC_ALPHA']
		| GL['ONE_MINUS_SRC_ALPHA']
		| GL['DST_ALPHA']
		| GL['ONE_MINUS_DST_ALPHA'];
	type BlendFuncDstFactorNoConstantColor = BlendFuncDstFactorNoConstant
		| GL['CONSTANT_ALPHA']
		| GL['ONE_MINUS_CONSTANT_ALPHA'];
	type BlendFuncDstFactorNoConstantAlpha = BlendFuncDstFactorNoConstant
		| GL['CONSTANT_COLOR']
		| GL['ONE_MINUS_CONSTANT_COLOR'];
	type BlendFuncDstFactor = BlendFuncDstFactorNoConstantAlpha | BlendFuncDstFactorNoConstantColor;
	type BlendFuncSrcFactor = BlendFuncDstFactor | GL['SRC_ALPHA_SATURATE'];
	type BufferDataUsage = GL['STREAM_DRAW'] | GL['STATIC_DRAW'] | GL['DYNAMIC_DRAW'];
	type FramebufferStatus = GL['FRAMEBUFFER_COMPLETE']
		| GL['FRAMEBUFFER_INCOMPLETE_ATTACHMENT']
		| GL['FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT']
		| GL['FRAMEBUFFER_INCOMPLETE_DIMENSIONS']
		| GL['FRAMEBUFFER_UNSUPPORTED'];
	type CubeMapFaces = GL['TEXTURE_CUBE_MAP_POSITIVE_X']
		| GL['TEXTURE_CUBE_MAP_NEGATIVE_X']
		| GL['TEXTURE_CUBE_MAP_POSITIVE_Y']
		| GL['TEXTURE_CUBE_MAP_NEGATIVE_Y']
		| GL['TEXTURE_CUBE_MAP_POSITIVE_Z']
		| GL['TEXTURE_CUBE_MAP_NEGATIVE_Z'];
	type TexImage2DTarget = GL['TEXTURE_2D'] | CubeMapFaces;
	type ShaderType = GL['FRAGMENT_SHADER'] | GL['VERTEX_SHADER'];
	type CullFaceMode = GL['FRONT'] | GL['BACK'] | GL['FRONT_AND_BACK'];
	type Capability = GL['BLEND']
		| GL['CULL_FACE']
		| GL['DEPTH_TEST']
		| GL['DITHER']
		| GL['POLYGON_OFFSET_FILL']
		| GL['SAMPLE_ALPHA_TO_COVERAGE']
		| GL['SAMPLE_COVERAGE']
		| GL['SCISSOR_TEST']
		| GL['STENCIL_TEST'];
	type ComparisonFunc = GL['NEVER']
		| GL['LESS']
		| GL['EQUAL']
		| GL['LEQUAL']
		| GL['GREATER']
		| GL['NOTEQUAL']
		| GL['GEQUAL']
		| GL['ALWAYS'];
	type DrawMode = GL['POINTS']
		| GL['LINE_STRIP']
		| GL['LINE_LOOP']
		| GL['LINES']
		| GL['TRIANGLE_STRIP']
		| GL['TRIANGLE_FAN']
		| GL['TRIANGLES'];
	type FramebufferRenderbufferAttachment = GL['COLOR_ATTACHMENT0']
		| GL['DEPTH_ATTACHMENT']
		| GL['DEPTH_STENCIL_ATTACHMENT']
		| GL['STENCIL_ATTACHMENT'];
	type FramebufferTexture2DAttachment = GL['COLOR_ATTACHMENT0']
		| GL['DEPTH_ATTACHMENT']
		| GL['STENCIL_ATTACHMENT'];
	type Error = GL['NO_ERROR']
		| GL['INVALID_ENUM']
		| GL['INVALID_VALUE']
		| GL['INVALID_OPERATION']
		| GL['INVALID_FRAMEBUFFER_OPERATION']
		| GL['OUT_OF_MEMORY']
		| GL['CONTEXT_LOST_WEBGL'];
	type ShaderPrecisionType = GL['LOW_FLOAT']
		| GL['MEDIUM_FLOAT']
		| GL['HIGH_FLOAT']
		| GL['LOW_INT']
		| GL['MEDIUM_INT']
		| GL['HIGH_INT'];
	type ArrayType = GL['BYTE']
		| GL['UNSIGNED_BYTE']
		| GL['SHORT']
		| GL['UNSIGNED_SHORT']
		| GL['FLOAT'];
	type HintMode = GL['FASTEST'] | GL['NICEST'] | GL['DONT_CARE'];
	type StencilOp = GL['KEEP']
		| GL['ZERO']
		| GL['REPLACE']
		| GL['INCR']
		| GL['INCR_WRAP']
		| GL['DECR']
		| GL['DECR_WRAP']
		| GL['INVERT'];
	type TextureMagFilter = GL['LINEAR'] | GL['NEAREST'];
	type TextureMinFilter = GL['LINEAR'] | GL['NEAREST'] | GL['NEAREST_MIPMAP_NEAREST'] | GL['LINEAR_MIPMAP_NEAREST'] | GL['NEAREST_MIPMAP_LINEAR'] | GL['LINEAR_MIPMAP_LINEAR'];
	type TextureWrap = GL['REPEAT'] | GL['CLAMP_TO_EDGE'] | GL['MIRRORED_REPEAT'];
	type FrontFaceMode = GL['CW'] | GL['CCW'];
	type AttribType = GL['FLOAT']
		| GL['FLOAT_VEC2']
		| GL['FLOAT_VEC3']
		| GL['FLOAT_VEC4']
		| GL['FLOAT_MAT2']
		| GL['FLOAT_MAT3']
		| GL['FLOAT_MAT4'];
	type UniformType = GL['FLOAT']
		| GL['FLOAT_VEC2']
		| GL['FLOAT_VEC3']
		| GL['FLOAT_VEC4']
		| GL['INT']
		| GL['INT_VEC2']
		| GL['INT_VEC3']
		| GL['INT_VEC4']
		| GL['BOOL']
		| GL['BOOL_VEC2']
		| GL['BOOL_VEC3']
		| GL['BOOL_VEC4']
		| GL['FLOAT_MAT2']
		| GL['FLOAT_MAT3']
		| GL['FLOAT_MAT4']
		| GL['SAMPLER_2D']
		| GL['SAMPLER_CUBE'];
	type ReadPixelsFormat = GL['ALPHA'] | GL['RGB'] | GL['RGBA'];
	type ReadPixelsType = GL['UNSIGNED_BYTE'] | GL['UNSIGNED_SHORT_5_6_5'] | GL['UNSIGNED_SHORT_4_4_4_4'] | GL['UNSIGNED_SHORT_5_5_5_1'] | GL['FLOAT'];

	// #######################################
	// ## Khronos ratified WebGL Extensions ##
	// #######################################

	// https://www.khronos.org/registry/webgl/extensions/ANGLE_instanced_arrays/
	/* [NoInterfaceObject] */
	interface ANGLE_instanced_arrays {
		readonly VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE: /* 0x88FE */ GLenum<'VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE'>;
		drawArraysInstancedANGLE(mode: DrawMode, first: GLint, count: GLsizei, primcount: GLsizei): void;
		drawElementsInstancedANGLE(mode: DrawMode, count: GLsizei, type: GL['UNSIGNED_BYTE'] | GL['UNSIGNED_SHORT'], offset: GLintptr): void;
		// Only with OES_element_index_uint
		drawElementsInstancedANGLE(mode: DrawMode, count: GLsizei, type: GL['UNSIGNED_INT'], offset: GLintptr): void;
		vertexAttribDivisorANGLE(index: GLuint, divisor: GLuint): void;
	}
	interface Base_ANGLE_instanced_arrays {
		getParameter(pname: WEBGL_draw_buffers['MAX_COLOR_ATTACHMENTS_WEBGL']): GLuint;
		getParameter(pname: WEBGL_draw_buffers['MAX_DRAW_BUFFERS_WEBGL']): GLuint;
		getParameter(pname: DrawBuffer): GL['NONE'] | GL['BACK'] | ColorAttachment; // accurate?
		framebufferRenderbuffer(target: GL['FRAMEBUFFER'], attachment: ColorAttachment, renderbuffertarget: GL['RENDERBUFFER'], renderbuffer: WebGLRenderbuffer | null): void;
		framebufferTexture2D(target: GL['FRAMEBUFFER'], attachment: ColorAttachment, textarget: TexImage2DTarget, texture: WebGLTexture | null, level: GLint): void;
		drawBuffersWEBGL(buffers: Array<GL['NONE'] | GL['BACK'] | ColorAttachment>): void;
		getVertexAttrib(index: GLuint, pname: WEBGL_draw_buffers['MAX_COLOR_ATTACHMENTS_WEBGL']): GLint;
	}

	// https://www.khronos.org/registry/webgl/extensions/OES_texture_half_float/
	interface Base_OES_texture_float {
		texImage2D(target: TexImage2DTarget, level: GLint, internalformat: GL['ALPHA'], width: GLsizei, height: GLsizei, border: 0, format: GL['ALPHA'], type: GL['FLOAT'], /* [AllowShared] */ pixels: Float32Array | null): void;
		texImage2D(target: TexImage2DTarget, level: GLint, internalformat: GL['RGB'], width: GLsizei, height: GLsizei, border: 0, format: GL['RGB'], type: GL['FLOAT'], /* [AllowShared] */ pixels: Float32Array | null): void;
		texImage2D(target: TexImage2DTarget, level: GLint, internalformat: GL['RGBA'], width: GLsizei, height: GLsizei, border: 0, format: GL['RGBA'], type: GL['FLOAT'], /* [AllowShared] */ pixels: Float32Array | null): void;
		texImage2D(target: TexImage2DTarget, level: GLint, internalformat: GL['LUMINANCE_ALPHA'], width: GLsizei, height: GLsizei, border: 0, format: GL['LUMINANCE_ALPHA'], type: GL['FLOAT'], /* [AllowShared] */ pixels: Float32Array | null): void;
		texImage2D(target: TexImage2DTarget, level: GLint, internalformat: GL['LUMINANCE'], width: GLsizei, height: GLsizei, border: 0, format: GL['LUMINANCE'], type: GL['FLOAT'], /* [AllowShared] */ pixels: Float32Array | null): void;

		// May throw DOMException:
		texImage2D(target: TexImage2DTarget, level: GLint, internalformat: GL['ALPHA'], format: GL['ALPHA'], type: GL['FLOAT'], source: TexImageSource): void;
		texImage2D(target: TexImage2DTarget, level: GLint, internalformat: GL['RGB'], format: GL['RGB'], type: GL['FLOAT'], source: TexImageSource): void;
		texImage2D(target: TexImage2DTarget, level: GLint, internalformat: GL['RGBA'], format: GL['RGBA'], type: GL['FLOAT'], source: TexImageSource): void;
		texImage2D(target: TexImage2DTarget, level: GLint, internalformat: GL['LUMINANCE_ALPHA'], format: GL['LUMINANCE_ALPHA'], type: GL['FLOAT'], source: TexImageSource): void;
		texImage2D(target: TexImage2DTarget, level: GLint, internalformat: GL['LUMINANCE'], format: GL['LUMINANCE'], type: GL['FLOAT'], source: TexImageSource): void;

		texSubImage2D(target: TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GL['ALPHA'], type: GL['FLOAT'], /* [AllowShared] */ pixels: Float32Array | null): void;
		texSubImage2D(target: TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GL['RGB'], type: GL['FLOAT'], /* [AllowShared] */ pixels: Float32Array | null): void;
		texSubImage2D(target: TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GL['RGBA'], type: GL['FLOAT'], /* [AllowShared] */ pixels: Float32Array | null): void;
		texSubImage2D(target: TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GL['LUMINANCE_ALPHA'], type: GL['FLOAT'], /* [AllowShared] */ pixels: Float32Array | null): void;
		texSubImage2D(target: TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GL['LUMINANCE'], type: GL['FLOAT'], /* [AllowShared] */ pixels: Float32Array | null): void;

		// May throw DOMException:
		texSubImage2D(target: TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, format: GL['ALPHA'], type: GL['FLOAT'], source: TexImageSource): void;
		texSubImage2D(target: TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, format: GL['RGB'], type: GL['FLOAT'], source: TexImageSource): void;
		texSubImage2D(target: TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, format: GL['RGBA'], type: GL['FLOAT'], source: TexImageSource): void;
		texSubImage2D(target: TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, format: GL['LUMINANCE_ALPHA'], type: GL['FLOAT'], source: TexImageSource): void;
		texSubImage2D(target: TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, format: GL['LUMINANCE'], type: GL['FLOAT'], source: TexImageSource): void;
	}

	// https://www.khronos.org/registry/webgl/extensions/OES_texture_half_float/
	interface OES_texture_half_float {
		readonly HALF_FLOAT_OES: /* 0x8D61 */ GLenum<'HALF_FLOAT_OES'>;
	}
	interface Base_OES_texture_half_float {
		texImage2D(target: TexImage2DTarget, level: GLint, internalformat: GL['ALPHA'], width: GLsizei, height: GLsizei, border: 0, format: GL['ALPHA'], type: OES_texture_half_float['HALF_FLOAT_OES'], /* [AllowShared] */ pixels:  Uint16Array  | null): void;
		texImage2D(target: TexImage2DTarget, level: GLint, internalformat: GL['RGB'], width: GLsizei, height: GLsizei, border: 0, format: GL['RGB'], type: OES_texture_half_float['HALF_FLOAT_OES'], /* [AllowShared] */ pixels:  Uint16Array  | null): void;
		texImage2D(target: TexImage2DTarget, level: GLint, internalformat: GL['RGBA'], width: GLsizei, height: GLsizei, border: 0, format: GL['RGBA'], type: OES_texture_half_float['HALF_FLOAT_OES'], /* [AllowShared] */ pixels:  Uint16Array  | null): void;
		texImage2D(target: TexImage2DTarget, level: GLint, internalformat: GL['LUMINANCE_ALPHA'], width: GLsizei, height: GLsizei, border: 0, format: GL['LUMINANCE_ALPHA'], type: OES_texture_half_float['HALF_FLOAT_OES'], /* [AllowShared] */ pixels:  Uint16Array  | null): void;
		texImage2D(target: TexImage2DTarget, level: GLint, internalformat: GL['LUMINANCE'], width: GLsizei, height: GLsizei, border: 0, format: GL['LUMINANCE'], type: OES_texture_half_float['HALF_FLOAT_OES'], /* [AllowShared] */ pixels:  Uint16Array  | null): void;

		// May throw DOMException:
		texImage2D(target: TexImage2DTarget, level: GLint, internalformat: GL['ALPHA'], format: GL['ALPHA'], type: OES_texture_half_float['HALF_FLOAT_OES'], source: TexImageSource): void;
		texImage2D(target: TexImage2DTarget, level: GLint, internalformat: GL['RGB'], format: GL['RGB'], type: OES_texture_half_float['HALF_FLOAT_OES'], source: TexImageSource): void;
		texImage2D(target: TexImage2DTarget, level: GLint, internalformat: GL['RGBA'], format: GL['RGBA'], type: OES_texture_half_float['HALF_FLOAT_OES'], source: TexImageSource): void;
		texImage2D(target: TexImage2DTarget, level: GLint, internalformat: GL['LUMINANCE_ALPHA'], format: GL['LUMINANCE_ALPHA'], type: OES_texture_half_float['HALF_FLOAT_OES'], source: TexImageSource): void;
		texImage2D(target: TexImage2DTarget, level: GLint, internalformat: GL['LUMINANCE'], format: GL['LUMINANCE'], type: OES_texture_half_float['HALF_FLOAT_OES'], source: TexImageSource): void;

		texSubImage2D(target: TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GL['ALPHA'], type: OES_texture_half_float['HALF_FLOAT_OES'], /* [AllowShared] */ pixels:  Uint16Array  | null): void;
		texSubImage2D(target: TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GL['RGB'], type: OES_texture_half_float['HALF_FLOAT_OES'], /* [AllowShared] */ pixels:  Uint16Array  | null): void;
		texSubImage2D(target: TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GL['RGBA'], type: OES_texture_half_float['HALF_FLOAT_OES'], /* [AllowShared] */ pixels:  Uint16Array  | null): void;
		texSubImage2D(target: TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GL['LUMINANCE_ALPHA'], type: OES_texture_half_float['HALF_FLOAT_OES'], /* [AllowShared] */ pixels:  Uint16Array  | null): void;
		texSubImage2D(target: TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GL['LUMINANCE'], type: OES_texture_half_float['HALF_FLOAT_OES'], /* [AllowShared] */ pixels:  Uint16Array  | null): void;

		// May throw DOMException:
		texSubImage2D(target: TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, format: GL['ALPHA'], type: OES_texture_half_float['HALF_FLOAT_OES'], source: TexImageSource): void;
		texSubImage2D(target: TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, format: GL['RGB'], type: OES_texture_half_float['HALF_FLOAT_OES'], source: TexImageSource): void;
		texSubImage2D(target: TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, format: GL['RGBA'], type: OES_texture_half_float['HALF_FLOAT_OES'], source: TexImageSource): void;
		texSubImage2D(target: TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, format: GL['LUMINANCE_ALPHA'], type: OES_texture_half_float['HALF_FLOAT_OES'], source: TexImageSource): void;
		texSubImage2D(target: TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, format: GL['LUMINANCE'], type: OES_texture_half_float['HALF_FLOAT_OES'], source: TexImageSource): void;
	}

	// https://www.khronos.org/registry/webgl/extensions/WEBGL_lose_context/
	/* [NoInterfaceObject] */
	interface WEBGL_lose_context {
		loseContext(): void;
		restoreContext(): void;
	}

	// https://www.khronos.org/registry/webgl/extensions/OES_standard_derivatives/
	interface OES_standard_derivatives {
		readonly FRAGMENT_SHADER_DERIVATIVE_HINT_OES: /* 0x8B8B */ GLenum<'FRAGMENT_SHADER_DERIVATIVE_HINT_OES'>;
	}
	interface Base_OES_standard_derivatives {
		hint(target: OES_standard_derivatives['FRAGMENT_SHADER_DERIVATIVE_HINT_OES'], mode: HintMode): void;
		getParameter(pname: OES_standard_derivatives['FRAGMENT_SHADER_DERIVATIVE_HINT_OES']): HintMode;
	}

	// https://www.khronos.org/registry/webgl/extensions/OES_vertex_array_object/
	/* [NoInterfaceObject] */
	interface WebGLVertexArrayObjectOES extends WebGLObject {
		__WebGLObjectBrand: 'WebGLVertexArrayObjectOES';
	}
	/* [NoInterfaceObject] */
	interface OES_vertex_array_object {
		readonly VERTEX_ARRAY_BINDING_OES: /* 0x85B5 */ GLenum<'VERTEX_ARRAY_BINDING_OES'>;

		createVertexArrayOES(): WebGLVertexArrayObjectOES | null;
		deleteVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): void;
		/* [WebGLHandlesContextLoss] */ isVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): GLboolean;
		bindVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): void;
	}

	// https://www.khronos.org/registry/webgl/extensions/WEBGL_debug_renderer_info/
	/* [NoInterfaceObject] */
	interface WEBGL_debug_renderer_info {
		readonly UNMASKED_VENDOR_WEBGL: /* 0x9245 */ GLenum<'UNMASKED_VENDOR_WEBGL'>;
		readonly UNMASKED_RENDERER_WEBGL: /* 0x9246 */ GLenum<'UNMASKED_RENDERER_WEBGL'>;
	}
	interface Base_WEBGL_debug_renderer_info {
		getParameter(pname: WEBGL_debug_renderer_info['UNMASKED_VENDOR_WEBGL']): DOMString;
		getParameter(pname: WEBGL_debug_renderer_info['UNMASKED_RENDERER_WEBGL']): DOMString;
	}

	// https://www.khronos.org/registry/webgl/extensions/WEBGL_debug_shaders/
	/* [NoInterfaceObject] */
	interface WEBGL_debug_shaders {
		getTranslatedShaderSource(shader: WebGLShader): DOMString;
	}

	// https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc/
	/* [NoInterfaceObject] */
	interface WEBGL_compressed_texture_s3tc {
		/* Compressed Texture Formats */
		readonly COMPRESSED_RGB_S3TC_DXT1_EXT: /* 0x83F0 */ GLenum<'COMPRESSED_RGB_S3TC_DXT1_EXT'>;
		readonly COMPRESSED_RGBA_S3TC_DXT1_EXT: /* 0x83F1 */ GLenum<'COMPRESSED_RGBA_S3TC_DXT1_EXT'>;
		readonly COMPRESSED_RGBA_S3TC_DXT3_EXT: /* 0x83F2 */ GLenum<'COMPRESSED_RGBA_S3TC_DXT3_EXT'>;
		readonly COMPRESSED_RGBA_S3TC_DXT5_EXT: /* 0x83F3 */ GLenum<'COMPRESSED_RGBA_S3TC_DXT5_EXT'>;
	}
	interface Base_WEBGL_compressed_texture_s3tc {
		compressedTexImage2D(target: TexImage2DTarget, level: GLint, internalformat: CompressedTextureFormatS3tc, width: GLsizei, height: GLsizei, border: 0, /* [AllowShared] */ data: ArrayBufferView): void;
		compressedTexSubImage2D(target: TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: CompressedTextureFormatS3tc, /* [AllowShared] */ data: ArrayBufferView): void;
	}
	type CompressedTextureFormatS3tc = WEBGL_compressed_texture_s3tc['COMPRESSED_RGB_S3TC_DXT1_EXT']
		| WEBGL_compressed_texture_s3tc['COMPRESSED_RGBA_S3TC_DXT1_EXT']
		| WEBGL_compressed_texture_s3tc['COMPRESSED_RGBA_S3TC_DXT3_EXT']
		| WEBGL_compressed_texture_s3tc['COMPRESSED_RGBA_S3TC_DXT5_EXT'];

	// https://www.khronos.org/registry/webgl/extensions/WEBGL_depth_texture/
	/* [NoInterfaceObject] */
	interface WEBGL_depth_texture {
		readonly UNSIGNED_INT_24_8_WEBGL: /* 0x84FA */ GLenum<'UNSIGNED_INT_24_8_WEBGL'>;
	}
	interface Base_WEBGL_depth_texture {
		texImage2D(target: TexImage2DTarget, level: GLint, internalformat: GL['DEPTH_COMPONENT'], width: GLsizei, height: GLsizei, border: 0, format: GL['DEPTH_COMPONENT'], type: GL['UNSIGNED_SHORT'], /* [AllowShared] */ pixels: Uint16Array | null): void;
		texImage2D(target: TexImage2DTarget, level: GLint, internalformat: GL['DEPTH_COMPONENT'], width: GLsizei, height: GLsizei, border: 0, format: GL['DEPTH_COMPONENT'], type: GL['UNSIGNED_INT'], /* [AllowShared] */ pixels: Uint32Array | null): void;
		texImage2D(target: TexImage2DTarget, level: GLint, internalformat: GL['DEPTH_STENCIL'], width: GLsizei, height: GLsizei, border: 0, format: GL['DEPTH_STENCIL'], type: WEBGL_depth_texture['UNSIGNED_INT_24_8_WEBGL'], /* [AllowShared] */ pixels: Uint32Array | null): void;

		// May throw DOMException:
		texImage2D(target: TexImage2DTarget, level: GLint, internalformat: GL['DEPTH_COMPONENT'], format: GL['DEPTH_COMPONENT'], type: GL['UNSIGNED_SHORT'] | GL['UNSIGNED_INT'], source: TexImageSource): void;
		texImage2D(target: TexImage2DTarget, level: GLint, internalformat: GL['DEPTH_STENCIL'], format: GL['DEPTH_STENCIL'], type: WEBGL_depth_texture['UNSIGNED_INT_24_8_WEBGL'], source: TexImageSource): void;

		framebufferTexture2D(target: GL['FRAMEBUFFER'], attachment: GL['DEPTH_STENCIL_ATTACHMENT'], textarget: TexImage2DTarget, texture: WebGLTexture | null, level: GLint): void;
	}

	// https://www.khronos.org/registry/webgl/extensions/Base_OES_element_index_uint/
	interface Base_OES_element_index_uint {
		drawElements(mode: DrawMode, count: GLsizei, type: GL['UNSIGNED_INT'], offset: GLintptr): void;
	}

	// https://www.khronos.org/registry/webgl/extensions/EXT_texture_filter_anisotropic/
	/* [NoInterfaceObject] */
	interface EXT_texture_filter_anisotropic {
		readonly TEXTURE_MAX_ANISOTROPY_EXT:       /* 0x84FE */ GLenum<'TEXTURE_MAX_ANISOTROPY_EXT'>;
		readonly MAX_TEXTURE_MAX_ANISOTROPY_EXT:   /* 0x84FF */ GLenum<'MAX_TEXTURE_MAX_ANISOTROPY_EXT'>;
	}
	interface Base_EXT_texture_filter_anisotropic {
		getParameter(pname: EXT_texture_filter_anisotropic['MAX_TEXTURE_MAX_ANISOTROPY_EXT']): GLfloat;
		getTexParameter(target: TextureTarget, pname: EXT_texture_filter_anisotropic['TEXTURE_MAX_ANISOTROPY_EXT']): GLfloat;
		texParameterf(target: TextureTarget, pname: EXT_texture_filter_anisotropic['TEXTURE_MAX_ANISOTROPY_EXT'], param: GLfloat): void;
	}

	// https://www.khronos.org/registry/webgl/extensions/WEBGL_draw_buffers/
	/* [NoInterfaceObject] */
	interface WEBGL_draw_buffers {
		readonly COLOR_ATTACHMENT0_WEBGL: /* 0x8CE0 */ GLenum<'COLOR_ATTACHMENT0'>;
		readonly COLOR_ATTACHMENT1_WEBGL: /* 0x8CE1 */ GLenum<'COLOR_ATTACHMENT1'>;
		readonly COLOR_ATTACHMENT2_WEBGL: /* 0x8CE2 */ GLenum<'COLOR_ATTACHMENT2'>;
		readonly COLOR_ATTACHMENT3_WEBGL: /* 0x8CE3 */ GLenum<'COLOR_ATTACHMENT3'>;
		readonly COLOR_ATTACHMENT4_WEBGL: /* 0x8CE4 */ GLenum<'COLOR_ATTACHMENT4'>;
		readonly COLOR_ATTACHMENT5_WEBGL: /* 0x8CE5 */ GLenum<'COLOR_ATTACHMENT5'>;
		readonly COLOR_ATTACHMENT6_WEBGL: /* 0x8CE6 */ GLenum<'COLOR_ATTACHMENT6'>;
		readonly COLOR_ATTACHMENT7_WEBGL: /* 0x8CE7 */ GLenum<'COLOR_ATTACHMENT7'>;
		readonly COLOR_ATTACHMENT8_WEBGL: /* 0x8CE8 */ GLenum<'COLOR_ATTACHMENT8'>;
		readonly COLOR_ATTACHMENT9_WEBGL: /* 0x8CE9 */ GLenum<'COLOR_ATTACHMENT9'>;
		readonly COLOR_ATTACHMENT10_WEBGL: /* 0x8CEA */ GLenum<'COLOR_ATTACHMENT10'>;
		readonly COLOR_ATTACHMENT11_WEBGL: /* 0x8CEB */ GLenum<'COLOR_ATTACHMENT11'>;
		readonly COLOR_ATTACHMENT12_WEBGL: /* 0x8CEC */ GLenum<'COLOR_ATTACHMENT12'>;
		readonly COLOR_ATTACHMENT13_WEBGL: /* 0x8CED */ GLenum<'COLOR_ATTACHMENT13'>;
		readonly COLOR_ATTACHMENT14_WEBGL: /* 0x8CEE */ GLenum<'COLOR_ATTACHMENT14'>;
		readonly COLOR_ATTACHMENT15_WEBGL: /* 0x8CEF */ GLenum<'COLOR_ATTACHMENT15'>;

		readonly DRAW_BUFFER0_WEBGL: /* 0x8825 */ GLenum<'DRAW_BUFFER0'>;
		readonly DRAW_BUFFER1_WEBGL: /* 0x8826 */ GLenum<'DRAW_BUFFER1'>;
		readonly DRAW_BUFFER2_WEBGL: /* 0x8827 */ GLenum<'DRAW_BUFFER2'>;
		readonly DRAW_BUFFER3_WEBGL: /* 0x8828 */ GLenum<'DRAW_BUFFER3'>;
		readonly DRAW_BUFFER4_WEBGL: /* 0x8829 */ GLenum<'DRAW_BUFFER4'>;
		readonly DRAW_BUFFER5_WEBGL: /* 0x882A */ GLenum<'DRAW_BUFFER5'>;
		readonly DRAW_BUFFER6_WEBGL: /* 0x882B */ GLenum<'DRAW_BUFFER6'>;
		readonly DRAW_BUFFER7_WEBGL: /* 0x882C */ GLenum<'DRAW_BUFFER7'>;
		readonly DRAW_BUFFER8_WEBGL: /* 0x882D */ GLenum<'DRAW_BUFFER8'>;
		readonly DRAW_BUFFER9_WEBGL: /* 0x882E */ GLenum<'DRAW_BUFFER9'>;
		readonly DRAW_BUFFER10_WEBGL: /* 0x882F */ GLenum<'DRAW_BUFFER10'>;
		readonly DRAW_BUFFER11_WEBGL: /* 0x8830 */ GLenum<'DRAW_BUFFER11'>;
		readonly DRAW_BUFFER12_WEBGL: /* 0x8831 */ GLenum<'DRAW_BUFFER12'>;
		readonly DRAW_BUFFER13_WEBGL: /* 0x8832 */ GLenum<'DRAW_BUFFER13'>;
		readonly DRAW_BUFFER14_WEBGL: /* 0x8833 */ GLenum<'DRAW_BUFFER14'>;
		readonly DRAW_BUFFER15_WEBGL: /* 0x8834 */ GLenum<'DRAW_BUFFER15'>;

		readonly MAX_COLOR_ATTACHMENTS_WEBGL: /* 0x8CDF */ GLenum<'MAX_COLOR_ATTACHMENTS_WEBGL'>;
		readonly MAX_DRAW_BUFFERS_WEBGL: /* 0x8824 */ GLenum<'MAX_DRAW_BUFFERS_WEBGL'>;

		drawBuffersWEBGL(buffers: Array<GL['NONE'] | GL['BACK'] | ColorAttachment>): void;
	}
	interface Base_WEBGL_draw_buffers {
		getParameter(pname: WEBGL_draw_buffers['MAX_COLOR_ATTACHMENTS_WEBGL']): GLuint;
		getParameter(pname: WEBGL_draw_buffers['MAX_DRAW_BUFFERS_WEBGL']): GLuint;
		getParameter(pname: DrawBuffer): GL['NONE'] | GL['BACK'] | ColorAttachment;
		framebufferRenderbuffer(target: GL['FRAMEBUFFER'], attachment: ColorAttachment, renderbuffertarget: GL['RENDERBUFFER'], renderbuffer: WebGLRenderbuffer | null): void;
		framebufferTexture2D(target: GL['FRAMEBUFFER'], attachment: ColorAttachment, textarget: TexImage2DTarget, texture: WebGLTexture | null, level: GLint): void;
	}
	// TODO: remove "_WEBGL" os it works with wgl2
	type ColorAttachment = WEBGL_draw_buffers['COLOR_ATTACHMENT0_WEBGL']
		| WEBGL_draw_buffers['COLOR_ATTACHMENT1_WEBGL']
		| WEBGL_draw_buffers['COLOR_ATTACHMENT2_WEBGL']
		| WEBGL_draw_buffers['COLOR_ATTACHMENT3_WEBGL']
		| WEBGL_draw_buffers['COLOR_ATTACHMENT4_WEBGL']
		| WEBGL_draw_buffers['COLOR_ATTACHMENT5_WEBGL']
		| WEBGL_draw_buffers['COLOR_ATTACHMENT6_WEBGL']
		| WEBGL_draw_buffers['COLOR_ATTACHMENT7_WEBGL']
		| WEBGL_draw_buffers['COLOR_ATTACHMENT8_WEBGL']
		| WEBGL_draw_buffers['COLOR_ATTACHMENT9_WEBGL']
		| WEBGL_draw_buffers['COLOR_ATTACHMENT10_WEBGL']
		| WEBGL_draw_buffers['COLOR_ATTACHMENT11_WEBGL']
		| WEBGL_draw_buffers['COLOR_ATTACHMENT12_WEBGL']
		| WEBGL_draw_buffers['COLOR_ATTACHMENT13_WEBGL']
		| WEBGL_draw_buffers['COLOR_ATTACHMENT14_WEBGL']
		| WEBGL_draw_buffers['COLOR_ATTACHMENT15_WEBGL'];
	type DrawBuffer = WEBGL_draw_buffers['DRAW_BUFFER0_WEBGL']
		| WEBGL_draw_buffers['DRAW_BUFFER1_WEBGL']
		| WEBGL_draw_buffers['DRAW_BUFFER2_WEBGL']
		| WEBGL_draw_buffers['DRAW_BUFFER3_WEBGL']
		| WEBGL_draw_buffers['DRAW_BUFFER4_WEBGL']
		| WEBGL_draw_buffers['DRAW_BUFFER5_WEBGL']
		| WEBGL_draw_buffers['DRAW_BUFFER6_WEBGL']
		| WEBGL_draw_buffers['DRAW_BUFFER7_WEBGL']
		| WEBGL_draw_buffers['DRAW_BUFFER8_WEBGL']
		| WEBGL_draw_buffers['DRAW_BUFFER9_WEBGL']
		| WEBGL_draw_buffers['DRAW_BUFFER10_WEBGL']
		| WEBGL_draw_buffers['DRAW_BUFFER11_WEBGL']
		| WEBGL_draw_buffers['DRAW_BUFFER12_WEBGL']
		| WEBGL_draw_buffers['DRAW_BUFFER13_WEBGL']
		| WEBGL_draw_buffers['DRAW_BUFFER14_WEBGL']
		| WEBGL_draw_buffers['DRAW_BUFFER15_WEBGL'];

	// https://www.khronos.org/registry/webgl/extensions/WEBGL_draw_buffers/
	/* [NoInterfaceObject] */
	interface EXT_blend_minmax {
		readonly MIN_EXT: /* 0x8007 */ GLenum<'MIN_EXT'>;
		readonly MAX_EXT: /* 0x8008 */ GLenum<'MAX_EXT'>;
	}
	interface Base_EXT_blend_minmax {
		blendEquation(mode: BlendEquationModeMinMax): void;
		blendEquationSeparate(modeRGB: BlendEquationModeMinMax, modeAlpha: BlendEquationModeMinMax): void;
	}
	type BlendEquationModeMinMax = EXT_blend_minmax['MIN_EXT'] | EXT_blend_minmax['MAX_EXT'];

	// #########################################
	// ## Community approved WebGL Extensions ##
	// #########################################

	// https://www.khronos.org/registry/webgl/extensions/EXT_color_buffer_half_float/
	/* [NoInterfaceObject] */
	interface EXT_color_buffer_half_float {
		readonly RGBA16F_EXT:  /* 0x881A */ GLenum<'RGBA16F_EXT'>;
		readonly RGB16F_EXT:  /* 0x881B */ GLenum<'RGB16F_EXT'>;
		readonly FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT:  /* 0x8211 */ GLenum<'FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT'>;
		readonly UNSIGNED_NORMALIZED_EXT:  /* 0x8C17 */ GLenum<'UNSIGNED_NORMALIZED_EXT'>;
	}
	interface Base_EXT_color_buffer_half_float {
		renderbufferStorage(target: GL['RENDERBUFFER'], internalformat: EXT_color_buffer_half_float['RGBA16F_EXT'] | EXT_color_buffer_half_float['RGB16F_EXT'], width: GLsizei, height: GLsizei): void;
	}

	// https://www.khronos.org/registry/webgl/extensions/EXT_disjoint_timer_query/
	type GLuint64EXT = number; // WebIDL: unsigned long long
	/* [NoInterfaceObject] */
	interface WebGLTimerQueryEXT extends WebGLObject {
		__WebGLObjectBrand: 'WebGLTimerQueryEXT';
	}
	/* [NoInterfaceObject] */
	interface EXT_disjoint_timer_query {
		readonly QUERY_COUNTER_BITS_EXT:       /* 0x8864 */ GLenum<'QUERY_COUNTER_BITS_EXT'>;
		readonly CURRENT_QUERY_EXT:            /* 0x8865 */ GLenum<'CURRENT_QUERY_EXT'>;
		readonly QUERY_RESULT_EXT:             /* 0x8866 */ GLenum<'QUERY_RESULT_EXT'>;
		readonly QUERY_RESULT_AVAILABLE_EXT:   /* 0x8867 */ GLenum<'QUERY_RESULT_AVAILABLE_EXT'>;
		readonly TIME_ELAPSED_EXT:             /* 0x88BF */ GLenum<'TIME_ELAPSED_EXT'>;
		readonly TIMESTAMP_EXT:                /* 0x8E28 */ GLenum<'TIMESTAMP_EXT'>;
		readonly GPU_DISJOINT_EXT:             /* 0x8FBB */ GLenum<'GPU_DISJOINT_EXT'>;

		createQueryEXT(): WebGLTimerQueryEXT | null;
		deleteQueryEXT(query: WebGLTimerQueryEXT | null): void;
 		/* [WebGLHandlesContextLoss] */ isQueryEXT(query: WebGLTimerQueryEXT | null): boolean;
		beginQueryEXT(target: EXT_disjoint_timer_query['TIME_ELAPSED_EXT'], query: WebGLTimerQueryEXT): void;
		endQueryEXT(target: EXT_disjoint_timer_query['TIME_ELAPSED_EXT']): void;
		queryCounterEXT(query: WebGLTimerQueryEXT, target: EXT_disjoint_timer_query['TIMESTAMP_EXT']): void;

		getQueryEXT(target: EXT_disjoint_timer_query['TIME_ELAPSED_EXT'], pname: EXT_disjoint_timer_query['CURRENT_QUERY_EXT']): WebGLTimerQueryEXT | null;
		getQueryEXT(target: EXT_disjoint_timer_query['TIMESTAMP_EXT'], pname: EXT_disjoint_timer_query['CURRENT_QUERY_EXT']): null;
		getQueryEXT(target: EXT_disjoint_timer_query['TIME_ELAPSED_EXT'], pname: EXT_disjoint_timer_query['QUERY_COUNTER_BITS_EXT']): GLint;
		getQueryEXT(target: EXT_disjoint_timer_query['TIMESTAMP_EXT'], pname: EXT_disjoint_timer_query['QUERY_COUNTER_BITS_EXT']): GLint;

		getQueryObjectEXT(query: WebGLTimerQueryEXT, pname: EXT_disjoint_timer_query['QUERY_RESULT_EXT']): GLuint64EXT;
		getQueryObjectEXT(query: WebGLTimerQueryEXT, pname: EXT_disjoint_timer_query['QUERY_RESULT_AVAILABLE_EXT']): boolean;
	}
	interface Base_EXT_disjoint_timer_query {
		getParameter(pname: EXT_disjoint_timer_query['TIMESTAMP_EXT']): GLuint64EXT;
		getParameter(pname: EXT_disjoint_timer_query['GPU_DISJOINT_EXT']): boolean;
	}

	// https://www.khronos.org/registry/webgl/extensions/EXT_sRGB/
	/* [NoInterfaceObject] */
    interface EXT_sRGB {
      readonly SRGB_EXT:                                      /* 0x8C40 */ GLenum<'SRGB_EXT'>;
      readonly SRGB_ALPHA_EXT:                                /* 0x8C42 */ GLenum<'SRGB_ALPHA_EXT'>;
      readonly SRGB8_ALPHA8_EXT:                              /* 0x8C43 */ GLenum<'SRGB8_ALPHA8_EXT'>;
      readonly FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT:     /* 0x8210 */ GLenum<'FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT'>;
    }
	interface Base_EXT_sRGB {
		texImage2D(target: TexImage2DTarget, level: GLint, internalformat: EXT_sRGB['SRGB_EXT'], width: GLsizei, height: GLsizei, border: 0, format: EXT_sRGB['SRGB_EXT'], type: GL['UNSIGNED_BYTE'], /* [AllowShared] */ pixels:  Uint8Array  | null): void;
		texImage2D(target: TexImage2DTarget, level: GLint, internalformat: EXT_sRGB['SRGB_ALPHA_EXT'], width: GLsizei, height: GLsizei, border: 0, format: EXT_sRGB['SRGB_ALPHA_EXT'], type: GL['UNSIGNED_BYTE'], /* [AllowShared] */ pixels:  Uint8Array  | null): void;

		texImage2D(target: TexImage2DTarget, level: GLint, internalformat: EXT_sRGB['SRGB_EXT'], format: EXT_sRGB['SRGB_EXT'], type: GL['UNSIGNED_BYTE'], source: TexImageSource): void;
		texImage2D(target: TexImage2DTarget, level: GLint, internalformat: EXT_sRGB['SRGB_ALPHA_EXT'], format: EXT_sRGB['SRGB_ALPHA_EXT'], type: GL['UNSIGNED_BYTE'], source: TexImageSource): void;

		texSubImage2D(target: TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: EXT_sRGB['SRGB_EXT'] | EXT_sRGB['SRGB_ALPHA_EXT'], type: GL['UNSIGNED_BYTE'], /* [AllowShared] */ pixels:  Uint8Array  | null): void;
		texSubImage2D(target: TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, format: EXT_sRGB['SRGB_EXT'] | EXT_sRGB['SRGB_ALPHA_EXT'], type: GL['UNSIGNED_BYTE'], source: TexImageSource): void;

		renderbufferStorage(target: GL['RENDERBUFFER'], internalformat: EXT_sRGB['SRGB8_ALPHA8_EXT'], width: GLsizei, height: GLsizei): void;

		getFramebufferAttachmentParameter(target: GL['FRAMEBUFFER'], attachment: ColorAttachment, pname: EXT_sRGB['FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT']): GL['LINEAR'] | EXT_sRGB['SRGB_EXT'];
	}

	// https://www.khronos.org/registry/webgl/extensions/WEBGL_color_buffer_float/
	/* [NoInterfaceObject] */
	interface WEBGL_color_buffer_float {
		readonly RGBA32F_EXT:  /* 0x8814 */ GLenum<'RGBA32F_EXT'>;
		readonly RGB32F_EXT:  /* 0x8815 */ GLenum<'RGB32F_EXT'>;
		readonly FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT:  /* 0x8211 */ GLenum<'FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT'>;
		readonly UNSIGNED_NORMALIZED_EXT:  /* 0x8C17 */ GLenum<'UNSIGNED_NORMALIZED_EXT'>;
	}
	interface Base_WEBGL_color_buffer_float {
		renderbufferStorage(target: GL['RENDERBUFFER'], internalformat: WEBGL_color_buffer_float['RGBA32F_EXT'] | WEBGL_color_buffer_float['RGB32F_EXT'], width: GLsizei, height: GLsizei): void;
	}

	// https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_astc/
	/* [NoInterfaceObject] */
	interface WEBGL_compressed_texture_astc {
		/* Compressed Texture Format */
		readonly COMPRESSED_RGBA_ASTC_4x4_KHR:  /* 0x93B0 */ GLenum<'COMPRESSED_RGBA_ASTC_4x4_KHR'>;
		readonly COMPRESSED_RGBA_ASTC_5x4_KHR:  /* 0x93B1 */ GLenum<'COMPRESSED_RGBA_ASTC_5x4_KHR'>;
		readonly COMPRESSED_RGBA_ASTC_5x5_KHR:  /* 0x93B2 */ GLenum<'COMPRESSED_RGBA_ASTC_5x5_KHR'>;
		readonly COMPRESSED_RGBA_ASTC_6x5_KHR:  /* 0x93B3 */ GLenum<'COMPRESSED_RGBA_ASTC_6x5_KHR'>;
		readonly COMPRESSED_RGBA_ASTC_6x6_KHR:  /* 0x93B4 */ GLenum<'COMPRESSED_RGBA_ASTC_6x6_KHR'>;
		readonly COMPRESSED_RGBA_ASTC_8x5_KHR:  /* 0x93B5 */ GLenum<'COMPRESSED_RGBA_ASTC_8x5_KHR'>;
		readonly COMPRESSED_RGBA_ASTC_8x6_KHR:  /* 0x93B6 */ GLenum<'COMPRESSED_RGBA_ASTC_8x6_KHR'>;
		readonly COMPRESSED_RGBA_ASTC_8x8_KHR:  /* 0x93B7 */ GLenum<'COMPRESSED_RGBA_ASTC_8x8_KHR'>;
		readonly COMPRESSED_RGBA_ASTC_10x5_KHR:  /* 0x93B8 */ GLenum<'COMPRESSED_RGBA_ASTC_10x5_KHR'>;
		readonly COMPRESSED_RGBA_ASTC_10x6_KHR:  /* 0x93B9 */ GLenum<'COMPRESSED_RGBA_ASTC_10x6_KHR'>;
		readonly COMPRESSED_RGBA_ASTC_10x8_KHR:  /* 0x93BA */ GLenum<'COMPRESSED_RGBA_ASTC_10x8_KHR'>;
		readonly COMPRESSED_RGBA_ASTC_10x10_KHR:  /* 0x93BB */ GLenum<'COMPRESSED_RGBA_ASTC_10x10_KHR'>;
		readonly COMPRESSED_RGBA_ASTC_12x10_KHR:  /* 0x93BC */ GLenum<'COMPRESSED_RGBA_ASTC_12x10_KHR'>;
		readonly COMPRESSED_RGBA_ASTC_12x12_KHR:  /* 0x93BD */ GLenum<'COMPRESSED_RGBA_ASTC_12x12_KHR'>;

		readonly COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:  /* 0x93D0 */ GLenum<'COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR'>;
		readonly COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:  /* 0x93D1 */ GLenum<'COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR'>;
		readonly COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:  /* 0x93D2 */ GLenum<'COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR'>;
		readonly COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:  /* 0x93D3 */ GLenum<'COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR'>;
		readonly COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:  /* 0x93D4 */ GLenum<'COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR'>;
		readonly COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:  /* 0x93D5 */ GLenum<'COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR'>;
		readonly COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:  /* 0x93D6 */ GLenum<'COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR'>;
		readonly COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:  /* 0x93D7 */ GLenum<'COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR'>;
		readonly COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:  /* 0x93D8 */ GLenum<'COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR'>;
		readonly COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:  /* 0x93D9 */ GLenum<'COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR'>;
		readonly COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:  /* 0x93DA */ GLenum<'COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR'>;
		readonly COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:  /* 0x93DB */ GLenum<'COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR'>;
		readonly COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:  /* 0x93DC */ GLenum<'COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR'>;
		readonly COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:  /* 0x93DD */ GLenum<'COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR'>;

		// Profile query support.
		getSupportedProfiles(): DOMString[];
	}
	interface Base_WEBGL_compressed_texture_astc {
		compressedTexImage2D(target: TexImage2DTarget, level: GLint, internalformat: CompressedTextureFormatAstc, width: GLsizei, height: GLsizei, border: 0, /* [AllowShared] */ data: ArrayBufferView): void;
		compressedTexSubImage2D(target: TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: CompressedTextureFormatAstc, /* [AllowShared] */ data: ArrayBufferView): void;
	}
	type CompressedTextureFormatAstc = WEBGL_compressed_texture_astc['COMPRESSED_RGBA_ASTC_4x4_KHR']
		| WEBGL_compressed_texture_astc['COMPRESSED_RGBA_ASTC_5x4_KHR']
		| WEBGL_compressed_texture_astc['COMPRESSED_RGBA_ASTC_5x5_KHR']
		| WEBGL_compressed_texture_astc['COMPRESSED_RGBA_ASTC_6x5_KHR']
		| WEBGL_compressed_texture_astc['COMPRESSED_RGBA_ASTC_6x6_KHR']
		| WEBGL_compressed_texture_astc['COMPRESSED_RGBA_ASTC_8x5_KHR']
		| WEBGL_compressed_texture_astc['COMPRESSED_RGBA_ASTC_8x6_KHR']
		| WEBGL_compressed_texture_astc['COMPRESSED_RGBA_ASTC_8x8_KHR']
		| WEBGL_compressed_texture_astc['COMPRESSED_RGBA_ASTC_10x5_KHR']
		| WEBGL_compressed_texture_astc['COMPRESSED_RGBA_ASTC_10x6_KHR']
		| WEBGL_compressed_texture_astc['COMPRESSED_RGBA_ASTC_10x8_KHR']
		| WEBGL_compressed_texture_astc['COMPRESSED_RGBA_ASTC_10x10_KHR']
		| WEBGL_compressed_texture_astc['COMPRESSED_RGBA_ASTC_12x10_KHR']
		| WEBGL_compressed_texture_astc['COMPRESSED_RGBA_ASTC_12x12_KHR']
		| WEBGL_compressed_texture_astc['COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR']
		| WEBGL_compressed_texture_astc['COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR']
		| WEBGL_compressed_texture_astc['COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR']
		| WEBGL_compressed_texture_astc['COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR']
		| WEBGL_compressed_texture_astc['COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR']
		| WEBGL_compressed_texture_astc['COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR']
		| WEBGL_compressed_texture_astc['COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR']
		| WEBGL_compressed_texture_astc['COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR']
		| WEBGL_compressed_texture_astc['COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR']
		| WEBGL_compressed_texture_astc['COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR']
		| WEBGL_compressed_texture_astc['COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR']
		| WEBGL_compressed_texture_astc['COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR']
		| WEBGL_compressed_texture_astc['COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR']
		| WEBGL_compressed_texture_astc['COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR'];

	// https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_atc/
	/* [NoInterfaceObject] */
	interface WEBGL_compressed_texture_atc {
		/* Compressed Texture Formats */
		readonly COMPRESSED_RGB_ATC_WEBGL:                      /* 0x8C92 */ GLenum<'COMPRESSED_RGB_ATC_WEBGL'>;
		readonly COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL:      /* 0x8C93 */ GLenum<'COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL'>;
		readonly COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL:  /* 0x87EE */ GLenum<'COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL'>;
	}
	interface Base_WEBGL_compressed_texture_atc {
		compressedTexImage2D(target: TexImage2DTarget, level: GLint, internalformat: CompressedTextureFormatAtc, width: GLsizei, height: GLsizei, border: 0, /* [AllowShared] */ data: ArrayBufferView): void;
		compressedTexSubImage2D(target: TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: CompressedTextureFormatAtc, /* [AllowShared] */ data: ArrayBufferView): void;
	}
	type CompressedTextureFormatAtc = WEBGL_compressed_texture_atc['COMPRESSED_RGB_ATC_WEBGL']
		| WEBGL_compressed_texture_atc['COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL']
		| WEBGL_compressed_texture_atc['COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL'];

		// https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_etc/
		/* [NoInterfaceObject] */
		interface WEBGL_compressed_texture_etc {
			/* Compressed Texture Formats */
		readonly COMPRESSED_R11_EAC:                         /* 0x9270 */ GLenum<'COMPRESSED_R11_EAC'>;
		readonly COMPRESSED_SIGNED_R11_EAC:                  /* 0x9271 */ GLenum<'COMPRESSED_SIGNED_R11_EAC'>;
		readonly COMPRESSED_RG11_EAC:                        /* 0x9272 */ GLenum<'COMPRESSED_RG11_EAC'>;
		readonly COMPRESSED_SIGNED_RG11_EAC:                 /* 0x9273 */ GLenum<'COMPRESSED_SIGNED_RG11_EAC'>;
		readonly COMPRESSED_RGB8_ETC2:                       /* 0x9274 */ GLenum<'COMPRESSED_RGB8_ETC2'>;
		readonly COMPRESSED_SRGB8_ETC2:                      /* 0x9275 */ GLenum<'COMPRESSED_SRGB8_ETC2'>;
		readonly COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:   /* 0x9276 */ GLenum<'COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2'>;
		readonly COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:  /* 0x9277 */ GLenum<'COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2'>;
		readonly COMPRESSED_RGBA8_ETC2_EAC:                  /* 0x9278 */ GLenum<'COMPRESSED_RGBA8_ETC2_EAC'>;
		readonly COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:           /* 0x9279 */ GLenum<'COMPRESSED_SRGB8_ALPHA8_ETC2_EAC'>;
	}
	interface Base_WEBGL_compressed_texture_etc {
		compressedTexImage2D(target: TexImage2DTarget, level: GLint, internalformat: CompressedTextureFormatEtc, width: GLsizei, height: GLsizei, border: 0, /* [AllowShared] */ data: ArrayBufferView): void;
		compressedTexSubImage2D(target: TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: CompressedTextureFormatEtc, /* [AllowShared] */ data: ArrayBufferView): void;
	}
	type CompressedTextureFormatEtc = WEBGL_compressed_texture_etc['COMPRESSED_R11_EAC']
		| WEBGL_compressed_texture_etc['COMPRESSED_SIGNED_R11_EAC']
		| WEBGL_compressed_texture_etc['COMPRESSED_RG11_EAC']
		| WEBGL_compressed_texture_etc['COMPRESSED_SIGNED_RG11_EAC']
		| WEBGL_compressed_texture_etc['COMPRESSED_RGB8_ETC2']
		| WEBGL_compressed_texture_etc['COMPRESSED_SRGB8_ETC2']
		| WEBGL_compressed_texture_etc['COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2']
		| WEBGL_compressed_texture_etc['COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2']
		| WEBGL_compressed_texture_etc['COMPRESSED_RGBA8_ETC2_EAC']
		| WEBGL_compressed_texture_etc['COMPRESSED_SRGB8_ALPHA8_ETC2_EAC'];

	// https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_etc1/
	/* [NoInterfaceObject] */
	interface WEBGL_compressed_texture_etc1 {
		/* Compressed Texture Formats */
		readonly COMPRESSED_RGB_ETC1_WEBGL:  /* 0x8D64 */ GLenum<'COMPRESSED_RGB_ETC1_WEBGL'>;
	}
	interface Base_WEBGL_compressed_texture_etc1 {
		compressedTexImage2D(target: TexImage2DTarget, level: GLint, internalformat: WEBGL_compressed_texture_etc1['COMPRESSED_RGB_ETC1_WEBGL'], width: GLsizei, height: GLsizei, border: 0, /* [AllowShared] */ data: ArrayBufferView): void;
		// not supported for compressedTexSubImage2D
	}

	// https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_pvrtc/
	/* [NoInterfaceObject] */
	interface WEBGL_compressed_texture_pvrtc {
		/* Compressed Texture Formats */
		readonly COMPRESSED_RGB_PVRTC_4BPPV1_IMG:       /* 0x8C00 */ GLenum<'COMPRESSED_RGB_PVRTC_4BPPV1_IMG'>;
		readonly COMPRESSED_RGB_PVRTC_2BPPV1_IMG:       /* 0x8C01 */ GLenum<'COMPRESSED_RGB_PVRTC_2BPPV1_IMG'>;
		readonly COMPRESSED_RGBA_PVRTC_4BPPV1_IMG:      /* 0x8C02 */ GLenum<'COMPRESSED_RGBA_PVRTC_4BPPV1_IMG'>;
		readonly COMPRESSED_RGBA_PVRTC_2BPPV1_IMG:      /* 0x8C03 */ GLenum<'COMPRESSED_RGBA_PVRTC_2BPPV1_IMG'>;
	}
	interface Base_WEBGL_compressed_texture_pvrtc {
		compressedTexImage2D(target: TexImage2DTarget, level: GLint, internalformat: CompressedTextureFormatPvrtc, width: GLsizei, height: GLsizei, border: 0, /* [AllowShared] */ data: ArrayBufferView): void;
		compressedTexSubImage2D(target: TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: CompressedTextureFormatPvrtc, /* [AllowShared] */ data: ArrayBufferView): void;
	}
	type CompressedTextureFormatPvrtc = WEBGL_compressed_texture_pvrtc['COMPRESSED_RGB_PVRTC_4BPPV1_IMG']
		| WEBGL_compressed_texture_pvrtc['COMPRESSED_RGB_PVRTC_2BPPV1_IMG']
		| WEBGL_compressed_texture_pvrtc['COMPRESSED_RGBA_PVRTC_4BPPV1_IMG']
		| WEBGL_compressed_texture_pvrtc['COMPRESSED_RGBA_PVRTC_2BPPV1_IMG'];

	// https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc_srgb/
	/* [NoInterfaceObject] */
	interface WEBGL_compressed_texture_s3tc_srgb {
		/* Compressed Texture Formats */
		readonly COMPRESSED_SRGB_S3TC_DXT1_EXT:         /* 0x8C4C */ GLenum<'COMPRESSED_SRGB_S3TC_DXT1_EXT'>;
		readonly COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT:   /* 0x8C4D */ GLenum<'COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT'>;
		readonly COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT:   /* 0x8C4E */ GLenum<'COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT'>;
		readonly COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT:   /* 0x8C4F */ GLenum<'COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT'>;
	}
	interface Base_WEBGL_compressed_texture_s3tc_srgb {
		compressedTexImage2D(target: TexImage2DTarget, level: GLint, internalformat: CompressedTextureFormatS3tcSrgb, width: GLsizei, height: GLsizei, border: 0, /* [AllowShared] */ data: ArrayBufferView): void;
		compressedTexSubImage2D(target: TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: CompressedTextureFormatS3tcSrgb, /* [AllowShared] */ data: ArrayBufferView): void;
	}
	type CompressedTextureFormatS3tcSrgb = WEBGL_compressed_texture_s3tc_srgb['COMPRESSED_SRGB_S3TC_DXT1_EXT']
		| WEBGL_compressed_texture_s3tc_srgb['COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT']
		| WEBGL_compressed_texture_s3tc_srgb['COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT']
		| WEBGL_compressed_texture_s3tc_srgb['COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT'];
}

type WebGLRenderingContextStrict = WebGLRenderingContextStrict.Base &
	WebGLRenderingContextStrict.Extra &
	WebGLRenderingContextStrict.Base_ANGLE_instanced_arrays &
	WebGLRenderingContextStrict.Base_EXT_blend_minmax &
	WebGLRenderingContextStrict.Base_EXT_texture_filter_anisotropic &
	WebGLRenderingContextStrict.Base_OES_element_index_uint &
	WebGLRenderingContextStrict.Base_OES_standard_derivatives &
	WebGLRenderingContextStrict.Base_OES_texture_float &
	WebGLRenderingContextStrict.Base_OES_texture_half_float &
	WebGLRenderingContextStrict.Base_WEBGL_compressed_texture_s3tc &
	WebGLRenderingContextStrict.Base_WEBGL_debug_renderer_info &
	WebGLRenderingContextStrict.Base_WEBGL_depth_texture &
	WebGLRenderingContextStrict.Base_WEBGL_draw_buffers &

	WebGLRenderingContextStrict.Base_EXT_color_buffer_half_float &
	WebGLRenderingContextStrict.Base_EXT_disjoint_timer_query &
	WebGLRenderingContextStrict.Base_EXT_sRGB &
	WebGLRenderingContextStrict.Base_WEBGL_color_buffer_float &
	WebGLRenderingContextStrict.Base_WEBGL_compressed_texture_astc &
	WebGLRenderingContextStrict.Base_WEBGL_compressed_texture_atc &
	WebGLRenderingContextStrict.Base_WEBGL_compressed_texture_etc &
	WebGLRenderingContextStrict.Base_WEBGL_compressed_texture_etc1 &
	WebGLRenderingContextStrict.Base_WEBGL_compressed_texture_pvrtc &
	WebGLRenderingContextStrict.Base_WEBGL_compressed_texture_s3tc_srgb;

// declare var WebGLRenderingContext: WebGLRenderingContextStrict.Constants & {
// 	prototype: WebGLRenderingContextStrict;
// 	new(_: never): WebGLRenderingContextStrict;
// }

interface WebGLContextEvent extends Event {
    readonly statusMessage: string;
}

// EventInit is defined in the DOM4 specification.
interface WebGLContextEventInit extends EventInit {
    statusMessage?: string;
}
declare var WebGLContextEvent: {
    prototype: WebGLContextEvent;
    new(typeArg: string, eventInitDict?: WebGLContextEventInit): WebGLContextEvent;
};
