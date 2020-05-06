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

function BookCreator(title, author) {
    const b = {};
    //properties
    b["title"]= title;
    b["author"]= author;
    b.print = function () {
        console.log(b.author + " - " + b.title)
        // console.log("aaaaaa")
    };

}

const book3 = new BookCreator('Cień wiatru', 'Carlos Ruiz Zafon');
const book4 = new BookCreator('Ojciech Chrzestny', 'Mario Puzo');

console.log(book3);
console.log(book4);

// book3.print();
// book4.print();

// ========================================
// ZADANIE 2
// ========================================

// Przetestuj poniższy kod i odpowiedz na pytania

function testThis() {
    console.log(this);
}

testThis();

function testThis2() {
    "use strict"
    console.log(this);
}

testThis2();

// 2.1. Czym jest this?
// 2.2. Do czego odwołuje się this w obu przypadkach

const person = {
    name: 'Oscar Wilde',
    print() {
        console.log(this.name);

        function a() {
            console.log(this);
        }
        a();
    }
}
person.print();

// 2.3. Jakie wartości przyjmuje this w powyższych przypadkach i dlaczego?
// 2.4. Zmodyfikuj powyższy kod w ten sposób, aby funkcja a wyświetlała w konsoli 'a: Oscar Wilde'. Nie używaj arrow function.

const printName = function() {
    console.log(this.name);
}

const person1 = {
    name: 'Aaron Towels'
}

const person2 = {
    name: 'Tom Clancy'
}

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

// ========================================
// ZADANIE 3
// ========================================

// Powróćmy do zadania 1. 
// Dlaczego nasza funkcja BookCreator nie jest najlepszym rozwiązaniem do tworzenia obiektów?

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