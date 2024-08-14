"use strict";
let variable1 = "Hello";
let variable2 = "World";
variable1 = 10; // biến kiểu any có thể chấp nhận bất kỳ loại dữ liệu nào
console.log(typeof variable1); // in ra: number
variable2 = "TypeScript"; // Lỗi: Cannot assign to 'variable2' because it is a constant or a read-only property.
// Thử sử dụng biến kiểu unknown trong điều kiện
if (typeof variable2 === "string") {
    console.log(variable2.toUpperCase()); // Sẽ báo lỗi vì TypeScript không thể chắc chắn được kiểu dữ liệu của variable2
}
