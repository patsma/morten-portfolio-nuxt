<script setup lang="ts">
import gsap from 'gsap';
import {MorphSVGPlugin} from 'gsap/MorphSVGPlugin';
import {DrawSVGPlugin} from 'gsap/DrawSVGPlugin';
import {GSDevTools} from 'gsap/GSDevTools';

gsap.registerPlugin(MorphSVGPlugin, DrawSVGPlugin, GSDevTools);

const animateRef = ref(null);



definePageMeta({
  layout: 'test'
})
onMounted(() => {
  MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");
  setTimeout(() => {

    // gsap.from(animateRef.value, {duration: 1, y: 50, opacity: 0})
    const artTech = document.querySelector('#artTech');
    const art = document.querySelectorAll('#art *');
    const tech = document.querySelectorAll('#tech *');
    const logoText = document.querySelector('#logoText');
    const letterA = document.querySelector('#letterA');
    const letterT = document.querySelector('#letterT');
    const lines = document.querySelector('#lines');
    const shadows = document.querySelectorAll('#shadows *');

    const maskLetterA = document.querySelectorAll('#maskLetterA path');
    const lineMask1 = document.querySelector('#lineMask1');
    const lineMask2 = document.querySelector('#lineMask2');
    const lineMask3 = document.querySelector('#lineMask3');
    const lineMask4 = document.querySelector('#lineMask4');
    const lineMask5 = document.querySelector('#lineMask5');
    const lineMask6 = document.querySelector('#lineMask6');
    const lineMask7 = document.querySelector('#lineMask7');
    const lineMask8 = document.querySelector('#lineMask8');
    const lineMask9 = document.querySelector('#lineMask9');
    const lineMask10 = document.querySelector('#lineMask10');

    const line1 = document.querySelector('#line1');
    const line2 = document.querySelector('#line2');
    const line3 = document.querySelector('#line3');
    const line4 = document.querySelector('#line4');
    const line5 = document.querySelector('#line5');
    const line6 = document.querySelector('#line6');
    const line7 = document.querySelector('#line7');
    const line8 = document.querySelector('#line8');
    const line9 = document.querySelector('#line9');
    const line10 = document.querySelector('#line10');


    gsap.set([
      // shadows,
      // letterA,
      // letterT,
      // art,
      // tech,
      // line1,
      // line2,
      // line3,
      // line4,
      // line5,
      // line6,
      // line7,
      // line8,
      // line9,
      // line10
    ], {autoAlpha: 0});

    // gsap.set({
    //   lineMask1,
    //   lineMask2,
    //   lineMask3,
    //   lineMask4,
    //   lineMask5,
    //   lineMask6,
    //   lineMask7,
    //   lineMask8,
    //   lineMask9,
    //   lineMask10
    // }, {drawSVG: "100% 100%"})

    const tlLines = gsap.timeline({defaults: {ease: 'sine.inOut', repeat: 2, yoyo: true}});
    tlLines.add('play-all')
    tlLines.from(lineMask1, {drawSVG: 0}, 'play-all')
    tlLines.from(lineMask2, {drawSVG: 0}, 'play-all')
    tlLines.from(lineMask3, {drawSVG: 0}, 'play-all')
    tlLines.from(lineMask4, {drawSVG: 0}, 'play-all')
    tlLines.from(lineMask5, {drawSVG: 0}, 'play-all')
    tlLines.from(lineMask6, {drawSVG: 0}, 'play-all')
    tlLines.from(lineMask7, {drawSVG: 0}, 'play-all')
    tlLines.from(lineMask8, {drawSVG: 0}, 'play-all')
    tlLines.from(lineMask9, {drawSVG: 0}, 'play-all')
    tlLines.from(lineMask10, {drawSVG: 0}, 'play-all')
    const tl = gsap.timeline({});

    tl.set(artTech, {y: 100})
    tl.add(tlLines)
    tl.from(maskLetterA, {drawSVG: 0,stagger:0.1},'-=0.3')
    tl.from(letterT, {autoAlpha: 0,x:10},'-=0.3')
    tl.from(shadows, {autoAlpha: 0,x:2,stagger:0.1},'-=0.3')

    tl.to(artTech, {y:0},'-=0.3')
    tl.from(art, {autoAlpha: 0,x:10,stagger:0.1},'-=0.3')
    tl.from(tech, {autoAlpha: 0,x:10,stagger:0.1},'-=0.3')




    GSDevTools.create({animation: tl, minimal: true});
  }, 300)

})


