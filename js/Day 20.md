# Array.prototype

1. `at(index)`: Truy cập phần tử của mảng theo index, hỗ trợ index âm (-1 là cuối, ...) => phần tử tương ứng index
2. `arr1.concat(arr2, arr3, ...)`: Nối mảng => một mảng mới chứa toàn bộ các phần tử của các mảng
3. `array.slice(start, end)`: Cắt mảng, => một mảng mới chứa các phần tử từ start -> end
4. `array.push(item1, item2, ...)`: Thêm phần tử vào cuối mảng gốc, => length sau khi chèn (Không tạo ra mảng mới)
5. `array.unshift()`: Tương tự push, nhưng thêm phần tử vào đầu mảng.
6. `array.pop()`: Xóa bỏ 1 phần tử cuối mảng => phần tử đó (vừa xóa)
7. `array.shift()`: Tương tự pop, nhưng xóa phần tử đầu mảng.