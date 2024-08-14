"use strict";
/*
    { các cách tạo đối tượng trong js
        1. let const, var_ tên đối tượng = {}
        2. dùng new Object()
        3.
            tạo hàm constructor
            function Student (name){
                this.name=name
            }
            let std1 = new Student("minh");
            // đây mới là tạo đối tượng
        4.
            tạo class
            class Person {
                constructor(name, age, address){
                    this.name = name;
                    this.age = age;
                    this.address = address;
                }
            }
            // đây mới là tạo đối tượng thông qua từ khóa new
    }

    1. đối tượng sẽ gồm 2 thành phần
        + thuộc tính (property)
        + phương thức (hành vi method)
        OOP: gồm 4 tính chất
        1. tính đóng gói (encapsulation)
        2. tính trừu tượng (abstraction)
        3. tính kế thừa (inheritance)
        4. tính đa hình (polymorphism)
*/
//=====================
// 1. tính đóng gói (encapsulation)
class Person {
    // thêm các phần tử khác
    constructor(name, age, address) {
        this.name1 = name;
        this.age1 = age;
        this.address = address;
    }
    // nam1, age1 , name, age phải cùng kiểu dữ liệu. Vd name1 là string thì name cũng phải string
    // nơi khai báo những mothod
    // ví dụ khai báo 1 phương thức show thông tin của user
    showInfo() {
        console.log("xin chào", this.name1);
    }
    showName() {
        console.log("xin chào", this.name1);
    }
    getAge() {
        return this.age1;
    }
    setAge(age) {
        this.age1 = age;
    }
    // getter
    get address1() {
        return this.address;
    }
    set address1(address) {
        this.address = address;
    }
}
let std1 = new Person("minh thu", 20, "hà nội");
// std1 được gọi là 1 intance của class Person
// gọi phương thức
std1.showInfo();
// tính đóng gói: encapsulation
// access modifier: phạm vi truy cập
/*
    1. public
    2. private
    3. proceted (liên quan đến kế thừa)
        - khi class con kế thừa class cha thì class con sẽ có các thuộc tính và phương thức của class cha
        - khi phạm vi truy cập proceted thì class con không truy cập được thuộc tính
*/
std1.name1 = "minh hoàng";
std1.showName();
std1.age1 = 40;
console.log(std1.getAge());
// đi set tuổi minh thu
std1.setAge(22);
console.log(std1.getAge());
console.log(std1.address1);
// đi thay đổi địa chỉ thông qua phương thức setter
std1.address1 = "sài gòn";
console.log(std1.address1);
//=====================
