// Divide and conquer pattern
// This pattern involves dividing data set into smaller chunks and repeating process with a subset of data.

// This pattern can tremendously decrease time complexity


// // search array
// search([1, 2, 3, 4, 5, 6], 4); // 3
// search([1, 2, 3, 4, 5, 6], 6); // 5
// search([1, 2, 3, 4, 5, 6], 11); // -1
// solution 1 (naive)
// Time O(n)

var search = (arr, val) => {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            return i;
        }
    }
    return -1;
}

// solution 2
// Time O(log n)

var search = (arr, val) => {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        let mid = Math.floor((left + right) / 2);

        if(arr[mid] < val) {
            left = mid + 1;
        } else if (arr[mid] > val) {
            right = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}
