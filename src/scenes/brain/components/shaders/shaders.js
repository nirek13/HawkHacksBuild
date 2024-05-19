export const fragmentShader = `
varying vec3 vColor;
void main() {
    gl_FragColor = vec4(vColor, 1.0);
}
`

export const vertexShader = `
    uniform vec3 uPointer;
    uniform vec3 uColor;
    uniform float uRotation;
    uniform float uSize;
    uniform float uHover;

    attribute vec2 instanceUV;

    varying vec2 vUv;
    varying vec3 vColor;

    #define PI 3.14159265359

    #pragma glslify: rotate = require(./modules/rotate.glsl)

    void main() {
        vec4 mvPosition = vec4(position, 1.0);
        mvPosition = instanceMatrix * mvPosition;

        float d = distance(uPointer, mvPosition.xyz);
        float c = smoothstep(0.45, 0.1, d);

        float scale = uSize + c*8.*uHover;
        vec3 pos = position;
        pos *= scale;
        pos.xz *= rotate(PI*c*uRotation + PI*uRotation*0.43);
        pos.xy *= rotate(PI*c*uRotation + PI*uRotation*0.71);

        mvPosition = instanceMatrix * vec4(pos, 1.0);

        gl_Position = projectionMatrix * modelViewMatrix * mvPosition;

        vColor = uColor;
    }
`