export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('page:beforeNavigate', () => {
        document.querySelectorAll(selector).forEach(element => {
            if (element.hasAttribute('data-original-html')) {
                element.innerHTML = element.getAttribute('data-original-html');
            }
            // Other cleanup operations...
        });

        gsap.killAll();
    });
});
