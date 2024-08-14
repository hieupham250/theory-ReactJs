/*
    kiểu dữ liệu generic <>
*/

/*
    viết 1 function reverse các phần tử trong mảng
    input :[1,2,3,4,5]
    output: [5,4,3,2,1]
    input ["hoa", "hoofng", "nhung"]
    output ["nhung", "hồng", "hoa"]

    function reverse <T>(param:Array<T>):T[]{
        return param.reverse()
    }
    console.log(reverse([1,2,3,4,5]));
    console.log(reverse(["hoa", "hoofng", "nhung"]));
*/

/*
    viết 1 function trả về 1 mảng chứa 2 phần tử
    input: 5,6 ==> output [5,6]
    input: 5, "hoa" ==> [5, "hoa"]

    function test<T, U>(param1:T, param2:U):[T,U]{
        return [param1, param2]
    }
    console.log(test(5,6));
    console.log(test(5, "hoa"));
*/

// 