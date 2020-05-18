"use strict"

const printTab = function(tab){

    for (let i = 0; i < tab.length; i++){
        console.log("Rząd " + i);
        for (let j = 0; j < tab[i].length; j++){
            console.log(tab[i][j]);
        }
    }
}


let a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27],
    [7, 4, 28, 14], [3, 10, 26, 7]];

printTab(a);