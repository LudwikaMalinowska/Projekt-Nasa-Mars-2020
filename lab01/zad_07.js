"use strict"

const unequal = function (a, b, c) {

    if (a === b || b === c || a === c){
        return false
    } else {
        return true
    }

}

console.log(unequal(1,2,3));
console.log(unequal(1,1,2));