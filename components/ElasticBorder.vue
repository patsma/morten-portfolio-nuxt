<template>
  <div class="svg-border" ref="border">
    <svg class="svg-border--svg" width="100%" height="100" viewBox="0 0 400 100" preserveAspectRatio="none">
      <path class="svg-border--curve" d="M0,0 Q200,0 400,0" fill="none" stroke="#f52e6d" stroke-width="1"/>
    </svg>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import {gsap} from 'gsap';

const border = ref(null);

onMounted(() => {
  const curve = border.value.querySelector('.svg-border--curve');
  setupAnimation(curve);
});

function setupAnimation(curve) {
  let lastMouseY = 0;
  const hoverOffset = 400;
  const animationDuration = 0.8; // in seconds

  function onMouseMove(e) {
    const borderRect = border.value.getBoundingClientRect();
    let mouseY = e.clientY - borderRect.top;

    // Check if the mouse is within the hover area
    if (mouseY < -hoverOffset || mouseY > borderRect.height + hoverOffset) {
      return;
    }

    mouseY = Math.max(-hoverOffset, Math.min(mouseY, borderRect.height + hoverOffset));

    // Determine the direction of the mouse movement
    let direction = mouseY > lastMouseY ? 'down' : 'up';
    let curveY = direction === 'up' ? borderRect.height - mouseY : mouseY;

    gsap.to(curve, {attr: {d: `M0,0 Q200,${curveY} 400,0`}, duration: animationDuration});
    lastMouseY = mouseY;
  }

  function onMouseOut() {
    gsap.to(curve, {
      attr: {d: `M0,0 Q200,0 400,0`},
      duration: animationDuration,
      ease: "elastic.out(1, 0.3)"
    });
  }

  border.value.addEventListener('mousemove', onMouseMove);
  border.value.addEventListener('mouseout', onMouseOut);
}


// Rest of the script for handling mouse events and animating the SVG path
</script>

<style scoped lang="scss">
.svg-border {
  position: relative;
  width: 100%;
  height: 1px;
  z-index: 100;

  path {
    stroke: rgba(9, 9, 37, 0.15);
  }
}

.svg-border--svg {
  overflow: visible;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
