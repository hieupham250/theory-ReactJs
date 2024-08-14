/*
    Protected: Các thành viên được đánh dấu là protected chỉ có thể truy cập từ bên trong lớp đó hoặc từ các 
    lớp con của nó.

    Private: Các thành viên được đánh dấu là private chỉ có thể truy cập từ bên trong lớp đó, không thể truy 
    cập từ bên ngoài lớp đó, bao gồm cả các lớp con. 
*/

class Parent {
    protected protectedMember: string;
    private privateMember: string;

    constructor() {
        this.protectedMember = "Hiếu";
        this.privateMember = "Phạm";
    }
}

class Child extends Parent {
    constructor() {
        super();
        // Truy cập thành viên protected từ lớp cha
        console.log(this.protectedMember);

        // Không thể truy cập thành viên private từ lớp cha
        console.log(this.privateMember); // Lỗi: Property 'privateMember' is private and only accessible within class 'Parent'.
    }
}

const parentObj = new Parent();
console.log(parentObj.protectedMember); // Lỗi: Property 'protectedMember' is protected and only accessible within class 'Parent'.
console.log(parentObj.privateMember); // Lỗi: Property 'privateMember' is private and only accessible within class 'Parent'.
