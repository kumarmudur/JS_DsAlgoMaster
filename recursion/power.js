function power(base, expo) {
    return Math.pow(base, expo);
}


function power(base, expo) {
    if(expo === 0) return 1;
    return base * power(base, expo - 1);
}

console.log(power(5, 2));