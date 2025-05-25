varying vec2 vUv;

uniform sampler2D uTexture1;
uniform sampler2D uTexture2;
uniform float uProgress;
uniform float uTime;

void main() {

  // 노이즈 기반 왜곡
  //vec2 distortedUv = vUv + vec2(sin(vUv.y * 20.0 + uTime) * 0.02, 0.0);
  float wave = sin(uProgress + vUv.x * 15.) * .02; //x
  float wave2 = sin(uProgress + vUv.y * 10.) * .02; //y
  vec2  offset = vec2(wave,wave2);

  // progress(0~1) tt1 -> tt2
  vec2 uv1 = vUv + offset + vec2(uProgress, .0); // tt1 :  -> 오
  vec2 uv2 = vUv + offset - vec2(1. - uProgress, .0); //tt2 : 왼 -> 오
  //vec4 tex1 = texture2D(uTexture1, distortedUv);
  //vec4 tex2 = texture2D(uTexture2, distortedUv);

  //clamp
  vec4 color1 = texture2D(uTexture1, clamp(uv1,.0,1.));
  vec4 color2 = texture2D(uTexture2, clamp(uv2,.0,1.));

  // 슬라이더 progress 기반 보간
  //vec4 finalColor = mix(tex1, tex2, smoothstep(0.0, 1.0, uProgress));
  vec4 mixColor = mix(color1,color2,smoothstep(.0,1.,uProgress));

  //gl_FragColor = finalColor;
  gl_FragColor = mixColor;
}