'use strict';

function fib(n){
    var result = 1, resultEenterug = 1, resultTweeTerug = 0;
    for(var i=2; i<n; i++){
        resultTweeTerug = resultEenterug;
        resultEenterug = result;
        result = resultEenterug + resultTweeTerug;
    }
    return result;
}

function fibRecursief(n){
    if (n == 1 || n == 2){
        return 1;
    }
    return fibRecursief(n-1) + fibRecursief(n-2)
}

for(var i=1; i<= 10; i++){
    console.log(fibRecursief(i), fib(i));
}