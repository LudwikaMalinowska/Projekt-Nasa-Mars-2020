"use strict"

const countVat = function (tab) {
    let suma = 0
    for (let i = 0; i < tab.length; i++) {
        suma = suma + tab[i]
        // console.log(tab[i])
    }

    suma = suma * 1.23

    return suma
}

const a = [1000, 2000, 3000]
console.log(countVat(a))