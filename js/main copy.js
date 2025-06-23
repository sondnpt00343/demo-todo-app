// Boolean: true / false

// ==, ===, >, <, >=, <= return boolean

// == (không nghiêm ngặt):
// - So sánh kiểu -> Khác kiểu -> Tự động ép kiểu -> So sánh cùng kiểu
// - Tự động chuyển đổi kiểu dữ liệu (ép kiểu)

// === (Nghiêm ngặt):
// - So sánh kiểu -> Không tự ép kiểu -> Khác kiểu => false
// - So sánh giá trị

// if else

// Syntax:
/*

if (condition) {
    // Code sẽ thực thi nếu condition đúng
}

if (condition) {
    // Code sẽ thực thi nếu condition đúng
} else {
    // Code sẽ thực thi nếu condition sai
}
*/

// if (temperature > 30) {
//     console.log("Nóng quá!");
// } else if (temperature > 20) {
//     console.log("Mát quá!");
// } else {
//     console.log("Lạnh quá!");
// }

let temperature = 40;

// Switch trúng case đầu tiên so sánh là đúng, nếu không có break
// xuyên toàn bộ các case còn lại, gặp break sẽ thoát switch.

function checkTemperature(temperature) {
    switch (true) {
        case temperature > 30:
            return "Nóng quá!";
        case temperature > 20:
            return "Mát quá!";
        default:
            return "Lạnh quá!";
    }
}

// console.log(checkTemperature(40));

// let day = 10; // 2 - 8

// // ===
// switch (day) {
//     case 2:
//         console.log("Thứ hai");
//         break;
//     case 3:
//         console.log("Thứ ba");
//         break;
//     case 4:
//         console.log("Thứ tư");
//         break;
//     case 5:
//         console.log("Thứ năm");
//         break;
//     case 6:
//         console.log("Thứ sáu");
//         break;
//     case 7:
//         console.log("Thứ bảy");
//         break;
//     case 8:
//         console.log("Chủ nhật");
//         break;
//     default:
//         console.log("Ngày không hợp lệ!");
// }

// if (day === 2) {
//     console.log("Thứ hai");
// } else if (day === 3) {
//     console.log("Thứ ba");
// } else if (day === 4) {
//     console.log("Thứ tư");
// } else if (day === 5) {
//     console.log("Thứ năm");
// } else if (day === 6) {
//     console.log("Thứ sáu");
// } else if (day === 7) {
//     console.log("Thứ bảy");
// } else if (day === 8) {
//     console.log("Chủ nhật");
// } else {
//     console.log("Ngày không hợp lệ!");
// }

// let month = 1;

// switch (month) {
//     case 1:
//     case 2:
//     case 3:
//         console.log("Quý 1");
//         break;
//     case 4:
//     case 5:
//     case 6:
//         console.log("Quý 2");
//         break;
//     case 7:
//     case 8:
//     case 9:
//         console.log("Quý 3");
//         break;
//     case 10:
//     case 11:
//     case 12:
//         console.log("Quý 4");
//         break;
// }
