<template>
  <div class="loader-group relative z-50 h-full w-full">
    <div
        class="loader"
        style="
          background-image: radial-gradient(circle, #ffc8c4, rgb(247, 247, 247), rgb(245, 248, 245));
          width: 100vw;
          height: 100vh;
          position: fixed;
          z-index: 10;
          animation: fade-in-out 2s infinite linear;
          transform: scale(1);
        "
    ></div>
  </div>
</template>
<style>
.loader-group {
  transition: 0.3s all ease-out;
}

.loader-group--hidden {
  opacity: 0;
}

@keyframes fade-in-out {
  0% {
    transform: scale(1.8);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.8);
  }
}
</style>