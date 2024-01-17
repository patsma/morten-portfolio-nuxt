<template>
  <Hero>
    <template #heroText>
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
    </template>
    <template #content>
      <div class="tag rounded p-1">Services</div>
      <div class="tag bg-dark-5 rounded p-1">Art direction</div>
      <div class="tag bg-dark-5 rounded p-1">Creative direction</div>
      <div class="tag bg-dark-5 rounded p-1">Concept Development</div>
      <div class="tag bg-dark-5 rounded p-1">Consulting & Guidance</div>
      <div class="tag bg-dark-5 rounded p-1">User experience design (ux)</div>
      <div class="tag bg-dark-5 rounded p-1">Digital design (UI)</div>
      <div class="tag bg-dark-5 rounded p-1">Interactive design</div>
      <div class="tag bg-dark-5 rounded p-1">Design systems & tokens</div>
    </template>
  </Hero>
  <Image/>
  <list/>
<div class="spacer w-full h-24"></div>
  <FooterComponent/>

  <Contact/>
</template>
<script setup lang="ts">
import Hero from "~/components/Hero.vue";
import TextBiography from "~/components/TextBiography.vue";
import TextServices from "~/components/TextServices.vue";
import TextClients from "~/components/TextClients.vue";
import TextAwards from "~/components/TextAwards.vue";
import Experience from "~/components/Experience.vue";
import Recommendations from "~/components/Recommendations.vue";
import List from "~/components/List.vue";
import FooterComponent from "~/components/FooterComponent.vue";
import Contact from "~/components/Contact.vue";
import Image from "~/components/Image.vue";
</script>

