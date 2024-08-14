// 1. array
let students :string[] = ["hoa", "hồng"]; // kiểu  khai báo 1
let numbers :Array<number> = [5,6,7,8,9]; // kiểu khai báo  2

// 2. object
let cat:{name:string, heigth:number, color:string} = {
    name: "tomy",
    heigth: 50,
    color:"while",
}
cat.color = "black"

// 3. enum
enum Role{
    ADMIN, // có thể gán giá trị, vd: ADMIN = 5
    USER,
}
let person:{name:string, age:number,role:Role.ADMIN} = {
    name: "minh",
    age:20,
    role: 0
}

// 4. void
function sayHello():void {
    console.log("xin chào");
}
sayHello()
function sum(a:number, b:number):number {
    return a + b;
}
sum(5, 6);

/*
    5. unknowns : không biết, không biết
    cũng giống như any nhưng nó chặt chẽ hơn khi sử dụng phải kiểm tra
*/
function typeAny(userName:unknown):void {
    if (typeof userName == "string") {
        console.log("type unknown", userName.toUpperCase());     
    } else {
        console.log("không phải là string");
    }
}
typeAny("Hoa")

/* 
    6. never
    thường dùng trong vòng lặp vô tận, không có điểm kết thúc
*/
function typeNever():never {
    while(true) {
        console.log("vòng lặp tuần hoàn");
    }
}
// typeNever();