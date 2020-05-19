"use strict"

const f = function () {

    const num = 5
    return function (number) {
        return num + number;
    }
}

console.log(f()(2))