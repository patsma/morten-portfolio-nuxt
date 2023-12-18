import {onMounted, onUnmounted, ref} from 'vue';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {SplitText} from 'gsap/SplitText';

if (process.client) {
    gsap.registerPlugin(ScrollTrigger, SplitText);

}

export default function useTextEffect(selector, enableScrollTrigger = false) {
    const textEffect1Timelines = ref([]);
    const selectedTextRef = ref([]); // Ref to store the NodeList

    function debounce(func, wait, immediate) {
        let timeout;
        return function () {
            const context = this, args = arguments;
            const later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    function textEffect1(selector, enableScrollTrigger) {
        const selectedText = document.querySelectorAll(selector);
        selectedTextRef.value = selectedText; // Store the NodeList in the ref
        const timelines = [];

        selectedText.forEach((element, index) => {
            element.setAttribute('data-original-html', element.innerHTML);
            element.classList.add("text-animation-1");

            let mySplitText = null;
            let animationPlayed = false;
            let tl;

            function groupAndAnimate(replayAnimation = false) {
                if (mySplitText) {
                    mySplitText.revert();
                }

                mySplitText = new SplitText(element, {type: 'words'});
                const words = mySplitText.words;

                // element.querySelectorAll('.line-group-text-1').forEach(el => el.remove());

                let currentLineWidth = 0;
                const maxLineWidth = element.offsetWidth * 0.9;
                let lineContainer, lineGroup;

                words.forEach((word, wordIndex) => {
                    const wordWidth = word.offsetWidth;
                    if (currentLineWidth + wordWidth > maxLineWidth || wordIndex === 0) {
                        lineGroup = document.createElement('div');
                        lineGroup.className = 'line-group-text-1';
                        element.appendChild(lineGroup);

                        lineContainer = document.createElement('div');
                        lineContainer.className = 'line-container-text-1';
                        lineGroup.appendChild(lineContainer);

                        const maskDiv = document.createElement('div');
                        maskDiv.className = 'text-mask';
                        lineGroup.appendChild(maskDiv);

                        currentLineWidth = 0;
                    }

                    const parentClone = word.parentNode.cloneNode(true);
                    while (parentClone.firstChild) {
                        parentClone.removeChild(parentClone.firstChild);
                    }

                    parentClone.appendChild(word);
                    currentLineWidth += wordWidth;
                    lineContainer.appendChild(parentClone);

                    if (wordIndex !== words.length - 1) {
                        lineContainer.appendChild(document.createTextNode(' '));
                    }
                });

                tl = gsap.timeline({
                    paused: true,
                    scrollTrigger: enableScrollTrigger ? {
                        trigger: element,
                        start: 'top bottom',
                        onEnter: () => tl.play(),
                    } : null,
                });

                const lines = element.querySelectorAll('.line-container-text-1');
                tl.fromTo(
                    lines,
                    {
                        y: (i, target) => `${target.offsetHeight}px`,
                        transformOrigin: '-25% 150%',
                        rotation: 10,
                        perspective: 1000
                    },
                    {rotation: 0, y: '0px', duration: 0.6, ease: 'sine.out', stagger: 0.04}
                );
                tl.timeScale(0.7);

                if (replayAnimation && animationPlayed) {
                    tl.restart();
                }
            }

            groupAndAnimate();

            const debouncedGroupAndAnimate = debounce(() => {
                groupAndAnimate(true);
            }, 450);

            window.addEventListener('resize', debouncedGroupAndAnimate);

            timelines[index] = {
                timeline: () => tl,
                play: () => {
                    animationPlayed = true;
                    tl.progress(0)
                    tl.play();
                }
            };
        });

        return timelines;
    }

    onMounted(() => {
        textEffect1Timelines.value = textEffect1(selector, enableScrollTrigger);
    });

    onUnmounted(() => {
        selectedTextRef.value.forEach(element => {
            // Restore the original HTML
            if (element.hasAttribute('data-original-html')) {
                element.innerHTML = element.getAttribute('data-original-html');
            }
        });
    });

    return {
        textEffect1Timelines
    };
}
