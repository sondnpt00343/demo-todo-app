// Data types - Kiểu dữ liệu

// 1. String: Thể hiện giá trị là chuỗi văn bản
// 2. Number: 1, -9, 1.5, -6.2, ... Thể hiện giá trị là số, có thể thực hiện tính toán
// 3. BigInt: Số nguyên lớn (rất ít dùng)
// 4. Boolean: Đúng/sai - true/false
// 5. Undefined: Hàm không return, không truyền đối vân, ... (JS tự trả về, không nên chủ động gán cho biến)
// 6. Null: Khởi tạo giá trị khi chưa có ngay giá trị, sử dụng trong các bài toán tìm kiếm => không tìm thấy => trả về null
// 7. Symbol:
// 8. Object: Function, Array, Date, ...

let property = "address";

// Object literal
let congVo = {
    name: "Cong Vo",
    age: 20,
    [property]: "Ha Noi",
    run: function () {
        console.log("Running...");
    },
};

console.log(congVo.name); // access/get

congVo.age = 18; // update
congVo[property] = "HCM"; // update
congVo.gender = "male"; // add/create

delete congVo.age;
delete congVo[property];

console.log(congVo);
