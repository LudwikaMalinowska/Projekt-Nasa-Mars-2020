"use strict"

const isStrNotEmpty = function (a) {
    const result = (a)? true : false;
    return result;
}

const a = "abc";
const b = "";
console.log(isStrNotEmpty(a));
console.log(isStrNotEmpty(b));