varying vec2 vUv;
varying vec3 vPosition;


void main() {
    vUv = uv;
    vPosition = position;
    
    vec4 modelPosition = modelViewMatrix * vec4(vPosition, 1.);
    vec4 projectedPosition = projectionMatrix * modelPosition;

    gl_Position = projectedPosition;
}