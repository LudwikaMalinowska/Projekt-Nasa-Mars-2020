"use strict"

const numberInStr = function (str) {

    let a = ""
    for (let i = 0; i < str.length; i++){
        if (!isNaN(parseInt(str[i]))){
            a += str[i];
        }
    }
    // console.log(a)
    return parseInt(a);
}

const a = "123";
const b = "12a";
const c = numberInStr(a);
const d = numberInStr(b);
console.log(c)
console.log(d)