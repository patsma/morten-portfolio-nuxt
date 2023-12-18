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
</template>
<script setup lang="ts">
</script>

