<script setup>



onMounted(() => {


});

</script>



<template>
  <section class="component component--hero grid h-[95vh] content-end pb-14">
    <div class="col-span-12 col-start-1 col-end-13 grid grid-cols-12">
      <div class="relative col-start-2 col-end-12 grid">
        <div class="js--text-effect-101 peiko-100 text-shadow-1 text-4xl leading-[120%] tracking-tighter md:text-6xl">

          <slot name="heroText"/>
        </div>
        <div class="grid md:grid-flow-col">
          <div
              class="services fade-in-animation text-dark-40 ibmplex-500 flex max-w-3xl flex-wrap content-center gap-2 py-4 text-xxs uppercase leading-[110%] tracking-[0.0625rem]"
          >

            <slot name="content"/>
          </div>
          <ScrollDownSVG/>
        </div>
      </div>
    </div>
  </section>
</template>
