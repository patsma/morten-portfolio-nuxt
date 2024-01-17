// stores/animationStore.js
import {defineStore} from 'pinia';

export const useAnimationStore = defineStore('animationStore', {
    state: () => ({
        textArray:
            [
                'UX/UI Designer',
                'Digital Designer',
                'Art Director',
                'Mentor',
                'Visual Designer',
                'Portfolio'
            ],
        currentIndex: 0,
    }),
    getters: {
        currentText: (state) => state.textArray[state.currentIndex]
    },
    actions: {
        updateText() {
            this.currentIndex = (this.currentIndex + 1) % this.textArray.length;
            // console.log('Updated currentIndex:', this.currentIndex);
        }
    }
});
