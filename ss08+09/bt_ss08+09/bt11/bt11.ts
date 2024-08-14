// Định nghĩa type Person
type Person = {
    name: string;
    age: number;
};

type Address = {
    street: string;
    city: string;
};

type PersonOrAddress = Person | Address;
type PersonAndAddress = Person & Address;

// Sử dụng kiểu dữ liệu PersonOrAddress
let data1: PersonOrAddress = {
    name: "Hiếu Phạm",
    age: 20,
};
let data2: PersonOrAddress = {
    street: "Hà Đông",
    city: "Hà Nội"
};

// Sử dụng kiểu dữ liệu PersonAndAddress
let data3: PersonAndAddress = {
    name: "Hiếu Phạm",
    age: 20,
    street: "Hà Đông",
    city: "Hà Nội"
};

console.log("Data 1:", data1);
console.log("Data 2:", data2);
console.log("Data 3:", data3);