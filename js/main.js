const dropzone = document.querySelector(".dropzone");
const wordsList = document.querySelector(".words");
const origin = document.querySelector(".origin");

const sentences = [
    "I love to read books",
    "She is a good student",
    "We play soccer every day",
    "The cat sleeps on the mat",
    "He wants to learn English",
];
const answer = [];

function shuffleWords(words) {
    let id = 0;
    const copy = words.slice(0);

    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = copy[i];
        copy[i] = copy[j];
        copy[j] = temp;
    }

    return copy.map((text) => ({
        id: ++id,
        text,
    }));
}

function renderAnswer() {
    dropzone.innerHTML = "";

    answer.forEach((word) => {
        const el = createElement(word);
        dropzone.appendChild(el);
    });
}

function renderWords(words) {
    words.forEach((word) => {
        const el = createElement(word);
        el.className = "word";
        wordsList.appendChild(el);
    });
}

function createElement(word) {
    const el = document.createElement("span");
    el.dataset.id = word.id;
    el.textContent = word.text;
    return el;
}

function isInDropzone(x, y) {
    const rect = dropzone.getBoundingClientRect();
    return (
        x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom
    );
}

function initGame() {
    const idx = Math.floor(Math.random() * sentences.length);
    const sentence = sentences[idx];

    origin.textContent = sentence;

    const shuffled = shuffleWords(sentence.split(" "));
    renderWords(shuffled);
}

function onMouseDown(e) {
    if (!e.target.closest(".word")) return;

    current = e.target;
    current.style.transition = null;

    startPos.x = e.clientX;
    startPos.y = e.clientY;
    startPos.offsetX = e.clientX - current.offsetLeft;
    startPos.offsetY = e.clientY - current.offsetTop;

    dragging = true;
}

function onMouseUp(e) {
    if (!dragging) return;

    const inDropzone = isInDropzone(e.clientX, e.clientY);

    if (inDropzone) {
        addToAnswer();
        animateToDropzone(e);
    } else {
        resetPosition();
    }

    resetDrag();
}

function addToAnswer() {
    answer.push({
        id: +current.dataset.id,
        text: current.textContent,
    });
    renderAnswer();
}

function animateToDropzone(e) {
    const target = dropzone.querySelector(`[data-id="${current.dataset.id}"]`);
    target.style.opacity = 0;

    const dx = e.clientX - target.offsetLeft - startPos.offsetX;
    const dy = e.clientY - target.offsetTop - startPos.offsetY;

    current.style.transition = "ease .3s";
    move(current, -dx, -dy, true);
}

function resetPosition() {
    current.style.transition = "ease .5s";
    move(current, 0, 0);
}

function resetDrag() {
    current = null;
    dragging = false;
    startPos.x = 0;
    startPos.y = 0;
    startPos.offsetX = 0;
    startPos.offsetY = 0;
}

function move(el, x, y, add = false) {
    if (add) {
        const curr = el.style.translate || "0px 0px";
        const pos = curr.split(" ");
        const currX = parseFloat(pos[0]) || 0;
        const currY = parseFloat(pos[1]) || 0;

        el.style.translate = `${currX + x}px ${currY + y}px`;
    } else {
        el.style.translate = `${x}px ${y}px`;
    }
}

function onMouseMove(e) {
    if (dragging) {
        const dx = e.clientX - startPos.x;
        const dy = e.clientY - startPos.y;
        move(current, dx, dy);
    }
}

document.onmousedown = onMouseDown;
document.onmouseup = onMouseUp;
document.onmousemove = onMouseMove;

let dragging = false;
let current = null;
const startPos = {
    x: 0,
    y: 0,
    offsetX: 0,
    offsetY: 0,
};

initGame();
