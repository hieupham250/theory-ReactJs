function test<T>(arg: T) {
    return arg
}

console.log(test<number>(123));
console.log(test<string>("hello"));
console.log(test<boolean>(true));
console.log(test<number[]>([1, 2, 3]));
console.log(test<object>({ key: "value" }));

