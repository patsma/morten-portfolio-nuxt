// stores/user.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    // State: Your store's data
    state: () => ({
        name: '',
        isLoggedIn: false,
        isAnimationPlaying: false,
    }),

    // Actions: Methods to manipulate the state
    actions: {
        logIn(userName) {
            this.name = userName;
            this.isLoggedIn = true;
        },
        logOut() {
            this.name = '';
            this.isLoggedIn = false;
        },
        toggleAnimation() {
            this.isAnimationPlaying = !this.isAnimationPlaying;
        },
    },

    // Getters: Compute derived state
    getters: {
        displayName: (state) => state.name.toUpperCase(),
    },
})
