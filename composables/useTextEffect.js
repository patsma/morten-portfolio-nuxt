import { onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import { debounce } from 'lodash-es';

gsap.registerPlugin(SplitText);

export default function useTextEffect(selector) {
    let splitTexts = [];
    const effectsTimeline = gsap.timeline({ paused: true });

    const groupAndAnimate = (words, heroHeader) => {
        heroHeader.querySelectorAll(".line-group-text-1").forEach((el) => el.remove());

        let currentLineWidth = 0;
        const maxLineWidth = heroHeader.offsetWidth * 0.9;
        let lineContainer = null;
        let lineGroup = null;

        words.forEach((word, index) => {
            const wordWidth = word.offsetWidth;
            const parentClone = word.parentNode.cloneNode(true);

            while (parentClone.firstChild) {
                parentClone.removeChild(parentClone.firstChild);
            }

            if (currentLineWidth + wordWidth > maxLineWidth || index === 0) {
                lineGroup = document.createElement("div");
                lineGroup.className = "line-group-text-1";
                heroHeader.appendChild(lineGroup);

                lineContainer = document.createElement("div");
                lineContainer.className = "line-container-text-1";
                lineGroup.appendChild(lineContainer);

                const maskDiv = document.createElement("div");
                maskDiv.className = "text-mask";
                lineGroup.appendChild(maskDiv);

                currentLineWidth = 0;
            }

            parentClone.appendChild(word);
            currentLineWidth += wordWidth;
            lineContainer.appendChild(parentClone);
            if (index !== words.length - 1) {
                lineContainer.appendChild(document.createTextNode(" "));
            }
        });


    };

    const createTimeline = (heroHeader) => {
        const lines = heroHeader.querySelectorAll(".line-container-text-1");
        if (lines.length === 0) {
            console.warn('No elements found for animation');
            return; // Exit the function if no elements are found
        }
        effectsTimeline.fromTo(
            lines,
            {
                y: (i, target) => `${target.offsetHeight}px`,
                transformOrigin: "-25% 150%",
                rotation: 10,
                perspective: 1000,
            },
            {rotation: 0, y: "0px", duration: 0.6, ease: "sine.out", stagger: 0.04}
        );
        effectsTimeline.timeScale(0.7);

    };

    const initTextEffect = (heroHeader) => {
        const mySplitText = new SplitText(heroHeader, { type: "words" });
        const words = mySplitText.words;
        splitTexts.push(mySplitText); // Keep track of SplitText instances for cleanup
        groupAndAnimate(words, heroHeader);
        createTimeline(heroHeader);
    };

    const setupTextEffects = () => {
        document.querySelectorAll(selector).forEach((element) => {
            initTextEffect(element);
        });
    };

    const resetEffects = () => {
        const progress = effectsTimeline.progress();
        const paused = effectsTimeline.paused();
        effectsTimeline.progress(0).clear();
        splitTexts.forEach((split) => split.revert());
        splitTexts = [];
        document.querySelectorAll(selector).forEach((element) => initTextEffect(element));
        effectsTimeline.progress(progress).paused(paused);
    };

    const resizeHandler = debounce(() => {
        resetEffects();
    }, 250);

    onMounted(() => {
        setupTextEffects();
        window.addEventListener('resize', resizeHandler);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', resizeHandler);
        resetEffects(); // Cleanup and revert SplitText changes
    });

    return { setupTextEffects, effectsTimeline };
}
