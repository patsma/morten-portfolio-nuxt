import gsap from 'gsap';
import SplitText from 'gsap/SplitText';


export class TextSlider {
    constructor(selector) {
        this.elements = document.querySelectorAll(selector);
        this.effectsTimeline = gsap.timeline({ repeat: -1,paused:true });
        this.initEffects();
        this.splitElements();
    }

    initEffects() {
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
                    gsap.set(targets[0].parentNode, { perspective: config.perspective });
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
    }

    splitElements() {
        this.elements.forEach((element) => {
            let split = new SplitText(element, { type: "chars,words,lines" });
            this.effectsTimeline
                .add('start', '+=0')
                .add(this.slideIn(split.words), 'start')
                .add(this.slideOut(split.words), '+=1');
        });
    }

    slideIn(words) {
        return gsap.effects.slideIn(words, {
            rotationX: -90,
            transformOrigin: "50% 0% 30",
            fade: 0.5,
            duration: 1,
            from: "center",
        });
    }

    slideOut(words) {
        return gsap.effects.slideOut(words, {
            y: 50,
            fade: 0.1,
        });
    }
}
export default TextSlider;
