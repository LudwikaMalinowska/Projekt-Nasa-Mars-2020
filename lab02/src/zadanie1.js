"use strict"

//1.1
const sum = (arr) => arr.reduce((x, y) => x + y, 0)
console.log(sum([1, 2, 3, 4, 5, 6, 7]))

//1.2
const delet = (arr1, arr2) => arr1.reduce((prev, curr) => {

    if (curr > 0){
        arr2.push(curr ** 2);
    }

}, [])

const arr1 = [1, -2, 3, -4, 5, 6, 7];
const result = []
delet(arr1, result);
console.log(result);

//zad 1.3
const indeksy = (arr) => arr.reduce((prev, curr, index, arr) => {

    console.log(index + ": " + curr);
}, 0);

console.log("\nZadanie 1.3:");
const arr3 = [1, -2, 3, -4, 5, 6, 7];
console.log(arr3);
indeksy(arr3);

//zadanie 1.4
const arr4 = ['js', 'react', 'js', 'angular', 'angular', 'js'];
const powtozenia = (arr) => arr.reduce((prev, curr, index, arr) => {

    dict[`${curr}`] = (isNaN(dict[`${curr}`])) ?
        dict[`${curr}`] = 1 : dict[`${curr}`] += 1;

}, dict);

console.log("\nZadanie 1.4:");
const dict = {};
powtozenia(arr4);
console.log(dict);
console.log("\n\n");

