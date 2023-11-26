<template>
  <HeaderComponent/>
  <Overlay/>
  <DefaultSmoothScroller>
    <Hero/>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, at autem facere porro rem soluta velit!
      Beatae harum illo nisi optio quos? A consequuntur doloremque ea facere iusto quisquam voluptate.</p>
  </DefaultSmoothScroller>
</template>
<script setup lang="ts">
import Overlay from "~/components/Overlay.vue";
import HeaderComponent from "~/components/HeaderComponent.vue";
import DefaultSmoothScroller from "~/components/DefaultSmoothScroller.vue";
</script>