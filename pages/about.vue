<template>
  <Hero>
    <template #heroText>
            <span class="text-dark-40">
                      About
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
    </template>
    <template #content>
      <div class="tag rounded p-1">Services</div>
      <div class="tag bg-dark-5 rounded p-1">Art direction</div>

    </template>
  </Hero>
  <div class="spacer w-full h-28"></div>

  <TextBiography/>
  <div class="spacer w-full h-14"></div>
  <ElasticBorder/>
  <Experience/>
  <div class="spacer w-full h-14"></div>
  <Image/>
  <div class="spacer w-full h-14"></div>
  <Image/>
  <TextServices/>
  <div class="spacer w-full h-28"></div>

  <ElasticBorder/>
  <div class="spacer w-full h-14"></div>
  <div class="spacer w-full h-14"></div>

  <TextClients/>
  <div class="spacer w-full h-28"></div>
  <ElasticBorder/>
  <div class="spacer w-full h-14"></div>
  <div class="spacer w-full h-14"></div>
  <TextAwards/>
  <div class="spacer w-full h-28"></div>
  <ElasticBorder/>
  <div class="spacer w-full h-14"></div>
  <div class="spacer w-full h-14"></div>

  <Recommendations/>
  <div class="spacer w-full h-14"></div>
  <Image/>
  <div class="spacer w-full h-14"></div>
  <Image/>
  <FooterComponent/>
  <Contact/>
</template>
<script setup lang="ts">
import ElasticBorder from "~/components/ElasticBorder.vue";
</script>

