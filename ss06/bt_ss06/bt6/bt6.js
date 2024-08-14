"use strict";
let str = "2";
let num = 2;
console.log("Sử dụng toán tử ==");
console.log(str == num); // true, JavaScript sẽ tự động chuyển đổi kiểu dữ liệu, trong typescript thì This comparison appears to be unintentional because the types 'string' and 'number' have no overlap.
console.log("Sử dụng toán tử ===");
console.log(str === num); // false, kiểu dữ liệu của hai biến khác nhau, trong typescript thì This comparison appears to be unintentional because the types 'string' and 'number' have no overlap.
