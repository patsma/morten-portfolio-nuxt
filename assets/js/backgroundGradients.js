import * as THREE from "three";

export class BackgroundGradients {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.container.appendChild(this.renderer.domElement);
    this.geometry = new THREE.PlaneGeometry(2, 2);
    this.uniforms = {
      time: { value: 0 },
    };
    this.material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: this.vertexShader(),
      fragmentShader: this.fragmentShader(),
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);
    this.startAnimation();
    window.addEventListener("resize", this.onWindowResize.bind(this), false);
  }

  vertexShader() {
    return `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;
  }

  fragmentShader() {
    return `
  uniform float time;
  varying vec2 vUv;

  float noise(vec2 uv, float t) {
    return (1.0 + sin(uv.x * 4.3 + t) + cos(uv.y * 4.3 + t)) * 0.5;
  }

  vec2 rotate(vec2 v, float a) {
    float s = sin(a);
    float c = cos(a);
    return vec2(c * v.x - s * v.y, s * v.x + c * v.y);
  }

  vec3 getColor(vec2 uv, float t) {
    vec3 topLeft = vec3(1.0, 0.5, 0.7);
    vec3 topRight = vec3(0.5, 1.0, 0.6);
    vec3 bottomLeft = vec3(0.6, 0.5, 1.0);
    vec3 bottomRight = vec3(0.8, 1.0, 0.5);

    vec2 center = vec2(0.5, 0.5);
    vec2 offset = vec2(0.5) - center;
    vec2 rotatedUV = rotate(uv - center, t * 0.05) + center;

    vec2 noiseUV = vec2(noise(rotatedUV, t * 0.5), noise(rotatedUV, t * 0.75));
    vec3 color = mix(mix(topLeft, topRight, noiseUV.x), mix(bottomLeft, bottomRight, noiseUV.x), noiseUV.y);
    return color;
  }

  void main() {
    vec3 color = getColor(vUv, time);
    gl_FragColor = vec4(color, 1.0);
  }
`;
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.uniforms.time.value += 0.005;
    this.renderer.render(this.scene, this.camera);
  }

  startAnimation() {
    this.animate();
  }

  onWindowResize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}

export default BackgroundGradients;
