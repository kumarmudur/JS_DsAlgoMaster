// examples
// sameFrequency(182, 281) === true
// sameFrequency(34, 14) === false
// sameFrequency(3589578, 5879385) === true
// sameFrequency(22, 222) === false

function sameFrequency(num1, num2) {
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();

    if(strNum1.length !== strNum2.length) return false;

    let countNum1 = {}, countNum2 = {};

    for (let i = 0; i < strNum1.length; i++) {
        countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
    }

    for (let j = 0; j < strNum2.length; j++) {
        countNum2[strNum2[i]] = (countNum2[strNum2[i]] || 0) + 1;
    }

    for (let key in countNum1) {
        if(countNum1[key] !== countNum2[key]) return false;
    }

    return true;
}

sameFrequency(182, 281);