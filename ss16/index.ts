/*
    viết 1 function nhận vào tham số, nếu là số in ra số
    nếu là string in ra string
*/


/*
    khi khai báo array thì có bao nhiêu cách?
    c1: let number: number[] = [1]
    c2: newNumbers = Array<number> = [6]
*/

/*
    viết function nếu nhận vào 1 số thì trả về [a], nếu nhận vào 1 cái mảng arr thì
    trả về phần tử cuối cùng của mảng [arr[arr.length-1]];
    test(1) ==> [1]
    test(arr[5,6,7,8,9]) ==> [9]
    function test(param:number|(number|string)[]):number|string {
        if(typeof(param) === "number"){
            return [param]
        } else if(Array.) {
            return [param[param.length - 1]]
        } else {
            return []
        }
    }
*/

/*

*/
type generic1 = Array<number>;
type generic2 = Array<string>;

// với generic
function test<T>(param: T | T[]): T | T[] {
    if (Array.isArray(param)) {
        return [param[param.length - 1]];
    } else {
        return [param];
    }
}

console.log(test(["a", "b", "c"]));
console.log(test([5, 6, 7, 8, 9]));
