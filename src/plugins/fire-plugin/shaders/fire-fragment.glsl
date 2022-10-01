// © JSOcean, https://codecanyon.net/licenses
// https://codecanyon.net/user/js-ocean/portfolio

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 uResolution;
uniform float uTime;
uniform float uRunning;

uniform vec3 uBaseColor1;
uniform vec3 uBaseColor2;
uniform float uFireShape;
uniform float uSpeed;
uniform float uFireStrength;
uniform float uFireDetalization;

#define NUM_OCTAVES 5

/**
 * get random number
 */
float random(vec2 uv) {
    return fract(sin(uv.x * 113.0 + uv.y * 412.0) * 6339.0);
}

/**
 * perlin noise 
 */
float perlin(vec2 uv) {
    vec2 i = floor(uv);
    vec2 f = fract(uv);
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    // mix 4 coorners percentages
    return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}


/**
 * fractal brownian motion - fractal noise
 * https://en.wikipedia.org/wiki/Fractional_Brownian_motion
 * FMB always gives a number between [0, 1]
 */
float fbm (in vec2 position){

    float f = 0.0;

    // the rotation transformation and the magnification transformation are multiplied -> expansion transformation
    mat2 m = mat2(1.6,  1.2, -1.2,  1.6);

    f  = 0.5000 * perlin(position);
    position = m * position;

    f += 0.2500 * perlin(position);
    position = m * position;

    f += 0.1250 * perlin(position);
    position = m * position;

    f += 0.0625 * perlin(position);
    position = m * position;

    return f;
}

/**
 * bump noise
 */
vec3 bumpMap(vec2 uv, float normalStrength) {
    vec2 s = 1.0 / uResolution.xy;
    float p =  fbm(uv);
    float h1 = fbm(uv + s * vec2(1.0, 0) * uFireShape);
    float v1 = fbm(uv + s * vec2(0.0, 1.0));
    vec2 xy = (p - vec2(h1, v1)) * normalStrength;
    return vec3(xy + 0.5, 1.0);
}

/**
 * create a circle
 */
float drawCircle(vec2 uv, float radius, float smoothThickness){
    return smoothstep(radius - smoothThickness, radius + smoothThickness, length(uv));
}

/**
 * generate a fire that consists of 3 flames
 */
vec3 fire(vec2 uv, float detalization, vec2 direction, float fireStrength, float radius, float soft) {

    vec3 color = vec3(0.0);

    // define the bump map
    uv += clamp((bumpMap(detalization * uv + direction, fireStrength).xy - 0.5), -1.0, 1.0);
    
    // invert the color
    color += 1.0 - drawCircle(uv, radius, soft);

    uv += clamp((bumpMap(detalization * 1.1 * uv + direction, fireStrength).xy - 0.5), -1.0, 1.0);
    
    // invert the color
    color += 1.0 - drawCircle(uv, radius / 2.0, soft);
    
    return color;
}

/**
 * entry point
 */
void main() {

    float time = uTime * uRunning;

    // normalize coordinates and fix aspect ratio
    vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.x, uResolution.y);
    uv.y += 0.5;

    vec3 color = vec3(0.0);

    // generate horizontal fire layer
    for(float i=-1.0; i <= 1.0; i+= 0.4){
        color += fire(uv - vec2(i, 0.1), uFireDetalization, -vec2(i * 12.0, time * (uSpeed - i / 10.0)), uFireStrength, 0.2, 0.05);
    }
    
    // set fire color
    vec3 gradient = mix(uBaseColor1, uBaseColor2, uv.y);
    color = mix(vec3(0.0), gradient, color);
    
    gl_FragColor = vec4(color, 1.0);

}