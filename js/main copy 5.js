// Infinity

let a = +prompt("Nhap so a:");
let b = +prompt("Nhap so b:");

function isNumber(input) {
    return typeof input === "number" && !isNaN(input);
}

// // Number.isNaN(): Đầu vào có thể là bất cứ kiểu dữ liệu gì
// // isNaN(): Đầu vào chắc chắn là số

if (isNumber(a) && isNumber(b)) {
    if (b === 0) {
        console.log("Khong duoc chia cho 0");
    } else {
        console.log(`Kết quả:`, a / b);
    }
} else {
    console.log("Invalid input.");
}

