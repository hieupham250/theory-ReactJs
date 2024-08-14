"use strict";
// 1. array
let students = ["hoa", "hồng"]; // kiểu  khai báo 1
let numbers = [5, 6, 7, 8, 9]; // kiểu khai báo  2
// 2. object
let cat = {
    name: "tomy",
    heigth: 50,
    color: "while",
};
cat.color = "black";
// 3. enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
})(Role || (Role = {}));
let person = {
    name: "minh",
    age: 20,
    role: 0
};
// 4. void
function sayHello() {
    console.log("xin chào");
}
sayHello();
function sum(a, b) {
    return a + b;
}
sum(5, 6);
/*
    5. unknowns : không biết, không biết
    cũng giống như any nhưng nó chặt chẽ hơn khi sử dụng phải kiểm tra
*/
function typeAny(userName) {
    if (typeof userName == "string") {
        console.log("type unknown", userName.toUpperCase());
    }
    else {
        console.log("không phải là string");
    }
}
typeAny("Hoa");
/*
    6. never
    thường dùng trong vòng lặp vô tận, không có điểm kết thúc
*/
function typeNever() {
    while (true) {
        console.log("vòng lặp tuần hoàn");
    }
}
// typeNever();
