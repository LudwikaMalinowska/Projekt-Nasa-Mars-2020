"use strict";

const sumuj = (arr) => arr.reduce( (acc, curr) => {

    let sum1 = 0
    const keys = Object.keys(curr)

    for (let i = 0; i < keys.length; i++){
        let tab = curr[keys[i]];
        if (typeof tab !== "object"){
            tab = [tab];
        }
        // console.log(tab)
        sum1 += tab.length;
    }

    return acc + sum1;

}, 0)

const arr = [
    { key: 0, x: [4,5,6], y: [1,2,3,4]},
    { key: 0, x: [1], y: [] }
];

console.log(sumuj(arr));