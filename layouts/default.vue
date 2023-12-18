<script setup>
import Loader from "~/components/Loader.vue";
import HeaderComponent from "~/components/HeaderComponent.vue";

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
    <HeaderComponent/>
    <Loader></Loader>
    <slot/>
  </div>
</template>