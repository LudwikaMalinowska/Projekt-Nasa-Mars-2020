'use strict';

// Zadanie 1 
// Co zwróci funkcja poniższa funkcja w każdym z poniższych przypadków?
// Wyjaśnij dlaczego w niektórych przypadkach wyniki różnią się.

function isEquals(val_1, val_2) {
    (val_1 == val_2) ? console.log('a'): console.log('b');
    (val_1 === val_2) ? console.log('c'): console.log('d');
}

isEquals(2, '2'); //a, d
//== porównuje wartości, a === też typy
isEquals(null, undefined); //a, d
//null jest traktowany przez js jako obiekt, a undefined jako typ danych
isEquals(undefined, NaN); //b, d
isEquals(['a', 'b', 'c'], ['b', 'c', 'd']); //b, d
isEquals(0, ''); //a, d
//pusty string ma wartość logiczną zero (false), niepusty string -> true
isEquals('0', ''); //b, d
isEquals(+0, -0); //a,c
isEquals(0, 'false'); //b, d
isEquals([1, 2], '1,2'); //a, d
//tablica [1, 2] ma wartość logiczną 1,2

!!false; //false
!!true; //true
!!undefined; //false
!!null; //false
//!null i !undefined mają wartość logiczną true, !true to false

// Zadanie 2
// Jaki będzie efekt działania poniższego fragmentu kodu?
// Wyjaśnij wynik

const person = {
    firstName: 'Jan',
    lastName: 'Kowalski'
}

console.log(person);
// {firstName: "Jan", lastName: "Kowalski"}
person = {};
// error, nie można przypisać do stałej const
console.log(person);
//{firstName: "Jan", lastName: "Kowalski"}

//ponowne przypisanie do stałej const się nie udało, więc wypisany na ekran został
//ponownie taki sam, niezmieniony obiekt person


// Zadanie 3 
// Co zostanie wyświetlone na ekranie?
// Wyjaśnij wynik

let number = 3;
console.log(number); {
    let number = 4;
    console.log(number);
}
console.log(number);

//3
//4
//3
//w bloku kodu została zadeklarowana nowa, druga zmienna number, która nie wpłynęła na
//zewnętrzną zmienną number, zmienna number = 4 istnieje tylko w tym bloku kodu

// Zadanie 4
// Czym się różnią poniższe dwa fragmenty kodu?
// Jak działa operator '...'?

// 1
const arr = [1, 2];
const newArr = [arr, 3, 4];
console.log(newArr)

// 2
const arr = [1, 2];
const newArr = [...arr, 3, 4];
console.log(newArr)

// Zadanie 4a
// Co zostanie wyświetlone na ekranie?
// Wyjaśnij wynik

const word = 'react';
const arrWord = [...word];
console.log(arrWord);

// Zadanie 5
// Zapoznaj się z kodem poniżej. Jaki będzie jego wynik i dlaczego?

var hello = 'Hello world!';
var result = hello / 2;

result;

Number.isNaN(result);
Number.isNaN(hello);

// Zadanie 6
// Zapoznaj się z przykłądami poniżej. Jaka jest różnica między var a let/const?

var car = 'BMW';

function showCar() {
    car = 'Audi';
    model = 'A5';
    console.log('Great car!');
}

showCar();

car;
model;

//-------

var person = 'Bryan';

(function differentName() {
    var person = 'Adam';
    console.log(person);
})();

console.log(person);

//-------

if (true) {
    var a = 2;
}
console.log(a);

if (true) {
    const a = 2;
}
console.log(b);

//-------

for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i);

for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i);

//-------

var test = "var1";
var test = "var2";

let test2 = "let1";
let test2 = "let2";

// Zadanie 7
// Do czego używany jest 'use strict' w pierwszej linijce skryptu?