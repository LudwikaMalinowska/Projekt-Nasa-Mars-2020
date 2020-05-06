// ========================================
// ZADANIE 1
// ========================================

//  Zdefiniuj pola 'title' i 'author' i funkcję print(), która wypisze: author - title

const book0 = {
    //properties
    title: "Gra o Tron",
    author: "George R.R Martin",
    print: function () {
        console.log(this.author + " - " + this.title)
    }
};

book0.print();

const book = {};

//properties
book.title = "Miecz Przeznaczenia";
book.author = "Andrzej Sapkowski";
book.print = function () {
        console.log(this.author + " - " + this.title)
    };

book.print();

const book2 = Object.create({});
//properties
book2.title = "Ostatnie Życzenie";
book2.author = "Andrzej Sapkowski";
book2.print = function () {
    console.log(this.author + " - " + this.title)
};

book2.print();

function BookCreator(title, author, readers) {
    // const b = {};
    // //properties
    // b.title= title;
    // b.author= author;
    //
    // return b;
    this.title = title;
    this.author = author;
    this.readers = readers;
}

BookCreator.prototype ={
    print: function () {
        console.log(this.author + " - " + this.title + " - czytelnicy: " + this.readers)
    },
    addReader: function () {
        // this.readers = this.readers + 1;
        this.readers += 1;
    }
}

const book3 = new BookCreator('Cień wiatru', 'Carlos Ruiz Zafon', 2000);
const book4 = new BookCreator('Ojciech Chrzestny', 'Mario Puzo', 5000);



// console.log(book3);
// console.log(book4);

console.log("\nbook 3 i book 4:")
book3.print();
book4.print();

book3.addReader()
console.log("\n book 3 po funkcji add reader")
book3.print()
// Carlos Ruiz Zafon - Cień wiatru - czytelnicy: 2001

// ========================================
// ZADANIE 2
// ========================================

// Przetestuj poniższy kod i odpowiedz na pytania

function testThis() {
    console.log(this);
}

testThis(); //obiekt globalny

function testThis2() {
    "use strict"
    console.log(this);
}

testThis2(); //undefined

// 2.1. Czym jest this?
// this odwołuje się do obiektu, w którym zostało wywołane
// na przykład w book02 this.author odwołuje się do właściwości author obiektu book02
// ale żeby odwołać cię do tej właściwości wewnątrz obiektu, trzeba użyć this

// 2.2. Do czego odwołuje się this w obu przypadkach
// w pierwszym przypadku this odwołuje się do obiektu globalnego, natomiast
// wynik drugiej funkcji to undefined


const person = {
    name: 'Oscar Wilde',
    print() {
        console.log("a: " + this.name); // oscar wilde
        // console.log(this); // tu byłoby: { name: 'Oscar Wilde', print: [Function: print] }

        function a() {
            console.log(this); // obiekt globalny
        }
        a();
    }
}
person.print();

// 2.3. Jakie wartości przyjmuje this w powyższych przypadkach i dlaczego?
// this.name przyjmuje wartość 'Oscar Wilde', bo odwołuje się do własności name obiektu person
// this z funkcji a odwołuje się do obiektu globalnego, ponieważ nie jest bezpośrednio w obiekcie,
// tylko w funkcji a wewnątrz funkcji print obiektu
// jakby this było poza funkcją a, odnosiłoby się do obiektu person

// 2.4. Zmodyfikuj powyższy kod w ten sposób, aby funkcja a wyświetlała w konsoli 'a: Oscar Wilde'. Nie używaj arrow function.

const printName = function() {
    console.log(this.name);
}

const person1 = {
    name: 'Aaron Towels',
    print: printName
}

const person2 = {
    name: 'Tom Clancy',
    print: printName
}

console.log("\nperson 1 i person 2:")
person1.print();
person2.print();

// 2.5. Za pomocą funkcji printName wypisz 'name' obu autorów. Nie zmieniaj implementacji funkcji printName!


const person3 = {
    name: 'Arthur Conan Doyle',
    print() {
        const a = () => {
            console.log(this);
        };
        a();
    }
}
person3.print();

// 2.6. Co wydrukuje w konsoli powyższy kod? Jaki scope ma arrow function?
// { name: 'Arthur Conan Doyle', print: [Function: print] }
// funkcja strzałkowa nie ma własnego this i w tym wypadku this odnosi się do obiektu person3,
// (w przypadku zwykłej funkcji this odnosiłoby się do obiektu globalnego)


// ========================================
// ZADANIE 3
// ========================================

// Powróćmy do zadania 1. 
// Dlaczego nasza funkcja BookCreator nie jest najlepszym rozwiązaniem do tworzenia obiektów?
// w funkcji book creator pierw deklarujemy pusty obiekt, a potem do niego dodajemy
// właściwości i funkcje print
// utworzenie funkcje print jako wspólnej przyspieszy działanie kodu i będzie zajmować
// mniej pamięci, w przypadku dużej liczby obiektów, bo nie będziemy musieli do każdego
// z nich z osobna dodawać funkcji print

// Zmodyfikuj funkcję BookCreator tak, aby inicjalizowała pola author i title. 
// Funkcję print zadeklaruj jako wspólną dla wszystkich obiektów tworzonych przez BookCreator.
// Dopisz do tworzonych obiektów pole readers, które będzie zawierało liczbę czytelników.
// Zadeklaruj funkcję addReader, która inkrementuje pole readers. addReader powinna być funkcją wspólną, tak jak print.

// ========================================
// ZADANIE 4
// ========================================

// Na stworzonym obiekcie wywołaj funkcję hasOwnProperty('isBestseller'). 
// ========================================
// Napisz dlaczego nasz obiekt ma do niej dostęp. (jeśli wyskakuje błąd - powróć do poprzedniego zadania lub spytaj prowadzącego)


// ========================================
// ZADANIE 5
// ========================================

// Odwołaj się do zmiennej __proto__ w stworzonym obiekcie, co zawiera ta zmienna i do czego służy?