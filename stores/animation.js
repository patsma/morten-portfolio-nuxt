// stores/animation.js
import { defineStore } from 'pinia';
import gsap from 'gsap';

export const useAnimationStore = defineStore('animation', {
    state: () => ({
        sliders: {
            slider1: null,
            slider2: null,
            slider3: null,
        },
        textEffects: {
            hero: null, // for hero text effect
            // other text effects can be added here
        },
    }),
    actions: {
        // Slider actions
        initSlider(name, timeline) {
            this.sliders[name] = timeline;
        },
        playSlider(name) {
            if (this.sliders[name]) {
                this.sliders[name].play();
            }
        },
        pauseSlider(name) {
            if (this.sliders[name]) {
                this.sliders[name].pause();
            }
        },
        resetSlider(name) {
            if (this.sliders[name]) {
                this.sliders[name].progress(0);
            }
        },

        // Text effects actions
        initTextEffect(name, timeline) {
            this.textEffects[name] = timeline;
        },
        playTextEffect(name) {
            if (this.textEffects[name]) {
                this.textEffects[name].play();
            }
        },
        pauseTextEffect(name) {
            if (this.textEffects[name]) {
                this.textEffects[name].pause();
            }
        },
        resetTextEffect(name) {
            if (this.textEffects[name]) {
                this.textEffects[name].progress(0).clear();
                // Optionally reinitialize the effect
                // this.reinitializeTextEffect(name);
            }
        },

        // Method to reinitialize text effect if needed
        // reinitializeTextEffect(name) {
        //     // Logic to reinitialize the specific text effect
        // },

        // ...other actions for different types of animations...
    },
});
