import { onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';


export default function useTextSlider(selector) {

    if (process.client) {
        gsap.registerPlugin(SplitText);
    }

    let effectsTimeline = gsap.timeline({ repeat: -1, paused: true });
    let elements;

    const initEffects = () => {
        gsap.registerEffect({
            name: "slideIn",
            extendTimeline: true,
            defaults: {
                duration: 0.5,
                fade: 0.1,
                y: 0,
                x: 0,
                rotationX: 0,
                rotationY: 0,
                transformOrigin: "50% 50%",
                perspective: 400,
                scale: 1,
                ease: "power1",
                each: 0.05,
                staggerEase: "power1.in",
                from: "start",
            },
            effect: (targets, config) => {
                if (config.rotationX !== 0 || config.rotationY !== 0) {
                    // console.log("need 3D");
                    gsap.set(targets[0].parentNode, {perspective: config.perspective});
                }

                let tl = gsap.timeline();
                tl.from(targets, {
                    duration: config.duration,
                    ease: config.ease,
                    x: config.x,
                    y: config.y,
                    scale: config.scale,
                    transformOrigin: config.transformOrigin,
                    rotationX: config.rotationX,
                    rotationY: config.rotationY,
                    stagger: {
                        each: config.each,
                        ease: config.staggerEase,
                        from: config.from,
                    },
                });

                tl.from(
                    targets,
                    {
                        duration: config.fade,
                        opacity: 0,
                        ease: "none",
                        stagger: {
                            each: config.each,
                            ease: config.staggerEase,
                            from: config.from,
                        },
                    },
                    0
                );
                return tl;
            },
        });

        gsap.registerEffect({
            name: "slideOut",
            extendTimeline: true,
            defaults: {
                duration: 0.5,
                fade: 0.5,
                y: 0,
                x: 0,
                rotationX: 0,
                rotationY: 0,
                perspective: 400,
                transformOrigin: "50% 50%",
                scale: 1,
                ease: "power1",
                each: 0.05,
                staggerEase: "power1.in",
                from: "start",
            },
            effect: (targets, config) => {
                let tl = gsap.timeline();
                tl.to(targets, {
                    duration: config.duration,
                    ease: config.ease,
                    x: config.x,
                    y: config.y,
                    scale: config.scale,
                    transformOrigin: config.transformOrigin,
                    rotationX: config.rotationX,
                    rotationY: config.rotationY,
                    stagger: {
                        each: config.each,
                        ease: config.staggerEase,
                        from: config.from,
                    },
                });

                tl.to(
                    targets,
                    {
                        duration: config.fade,
                        opacity: 0,
                        ease: "none",
                        stagger: {
                            each: config.each,
                            ease: config.staggerEase,
                            from: config.from,
                        },
                    },
                    0
                );
                return tl;
            },
        });
    };

    const splitElements = () => {
        elements.forEach((element) => {
            let split = new SplitText(element, { type: "chars,words,lines" });
            effectsTimeline
                .add('start', '+=0')
                .add(slideIn(split.words), 'start')
                .add(slideOut(split.words), '+=1');
        });
    };
    const slideIn = (words) => {
        return gsap.effects.slideIn(words, {
            rotationX: -90,
            transformOrigin: "50% 0% 30",
            fade: 0.5,
            duration: 1,
            from: "center",
        });

    };

    const slideOut = (words) => {
        return gsap.effects.slideOut(words, {
            y: 50,
            fade: 0.1,
        });
    };
    const resetEffects = () => {
        effectsTimeline.clear();
        elements.forEach(element => {
            // Additional cleanup if necessary
        });
    };

    onMounted(() => {
        initEffects();
        elements = document.querySelectorAll(selector);
        splitElements();
        effectsTimeline.play();
    });

    onUnmounted(() => {
        resetEffects();
    });

    const play = () => effectsTimeline.play();
    const pause = () => effectsTimeline.pause();
    const progress = () => effectsTimeline.progress(0);

    return { play, pause, progress ,effectsTimeline, resetEffects };
}