</script>
<template>
  <div>

    <div class="grid w-full h-screen bg-black ">
      <div class="grid w-full h-full  content-center">

        <div class="w-[80vw] m-auto animationWrapper ">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
               viewBox="0 0 679.99 394.73">
            <defs>
              <linearGradient id="linear-gradient" x1="447.61" y1="-16.4" x2="473.79" y2="6.3"
                              gradientTransform="matrix(1, 0, 0, -1, 8.8, 382.14)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#4eff83"/>
                <stop offset="1" stop-color="#00aeb5"/>
              </linearGradient>
              <linearGradient id="linear-gradient-2" x1="277.82" y1="-19.03" x2="277.82" y2="13.94"
                              xlink:href="#linear-gradient"/>
              <mask id="mask" x="167.2" y="-54.15" width="355.65" height="325.78" maskUnits="userSpaceOnUse">
                <g id="maskLetterA">
                  <line x1="197.73" y1="252.18" x2="349.07" y2="-17.75" fill="none" stroke="#fff" stroke-miterlimit="10"
                        stroke-width="70"/>
                  <line x1="491.37" y1="252.18" x2="314.06" y2="-34.69" fill="none" stroke="#fff" stroke-miterlimit="10"
                        stroke-width="74"/>
                </g>
              </mask>
              <linearGradient id="linear-gradient-3" x1="339.99" y1="408.99" x2="339.99" y2="189.99"
                              gradientTransform="matrix(1, 0, 0, -1, 0, 396.72)" xlink:href="#linear-gradient"/>
              <linearGradient id="linear-gradient-4" x1="436.12" y1="402.93" x2="436.12" y2="181.43"
                              gradientTransform="matrix(1, 0, 0, -1, 0, 396.72)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#00ae8d"/>
                <stop offset="0.41" stop-color="#03916d"/>
                <stop offset="0.76" stop-color="#047f59"/>
                <stop offset="0.99" stop-color="#057852"/>
              </linearGradient>
              <mask id="mask-2" x="388.81" y="-6" width="59.65" height="55.58" maskUnits="userSpaceOnUse">
                <polygon id="lineMask6" points="424.36 0 399.2 43.58 412.92 43.58 438.07 0 424.36 0" fill="none"
                         stroke="#fff" stroke-miterlimit="10" stroke-width="12"/>
              </mask>
              <linearGradient id="linear-gradient-5" x1="418.64" y1="402.93" x2="418.64" y2="181.43"
                              xlink:href="#linear-gradient-4"/>
              <mask id="mask-3" x="453.13" y="217.55" width="40.55" height="29.15" maskUnits="userSpaceOnUse">
                <polyline id="lineMask9" points="488.05 240.2 478.73 224.05 464.39 224.05 473.72 240.2 488.05 240.2"
                          fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="13"/>
              </mask>
              <linearGradient id="linear-gradient-6" x1="467.42" y1="442.79" x2="467.42" y2="142.69"
                              xlink:href="#linear-gradient"/>
              <mask id="mask-4" x="173.97" y="-2.5" width="204.62" height="229.05" maskUnits="userSpaceOnUse">
                <polyline id="lineMask1"
                          points="187.88 207.45 307.65 0 372.33 0 374.26 3.34 310.3 3.34 183.46 224.05 178.3 224.05 187.88 207.45"
                          fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="5"/>
              </mask>
              <linearGradient id="linear-gradient-7" x1="324.25" y1="368.62" x2="198.47" y2="146.66"
                              gradientTransform="matrix(1, 0, 0, -1, 8.8, 382.14)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#00aeb5"/>
                <stop offset="1" stop-color="#4eff83"/>
              </linearGradient>
              <mask id="mask-5" x="331.33" y="51.02" width="49.49" height="71.02" maskUnits="userSpaceOnUse">
                <polyline id="lineMask4"
                          points="364.26 88.08 375.07 107.27 372.33 112.03 339.99 56.02 346.19 56.02 364.26 88.08"
                          fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="10"/>
              </mask>
              <linearGradient id="linear-gradient-8" x1="375.34" y1="282.12" x2="482.06" y2="84.59"
                              gradientTransform="matrix(1, 0, 0, -1, 0, 396.72)" xlink:href="#linear-gradient-7"/>
              <mask id="mask-6" x="400.65" y="154.42" width="49.12" height="73.13" maskUnits="userSpaceOnUse">
                <polyline id="lineMask8" points="437.01 224.05 404.67 168.04 408.24 161.58 443.75 224.05 437.01 224.05"
                          fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="7"/>
              </mask>
              <linearGradient id="linear-gradient-9" x1="371.9" y1="297.5" x2="454.95" y2="143.79"
                              gradientTransform="matrix(1, 0, 0, -1, 0, 396.72)" xlink:href="#linear-gradient-7"/>
              <mask id="mask-7" x="360.56" y="-6" width="59.65" height="55.58" maskUnits="userSpaceOnUse">
                <polyline id="lineMask5" points="399.49 17.9 409.82 0 396.1 0 370.95 43.58 384.67 43.58 399.49 17.9"
                          fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="12"/>
              </mask>
              <linearGradient id="linear-gradient-10" x1="390.39" y1="402.93" x2="390.39" y2="181.43"
                              xlink:href="#linear-gradient-4"/>
              <mask id="mask-8" x="294.54" y="78.19" width="64.97" height="78.76" maskUnits="userSpaceOnUse">
                <polyline id="lineMask3"
                          points="344.05 105.24 347.97 112.03 327.81 146.95 311.86 146.95 339.99 98.2 344.05 105.24"
                          fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="20"/>
              </mask>
              <linearGradient id="linear-gradient-11" x1="304.73" y1="285.28" x2="413.26" y2="228.28"
                              gradientTransform="matrix(1, 0, 0, -1, 0, 396.72)" xlink:href="#linear-gradient"/>
              <mask id="mask-9" x="249.99" y="155.37" width="64.97" height="78.74" maskUnits="userSpaceOnUse">
                <polyline id="lineMask2"
                          points="292.81 207.57 283.26 224.11 267.31 224.11 295.44 175.37 303.42 189.19 292.81 207.57"
                          fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="20"/>
              </mask>
              <linearGradient id="linear-gradient-12" x1="263.34" y1="206.45" x2="371.86" y2="149.46"
                              gradientTransform="matrix(1, 0, 0, -1, 0, 396.72)" xlink:href="#linear-gradient"/>
              <mask id="mask-10" x="334.79" y="-3" width="126.47" height="174.04" maskUnits="userSpaceOnUse">
                <polyline id="lineMask7"
                          points="345.26 168.04 396.03 79.73 411.29 79.73 456.13 0 450.36 0 406.73 75.57 393.38 75.57 339.99 168.04 345.26 168.04"
                          fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="6"/>
              </mask>
              <linearGradient id="linear-gradient-13" x1="453.17" y1="402.69" x2="362.99" y2="254.35"
                              gradientTransform="matrix(1, 0, 0, -1, 0, 396.72)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#055731"/>
                <stop offset="0.14" stop-color="#055e36"/>
                <stop offset="0.34" stop-color="#047244"/>
                <stop offset="0.59" stop-color="#03935b"/>
                <stop offset="0.86" stop-color="#01c07b"/>
                <stop offset="1" stop-color="#00d98d"/>
              </linearGradient>
              <mask id="mask-11" x="303.32" y="187.85" width="30.04" height="38.7" maskUnits="userSpaceOnUse">
                <polyline id="lineMask10" points="327.82 189.11 330.47 193.66 312.92 224.05 307.65 224.05 327.82 189.11"
                          fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="5"/>
              </mask>
              <linearGradient id="linear-gradient-14" x1="332.04" y1="209.69" x2="312" y2="176.12"
                              gradientTransform="matrix(1, 0, 0, -1, 0, 396.72)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#00ae7c"/>
                <stop offset="1" stop-color="#4eff83"/>
              </linearGradient>
              <linearGradient id="linear-gradient-15" x1="358" y1="282.32" x2="335.87" y2="241.85"
                              gradientTransform="matrix(1, 0, 0, -1, 0, 396.72)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#245057"/>
                <stop offset="1" stop-color="#245057" stop-opacity="0"/>
              </linearGradient>
              <linearGradient id="linear-gradient-16" x1="320.66" y1="251.05" x2="330.71" y2="228.49"
                              xlink:href="#linear-gradient-15"/>
              <linearGradient id="linear-gradient-17" x1="313.14" y1="204.59" x2="296.3" y2="173.79"
                              xlink:href="#linear-gradient-15"/>
              <linearGradient id="linear-gradient-18" x1="413.03" y1="397.83" x2="413.03" y2="311.17"
                              xlink:href="#linear-gradient-13"/>
              <linearGradient id="linear-gradient-19" x1="384.7" y1="397.83" x2="384.7" y2="311.17"
                              xlink:href="#linear-gradient-13"/>
            </defs>
            <g id="Layer_2" data-name="Layer 2">
              <g id="artTech">
                <g id="logoText">
                  <g id="tech">
                    <path
                        d="M344.34,394.72c-2.59,0-3.81-1.22-3.81-3.8V307.66H307.65c-2.59,0-3.81-1.22-3.81-3.8v-12.8c0-2.59,1.22-3.8,3.81-3.8h86.91c2.59,0,3.81,1.22,3.81,3.8v12.79c0,2.59-1.22,3.8-3.81,3.8H361.69v83.26c0,2.59-1.22,3.8-3.8,3.8H344.34Z"
                        fill="#fff"/>
                    <path
                        d="M428.07,394.72c-23.59,0-31.51-10.81-31.51-33.79V342.51c0-22.53,8.22-33.33,31.51-33.33h21.46c23.29,0,31.51,10.8,31.51,33.33v13.7c0,2.59-1.22,3.8-3.8,3.8H416.66v3c0,10.35,2.59,12.94,11.87,12.94H450c2.59,0,3.81,1.22,3.81,3.81v11.11c0,2.59-1.22,3.8-3.81,3.8H428.07Zm-11.42-50.08h44.29v-4c0-10.35-2.59-12.79-11.87-12.79H428.52c-9.29,0-11.87,2.44-11.87,12.79Z"
                        fill="#fff"/>
                    <path
                        d="M524.73,394.72c-23.59,0-31.51-10.81-31.51-33.79V342.51c0-22.53,8.22-33.33,31.51-33.33H550c21.46,0,30.29,9,31.35,30.14.15,2.59-1.07,4-3.65,4H565.22c-2.59,0-3.8-1.37-3.8-4-.45-9.13-2.89-11.42-11.87-11.42H525.19c-9.28,0-11.87,2.44-11.87,12.79v22.38c0,10.35,2.59,12.94,11.87,12.94h24.35c9.13,0,11.42-2.44,11.87-11.72,0-2.59,1.22-4,3.8-4h12.48c2.59,0,3.8,1.37,3.65,4-.76,21.92-10.05,30.44-31.35,30.44H524.73Z"
                        fill="#fff"/>
                    <path
                        d="M648.48,309.18C672.07,309.18,680,320,680,343v47.95c0,2.59-1.22,3.8-3.8,3.8H663.71c-2.59,0-3.8-1.22-3.8-3.8V340.84c0-10.35-2.59-12.94-11.87-12.94H626.73c-8.52,0-11.87,2.59-11.87,12.94v50.08c0,2.59-1.22,3.8-3.8,3.8H598.58c-2.59,0-3.81-1.22-3.81-3.8V283c0-2.59,1.22-3.8,3.81-3.8h12.48c2.59,0,3.8,1.22,3.8,3.8v36.08c3.8-6.55,11.11-9.89,22.07-9.89Z"
                        fill="#fff"/>
                    <path
                        d="M465.56,394.72h12.16a3.31,3.31,0,0,0,3.31-3.31V379.25a3.31,3.31,0,0,0-3.31-3.31H465.56a3.31,3.31,0,0,0-3.31,3.31v12.16A3.31,3.31,0,0,0,465.56,394.72Z"
                        fill="url(#linear-gradient)"/>
                  </g>
                  <g id="art">
                    <path
                        d="M103.81,394.72a4.64,4.64,0,0,1-4.57-2.89l-7.15-15.68H30.6l-7.31,15.68a4.9,4.9,0,0,1-4.56,2.89H3.36c-2.89,0-4.11-1.83-2.89-4.41L48.87,290a4.65,4.65,0,0,1,4.41-2.74H69.41A4.64,4.64,0,0,1,73.82,290l48.25,100.31c1.22,2.59,0,4.41-2.89,4.41ZM38.51,358.8H84.17L61.49,309.33Z"
                        fill="#fff"/>
                    <path
                        d="M186,309.18c2.59,0,3.8,1.22,3.8,3.8v11.11c0,2.59-1.22,3.8-3.8,3.8H164.09c-8.68,0-11.87,2.59-11.87,12.94v50.08c0,2.59-1.22,3.8-3.8,3.8H135.94c-2.59,0-3.81-1.22-3.81-3.8V313c0-2.59,1.22-3.8,3.81-3.8h12.48c2.59,0,3.8,1.22,3.8,3.8v6.09c3.81-6.55,11.11-9.89,22.07-9.89Z"
                        fill="#fff"/>
                    <path
                        d="M241,394.72c-13.09,0-22.07-2.59-26.79-7.61s-7-13.24-7-24.66V327.29h-6.39c-2.59,0-3.81-1.22-3.81-3.8V313c0-2.59,1.22-3.8,3.81-3.8,10.81,0,12.33-1.67,12.48-17.81,0-2.74,1.22-4.11,3.8-4.11h6.24c2.59,0,3.81,1.22,3.81,3.8v18.11h31c2.59,0,3.8,1.22,3.8,3.8v10.5c0,2.59-1.22,3.8-3.8,3.8h-31v37.29c0,9.14,3,11.87,13.85,11.87h17.2c2.59,0,3.8,1.22,3.8,3.8V390.9c0,2.59-1.22,3.8-3.8,3.8H241Z"
                        fill="#fff"/>
                    <path
                        d="M285.56,373.42l-11.18,19.37a1.23,1.23,0,0,0,1.06,1.84H297.8a1.22,1.22,0,0,0,1.06-1.84l-11.18-19.37A1.22,1.22,0,0,0,285.56,373.42Z"
                        fill="url(#linear-gradient-2)"/>
                  </g>
                </g>
                <g mask="url(#mask)">
                  <polygon id="letterA"
                           points="469.35 168.04 501.68 224.05 478.73 224.05 459.49 190.74 445.16 190.74 464.39 224.05 437.01 224.05 404.67 168.04 372.33 224.05 307.65 224.05 339.99 168.04 369.11 117.6 372.33 112.03 339.99 56.02 307.65 112.03 242.97 224.05 178.3 224.05 210.63 168.04 242.97 112.03 275.31 56.02 307.65 0 372.33 0 376.95 8 356.41 43.58 370.13 43.58 383.81 19.89 390.78 31.96 384.07 43.58 397.49 43.58 411.34 67.58 450.36 0 501.68 0 469.35 56.02 437.01 112.03 469.35 168.04"
                           fill="url(#linear-gradient-3)"/>
                </g>
                <polygon id="letterT"
                         points="307.65 224.05 327.82 189.11 315.65 168.02 339.99 168.04 393.38 75.57 406.73 75.57 450.36 0 564.58 0 539.43 43.58 476.53 43.58 372.33 224.05 307.65 224.05"
                         fill="url(#linear-gradient-4)"/>
                <g id="lines">
                  <g mask="url(#mask-2)">
                    <polygon id="line6" points="424.36 0 399.2 43.58 412.92 43.58 438.07 0 424.36 0"
                             fill="url(#linear-gradient-5)"/>
                  </g>
                  <g mask="url(#mask-3)">
                    <polygon id="line9" points="464.39 224.05 473.72 240.2 488.05 240.2 478.73 224.05 464.39 224.05"
                             fill="url(#linear-gradient-6)"/>
                  </g>
                  <g mask="url(#mask-4)">
                    <polygon id="line1"
                             points="372.33 0 374.26 3.34 310.3 3.34 183.46 224.05 178.3 224.05 307.65 0 372.33 0"
                             fill="url(#linear-gradient-7)"/>
                  </g>
                  <g mask="url(#mask-5)">
                    <polygon id="line4" points="339.99 56.02 346.19 56.02 375.07 107.27 372.33 112.03 339.99 56.02"
                             fill="url(#linear-gradient-8)"/>
                  </g>
                  <g mask="url(#mask-6)">
                    <polygon id="line8" points="404.67 168.04 408.24 161.58 443.75 224.05 437.01 224.05 404.67 168.04"
                             fill="url(#linear-gradient-9)"/>
                  </g>
                  <g mask="url(#mask-7)">
                    <polygon id="line5" points="396.1 0 370.95 43.58 384.67 43.58 409.82 0 396.1 0"
                             fill="url(#linear-gradient-10)"/>
                  </g>
                  <g mask="url(#mask-8)">
                    <polygon id="line3" points="311.86 146.95 339.99 98.2 347.97 112.03 327.81 146.95 311.86 146.95"
                             fill="url(#linear-gradient-11)"/>
                  </g>
                  <g mask="url(#mask-9)">
                    <polygon id="line2" points="267.31 224.11 295.44 175.37 303.42 189.19 283.26 224.11 267.31 224.11"
                             fill="url(#linear-gradient-12)"/>
                  </g>
                  <g mask="url(#mask-10)">
                    <polygon id="line7"
                             points="339.99 168.04 345.26 168.04 396.03 79.73 411.29 79.73 456.13 0 450.36 0 406.73 75.57 393.38 75.57 339.99 168.04"
                             fill="url(#linear-gradient-13)"/>
                  </g>
                  <g mask="url(#mask-11)">
                    <polygon id="line10" points="327.82 189.11 330.47 193.66 312.92 224.05 307.65 224.05 327.82 189.11"
                             fill="url(#linear-gradient-14)"/>
                  </g>
                </g>
                <g id="shadows">
                  <polygon points="360.15 133.12 347.97 112.03 327.81 146.95 339.99 168.04 360.15 133.12"
                           fill="url(#linear-gradient-15)"/>
                  <polygon points="339.99 168.04 327.81 146.95 311.86 146.95 324.04 168.04 339.99 168.04"
                           fill="url(#linear-gradient-16)"/>
                  <polygon points="315.6 210.29 303.42 189.19 283.26 224.11 307.65 224.05 315.6 210.29"
                           fill="url(#linear-gradient-17)"/>
                  <polygon points="422.72 0 397.56 43.58 403.98 43.58 428.49 0 422.72 0"
                           fill="url(#linear-gradient-18)"/>
                  <polygon points="394.4 0 369.24 43.58 375.66 43.58 400.16 0 394.4 0" fill="url(#linear-gradient-19)"/>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>