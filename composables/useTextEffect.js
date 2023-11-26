import {onMounted, onUnmounted, ref} from 'vue';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(SplitText);
export default function useTextEffect(selector) {
    const effectsTimeline = gsap.timeline({paused: true});
    const setupTextEffects = () => {
        document.querySelectorAll(selector).forEach((heroHeader) => {
            initTextEffect(heroHeader);
            //TODO uncomment this if you want to reinit the text effect on resize - needs to be adjusted
            // window.addEventListener('resize', () => initTextEffect(heroHeader));
        });
    };

    const initTextEffect = (heroHeader) => {
        const mySplitText = new SplitText(heroHeader, {type: "words"});
        const words = mySplitText.words;
        groupAndAnimate(words, heroHeader);
        createTimeline(heroHeader);
    };

    function groupAndAnimate(words, heroHeader) {
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

    }

    function createTimeline(heroHeader) {
        const lines = heroHeader.querySelectorAll(".line-container-text-1");
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
    }

    const cleanup = () => {
        // Remove event listeners or any other cleanup logic
    };

    return {setupTextEffects, cleanup, effectsTimeline};

}
