<template>
    <HeaderComponent/>
    <Overlay/>
    <DefaultSmoothScroller>
      <Hero/>
    </DefaultSmoothScroller>
</template>
<script setup lang="ts">
import Hero from "~/components/Hero.vue";
import Overlay from "~/components/Overlay.vue";
import HeaderComponent from "~/components/HeaderComponent.vue";
import DefaultSmoothScroller from "~/components/DefaultSmoothScroller.vue";
</script>