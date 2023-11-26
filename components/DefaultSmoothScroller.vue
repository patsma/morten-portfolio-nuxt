<template>
  <div class="smooth-wrapper">
    <div class="smooth-content">
      <div class="main-grid grid">
        <slot>  </slot>
      </div>
    </div>
  </div>

</template>
<script setup lang="ts">
import Hero from "~/components/Hero.vue";
</script>