// Hàm - Function - Chức năng

// Ví dụ: Công thức và quy trình nấu phở

// Nguyên liệu:
//  - Phở 1 gói
//  - Thịt bò 500 gr
//  - Xương heo 100 gr
//  - Gia vị nấu phở bò 1 gói
//  - Hành tây 1 củ

// Ngày 1:
// Quy trình:
// 1. Sơ chế và chần thịt
// 2. Sơ chế các nguyên liệu khác
// 3. Thành phẩm
// x. ...

// Ngày 2:
// Quy trình:
// 1. Sơ chế và chần thịt
// 2. Sơ chế các nguyên liệu khác
// 3. Thành phẩm
// x. ...

// Ngày 3:
// Quy trình:
// 1. Sơ chế và chần thịt
// 2. Sơ chế các nguyên liệu khác
// 3. Thành phẩm
// x. ...



let productPrice1 = 1000;
let productPrice2 = 2000;
let productPrice3 = 3000;

let discount1 = 0.1;
let discount2 = 0.05;

// 1. Code sạch sẽ, dễ hiểu (con người)
// 2. Code ngắn gọn

// 1. Độc lập => 3 tháng => Đọc lại code không biết "đứa nào" code
// 2. Nhóm => Người A code => Người B sửa


// Khai báo hàm
// - number: tham số (Parameters)

// let param1 = 999;
// let param2 = param1;
function getTotal(price, discountA, discountB) {
    const total = price - (price * (discountA + discountB));
    return total;

    console.log("Something else...");
}

// // Gọi hàm
// // - Đối số (Arguments)
const total1 = getTotal(productPrice1, discount1, discount2);
const total2 = getTotal(productPrice2, discount1, discount2);
const total3 = getTotal(productPrice3, discount1, discount2);

console.log(total1, total2, total3);

