"use strict";
// để kiểm tra kiểu dữ liệu thì dùng typeof
// kiểu dữ liệu của array: object
/*
    dùng tyeof không giải quyết vấn đề được
    vì typeof của array và object đều là object
    => Array.isArray()
*/
let numbers = [1, 2, 3, 4, 5];
console.log(typeof (numbers));
console.log(Array.isArray(numbers));
console.log(5 | 6); // 7
/*
    biểu diễn nhị phân cơ số 2
    101
*/
let text1 = "hello";
text1 = 5;
// union
let arr1 = [5, "hoa"];
arr1.push(1);
// tuple
let arr2 = [5, "lan"];
arr2.push(6);
console.log(arr2);
let test1 = "";
let c = {
    name: "minh thu",
    address: "hà nội",
    id: 5
};
console.log(c);
