function swap(arr, first_Index, second_Index) {
    var tmp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = tmp;
}

// solution 1
function bubbleSort(arr) {
    var len = arr.length, i, j, stop;

    for (i = 0; i < len; i++) {
        for (j = 0, stop = len - i; j < stop; j++) {
            if(arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
            }
        }
    }

}

// solution 2
function bubbleSort(arr) {
    let len = arr.length;
    for (let i = len; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                let tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }
    return arr;
}

// solution 3 optimized swaps
function bubbleSort(arr) {
    let len = arr.length;
    let noSwaps;
    for (let i = len; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                let tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);