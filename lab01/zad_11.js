"use strict"

const deleteNanEtc = function (tab) {

    const tab2 = []
    for (let i = 0; i < tab.length; i++){
        if (!isNaN(tab[i]) && tab[i] !== 0 && tab[i] !== null
        && tab[i] !== undefined && tab[i] !== false){
            tab2.push(tab[i])
        }
    }

    return tab2
}

const a = [1,0,false,null, NaN, 2,3,undefined];
const b = deleteNanEtc(a);
console.log(b);