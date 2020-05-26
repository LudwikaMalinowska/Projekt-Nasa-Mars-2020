"use strict";
const _ = require('lodash');

const fun1 = (arr, length, arr2) => arr.reduce( (acc, curr, index) => {

    // console.log(index)
    if (index % 3 === 0)
        return [...acc, [curr]];
    else {
        const i = Math.floor(index / 3);
        acc[i].push(curr);
        return acc;
    }

}, []);

const tab = [1,2,3,4,5,6,7,8,9,10];
const arr2 = fun1(tab, 3);
console.log(arr2);