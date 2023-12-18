<template>
  <header>
    <nav class="nav fixed top-4 z-40 col-start-1 col-end-13 grid h-16 w-full grid-cols-12">
      <div class="nav__wrapper col-start-2 col-end-12 grid grid-flow-col items-center justify-between">
        <div class="nav__logo">
          <div class="ibmplex-400 grid gap-1">
            <NuxtLink to="/" class="text-dark-100 text-xs leading-[100%] tracking-[-0.03125rem]">Morten Christensen
            </NuxtLink>
            <div class="nav__roles text-dark-40 js--text-slider-01 overflow-hidden text-xxs leading-[100%]">
              <ul>
                <li>UX/UI Designer</li>
                <li>Digital Designer</li>
                <li>Art Director</li>
                <li>Mentor</li>
                <li>Visual Designer</li>
                <li>Portfolio</li>
              </ul>
            </div>
          </div>
        </div>
        <ul class="nav__list peiko-500 hidden grid-flow-col gap-8 text-base leading-[100%] md:grid">
          <li class="nav__item">
            <NuxtLink to="/" class="nav__link ">Work</NuxtLink>
          </li>
          <li class="nav__item">
            <NuxtLink to="/about" class="nav__link ">About</NuxtLink>
          </li>
          <li class="nav__item grid" id="themeSwitch">
            <button>
              <ThemeToggleSVG class="w-12"></ThemeToggleSVG>
            </button>
          </li>
          <li class="nav__item">
            <NuxtLink to="/testing" class="nav__link ">Lab</NuxtLink>
          </li>
          <li class="nav__item">
            <NuxtLink to="/" class="nav__link ">Contact</NuxtLink>

          </li>
        </ul>
        <div class="nav__contact ibmplex-400 w-24">
          <div class="nav__link">
            <div class="nav__roles grid gap-1">
              <ul class="text-dark-100 js--text-slider-02 overflow-hidden text-right text-xs leading-[100%] tracking-[-0.03125rem]"
                  id="city-name">
                <li>Tokyo, JP</li>
                <li>New York, NY</li>
                <li>Berlin, BE</li>
                <li>New York, NY</li>
              </ul>
              <ul class="text-dark-40 js--text-slider-03 overflow-hidden text-end text-xxs leading-[100%]"
                  id="city-time">
                <li>Jun 18, 20:00:23</li>
                <li>Aug 2, 10:20:23</li>
                <li>Jun 18, 20:00:23</li>
                <li>Aug 2, 10:20:23</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
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
const {play: playSlider1, progress: progressSlider1} = useTextSlider('.js--text-slider-01 li');
const {play: playSlider2, progress: progressSlider2} = useTextSlider('.js--text-slider-02 li');
const {play: playSlider3, progress: progressSlider3} = useTextSlider('.js--text-slider-03 li');

const {initHeadroom, destroyHeadroom} = useHeadroom('.nav');

if (process.client) {
  gsap.registerPlugin(MorphSVGPlugin);

}
onMounted(() => {
  const {initThemeSwitch} = useThemeSwitch();

  MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");
  playSlider1();
  playSlider2();
  playSlider3();
  initHeadroom();
  initThemeSwitch();
});

onUnmounted(() => {

  // destroyHeadroom();
});
</script>