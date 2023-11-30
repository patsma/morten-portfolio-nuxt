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
  // gsap.from(animateRef.value, {duration: 1, y: 50, opacity: 0})

  // GSDevTools.create();
})

</script>
<template>
  <div>

    <div class="grid w-full h-screen bg-black ">
      <div class="grid w-full h-full  content-center">
        <svg class="w-[50vw] m-auto" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="linear-gradient" x1="607.62" y1="286.24" x2="633.8" y2="308.94"
                            gradientTransform="matrix(1, 0, 0, -1, 8.8, 987.42)" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="#4eff83"/>
              <stop offset="1" stop-color="#00aeb5"/>
            </linearGradient>
            <linearGradient id="linear-gradient-2" x1="437.83" y1="283.61" x2="437.83" y2="316.58"
                            xlink:href="#linear-gradient"/>
            <linearGradient id="linear-gradient-3" x1="500" y1="711.63" x2="500" y2="492.63"
                            gradientTransform="matrix(1, 0, 0, -1, 0, 1002)" xlink:href="#linear-gradient"/>
            <linearGradient id="linear-gradient-4" x1="596.13" y1="705.57" x2="596.13" y2="484.07"
                            gradientTransform="matrix(1, 0, 0, -1, 0, 1002)" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="#00ae8d"/>
              <stop offset="0.41" stop-color="#03916d"/>
              <stop offset="0.76" stop-color="#047f59"/>
              <stop offset="0.99" stop-color="#057852"/>
            </linearGradient>
            <linearGradient id="linear-gradient-5" x1="578.65" y1="705.57" x2="578.65" y2="484.07"
                            xlink:href="#linear-gradient-4"/>
            <linearGradient id="linear-gradient-6" x1="627.43" y1="745.43" x2="627.43" y2="445.33"
                            xlink:href="#linear-gradient"/>
            <linearGradient id="linear-gradient-7" x1="484.26" y1="671.26" x2="358.48" y2="449.3"
                            gradientTransform="matrix(1, 0, 0, -1, 8.8, 987.42)" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="#00aeb5"/>
              <stop offset="1" stop-color="#4eff83"/>
            </linearGradient>
            <linearGradient id="linear-gradient-8" x1="535.34" y1="584.76" x2="642.07" y2="387.23"
                            gradientTransform="matrix(1, 0, 0, -1, 0, 1002)" xlink:href="#linear-gradient-7"/>
            <linearGradient id="linear-gradient-9" x1="531.9" y1="600.14" x2="614.96" y2="446.43"
                            gradientTransform="matrix(1, 0, 0, -1, 0, 1002)" xlink:href="#linear-gradient-7"/>
            <linearGradient id="linear-gradient-10" x1="550.4" y1="705.57" x2="550.4" y2="484.07"
                            xlink:href="#linear-gradient-4"/>
            <linearGradient id="linear-gradient-11" x1="464.74" y1="587.92" x2="573.27" y2="530.92"
                            gradientTransform="matrix(1, 0, 0, -1, 0, 1002)" xlink:href="#linear-gradient"/>
            <linearGradient id="linear-gradient-12" x1="423.35" y1="509.09" x2="531.87" y2="452.1"
                            gradientTransform="matrix(1, 0, 0, -1, 0, 1002)" xlink:href="#linear-gradient"/>
            <linearGradient id="linear-gradient-13" x1="613.18" y1="705.33" x2="523" y2="556.99"
                            gradientTransform="matrix(1, 0, 0, -1, 0, 1002)" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="#055731"/>
              <stop offset="0.14" stop-color="#055e36"/>
              <stop offset="0.34" stop-color="#047244"/>
              <stop offset="0.59" stop-color="#03935b"/>
              <stop offset="0.86" stop-color="#01c07b"/>
              <stop offset="1" stop-color="#00d98d"/>
            </linearGradient>
            <linearGradient id="linear-gradient-14" x1="492.05" y1="512.33" x2="472.01" y2="478.76"
                            gradientTransform="matrix(1, 0, 0, -1, 0, 1002)" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="#00ae7c"/>
              <stop offset="1" stop-color="#4eff83"/>
            </linearGradient>
            <linearGradient id="linear-gradient-15" x1="518.01" y1="584.96" x2="495.88" y2="544.49"
                            gradientTransform="matrix(1, 0, 0, -1, 0, 1002)" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="#245057"/>
              <stop offset="1" stop-color="#245057" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="linear-gradient-16" x1="480.67" y1="553.69" x2="490.72" y2="531.13"
                            xlink:href="#linear-gradient-15"/>
            <linearGradient id="linear-gradient-17" x1="473.15" y1="507.23" x2="456.31" y2="476.43"
                            xlink:href="#linear-gradient-15"/>
            <linearGradient id="linear-gradient-18" x1="573.04" y1="700.47" x2="573.04" y2="613.81"
                            xlink:href="#linear-gradient-13"/>
            <linearGradient id="linear-gradient-19" x1="544.71" y1="700.47" x2="544.71" y2="613.81"
                            xlink:href="#linear-gradient-13"/>
          </defs>
          <g id="Layer_2">
            <g id="artTech">
              <g id="logoText">
                <path
                    d="M504.35,697.36c-2.59,0-3.81-1.22-3.81-3.8V610.3H467.66c-2.59,0-3.81-1.22-3.81-3.8V593.7c0-2.59,1.22-3.8,3.81-3.8h86.91c2.59,0,3.81,1.22,3.81,3.8v12.79c0,2.59-1.22,3.8-3.81,3.8H521.7v83.26c0,2.59-1.22,3.8-3.8,3.8H504.35Z"
                    fill="#fff"/>
                <path
                    d="M588.08,697.36c-23.59,0-31.51-10.81-31.51-33.79V645.15c0-22.53,8.22-33.33,31.51-33.33h21.46c23.29,0,31.51,10.8,31.51,33.33v13.7c0,2.59-1.22,3.8-3.8,3.8H576.67v3c0,10.35,2.59,12.94,11.87,12.94H610c2.59,0,3.81,1.22,3.81,3.81v11.11c0,2.59-1.22,3.8-3.81,3.8H588.08Zm-11.42-50.08H621v-4c0-10.35-2.59-12.79-11.87-12.79H588.53c-9.29,0-11.87,2.44-11.87,12.79Z"
                    fill="#fff"/>
                <path
                    d="M684.74,697.36c-23.59,0-31.51-10.81-31.51-33.79V645.15c0-22.53,8.22-33.33,31.51-33.33H710c21.46,0,30.29,9,31.35,30.14.15,2.59-1.07,4-3.65,4H725.23c-2.59,0-3.8-1.37-3.8-4-.45-9.13-2.89-11.42-11.87-11.42H685.2c-9.28,0-11.87,2.44-11.87,12.79v22.38c0,10.35,2.59,12.94,11.87,12.94h24.35c9.13,0,11.42-2.44,11.87-11.72,0-2.59,1.22-4,3.8-4H737.7c2.59,0,3.8,1.37,3.65,4-.76,21.92-10.05,30.44-31.35,30.44H684.74Z"
                    fill="#fff"/>
                <path
                    d="M808.49,611.82c23.59,0,31.51,10.8,31.51,33.79v47.95c0,2.59-1.22,3.8-3.8,3.8H823.72c-2.59,0-3.8-1.22-3.8-3.8V643.48c0-10.35-2.59-12.94-11.87-12.94H786.74c-8.52,0-11.87,2.59-11.87,12.94v50.08c0,2.59-1.22,3.8-3.8,3.8H758.59c-2.59,0-3.81-1.22-3.81-3.8V585.63c0-2.59,1.22-3.8,3.81-3.8h12.48c2.59,0,3.8,1.22,3.8,3.8v36.08c3.8-6.55,11.11-9.89,22.07-9.89Z"
                    fill="#fff"/>
                <path
                    d="M625.57,697.36h12.16a3.31,3.31,0,0,0,3.31-3.31V681.89a3.31,3.31,0,0,0-3.31-3.31H625.57a3.31,3.31,0,0,0-3.31,3.31v12.16A3.31,3.31,0,0,0,625.57,697.36Z"
                    fill="url(#linear-gradient)"/>
                <path
                    d="M263.82,697.36a4.64,4.64,0,0,1-4.57-2.89l-7.15-15.68H190.61l-7.31,15.68a4.9,4.9,0,0,1-4.56,2.89H163.37c-2.89,0-4.11-1.83-2.89-4.41l48.4-100.31a4.65,4.65,0,0,1,4.41-2.74h16.13a4.64,4.64,0,0,1,4.41,2.74L282.08,693c1.22,2.59,0,4.41-2.89,4.41Zm-65.3-35.92h45.66L221.5,612Z"
                    fill="#fff"/>
                <path
                    d="M346,611.82c2.59,0,3.8,1.22,3.8,3.8v11.11c0,2.59-1.22,3.8-3.8,3.8H324.1c-8.68,0-11.87,2.59-11.87,12.94v50.08c0,2.59-1.22,3.8-3.8,3.8H296c-2.59,0-3.81-1.22-3.81-3.8V615.62c0-2.59,1.22-3.8,3.81-3.8h12.48c2.59,0,3.8,1.22,3.8,3.8v6.09c3.81-6.55,11.11-9.89,22.07-9.89Z"
                    fill="#fff"/>
                <path
                    d="M401,697.36c-13.09,0-22.07-2.59-26.79-7.61s-7-13.24-7-24.66V629.93h-6.39c-2.59,0-3.81-1.22-3.81-3.8v-10.5c0-2.59,1.22-3.8,3.81-3.8,10.81,0,12.33-1.67,12.48-17.81,0-2.74,1.22-4.11,3.8-4.11h6.24c2.59,0,3.81,1.22,3.81,3.8v18.11h31.05c2.59,0,3.8,1.22,3.8,3.8v10.5c0,2.59-1.22,3.8-3.8,3.8H387.11v37.29c0,9.14,3,11.87,13.85,11.87h17.2c2.59,0,3.8,1.22,3.8,3.8v10.66c0,2.59-1.22,3.8-3.8,3.8H401Z"
                    fill="#fff"/>
                <path
                    d="M445.57,676.06l-11.18,19.37a1.23,1.23,0,0,0,1.06,1.84h22.36a1.22,1.22,0,0,0,1.06-1.84l-11.18-19.37A1.22,1.22,0,0,0,445.57,676.06Z"
                    fill="url(#linear-gradient-2)"/>
              </g>
              <polygon id="letterA"
                       points="629.36 470.68 661.69 526.69 638.74 526.69 619.5 493.38 605.17 493.38 624.4 526.69 597.02 526.69 564.68 470.68 532.34 526.69 467.66 526.69 500 470.68 529.12 420.24 532.34 414.67 500 358.66 467.66 414.67 402.98 526.69 338.31 526.69 370.64 470.68 402.98 414.67 435.32 358.66 467.66 302.64 532.34 302.64 536.96 310.64 516.42 346.22 530.14 346.22 543.82 322.53 550.79 334.6 544.08 346.22 557.5 346.22 571.35 370.22 610.37 302.64 661.69 302.64 629.36 358.66 597.02 414.67 629.36 470.68"
                       fill="url(#linear-gradient-3)"/>
              <polygon id="letterT"
                       points="467.66 526.69 487.83 491.75 475.66 470.66 500 470.68 553.39 378.21 566.74 378.21 610.37 302.64 724.59 302.64 699.44 346.22 636.54 346.22 532.34 526.69 467.66 526.69"
                       fill="url(#linear-gradient-4)"/>
              <g id="lines">
                <polygon points="584.37 302.64 559.21 346.22 572.93 346.22 598.08 302.64 584.37 302.64"
                         fill="url(#linear-gradient-5)"/>
                <polygon points="624.4 526.69 633.73 542.84 648.06 542.84 638.74 526.69 624.4 526.69"
                         fill="url(#linear-gradient-6)"/>
                <polygon
                    points="532.34 302.64 534.27 305.98 470.31 305.98 343.47 526.69 338.31 526.69 467.66 302.64 532.34 302.64"
                    fill="url(#linear-gradient-7)"/>
                <polygon points="500 358.66 506.2 358.66 535.08 409.91 532.34 414.67 500 358.66"
                         fill="url(#linear-gradient-8)"/>
                <polygon points="564.68 470.68 568.25 464.22 603.76 526.69 597.02 526.69 564.68 470.68"
                         fill="url(#linear-gradient-9)"/>
                <polygon points="556.11 302.64 530.96 346.22 544.68 346.22 569.83 302.64 556.11 302.64"
                         fill="url(#linear-gradient-10)"/>
                <polygon points="471.87 449.59 500 400.84 507.98 414.67 487.82 449.59 471.87 449.59"
                         fill="url(#linear-gradient-11)"/>
                <polygon points="427.32 526.75 455.45 478.01 463.43 491.83 443.27 526.75 427.32 526.75"
                         fill="url(#linear-gradient-12)"/>
                <polygon
                    points="500 470.68 505.27 470.68 556.04 382.37 571.3 382.37 616.14 302.64 610.37 302.64 566.74 378.21 553.39 378.21 500 470.68"
                    fill="url(#linear-gradient-13)"/>
                <polygon points="487.83 491.75 490.48 496.3 472.93 526.69 467.66 526.69 487.83 491.75"
                         fill="url(#linear-gradient-14)"/>
              </g>
              <g id="shadows">
                <polygon points="520.16 435.76 507.98 414.67 487.82 449.59 500 470.68 520.16 435.76"
                         fill="url(#linear-gradient-15)"/>
                <polygon points="500 470.68 487.82 449.59 471.87 449.59 484.05 470.68 500 470.68"
                         fill="url(#linear-gradient-16)"/>
                <polygon points="475.61 512.93 463.43 491.83 443.27 526.75 467.66 526.69 475.61 512.93"
                         fill="url(#linear-gradient-17)"/>
                <polygon points="582.73 302.64 557.57 346.22 563.99 346.22 588.5 302.64 582.73 302.64"
                         fill="url(#linear-gradient-18)"/>
                <polygon points="554.41 302.64 529.25 346.22 535.67 346.22 560.17 302.64 554.41 302.64"
                         fill="url(#linear-gradient-19)"/>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>