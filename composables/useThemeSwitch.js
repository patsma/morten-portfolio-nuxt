// ~/composables/useThemeSwitch.js
import gsap from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';

export default function useThemeSwitch() {

    if (process.client) {

        gsap.registerPlugin(MorphSVGPlugin);
    }
    // Function to toggle the GSAP timeline
    function toggleTimeline(timeline) {
        if (timeline.reversed()) {
            timeline.play();
        } else {
            timeline.reverse();
        }
    }

    // Define your themes
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

    // Function to initialize theme switching
    const initThemeSwitch = () => {
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
    };

    return { initThemeSwitch };
}
