'use strict';
// Zadanie 2.1. Dopisz do pomiędzy deklaracją funkcji helloWorld, a poleceniem
// console.log instrukcję wywołania helloWorld() tak, aby na ekranie pojawiło się
// jako pierwsze 'No, hello universe!'.
// Nie możesz dopisać nic za console.log()


function helloWorld() {
    console.log('Hello world!');
}

// setTimeout(() => {
//     helloWorld()
// }, 1000);
//
//
//
// console.log('No, hello universe!');

// Zadanie 2.2. Napisz funkcję, która wypisuje w konsoli 'Start!' i po dwóch sekundach
// wypisuje 'Koniec'.
function start() {
    console.log("Start");
    setTimeout(() => {
        console.log("Koniec");
    }, 2000);
}

start()
// Zadanie 2.3. Napisz funkcję, która wypisuje 'Welcome' co sekundę w nieskończoność.

// Zadanie 2.4. Napisz funkcję, która wypisuje 'Welcome' co sekundę, ale tylko przez 5 sekund. Podpowiedź: (użyj clearInterval)

// Zadanie 2.5. Napisz funkcję, która przyjmuje trzy argumenty: funkcję i dwie liczby. Funkcja będzie wywołała podaną w argumencie funkcję co x milisekund i automatycznie zatrzyma się po upływie y milisekund.

  
  