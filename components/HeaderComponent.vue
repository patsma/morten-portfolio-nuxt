<template>
  <header>
    <nav class="nav fixed top-4 z-40 col-start-1 col-end-13 grid h-16 w-full grid-cols-12">
      <div class="nav__wrapper col-start-2 col-end-12 grid grid-flow-col items-center justify-between">
        <div class="nav__logo">
          <div class="ibmplex-400 grid gap-1">
            <NuxtLink to="/" class="text-dark-100 text-xs leading-[100%] tracking-[-0.03125rem]">Morten Christensen
            </NuxtLink>
            <div class="nav__roles text-dark-40 js--text-slider-01 overflow-hidden text-xxs leading-[100%]">
              <ul>
                <li>UX/UI Designer</li>
                <li>Digital Designer</li>
                <li>Art Director</li>
                <li>Mentor</li>
                <li>Visual Designer</li>
                <li>Portfolio</li>
              </ul>
            </div>
          </div>
        </div>
        <ul class="nav__list peiko-500 hidden grid-flow-col gap-8 text-base leading-[100%] md:grid">
          <li class="nav__item">
            <NuxtLink to="/" class="nav__link ">Work</NuxtLink>
          </li>
          <li class="nav__item">
            <NuxtLink to="/about" class="nav__link ">About</NuxtLink>
          </li>
          <li class="nav__item grid" id="themeSwitch">
            <button>
              <ThemeToggleSVG class="w-12"></ThemeToggleSVG>
            </button>
          </li>
          <li class="nav__item">
            <a class="nav__link " href="#">Lab</a>
          </li>
          <li class="nav__item">
            <a class="nav__link " href="#">Contact</a>
          </li>
        </ul>
        <div class="nav__contact ibmplex-400 w-24">
          <div class="nav__link">
            <div class="nav__roles grid gap-1">
              <ul class="text-dark-100 js--text-slider-02 overflow-hidden text-right text-xs leading-[100%] tracking-[-0.03125rem]"
                  id="city-name">
                <li>Tokyo, JP</li>
                <li>New York, NY</li>
                <li>Berlin, BE</li>
                <li>New York, NY</li>
              </ul>
              <ul class="text-dark-40 js--text-slider-03 overflow-hidden text-end text-xxs leading-[100%]"
                  id="city-time">
                <li>Jun 18, 20:00:23</li>
                <li>Aug 2, 10:20:23</li>
                <li>Jun 18, 20:00:23</li>
                <li>Aug 2, 10:20:23</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import useTextSlider from '~/composables/useTextSlider';
import ThemeToggleSVG from "~/components/ThemeToggleSVG.vue";
import Headroom from "headroom.js";
const textSlider1 = useTextSlider('.js--text-slider-01 li');
const textSlider2 = useTextSlider('.js--text-slider-02 li');
const textSlider3 = useTextSlider('.js--text-slider-03 li');
gsap.registerPlugin(MorphSVGPlugin)
function headroomInit(selector) {
  // select your header or whatever element you wish
  const header = document.querySelector(selector);

  const headroom = new Headroom(header);
  headroom.init();
}
function toggleTimeline(timeline) {
  if (timeline.reversed()) {
    timeline.play();
  } else {
    timeline.reverse();
  }
}

onMounted(() => {

  MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");
  function themeSwitch() {

    const lightTheme = {
      "--color-bg": "#FFFFFF",
      "--color-text": "#000000",
      "--color-secondary": "#AAAAAA",
      "--color-tertiary": "#888888",
      "--color-gradient": "linear-gradient(to right, #FFFFFF, #DDDDDD)",
      "--color-bg-gradient": "linear-gradient(to right, #DDDDDD, #FFFFFF)",
    };
    const darkTheme = {
      "--color-bg": "#000000",
      "--color-text": "#FFFFFF",
      "--color-secondary": "#444444",
      "--color-tertiary": "#666666",
      "--color-gradient": "linear-gradient(to right, #000000, #333333)",
      "--color-bg-gradient": "linear-gradient(to right, #333333, #000000)",
    };

    const themeSwitch = document.querySelector("#themeSwitch");
    const html = document.documentElement;
    const sunDark = document.querySelector("#sun-dark");
    const sunLight = document.querySelector("#sun-light");
    const sunLightBeams = document.querySelectorAll("#sun-light-beams path");
    const sunLightInner = document.querySelector("#sun-light-inner");
    const moonDark = document.querySelector("#moon-dark");
    const moonWhite = document.querySelector("#moon-white");
    const background = document.querySelector("#bg");

    const currentBgColor = getComputedStyle(html).getPropertyValue("--color-bg").trim();

    gsap.set([sunDark, moonDark], { autoAlpha: 0 });
    const tl = gsap.timeline({ paused: true });

    if (currentBgColor === darkTheme["--color-bg"]) {
      tl.to(html, { ...lightTheme, ease: "power1.out", duration: 0.5 });
    } else {
      tl.to(html, { ...darkTheme, ease: "power1.out", duration: 0.5 });
    }

    tl.to(background, { duration: 0.5, fill: "#fffaf5", ease: "power1.out" }, "<");
    tl.to(sunLightBeams, { duration: 0.5, autoAlpha: 0, ease: "power1.out" }, "<");
    tl.to(moonWhite, { duration: 0.5, morphSVG: moonDark, fill: "#090925", ease: "power1.out" }, "<");
    tl.to(sunLightInner, { duration: 0.5, morphSVG: sunDark, fill: "#090925", ease: "power1.out" }, "<");
    tl.reverse();

    themeSwitch.addEventListener("click", function () {
      if (currentBgColor === darkTheme["--color-bg"]) {
        toggleTimeline(tl);
      } else {
        toggleTimeline(tl);
      }
    });
  }

  textSlider1.play();
  textSlider2.play();
  textSlider3.play();
  headroomInit('.nav');
  themeSwitch();

});




</script>