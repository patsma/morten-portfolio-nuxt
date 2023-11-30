<script setup lang="ts">
definePageMeta({
  layout: 'test'
})
import { onMounted, ref, watch } from 'vue';
import { gsap, TimelineLite } from 'gsap'; // Import the TimelineLite or appropriate class
import { useUserStore } from '~/stores/user';

const user = useUserStore();
const textRef = ref(null);

// Explicitly declare the type of timeline
let timeline: GSAPTimeline | null = null; // or GSAPTimeline or TimelineMax

onMounted(() => {
  timeline = gsap.timeline({ paused: true })
      .from(textRef.value, { duration: 1, y: 50, opacity: 0 });
});

watch(() => user.isAnimationPlaying, (newVal) => {
  if (newVal && timeline) {
    timeline.play();
  } else if (timeline) {
    timeline.reverse();
  }
});

</script>


<template>
  <div>
    <NuxtLink to="/">Home</NuxtLink>
    <h1>Testing</h1>
    <p  class="text-to-be-animated">Lorem ipsum...</p>
    <p v-if="user.isLoggedIn">Hello, {{ user.displayName }}</p>
    <button ref="textRef" @click="user.logIn('John')">Log In</button>
    <button @click="user.logOut" v-if="user.isLoggedIn">Log Out</button>
    <button @click="user.toggleAnimation">Toggle Animation</button>
  </div>
</template>
