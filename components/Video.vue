<template>
  <section class="component component--video grid pb-14">
    <div class="col-span-12 col-start-1 col-end-13 grid grid-cols-12 gap-10">
      <div class="video_wrapper col-start-2 col-end-12 row-start-1 grid h-[70vh] overflow-hidden">
        <!-- Wrapper with overflow hidden -->
        <div class="video_cont hoverable" data-hover-text="Play">
          <video autoplay loop muted>
            <source src="@/assets/video/sample1.mp4" type="video/mp4"/>
          </video>
        </div>
      </div>
    </div>
  </section>
</template>