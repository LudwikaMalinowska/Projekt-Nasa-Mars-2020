"use strict"

const numbers = function (number) {

    let str = ""
    for (let i = 0; i < number; i++){
        str += i;
    }
    return str;
}

console.log(numbers(8))