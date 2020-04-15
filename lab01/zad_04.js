"use strict"

const fun1 = (tab, a, b, c) => {

    newArr = []

    tab.forEach(el => {

        if (el !== a && el !== b && el !== c) {
            newArr.push(el)
        }
    });

    return newArr
}

const arr = [1000, 2000, 3000, 400]

const arr2 = fun1(arr, 1000, 2000, 3000)
console.log(arr2)