// exaples
// areThereDuplicates(1, 2, 3)  === false;
// areThereDuplicates(1, 2, 2) === true;
// areThereDuplicates('a', 'b', 'c', 'd') === true

function areThereDuplicates() {
    let collection = {};
    for (let val in arguments) {
        collection[arguments[val]] =(collection[arguments[val]] || 0) + 1;
    }
    for (let key in collection) {
        if(collection[key] > 1) return true;
    }
    return false;
}

console.log(areThereDuplicates(1, 2, 2));
