"use strict"

const splaszcz = function(tab){

    const tab2 = []

    for (let i = 0; i < tab.length; i++){
        for (let j = 0; j < tab[i].length; j++){
            tab2.push(tab[i][j]);
        }
    }

    return tab2;
}

let a = [ [1,2,3], [4,5,6] ];
const b = splaszcz(a);
console.log(b);

