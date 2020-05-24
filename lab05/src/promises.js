'use strict';

// 3.1 Stwórz obiekt klasy Promise -> niech zakończy się powodzeniem (resolve)
// po 5 sekundach i zwróci string 'Udało się!'.
// Jako callback niech wypisze zwrócony string w konsoli.

// const prom = new Promise( (resolve, reject) => {
//     const waitTo = new Date().getTime() + 5000;
//     while(waitTo > new Date().getTime()) {}
//
//
//     // return resolve("Udało się!");
//
// })
//
// function resolved(message) {
//     console.log(message);
// }
//
// prom.then(resolved);



// 3.2 Zmodyfikuj powyższy kod tak, aby zamiast z sukcesem - promise
// zakończył się porażką i zwracał string 'Porażka'.
// Skorzystaj z then() aby obsłużyć błąd.

// const prom = new Promise( (resolve, reject) => {
//     const waitTo = new Date().getTime() + 1000;
//     while(waitTo > new Date().getTime()) {}
//
//
//     // return resolve("Udało się!");
//     return reject("Porażka");
// })
//
// function resolved(message) {
//     console.log(message);
// }
//
// function rejected(message) {
//     console.log(message);
// }

// prom.then(resolved).catch(rejected);


// 3.3 Zamiast then(), zmodyfikuj powyższy kod używając catch()

// 3.4 Napisz funkcję multiplyAsync(x,y), która zwraca obiekt klasy Promise, kończący 
// się porażką, gdy któryś za argumentów jest niepoprawny (nie jest liczbą).
// W przeciwnym przypadku zwraca iloczyn dwóch liczb. Napisz callback, który wypisuje wynik
// w konsoli.

function multiplyAsync(x,y) {
    return new Promise( (resolve, reject) => {
        if (typeof x !== "number" || typeof y !== "number"){
            return reject("Porażka.")
        } else {
            return resolve(x*y)
        }
        }
    )
}

function resolved(message) {
    console.log(message);
}

function rejected(message) {
    console.log(message);
}

multiplyAsync(5, 2).then(resolved).catch(rejected);

// 3.5 Dołącz axios do projektu. Wykonaj funkcję get dla następującego url: https://jsonplaceholder.typicode.com/posts. 
// Jako pierwszy callback - sprawdź czy response jest poprawny (status równy 200). Jeśli tak, to zwróć response, w przeciwnym wypadku wypisz błąd w konsoli.
// Jako następny callback - użyj destrukcji obiektów, aby wypisać w konsoli zmienną 'data' i 'headers'.

/* 3.6 Stwórz funkcję, która przyjmuje jako parametr obiekt takiej postaci:
{
    idUser: (pole typu int)
    title: (pole typu string)
    completed: (pole typu boolean)
}

Następnie wysyła taki obiekt za pomocą funkcji post z biblioteki axios pod url: https://jsonplaceholder.typicode.com/todos.
Jeśli dodanie zakończy się sukcesem - wyświetli w konsoli komunikat 'Dodano' i wyświetli id dodanego obiektu. W przeciwnym wypadku wypisze błąd.
*/