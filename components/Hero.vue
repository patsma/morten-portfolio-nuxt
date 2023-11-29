<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import useTextEffect from '~/composables/useTextEffect';
import { useAnimationStore } from '~/stores/animation';

const effectName = 'heroHeaderEffect';
const animationStore = useAnimationStore();
const isEffectPlaying = ref(false);
const textElement = ref(null);

const { setupTextEffects, resetEffects } = useTextEffect('.js--text-animation-1', effectName);

onMounted(() => {
  if (textElement.value) {
    console.log('Initializing text effect:', textElement.value);
    setupTextEffects();
    animationStore.playTextEffect(effectName);
    isEffectPlaying.value = true;
  }
});

onUnmounted(() => {
  resetEffects();
  isEffectPlaying.value = false;
});
</script>









<template>
  <section class="component component--hero grid h-[95vh] content-end pb-14" id="component-hero-01">
    <div class="col-span-12 col-start-1 col-end-13 grid grid-cols-12">
      <div class="relative col-start-2 col-end-12 grid">
        <h1  ref="textElement" class="js--text-animation-1 peiko-100 text-shadow-1 text-4xl leading-[120%] tracking-tighter md:text-6xl">
                    <span class="text-dark-40">
                      Welcome, I am
                      <span class="text-dark-100 peiko-300">Morten</span>
                      – a
                      <span class="text-dark-100 peiko-italic-300">Danish</span>
                      <span class="text-dark-100 ibmplex-300">designer</span>
                      based in
                      <span class="text-dark-100 peiko-300">Tokyo</span>
                      approaching today’s challenges with a
                      <span class="text-dark-100 ibmplex-300">digital</span>
                      <span class="text-dark-100 peiko-italic-300">-first</span>
                      and
                      <span class="text-dark-100 ibmplex-300">user</span>
                      <span class="text-dark-100 peiko-italic-300">-centred</span>
                      mindset
                    </span>
        </h1>
        <div class="grid md:grid-flow-col">
          <div
              class="services fade-in-animation text-dark-40 ibmplex-500 flex max-w-3xl flex-wrap content-center gap-2 py-4 text-xxs uppercase leading-[110%] tracking-[0.0625rem]"
          >
            <div class="tag rounded p-1">Services</div>
            <div class="tag bg-dark-5 rounded p-1">Art direction</div>
            <div class="tag bg-dark-5 rounded p-1">Creative direction</div>
            <div class="tag bg-dark-5 rounded p-1">Concept Development</div>
            <div class="tag bg-dark-5 rounded p-1">Consulting & Guidance</div>
            <div class="tag bg-dark-5 rounded p-1">User experience design (ux)</div>
            <div class="tag bg-dark-5 rounded p-1">Digital design (UI)</div>
            <div class="tag bg-dark-5 rounded p-1">Interactive design</div>
            <div class="tag bg-dark-5 rounded p-1">Design systems & tokens</div>
          </div>
          <ScrollDownSVG/>
        </div>
      </div>
    </div>
  </section>
</template>
