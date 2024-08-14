function identity<T>(arg: T): T {
    return arg;
}

let result1 = identity<string>("Hiếu");
console.log(result1);

let result2 = identity<number>(123);
console.log(result2);

let result3 = identity<boolean>(true);
console.log(result3);

let result4 = identity<{name: string}>({name: "Hiếu phạm"});
console.log(result4);

let result5 = identity<any>([1, "two", true]);
console.log(result5);
