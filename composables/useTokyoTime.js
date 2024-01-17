import { ref, onMounted, onUnmounted } from 'vue';

export function useTokyoTime() {
    const tokyoTime = ref(getCurrentTokyoTime());

    function getCurrentTokyoTime() {
        const now = new Date();
        const tokyoOffset = 9 * 60; // Tokyo is UTC+9
        now.setMinutes(now.getMinutes() + now.getTimezoneOffset() + tokyoOffset);

        return now.toLocaleString('en-US', {
            timeZone: 'Asia/Tokyo',
            month: 'short',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    }
    let intervalId;

    onMounted(() => {
        intervalId = setInterval(() => {
            tokyoTime.value = getCurrentTokyoTime();
        }, 1000);
    });

    onUnmounted(() => {
        clearInterval(intervalId);
    });

    return { tokyoTime };
}
