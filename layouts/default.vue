<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

const { $gsap } = useNuxtApp();
useHead({
  title: "Molki Design",
});

const main = ref();
let ctx;
let smoother;

onMounted(() => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  }

  setTimeout(() => {}, 200);
  ctx = gsap.context(() => {
    // create the smooth scroller FIRST!
    smoother = ScrollSmoother.create({
      smooth: 2, // seconds it takes to "catch up" to native scroll position
      effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
    });
    smoother.effects("img", { speed: "auto" });
  }, main.value);
});

onUnmounted(() => {
  ctx.revert();
});
</script>
<template>
  <main class="main">
    <div id="smooth-wrapper" ref="{main}">
      <div id="smooth-content">
        <slot />
      </div>
    </div>
  </main>
</template>
