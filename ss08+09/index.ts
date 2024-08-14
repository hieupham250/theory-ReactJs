// để kiểm tra kiểu dữ liệu thì dùng typeof
// kiểu dữ liệu của array: object
/* 
    dùng tyeof không giải quyết vấn đề được
    vì typeof của array và object đều là object
    => Array.isArray()
*/

let numbers = [1,2,3,4,5]
console.log(typeof(numbers));
console.log(Array.isArray(numbers));

console.log(5|6); // 7
/*
    biểu diễn nhị phân cơ số 2
    101
*/
let text1: string|number = "hello"
text1 = 5;

// union
let arr1:(number|string)[] = [5,"hoa"]
arr1.push(1)

// tuple
let arr2:[number,string] = [5,"lan"]
arr2.push(6)
console.log(arr2);


// aliass
type Test = string|number|null|undefined;
let test1:Test = ""


// console.log(1||null&&6);
// tính từ trái qua phải gặp falsy lấy không có lấy cuối cùng
// falsy:0 null falsy undefined "" '' NaN

/* 
    intersection: giao nhau
*/

type A = {
    name: string
}

type B = {
    address: string
    id: number
}

type C = A&B // intersection
let c: C = {
    name: "minh thu",
    address: "hà nội",
    id:5
}
console.log(c);