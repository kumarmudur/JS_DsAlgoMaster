function factorial(num) {
    let fact = 1;
    for (let i = num; i > 0; i--) {
        fact *= i; 
    }
    return fact;
}

// recursive

function factorial(num) {
    if (num === 1) return 1;

    return factorial(num) * factorial(num - 1);
}