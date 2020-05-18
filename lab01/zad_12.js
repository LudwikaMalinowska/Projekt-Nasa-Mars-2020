"use strict"

const czyString = function (a) {
    const result = (typeof a === 'string') ? true : false;
    return result;
}

const a = "abc";
const b = 1;
const c = czyString(a);
const d = czyString(b);
console.log(c);
console.log(d);