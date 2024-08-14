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
    dùng để bổ sung thay đổi thuộc tính, phương thức cho đối tượng
    cú pháp: @
*/
// function decorator để thêm thuộc tính
function decoratorProperty(a) {
    return class extends a {
        constructor() {
            super(...arguments);
            this.address = "hà nội";
        }
    };
}
let Student = class Student {
    constructor(name) {
        this.userName = name;
    }
};
Student = __decorate([
    decoratorProperty,
    __metadata("design:paramtypes", [String])
], Student);
// khởi tạo đối tượng student
let std1 = new Student("Mỹ tâm");
// dùng decorator
console.log("Student", std1);
// closure
// biến được sử dụng trong hàm
function tinhTong() {
    return function (a, b) {
        return a + b;
    };
}
console.log(tinhTong()(1, 4));
function closure() {
    let a = 5;
    function test1() {
        console.log(a);
    }
    test1();
}
closure();
