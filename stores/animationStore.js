// stores/animationStore.js
import { defineStore } from 'pinia';

export const useAnimationStore = defineStore('animationStore', {
    state: () => ({
        textArray: ['First', 'Second', 'Third', 'Fourth'],
        currentIndex: 0,
    }),
    getters: {
        currentText: (state) => state.textArray[state.currentIndex]
    },
    actions: {
        updateText() {
            this.currentIndex = (this.currentIndex + 1) % this.textArray.length;
            console.log('Updated currentIndex:', this.currentIndex);
        }
    }
});
