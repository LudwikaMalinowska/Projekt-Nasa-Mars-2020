"use strict";

const f1 = function (fun) {

    return fun;
};

const g1 = function () {
    console.log("Hello");
};

f1(g1());