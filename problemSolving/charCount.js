// write function which takes in a string and returns counts of each character in the string;

//solution1
function charCount(str) {
    let result = {};
    for(let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if(/[a-z0-9]/.test(char)) {
            if(result[char] > 0) {
                result[char]++;
            } else {
                result[char] = 1;
            };
        }
    }
    return result;
}


// solution2
function charCount(str) {
    let result = {};
    for (let char of str) {
        if(isAlphaNumeric(char)) {
            char  = char.toLowerCase();
            result[char] = ++result[char] || 1;
        }
    }
    return result;
}

function isAlphaNumeric(char) {
    let code = char.charCodeAt(0);
    if(!(code > 47 && code < 58) &&  // numeric (0-9)
       !(code > 64 && code < 91) &&  // upper alpha (A-Z)
       !(code > 96 && code < 123)) { // lowe alpha (a-z)
           return false;
       }
    return true;
}


// function charCount(str) {
//     // make object to return at end
//     //loop over string for each character
//     // if the char is in object, add one to count
//     // if he char is not in object, add it and set value to 1
//     // return object at end
// }