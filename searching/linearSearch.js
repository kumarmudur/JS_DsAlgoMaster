function linearSearch(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === item) {
            return i;
        } 
    }
    return -1;
}

console.log(linearSearch([1, 4, 5, 6, 8, 10, 3], 5));