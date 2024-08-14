function removeDuplicates(str: string) {
    let result: string = '';
    for (let char of str) {
        if (result.indexOf(char) === -1) {
            result += char;
        }
    }

    return result;
}

let str1: string = "banana";
let result1: string = removeDuplicates(str1);
console.log(result1);

let str2: string = "hello world";
let result2: string = removeDuplicates(str2);
console.log(result2);
