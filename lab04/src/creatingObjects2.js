// Brawo, teraz wiesz jak działa słowo kluczowe new :) 
// 1. Uprość funkcję BookCreator tak, aby zawierała tylko nadawanie
// wartości polom. (użyj operatora this)
// Dodaj wywołanie słowa kluczowego new, przy wywołaniu BookCreator(). 

function BookCreator(title, author, readers) {
    this.title = title;
    this.author = author;
    this.readers = readers;
}

const book3 = new BookCreator('Cień wiatru', 'Carlos Ruiz Zafon', 2000);
const book4 = new BookCreator('Ojciech Chrzestny', 'Mario Puzo', 5000);


// BookCreator jest konstruktorem, a je zawsze (ZAWSZE) deklarujemy zaczynając
// nazwę od wielkiej litery

// 1.1. Użyj zmiennej prototype, aby dodać funkcje print() i addReader() do
// tworzonych obiektów.

BookCreator.prototype ={
    print: function () {
        console.log(this.author + " - " + this.title + " - czytelnicy: " + this.readers)
    },
    addReader: function () {
        this.readers += 1;
    }
}


// 2. Tworzymy alternatywną wersję powyższego kodu. Użyj słów kluczowych class
// i constructor, aby osiągnąć powyższy efekt.

const BookCreator2 = class {
    constructor(title, author, readers) {
        this.title = title;
        this.author = author;
        this.readers = readers;
    }

    print() {
        console.log(this.author + " - " + this.title + " - czytelnicy: " + this.readers)
    }
    addReader() {
        this.readers += 1;
    }

}

const book5 = new BookCreator2('Cień wiatru', 'Carlos Ruiz Zafon', 2000);
const book6 = new BookCreator2('Ojciech Chrzestny', 'Mario Puzo', 5000);

book5.addReader()
book5.print()

// 3. Znasz już wiele sposób na stworzenie obiektu. Dlaczego więc nie użyć arrow function?
// Uzupełnij poniższy kod o inicjalizację pola name i age. Dodaj wewnąrz funkcję addAge, która inkrementuje wiek. 

const Person = name => ({
    // inicjalizacja
})


// Przetestuj działanie tak stworzonego obiektu, korzystając z wiedzy, którą już masz. Jakie są róznice pomiędzy stworzeniem obiektu za pomocą poprzednich metod?
// (przetestuj prototype, new itd.)