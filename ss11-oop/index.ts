class Parent {
    userName: string;
    password: string;
    constructor(userName: string, password:string){
        this.userName = userName
        this.password = password
    }
    sayHello():void {
        console.log(`hello ${this.userName}`);
        
    }
}

// class con muốn kế thừa class cha thì bắt buộc phải dùng từ khóa extend (kế thừa)
class Child extends Parent {
    protected address:string
    constructor(a:string, b:string, address:string){
        super(a, b) // bắt buộc phải có super thì mới dùng đc
        this.userName = a
        this.password = b
        this.address = address
    }
    sayGoodlbye(): string{
        console.log("tạm biệt");
        return  "tạm biệt"
    }
}

let child = new Child("minh","123","hà nội")
child.sayHello()

class Child1 extends Child {
    constructor(userName:string, password:string, address: string){
        super(userName, password, address)
        this.userName = userName
        this.password = password
        this.address = address
    }
    // override: ghi đè phương thức
    sayGoodlbye(): string {
        console.log(111111, super.sayGoodlbye());
        return "1"
    }
}

let child1 = new Child1("hồng","111","hcm")
child1.sayHello()
child1.sayGoodlbye()
