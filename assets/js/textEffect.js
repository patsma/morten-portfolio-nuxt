import gsap from 'gsap';
import SplitText from 'gsap/SplitText';


export class TextEffect {
    constructor(selector) {
        this.selector = selector;
        this.heroHeaders = document.querySelectorAll(selector);
        this.effectsTimeline = gsap.timeline({ paused: true });
        this.setupTextEffects();
    }

    setupTextEffects() {
        this.heroHeaders.forEach((heroHeader) => {
            this.initTextEffect(heroHeader);
            window.addEventListener('resize', () => this.initTextEffect(heroHeader));
        });
    }

    initTextEffect(heroHeader) {
        const mySplitText = new SplitText(heroHeader, { type: "words" });
        this.words = mySplitText.words;
        this.groupAndAnimate(this.words, heroHeader);
        this.createTimeline(heroHeader);
    }

    groupAndAnimate(words, heroHeader) {
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
    createTimeline(heroHeader) {
        const lines = heroHeader.querySelectorAll(".line-container-text-1");
        this.effectsTimeline.fromTo(
            lines,
            {
                y: (i, target) => `${target.offsetHeight}px`,
                transformOrigin: "-25% 150%",
                rotation: 10,
                perspective: 1000,
            },
            { rotation: 0, y: "0px", duration: 0.6, ease: "sine.out", stagger: 0.04 }
        );
        this.effectsTimeline.timeScale(0.7);
    }

    // Use these methods to control the animations
    pauseAnimation() {
        return this.effectsTimeline;
    }

    playAnimation() {
        this.effectsTimeline.play();
    }
}
export default TextEffect;