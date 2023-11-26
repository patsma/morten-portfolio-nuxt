// composables/useScrollSmoother.js
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import gsap from 'gsap';
gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export const useScrollSmoother = () => {
    let smoother;

    const init = () => {
       setTimeout(()=>{
           smoother = ScrollSmoother.create({
               wrapper: ".smooth-wrapper",
               content: ".smooth-content",
               speed: 0.5,
               effects: true,
           });
           smoother.effects("img", { speed: "auto" });
       },100)
    };

    const destroy = () => {
        if (smoother) {
            smoother.kill();
        }
    };

    return { init, destroy };
};