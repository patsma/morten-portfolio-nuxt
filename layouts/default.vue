<script setup>
import Loader from "~/components/Loader.vue";

useHead({
  title: 'Nuxt Morten Portfolio',
});
onMounted(() => {
  const loaderGroup = document.querySelector(".loader-group");
  loaderGroup.classList.add("loader-group--hidden");
  setTimeout(() => {
    loaderGroup.remove();
  }, 200);
});
</script>
<template>
  <div>
    <Loader></Loader>
    <slot/>
  </div>
</template>
<!--suppress CssUnknownTarget -->
<style lang="scss">
@use "~/assets/scss/main.scss";

</style>
