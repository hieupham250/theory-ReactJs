/*
    Sự khác biệt: 
        + Union Types cho phép một biến có thể giữ một giá trị thuộc về một hoặc nhiều kiểu dữ liệu khác nhau.
        + Intersection Types kết hợp các kiểu dữ liệu lại với nhau, tạo ra một kiểu mới có tất cả các thuộc 
        tính của các kiểu gốc.
*/

// ví dụ union types
type StringOrNumber = string | number;
let value1: StringOrNumber = "Hello";
let value2: StringOrNumber = 123;
console.log(value1);
console.log(value2);

// ví dụ Intersection Types
type Person = {
    name: string;
    age: number;
};
type Address = {
    street: string;
    city: string;
};
type PersonAndAddress = Person & Address;
let data: PersonAndAddress = {
    name: "Hiếu Phạm",
    age: 20,
    street: "Hà Đông",
    city: "Hà Nội"
};

console.log(data);

