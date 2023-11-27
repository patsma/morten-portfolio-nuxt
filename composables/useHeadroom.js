import Headroom from "headroom.js";

export default function useHeadroom(selector) {
    let headroomInstance = null;

    const initHeadroom = () => {
        const element = document.querySelector(selector);
        if (element) {
            headroomInstance = new Headroom(element);
            headroomInstance.init();
        }
    };

    const destroyHeadroom = () => {
        if (headroomInstance) {
            headroomInstance.destroy();
            headroomInstance = null;
        }
    };

    return { initHeadroom, destroyHeadroom };
}
