"use strict"

const hello = function (str) {
    const result = (str === undefined) ? "Hello world" : "Hello " + str;
    console.log(result)
}

hello()
hello("aaa")