"use strict";

const f4 = function (tab) {
    // console.log(tab)
    if (tab.length === 1 || tab.length === 0){
        return true
    } else if (tab[0] !== tab[tab.length - 1]){
        return false;
    } else {
        return f4(tab.slice(1, tab.length - 1));
    }
}

console.log(f4([1,2,3,2,1]));
console.log(f4([1,2,3,1,1]));