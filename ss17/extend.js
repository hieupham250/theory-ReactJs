"use strict";
/*
    extend trong generic
 */
// function merge (gộp, hợp nhất)
function merge(param1, param2) {
    return Object.assign(param1, param2);
}
console.log(merge({ name: "hoa" }, { age: 20 }));
/*
    // toán tử ?? nullissh
    let result = "hoa"??5
    console.log(result);

    // & toán tử: là intersection
    // | non null
    // ? optional chain
*/
function add(a, b) {
    return b ? a + b : a;
}
let add1 = add(1, 3); //4
let add2 = add(1);
let obj1 = {
    name: "hoa"
};
let obj2 = {
    name: "Tâm"
};
/*
    //type và interface khác nhau như thế nào?
    => type: + có thể dùng union và intersection
             + không kế thừa được
             + không thể implement bởi class
             + thường khai báo kiêu dữ liệu

       interface: + không dùng đc union và intersection
                  + có thể kế thừa interface khác
                  + có thể được implement (triển khai) bởi class
                  + thường khai báo các thuộc tính và phương thức
                  + NESTJS + typescript + react js
*/
/*
    đệ quy khác callback
    đệ quy là hàm gọi lại chính nó
    lưu ý khi dùng đệ quy nên tránh việc hàm chạy không có điểm dừng ==> chạy vô tận
    cách dùng:
    function deQuy(a:number): number{
        if(a===1){
            return 1
        }
        return a + deQuy(--a)
    }
    let result = deQuy(10)
    console.log("tổng từ 1 đến 10", result);

    dùng đệ quy giải quyết bài toán
    input [[1,2],[3,[4,[5]]]] ==> output [1,2,3,4,5]
    ==> đệ quy giải quyết bài toán

*/
function test2(param) {
    return Object.assign(Object.assign({}, param), { fullName: param.firstName + param.lastName });
}
let result = test2({ firstName: "Cao", lastName: "Mỹ Tâm" });
console.log(result);
// chuyển sang dạng generic
