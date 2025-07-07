// Lấy các phần tử HTML chính trong game
const dropzone = document.querySelector(".dropzone"); // Vùng thả từ (nơi sắp xếp câu)
const wordsList = document.querySelector(".words"); // Danh sách từ để kéo
const origin = document.querySelector(".origin"); // Hiển thị câu gốc

// Danh sách các câu mẫu trong game
const sentences = [
    "I love to read books",
    "She is a good student",
    "We play soccer every day",
    "The cat sleeps on the mat",
    "He wants to learn English",
];

// Mảng lưu trữ câu trả lời của người chơi
const answer = [];

// Hàm trộn ngẫu nhiên thứ tự các từ trong câu
function shuffleWords(words) {
    let id = 0; // Biến đếm để tạo ID cho mỗi từ
    const copy = words.slice(0); // Tạo bản sao của mảng từ để không ảnh hưởng mảng gốc

    // Thuật toán Fisher-Yates để trộn mảng ngẫu nhiên
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Chọn vị trí ngẫu nhiên
        // Hoán đổi vị trí 2 phần tử
        const temp = copy[i];
        copy[i] = copy[j];
        copy[j] = temp;
    }

    // Chuyển đổi mảng từ thành mảng object có id và text
    return copy.map((text) => ({
        id: ++id, // Tăng id lên 1 cho mỗi từ
        text, // Nội dung của từ
    }));
}

// Hàm hiển thị câu trả lời trong vùng dropzone
function renderAnswer() {
    dropzone.innerHTML = ""; // Xóa nội dung cũ

    // Tạo và thêm từng từ trong câu trả lời vào dropzone
    answer.forEach((word) => {
        const el = createElement(word); // Tạo phần tử HTML cho từ
        dropzone.appendChild(el); // Thêm vào dropzone
    });
}

// Hàm hiển thị danh sách từ có thể kéo
function renderWords(words) {
    words.forEach((word) => {
        const el = createElement(word); // Tạo phần tử HTML cho từ
        el.className = "word"; // Thêm class "word" để có thể kéo
        wordsList.appendChild(el); // Thêm vào danh sách từ
    });
}

// Hàm tạo phần tử HTML cho một từ
function createElement(word) {
    const el = document.createElement("span"); // Tạo thẻ span
    el.dataset.id = word.id; // Gán ID vào thuộc tính data-id
    el.textContent = word.text; // Gán nội dung text
    return el; // Trả về phần tử đã tạo
}

// Hàm kiểm tra xem tọa độ (x,y) có nằm trong vùng dropzone không
function isInDropzone(x, y) {
    const rect = dropzone.getBoundingClientRect(); // Lấy vị trí và kích thước dropzone
    // Kiểm tra xem điểm (x,y) có nằm trong hình chữ nhật dropzone không
    return (
        x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom
    );
}

// Hàm khởi tạo game mới
function initGame() {
    const idx = Math.floor(Math.random() * sentences.length); // Chọn câu ngẫu nhiên
    const sentence = sentences[idx]; // Lấy câu được chọn

    origin.textContent = sentence; // Hiển thị câu gốc

    const shuffled = shuffleWords(sentence.split(" ")); // Tách câu thành từ và trộn ngẫu nhiên
    renderWords(shuffled); // Hiển thị danh sách từ đã trộn
}

// Hàm xử lý khi bấm chuột xuống (bắt đầu kéo)
function onMouseDown(e) {
    if (!e.target.closest(".word")) return; // Chỉ xử lý khi click vào từ có class "word"

    current = e.target; // Lưu từ đang được kéo
    current.style.transition = null; // Tắt animation khi bắt đầu kéo

    // Lưu vị trí ban đầu của chuột và từ
    startPos.x = e.clientX;
    startPos.y = e.clientY;
    startPos.offsetX = e.clientX - current.offsetLeft; // Khoảng cách từ chuột đến cạnh trái của từ
    startPos.offsetY = e.clientY - current.offsetTop; // Khoảng cách từ chuột đến cạnh trên của từ

    dragging = true; // Đánh dấu đang trong trạng thái kéo
}

