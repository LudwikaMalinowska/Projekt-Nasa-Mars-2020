"use strict"

//1.1
const sum = (arr) => arr.reduce((x, y) => x + y, 0)
console.log(sum([1, 2, 3, 4, 5, 6, 7]))

//1.2
const delet = (arr) => arr.reduce((prev, curr, index, arr) => {
    // console.log(curr)
    if (curr < 0){
        arr.splice(index, 1);
        curr = prev;
        index = index - 1;
    } else {
        arr[index] = curr * curr;
    }

    return arr
}, arr)

const arr1 = [1, -2, 3, -4, 5, 6, 7]
const arr2 = delet(arr1)
console.log(arr2)

//zad 1.3
const indeksy = (arr) => arr.reduce((prev, curr, index, arr) => {

    console.log(index + ": " + curr)
}, 0)

console.log("\nZadanie 1.3:")
const arr3 = [1, -2, 3, -4, 5, 6, 7]
console.log(arr3)
indeksy(arr3)

//zadanie 1.4
const arr4 = ['js', 'react', 'js', 'angular', 'angular', 'js']
const powtozenia = (arr) => arr.reduce((prev, curr, index, arr) => {

    // console.log(index + ": " + curr)
    if (isNaN(dict[`${curr}`])){
        dict[`${curr}`] = 1
    } else {
        dict[`${curr}`] += 1
    }


}, dict)

const dict = {}
powtozenia(arr4)
console.log(dict)


