"use strict";
const _ = require('lodash');

const getValue = (obj, path) => {

    const deep = path.split(".");
    // console.log(deep);
    const x = deep.reduce( (acc, curr, index) => {

        if (typeof acc === "undefined")
            return undefined;
        else
            return acc[deep[index]];

    }, obj);
    return (typeof x === 'undefined') ? null : x;
}

const obj = {
    person: {
        address: {
            street: 'Wiejska'
        },
        name: 'Tomasz'
    }
}

const x = getValue(obj, 'person.address.street');
console.log(x);