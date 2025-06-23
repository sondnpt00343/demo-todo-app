const slideshowInner = document.querySelector(".slideshow .inner");
const controls = document.querySelector(".slideshow .controls");
const slideItems = Array.from(document.querySelectorAll(".slide-item"));

if (slideItems.length) {
    const lastSlideItem = slideItems[0].cloneNode(true);
    slideshowInner.appendChild(lastSlideItem);
    slideItems.push(lastSlideItem);
}

let currentIndex = 0;
const maxIndex = slideItems.length - 1;

controls.onclick = (event) => {
    const ctrlBtn = event.target.closest(".prev-btn");

    let eventType = "";

    if (ctrlBtn.matches(".prev")) {
        eventType = "prev";

        if (currentIndex === 0) {
            currentIndex = maxIndex;
        } else {
            currentIndex = Math.max(0, --currentIndex);
        }
    }

    if (ctrlBtn.matches(".next")) {
        eventType = "next";

        if (currentIndex === maxIndex) {
            currentIndex = 0;
        } else {
            currentIndex = Math.min(++currentIndex, maxIndex);
        }
    }

    // Bài tập trên lớp:
    // - Bắn custom event khi change tab hoặc slide
    //    - Tab: event type là "tab-change", { old: ..., current: ... }
    //    - Slide: event type là "slide-change", { old: ..., current: ..., direction: "prev" | "next" }

    console.log(`Dispatch slideshow: ${eventType}`);

    document.dispatchEvent(
        new CustomEvent("slideshow", {
            detail: {
                type: eventType,
            },
        })
    );

    updatePosition();
};

function updatePosition(instant = false) {
    const offset = `-${currentIndex * 100}%`;
    slideshowInner.style.transition = instant ? "none" : "ease .5s";
    slideshowInner.style.translate = offset;
}

slideshowInner.ontransitionend = (event) => {
    if (currentIndex === maxIndex) {
        currentIndex = 0;
        updatePosition(true);
    }
};
