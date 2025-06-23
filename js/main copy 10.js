const openNewsFeeds = document.querySelector("#open-newsfeed");
const newsfeedModal = document.querySelector("#newsfeed-modal");
const modals = document.querySelectorAll(".js-modal");
const closeButtons = document.querySelectorAll(".js-modal-close");

function getScrollbarWidth() {
    const div = document.createElement("div");
    div.style.overflowY = "scroll";
    const child = document.createElement("div");
    div.appendChild(child);
    document.body.appendChild(div);
    const scrollbarWidth = div.offsetWidth - child.offsetWidth;
    document.body.removeChild(div);

    return scrollbarWidth;
}

function handleEsc(event) {
    if (event.code === "Escape") {
        const currentModal = document.querySelector(".js-modal.show");
        if (currentModal) {
            currentModal.classList.remove("show");
            document.body.removeEventListener("keydown", handleEsc);
        }
    }
}

function closeModal(modal) {
    modal.classList.remove("show");
    document.body.style.overflow = null;
    document.body.style.paddingRight = null;

    document.body.removeEventListener("keydown", handleEsc);
}

openNewsFeeds.onclick = () => {
    newsfeedModal.classList.add("show");
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = getScrollbarWidth() + "px";

    document.body.addEventListener("keydown", handleEsc);
};

closeButtons.forEach((closeBtn) => {
    closeBtn.onclick = (event) => {
        const modal = event.target.closest(".js-modal");
        if (modal) closeModal(modal);
    };
});

modals.forEach((modal) => {
    modal.onclick = (event) => {
        const container = event.target.closest(".modal-container");
        if (container) {
            return event.stopPropagation();
        }

        closeModal(modal);
    };
});
