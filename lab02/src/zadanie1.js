"use strict"

//1.1
const sum = (arr) => arr.reduce((x, y) => x + y, 0)
console.log(sum([1, 2, 3, 4, 5, 6, 7]))

//1.2
const delet = (arr) => arr.reduce((prev, curr, index, arr) => {
    // console.log(curr)
    if (curr < 0){
        arr.splice(index, 1)
    }

    return arr
}, arr)

const arr1 = [1, -2, 3, -4, 5, 6, 7]
const arr2 = delet(arr1)
console.log(arr2)