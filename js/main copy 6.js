// Context:
// 1. Global context (Ngữ cảnh toàn cục)
// - Khi nào được tạo ra: Khi bắt đầu chạy một chương trình với JavaScript.
//    - Trình duyệt: Khi mở tab
// - Khi nào kết thúc: Khi chương trình kết thúc
//    - Trình duyệt: Khi tắt tab
// *Lưu trữ tất cả các biến, hàm toàn cục

// 2. Function context (Ngữ cảnh hàm)
// - Được tạo khi bắt đầu gọi 1 hàm
// - Kết thúc khi hàm thực hiện xong (return) ⚠
// *Mỗi lần gọi hàm sẽ luôn tạo ra một context mới
// *Trừ arrow function là không có context

// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(2, 3)); // Context 1: [2, 3]
// console.log(sum(3, 5)); // Context 2: [3, 5]

// THIS THAM CHIẾU VỀ ĐÂU?
// 1. Global context -> window
// 2. Function context:
//      - Gọi hàm theo cách thông thường -> window
//      - Gọi hàm thông qua một đối tượng -> đối tượng gọi phương thức đó
//      - Arrow function không có context -> this của nơi (ngữ cảnh) khai báo arrow function

// // student.getName();
// const getName = student.getName;

// getName();

function handle() {
    // context -> window

    const student = {
        firstName: "John",
        lastName: "Smith",
        getName() {
            console.log(this);
        },
    };

    student.getName();
}

const obj = {
    name: "John",
    children: {
        name: "Bob",
        handle,
    },
};

const func = obj.children.handle;

func();
