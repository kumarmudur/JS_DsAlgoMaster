// function productOfArray(arr) {
//     let product = 1;

//     for (let i = 0; i < arr.length; i++) {
//         product *= arr[i];
//     }
//     return product;
// }

function productOfArray(arr) {
    if(arr.length === 0) return 1;

    return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3, 4, 5 ]));