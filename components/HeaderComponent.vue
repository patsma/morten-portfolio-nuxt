<template>
  <div>

  </div>
</template>
<script setup>
import {onMounted, onUnmounted, ref} from 'vue';
import gsap from 'gsap';
import {MorphSVGPlugin} from 'gsap/MorphSVGPlugin';
import useTextSlider from '~/composables/useTextSlider';
import useThemeSwitch from '~/composables/useThemeSwitch';
import useHeadroom from '~/composables/useHeadroom';
import ThemeToggleSVG from "~/components/ThemeToggleSVG.vue";

// Initialize composable functions
// const {play: playSlider1, progress: progressSlider1} = useTextSlider('.js--text-slider-01 li');
// const {play: playSlider2, progress: progressSlider2} = useTextSlider('.js--text-slider-02 li');
// const {play: playSlider3, progress: progressSlider3} = useTextSlider('.js--text-slider-03 li');

const {initHeadroom, destroyHeadroom} = useHeadroom('.nav');

if (process.client) {
  gsap.registerPlugin(MorphSVGPlugin);

}
onMounted(() => {
  const {initThemeSwitch} = useThemeSwitch();

  MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");
  // playSlider1();
  // playSlider2();
  // playSlider3();
  // initHeadroom();
  // initThemeSwitch();
});

onUnmounted(() => {

  // destroyHeadroom();
});
</script>