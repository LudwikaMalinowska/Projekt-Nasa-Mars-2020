"use strict"

const najdluzszyWyraz = (function (str) {

    let str2 = str.split(" ")
    // console.log(str2);
    let max = str2[0];
    for (let i = 1; i < str2.length; i++){
        if (str2[i].length > max.length){
            max = str2[i];
        }
    }

    return max;
})("Ala ma kota");


console.log(najdluzszyWyraz);