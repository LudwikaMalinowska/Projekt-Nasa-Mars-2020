"use strict"

const wieksze = function (tab, liczba) {

    const tab2 = [];
    for (let i = 0; i < tab.length; i++){

        if (tab[i] > liczba){
            tab2.push(tab[i])
        }
    }

    return tab2;
};

const tab = [1,2,3,4,5,6,7,8,9,10]
const number = 3;
const tab2 = wieksze(tab, number);
console.log(tab2);