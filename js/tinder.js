const list = document.querySelector(".list");
const friends = [
    {
        id: 1,
        name: "Phương Thảo",
    },
    {
        id: 2,
        name: "Yến Linh",
    },
    {
        id: 3,
        name: "Lan Vy",
    },
    {
        id: 4,
        name: "Lê Minh Gia Mẫn",
    },
];

let isTouching = false;
let touchStartX = 0;
let touchStartY = 0;
let currentIndex = friends.length - 1;

list.ontouchstart = function (event) {
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
    isTouching = true;
};

list.ontouchend = function (event) {
    if (!friends.length) return;

    const changeTouchX = event.changedTouches[0].clientX;
    const distanceX = changeTouchX - touchStartX;

    const friendEle = getCurrentElement();
    if (friendEle) {
        friendEle.style.transition = "ease .2s";

        if (distanceX < 0) {
            // Logic không thích
            friendEle.style.translate = `-100%`;
        } else {
            // Logic thích
            friendEle.style.translate = `100%`;
        }
    }
    isTouching = false;
    touchStartX = 0;
    touchStartY = 0;

    friends.pop();
    currentIndex = friends.length - 1;
};

list.ontouchmove = function (event) {
    if (isTouching && friends.length) {
        const friendEle = getCurrentElement();
        if (friendEle) {
            const distanceX = event.touches[0].clientX - touchStartX;
            const distanceY = event.touches[0].clientY - touchStartY;
            friendEle.style.translate = `${distanceX}px ${distanceY}px`;
        }
    }
};

function getCurrentElement() {
    const friend = friends[currentIndex];
    const element = list.querySelector(`[data-id="${friend.id}"]`);
    return element;
}

function renderFriends() {
    friends.forEach((friend) => {
        const item = document.createElement("li");
        item.textContent = friend.name;
        item.dataset.id = friend.id;
        item.className = "item";
        list.appendChild(item);
    });
}

renderFriends();
