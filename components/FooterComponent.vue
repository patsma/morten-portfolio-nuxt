<script setup>

import useTextEffect from '~/composables/useTextEffect';
import ElasticBorder from "~/components/ElasticBorder.vue";

const {textEffect1Timelines} = useTextEffect('.js--text-effect-102', true);


</script>
<template>
  <section class="overflow-hidden">
    <div class="col-span-12 col-start-1 col-end-13 grid grid-cols-12">
      <div class="relative col-start-2 col-end-12 grid gap-10 md:grid-flow-col">
        <h1 class="js--text-effect-102 peiko-100 text-shadow-1   max-w-5xl text-4xl leading-[120%] tracking-tighter md:text-6xl">
                    <span class="text-dark-40">
                      Feel
                      <span class="text-dark-100 peiko-300">free</span>
                      to reach out if you want to
                      <span class="text-dark-100 peiko-italic-300">collaborate, hire,</span>
                      or
                      <span class="text-dark-100 ibmplex-300">simply</span>
                      <span class="text-dark-100 peiko-italic-300">have a chat</span>
                      with me
                    </span>
        </h1>
        <div class="hoverable scroll-up bottom-0 right-0 grid content-end justify-end" data-hover-text="Scroll">
          <ScrollUpSVG/>
        </div>
      </div>
    </div>
  </section>
  <div class="spacer w-full h-28"></div>
  <ElasticBorder/>

  <section class="overflow-hidden">
    <div class="col-span-12 col-start-1 col-end-13 grid grid-cols-12">
      <div class="relative col-start-1 col-end-13 grid grid-flow-col">

        <div
            class="text-dark-40 peiko-400 relative grid min-w-[250vw] grid-flow-col justify-between gap-2 py-4 md:min-w-[150vw]">
          <div class="mask-wrapper">


            <div class="scroller">
              <div class="grid">お問い合わせ</div>
              <div class="grid">Kontakt mig</div>
              <div class="grid">Get in touch</div>
              <div class="grid">お問い合わせ</div>
              <div class="grid">Kontakt mig</div>
              <div class="grid">Get in touch</div>
              <div class="grid">お問い合わせ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <ElasticBorder/>

</template>