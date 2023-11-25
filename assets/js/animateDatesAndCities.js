
function animateTime() {
    const cities = [
        { name: "Tokyo, JP", timeZone: "Asia/Tokyo" },
        { name: "Berlin, DE", timeZone: "Europe/Berlin" },
        { name: "New York, US", timeZone: "America/New_York" },
        // Add more cities as needed
    ];

    const cityElement = document.getElementById("city-name");
    const timeElement = document.getElementById("city-time");

    const updateTime = (city) => {
        const formatOptions = {
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
        };
        timeElement.textContent = new Intl.DateTimeFormat("en-US", {
            ...formatOptions,
            timeZone: city.timeZone,
        }).format(new Date());
    };

    let currentCityIndex = 0;

    const updateCityAndTime = () => {
        const city = cities[currentCityIndex];

        // Fade out, update content, then fade in
        gsap.to([cityElement, timeElement], {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                cityElement.textContent = city.name;
                updateTime(city);

                gsap.to([cityElement, timeElement], { opacity: 1, duration: 0.5 });
            },
        });

        currentCityIndex = (currentCityIndex + 1) % cities.length;
    };

    // Update city and time every 5 seconds (you can adjust this duration)
    setInterval(updateCityAndTime, 5000);
    updateCityAndTime(); // Call initially to set the first city and time
}