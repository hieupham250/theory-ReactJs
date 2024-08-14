"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
    trang trí cho phương thức
    phương thức và hàm khác nhau như thế nào?
    ==> hàm là những function tự định nghĩa, phương thức dùng trong đối tượng hoặc lớp

    map, filter, forEach là hàm hay phương thức
    ==> để dùng decorator cho function
    thì phải dùng @ đặt trước tên phương thức
*/
// tạo function decor cho function sum trong class Test
// function decor phải có 3 đối số
function decorMethod(target, propertKey, desciptor) {
    console.log(target);
    console.log(propertKey);
    console.log(desciptor);
    // trong descipttor có chứa 1 đối tượng có chứa thuộc tính value
    // nhờ cài value thì mới đi decor trong method
    desciptor.value = function (a, b) {
        return (a + b) * 2;
    };
}
class Test {
    // viết phương thức cho class Test
    // tạo function tính tổng
    sum1(a, b) {
        return a + b;
    }
    sum2(a, b) {
        return a + b;
    }
}
__decorate([
    decorMethod,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], Test.prototype, "sum1", null);
let sum1 = new Test();
console.log(sum1.sum1(1, 2));
/*
    decorator
    với accessor:
    với param
    với property
*/ 
