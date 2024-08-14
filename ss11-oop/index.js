"use strict";
class Parent {
    constructor(userName, password) {
        this.userName = userName;
        this.password = password;
    }
    sayHello() {
        console.log(`hello ${this.userName}`);
    }
}
// class con muốn kế thừa class cha thì bắt buộc phải dùng từ khóa extend (kế thừa)
class Child extends Parent {
    constructor(a, b, address) {
        super(a, b); // bắt buộc phải có super thì mới dùng đc
        this.userName = a;
        this.password = b;
        this.address = address;
    }
    sayGoodlbye() {
        console.log("tạm biệt");
        return "tạm biệt";
    }
}
let child = new Child("minh", "123", "hà nội");
child.sayHello();
class Child1 extends Child {
    constructor(userName, password, address) {
        super(userName, password, address);
        this.userName = userName;
        this.password = password;
        this.address = address;
    }
    // override: ghi đè phương thức
    sayGoodlbye() {
        console.log(111111, super.sayGoodlbye());
        return "1";
    }
}
let child1 = new Child1("hồng", "111", "hcm");
child1.sayHello();
child1.sayGoodlbye();
