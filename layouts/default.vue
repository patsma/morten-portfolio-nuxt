<script setup>
useHead({
  title: 'Morten Portfolio',
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
  <main class="main">
    <HeaderComponent/>
    <Overlay/>
    <Loader></Loader>
    <slot/>
  </main>
</template>