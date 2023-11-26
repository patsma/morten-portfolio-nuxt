<template>
  <HeaderComponent/>
  <main class="main">
    <Overlay/>
    <div class="smooth-wrapper">
      <div class="smooth-content">
        <div class="main-grid grid">
          <Hero/>
          <TextBiography/>
          <TextServices/>
          <TextClients/>
          <TextAwards/>
          <Experience/>
          <Recommendations/>
          <List/>
          <Image/>
          <Video/>
          <FooterComponent/>
          <Contact/>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import Hero from "~/components/Hero.vue";
import Overlay from "~/components/Overlay.vue";
import HeaderComponent from "~/components/HeaderComponent.vue";
import TextBiography from "~/components/TextBiography.vue";
import TextServices from "~/components/TextServices.vue";
import TextClients from "~/components/TextClients.vue";
import TextAwards from "~/components/TextAwards.vue";
import Experience from "~/components/Experience.vue";
import Recommendations from "~/components/Recommendations.vue";
import List from "~/components/List.vue";
import Video from "~/components/Video.vue";
import FooterComponent from "~/components/FooterComponent.vue";
import Contact from "~/components/Contact.vue";
import Image from "~/components/Image.vue";

import {useScrollSmoother} from '~/composables/useScrollSmoother';
import {onMounted, onUnmounted} from 'vue';

const {init, destroy} = useScrollSmoother();

onMounted(() => {
    init();
})
onUnmounted(destroy);
</script>

