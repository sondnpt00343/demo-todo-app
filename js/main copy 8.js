// String, Number, Boolean, Symbol*, BigInt*
// Object, Array, Function

// *Tồn tại hàm, nhưng không phải constructor (không dùng được từ khóa new)

// - Kiểu nguyên thủy có thuộc tính và phương không?

// Prototype
// 1. Mỗi hàm (trừ arrow) sẽ được JavaScript mặc định tạo một thuộc tính tên là "prototype" là 1 object (có thuộc tính constructor tham chiếu về chính Constructor)
// 2. Mỗi object được tạo ra bởi một constructor sẽ kế thừa lại Constructor.prototype
// 3. Truy cập đối tượng mà object kế thừa: object.__proto__, Object.getPrototypeOf()

// "Ông tổ Object"
// console.log(Object.prototype);

// Object.create(null) ✅

// 1. Object literal -> Kế thừa Object.prototype
// 2. Object tạo bởi String sẽ kế thừa String.prototype, tương tự cho Number, Boolean, ...
// 3. String.prototype kế thừa Object.prototype, tương tự cho Number, Boolean, ...

// const str = new String("Hello");

// console.log(str.__proto__ === String.prototype);

// "Something".__proto__ -> String.prototype
// 123..__proto__ -> Number.prototype
// sum.__proto__ -> Function.prototype

// - Bind (Ràng buộc): Chỉ định cụ thể this sẽ tham chiếu về đâu (ngoại trừ arrow function)
// - Function.prototype.bind(), Function.prototype.call(), Function.prototype.apply()

// console.dir(Object.prototype.toString);

// 1. Object.prototype.toString() -> [object Object]
// 2. Number.prototype.toString()

function isObject(input) {
    return Object.prototype.toString.call(input) === "[object Object]";
}

console.log(isObject({})); // true
console.log(isObject(null)); // false
console.log(isObject([])); // false
