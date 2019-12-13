function countUpAndDown(n) {
    console.log('Going up!');
    for (var i = 0; i < n; i++) {
        console.log(i);
    }  
    console.log('At the top!\n Going down');
    for (var j = n - 1; j >= 0; j--) {
        console.log(j);
    } 
    console.log('Back down. Bye!');
}

countUpAndDown(5);