// Hàm xử lý khi thả chuột (kết thúc kéo)
function onMouseUp(e) {
    if (!dragging) return; // Chỉ xử lý khi đang trong trạng thái kéo

    const inDropzone = isInDropzone(e.clientX, e.clientY); // Kiểm tra có thả trong dropzone không

    if (inDropzone) {
        addToAnswer(); // Thêm từ vào câu trả lời
        animateToDropzone(e); // Tạo hiệu ứng di chuyển đến dropzone
    } else {
        move(current, 0, 0); // Đưa từ về vị trí ban đầu
    }

    resetDrag(); // Reset trạng thái kéo
}

// Hàm thêm từ vào câu trả lời
function addToAnswer() {
    answer.push({
        id: +current.dataset.id, // Chuyển ID từ string sang number
        text: current.textContent, // Lấy nội dung text của từ
    });
    renderAnswer(); // Hiển thị lại câu trả lời
}

// Hàm tạo hiệu ứng di chuyển từ đến vị trí trong dropzone
function animateToDropzone(e) {
    const target = dropzone.querySelector(`[data-id="${current.dataset.id}"]`); // Tìm từ tương ứng trong dropzone
    target.style.opacity = 0; // Ẩn từ trong dropzone

    // Tính toán khoảng cách cần di chuyển
    const dx = e.clientX - target.offsetLeft - startPos.offsetX;
    const dy = e.clientY - target.offsetTop - startPos.offsetY;

    current.style.transition = "ease .3s"; // Bật animation
    move(current, -dx, -dy, true, true); // Di chuyển từ với hiệu ứng
}

// Hàm reset trạng thái kéo thả
function resetDrag() {
    current = null; // Xóa từ đang được kéo
    dragging = false; // Tắt trạng thái kéo
    // Reset tất cả vị trí ban đầu
    startPos.x = 0;
    startPos.y = 0;
    startPos.offsetX = 0;
    startPos.offsetY = 0;
}

// Hàm di chuyển phần tử đến tọa độ (x,y)
function move(el, x, y, transition = true, add = false) {
    if (transition) {
        el.style.transition = "ease .3s";
    }

    if (add) {
        // Chế độ cộng thêm: cộng vào vị trí hiện tại
        const curr = el.style.translate || "0px 0px"; // Lấy vị trí hiện tại
        const pos = curr.split(" "); // Tách thành mảng [x, y]
        const currX = parseFloat(pos[0]) || 0; // Lấy tọa độ X hiện tại
        const currY = parseFloat(pos[1]) || 0; // Lấy tọa độ Y hiện tại

        el.style.translate = `${currX + x}px ${currY + y}px`; // Cộng thêm vào vị trí hiện tại
    } else {
        // Chế độ gán trực tiếp: gán vị trí mới
        el.style.translate = `${x}px ${y}px`;
    }
}

// Hàm xử lý khi di chuyển chuột (kéo từ)
function onMouseMove(e) {
    if (dragging) {
        // Tính toán khoảng cách di chuyển từ vị trí ban đầu
        const dx = e.clientX - startPos.x;
        const dy = e.clientY - startPos.y;
        move(current, dx, dy, false); // Di chuyển từ theo chuột
    }
}

// Gán các sự kiện chuột cho toàn bộ document
document.onmousedown = onMouseDown; // Sự kiện bấm chuột
document.onmouseup = onMouseUp; // Sự kiện thả chuột
document.onmousemove = onMouseMove; // Sự kiện di chuyển chuột

// Các biến trạng thái của game
let dragging = false; // Có đang kéo từ không
let current = null; // Từ đang được kéo

// Object lưu vị trí ban đầu khi bắt đầu kéo
const startPos = {
    x: 0, // Tọa độ X ban đầu của chuột
    y: 0, // Tọa độ Y ban đầu của chuột
    offsetX: 0, // Khoảng cách từ chuột đến cạnh trái của từ
    offsetY: 0, // Khoảng cách từ chuột đến cạnh trên của từ
};

// Khởi tạo game khi trang web load
initGame();
