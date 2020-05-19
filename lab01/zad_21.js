"use strict";

const f2 = function (fun1) {
    return fun1.name;
}

const g2 = function () {
    console.log("Helloo")
}

console.log(f2(g2));