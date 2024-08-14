/*
    dùng để bổ sung thay đổi thuộc tính, phương thức cho đối tượng
    cú pháp: @
*/
// function decorator để thêm thuộc tính
function decoratorProperty<T extends { new (...args: any[]): {} }>(a: T) {
    return class extends a {
      address = "hà nội"
    };
}
   
@decoratorProperty
class Student {
    userName: string
    constructor(name:string){
        this.userName = name
    }
}
// khởi tạo đối tượng student
let std1 = new Student("Mỹ tâm")
// dùng decorator
console.log("Student", std1);

// closure
// biến được sử dụng trong hàm
function tinhTong(){
    return function (a:number, b:number){
        return a+b
    }
}
console.log(tinhTong()(1,4));

function closure(){
    let a = 5;
    function test1(){
        console.log(a);
    }
    test1()
}
closure()
