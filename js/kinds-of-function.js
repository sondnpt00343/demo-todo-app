// Global scope

// Các loại hàm trong JS: 3 loại chính.
console.log(sum(2, 3)); // 5

// 1. Declaration function
// - Khai báo hàm bắt đầu bằng "function"
// - Có thể gọi hàm trước khi khai báo
function sum(a, b) {
    return a + b;
}

// 2. Expression function
// - Gán hàm vào biến, ...
const multiply = function (a, b) {
    return a * b;
}

console.log(multiply(3, 2)); // 6


// 3. Arrow function (Expression)

// - Khai báo: var double
// - Khởi tạo: = n => n * 2;
var double = n => n * 2;

console.log(double(5)); // 10