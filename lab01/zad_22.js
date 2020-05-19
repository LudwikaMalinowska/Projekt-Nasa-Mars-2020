"use strict";

const f3 = function (n, m) {
    if (n === m){
        return n;
    } else{
        return (n > m) ? f3(n - m, m) : f3(n, m - n);
    }
}

console.log(f3(24, 18));