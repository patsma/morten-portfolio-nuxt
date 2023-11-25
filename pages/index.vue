<template>
  <div>
    <HeaderComponent/>
    <Overlay/>
    <div class="smooth-wrapper">
      <div class="smooth-content">
        <div class="main-grid grid">
          <Hero/>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Hero from "~/components/Hero.vue";
import Overlay from "~/components/Overlay.vue";
import HeaderComponent from "~/components/HeaderComponent.vue";
</script>