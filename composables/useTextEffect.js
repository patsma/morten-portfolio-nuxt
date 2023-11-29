    import { onMounted, onUnmounted, nextTick } from 'vue';
    import { useAnimationStore } from '~/stores/animation';
    import gsap from 'gsap';
    import SplitText from 'gsap/SplitText';
    import { debounce } from 'lodash-es';

    gsap.registerPlugin(SplitText);

    export default function useTextEffect(selector, effectName) {
        const animationStore = useAnimationStore();
        let splitTexts = [];
        let originalHTML = {}; // Object to store original HTML

        const groupAndAnimate =  (words, heroHeader) => {

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


        const createTimeline =  (heroHeader) => {

                const lines = heroHeader.querySelectorAll(".line-container-text-1");
                if (lines.length === 0) {
                    console.warn('No elements found for animation');
                    return;
                }

                // Creating a new GSAP timeline for this effect
                const timeline = gsap.timeline({ paused: true })
                    .fromTo(
                        lines,
                        {
                            y: (i, target) => `${target.offsetHeight}px`,
                            transformOrigin: "-25% 150%",
                            rotation: 10,
                            perspective: 1000,
                        },
                        {
                            rotation: 0,
                            y: "0px",
                            duration: 0.6,
                            ease: "sine.out",
                            stagger: 0.04
                        }
                    );
                timeline.timeScale(0.7);
                console.log('Timeline created:', timeline);
                return timeline;
        };

        const initTextEffect =  (element) => {
            if (!originalHTML[element]) {
                originalHTML[element] = element.innerHTML;
            }

            const mySplitText = new SplitText(element, { type: "words" });
            splitTexts.push(mySplitText);

             groupAndAnimate(mySplitText.words, element);
            const timeline =  createTimeline(element);
            animationStore.initTextEffect(effectName, timeline);
        };
        const setupTextEffects = () => {
            nextTick(() => {
                const elements = document.querySelectorAll(selector);
                for (let element of elements) {
                    initTextEffect(element);
                }
                animationStore.playTextEffect(effectName);
            });
        };

        const resetEffects =  () => {
            animationStore.resetTextEffect(effectName);
            splitTexts.forEach((split) => split.revert());
            splitTexts = [];
             setupTextEffects();
        };

        const resizeHandler = debounce( () => {
             resetEffects();
        }, 250);

        onMounted( () => {
             setupTextEffects();
            window.addEventListener('resize', resizeHandler);
        });

        onUnmounted(() => {
            window.removeEventListener('resize', resizeHandler);
            resetEffects();
        });

        return { setupTextEffects, resetEffects };
    }
