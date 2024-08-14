"use strict";
// Hàm cộng
function add(a, b) {
    if (isNaN(Number(a))) {
        return "Tham số a không hợp lệ!";
    }
    if (isNaN(Number(b))) {
        return "Tham số b không hợp lệ!";
    }
    return Number(a) + Number(b);
}
// Hàm trừ
function subtract(a, b) {
    if (isNaN(Number(a))) {
        return "Tham số a không hợp lệ!";
    }
    if (isNaN(Number(b))) {
        return "Tham số b không hợp lệ!";
    }
    return Number(a) - Number(b);
}
// Hàm nhân
function multiply(a, b) {
    if (isNaN(Number(a))) {
        return "Tham số a không hợp lệ!";
    }
    if (isNaN(Number(b))) {
        return "Tham số b không hợp lệ!";
    }
    return Number(a) * Number(b);
}
// Hàm chia
function divide(a, b) {
    if (isNaN(Number(a))) {
        return "Tham số a không hợp lệ!";
    }
    if (isNaN(Number(b))) {
        return "Tham số b không hợp lệ!";
    }
    if (Number(b) === 0) {
        return "Không thể chia cho 0!";
    }
    return Number(a) / Number(b);
}
console.log(add(5, 3));
console.log(add("5", "3"));
console.log(add("5", "abc"));
console.log(subtract(10, 4));
console.log(subtract("10", "4"));
console.log(subtract("10", "abc"));
console.log(multiply(3, 6));
console.log(multiply("3", "6"));
console.log(multiply("3", "abc"));
console.log(divide(20, 5));
console.log(divide("20", "5"));
console.log(divide("20", "0"));
console.log(divide("abc", "5"));
