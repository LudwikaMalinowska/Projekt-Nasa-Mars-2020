"use strict"

const najczestszy = function (tab) {

    const dict = {}

    for (let i = 0; i < tab.length; i++){
        if (dict.hasOwnProperty(tab[i])){
            dict[tab[i]] += 1;
        } else {
            dict[tab[i]] = 1;
        }
    }

    let max = Object.keys(dict)[0];
    let maxNumber = dict[max];

    for (let k in dict){
        if (dict[k] > maxNumber){
            max = k;
            maxNumber = dict[k];
        }
    }

    console.log("liczba: " + max + " - " + maxNumber + "razy");
    return max;

}


const max = najczestszy([1,1,1,1,1,1,1,2,3,4,5,5,5,5,5,5]);
console.log(max)