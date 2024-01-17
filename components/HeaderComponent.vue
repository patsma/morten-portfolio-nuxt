<script setup>
import {onMounted, ref, nextTick} from 'vue';
import {useAnimationStore} from '@/stores/animationStore';
import SplitText from 'gsap/SplitText';
import {watch} from 'vue';
import {MorphSVGPlugin} from 'gsap/MorphSVGPlugin';
import useThemeSwitch from '~/composables/useThemeSwitch';
import useHeadroom from '~/composables/useHeadroom';
import ThemeToggleSVG from "~/components/ThemeToggleSVG.vue";
import {useTokyoTime} from '~/composables/useTokyoTime';

const {tokyoTime} = useTokyoTime();
const isClient = ref(false);

const {initHeadroom, destroyHeadroom} = useHeadroom('.nav');
const { $gsap } = useNuxtApp()

const textElementRef = ref(null);
const store = useAnimationStore();
let mySplitText;
let tl = $gsap.timeline({repeat: -1, repeatDelay: 1});


// Reinit scrolltrigger effect - force it
watch(() => store.currentText, (newVal, oldVal) => {
  if (oldVal !== undefined) { // Avoid initialization trigger
    nextTick(() => {
      setupSplitText();
    });
  }
});

const setupSplitText = () => {
  mySplitText = new SplitText(textElementRef.value, {type: "words,chars"});
  animateText();
};

const updateTextAndAnimate = () => {
  store.updateText();
};


const animateText = () => {
  tl.clear();
  tl.from(mySplitText.chars, {
    duration: 2,
    opacity: 0,
    stagger: 0.1,
  });
  tl.to(mySplitText.chars, {
    duration: 2,
    opacity: 0,
    stagger: 0.1,
    onComplete: updateTextAndAnimate,
  });
};

onMounted(() => {
  MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");
  const {initThemeSwitch} = useThemeSwitch();
  initHeadroom();
  initThemeSwitch();
  setupSplitText();


});

if (process.client) {
  isClient.value = true; // Set to true only on client-side
  $gsap.registerPlugin(SplitText, MorphSVGPlugin);

}
</script>


<template>
  <header>
    <nav class="nav fixed z-100 top-4 z-40 col-start-1 col-end-13 grid h-16 w-full grid-cols-12">
      <div class="nav__wrapper col-start-2 col-end-12 grid grid-flow-col items-center justify-between">
        <div class="nav__logo">
          <div class="ibmplex-400 grid gap-1">
            <NuxtLink to="/" class="text-dark-100 text-xs leading-[100%] tracking-[-0.03125rem]">Morten Christensen
            </NuxtLink>
            <div class="nav__roles text-dark-40 js--text-slider-01 overflow-hidden text-xxs leading-[100%]">
              <ul>
                <li :key="store.currentText" ref="textElementRef">{{ store.currentText }}</li>
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
        <div class="nav__contact ibmplex-400 w-28">
          <div class="nav__link">
            <div class="nav__roles grid gap-1">
              <ul class="text-dark-100 js--text-slider-02 overflow-hidden text-right text-xs leading-[100%] tracking-[-0.03125rem]"
                  id="city-name">
                <li>Tokyo, JP</li>

              </ul>
              <ul class="text-dark-40 js--text-slider-03 overflow-hidden text-end text-xxs leading-[100%]"
                  id="city-time">
                <li v-if="isClient">
                  {{ tokyoTime }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
