<template>
  <div class="overlay">
    <div ref="container"
         class="background-webgl pointer-events-none fixed left-0 top-0 z-[-11] h-screen w-screen opacity-40"></div>
  </div>
</template>

<script setup>
import {onMounted, onUnmounted, ref} from 'vue';
import * as THREE from 'three';

const container = ref(null);

function setupBackgroundGradients(container) {
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  const renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  const geometry = new THREE.PlaneGeometry(2, 2);

  const uniforms = {
    time: {value: 0},
  };

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
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

  const material = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
  });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  function animate() {
    requestAnimationFrame(animate);
    uniforms.time.value += 0.005;
    renderer.render(scene, camera);
  }

  function onWindowResize() {
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  window.addEventListener("resize", onWindowResize, false);

  animate();

  // Return cleanup function
  return () => {
    window.removeEventListener("resize", onWindowResize);
  };
}

let cleanupFunction;

onMounted(() => {
  if (container.value) {
    cleanupFunction = setupBackgroundGradients(container.value);
  }
});

onUnmounted(() => {
  if (cleanupFunction) {
    cleanupFunction();
  }
});
</script>
