const numbers = [
2,4,5,1,0,9,14,30
];

const doubled2 = function (n) {
        return n**2
}
console.log(numbers.map(doubled2));

const smaller9 = function (n) {
    return n < 9
}
console.log(numbers.filter(smaller9));


const smaller5 = n => n < 5;
console.log(numbers.filter(smaller5));

const even2 = n => n%2 === 0;
console.log(numbers.filter(even2));

const odd2 = n => n%2 === 1;
console.log(numbers.filter(odd2));

const multiplied4 = n => n * 4;
console.log(numbers.map(multiplied4));

const multiplied2 = n => n*2;
console.log(numbers.map(multiplied2));

// const doubled = numbers.map(n => n ** 2);
// console.log(doubled);
//
// const smallerThan9 = numbers.filter(n => n < 9);
// console.log(smallerThan9);
//
// const smallerThan5 = numbers.filter(n => n < 5);
// console.log(smallerThan5);
//
// const even = numbers.filter(n => n%2 === 0);
// console.log(even);
//
// const odd = numbers.filter(n => n%2 === 1);
// console.log(odd);
//
// const multipliedBy4 = numbers.map(n => n*4);
// console.log(multipliedBy4);
//
// const multipliedBy2 = numbers.map(n => n*2);
// console.log(multipliedBy2);