'use strict';

// 1.1 
// Co wyświetlą na ekranie poniższe wywołania?

const book = {
    title: "Potop",
    author: "Henryk Sienkiewicz"
}
//
// console.log(book.__proto__ === Object.prototype); //true
// console.log(book.__proto__.__proto__ === null); //true

// 1.2. 
// Zastanów się, co należy wpisać w miejsce ..., tak aby każde wywołanie po odkomentowaniu zwróciło true.

const animals = ["dog", "cat", "rabbit", "hamster"];

// console.log(animals.__proto__ === Array.prototype);
// // console.log(animals.__proto__);
// // console.log(Array.prototype))
// console.log(animals.__proto__.__proto__ === Object.prototype);
// // console.log(animals.__proto__.__proto__)
// // console.log(Object.prototype)
// console.log(animals.__proto__.__proto__.__proto__ === null);
// // console.log(animals.__proto__.__proto__.__proto__);

// 1.3. 
// Co zostanie wyświetlone na ekranie w poniższym przykładzie?

// function Animal(animal) {
//     this.animal = animal;
// }
//
// var dog = new Animal('dog');
// var cat = new Animal('cat');
// dog.whatIs = function () {
//     console.log("It's a " + this.whatIs());
// }

// console.log(dog.__proto__ === Animal.prototype); //true
// console.log(dog.__proto__ === cat.__proto__); //true

// 1.4.
// Stwórz obiekt za pomocą funkcji CreateMovie (zawierający klucze bez wartości: director, title, year)
// wykorzystując słówko `this`.
// Jeśli przy tworzeniu obiektu rok nie zostanie podany powinien przyjmować wartość "unknown".

function CreateMovie(director, title, year) {
    this.director = director;
    this.title = title;
    if (year){
        this.year = year;
    } else {
        this.year = "unknown"
    }

    this.isOlder = (year) =>  {
        // console.log(this.year, year)
        if (this.year < year){
            return true
        } else {
            return false
        }
    }

    this.print = function () {
        console.log(this.director + ": " + this.title + " (" + this.year + ")")
    }

}

const movie1 = new CreateMovie("James Cameron","Titanic", 1997)
console.log(movie1)
movie1.print()
console.log(movie1.isOlder(2000))

// Następnie nie zmieniając implementacji funkcji CreateMovie, dodaj do niego metody: 
// * isOlder(year) - zwracającą true/false w zależności od tego, czy podany film jest młodszy/starszy nić rok 2000.
// * print - wyświetlającą: "director: title (year)"


// 1.5.
// Uzupełnij poniższy konstruktor o inicjalizację name, type i funkcję printInstrument. Funkcja
// printInstrument powinna być współdzielona między wszystkie utworzone obiekty.

const createInstrument = {};


function CreateInstrument(name, type) {
   const instrument = Object.create(createInstrument );
   instrument.name = name;
   instrument.type = type;

    instrument.printInstrument = function () {
        console.log(this.name + " - " + this.type)
    }


   return instrument;
}


const instr1 = new CreateInstrument("gitara", "instrumenty strunowe");
instr1.printInstrument()

// 1.6. 
// Uzupełnij poniższy konstruktor, który tworzy obiekt dziedziczący po Instrument. Wykorzystaj do jego stworzenia
// konstruktor z zadania poprzedniego.
// Zdefiniuj funkcję setStrings(number), która ustala liczbę strun w instrumencie (ta funkcja też powinna być
// współdzielona). NewStringInstrument powinien mieć też dostęp do funkcji, która znajduje się w Instrument.
// Podpowiedź: aby zmienić wartość zmiennej __proto__ należy użyć - Object.setPrototypeOf(object, prototype) -
// należy użyć tej funkcji dwa razy w tym rozwiązaniu.

console.log("\nZadanie 1.6: ")

function CreateStringedInstrument(name, type, stringsCount) {



    const newStringedInstrument = new CreateInstrument(name, type);
    newStringedInstrument.stringsCount = stringsCount;

    // newStringedInstrument.setStrings = function (strings) {
    //     this.stringsCount = strings;
    // }

    Object.setPrototypeOf(newStringedInstrument, {
        setStrings: function (strings) {
            this.stringsCount = strings;
        },
        printInstrument: newStringedInstrument.printInstrument
    })


    return newStringedInstrument;
}

const stringedInstrument = CreateStringedInstrument('gitara', 'strunowy', '3');
console.log(stringedInstrument)
stringedInstrument.printInstrument();
stringedInstrument.setStrings(4);
console.log(stringedInstrument)


// 1.7. 
// Przeanalizuj poniższy kod i odpowiedz na umieszczone w nim pytania.

function Instrument(name, type) {
    this.name = name;
    this.type = type;
}

Instrument.prototype.printInstrument = function () {
    console.log("Instrument: " + name + ", typ: " + type);
}
function StringedInstrument(stringsCount, name, type) {
    // Instrument.call(this, name, type);
    Instrument.apply(this, [name, type]);
    this.stringsCount = stringsCount;
}

StringedInstrument.prototype = Object.create(Instrument.prototype);

// // a) Stwórz instancję StringedInstrument.
//
// const instr2 = new stringedInstrument(6, "gitara", "strunowe");
// console.log(instr2)
//
// // b) W jaki sposób odwołać się do metod printInstrument i printStringedInstrument?
// //
// instr2.printInstrument()
// instr2.printStringedInstrument()
//
// // c) Zastąp wywołanie call() funkcją apply()

// 1.8.
// Utwórz obiekt Animal z polem 'name' i funkcją printName, po którym będą dziedziczyły
// Mammal (z polem age i funkcją getAge) i Fish (z polem weight i funkcją increaseWeight()) .
// Następnie stwórz kolejne obiekty - Dog (z polem breed i nadpisaniem funkcji getAge(),
// która tutaj będzie najpierw wywoływała funkcję getAge() z klasy dziedziczonej, a
// następnie mnożyła wynik razy 4 i wyświetlała go) i Salmon (z funkcją catch()), które
// będą dziedziczyły odpowiednio po Mammal i Fish.
// W razie problemów wzoruj się na rozwiązaniu z poprzedniego zadania.

console.log("\nZadanie 1.8:")

function Animal(name) {
    this.name = name;
    this.printName = function () {
        console.log(this.name);
    }
}

function Mammal(name, age) {
    const mammal = new Animal(name)
    this.age = age;

    this.getAge = () => this.age;
}

function Fish(name, weight) {
    const fish = new Animal(name);
    this.weight = weight;

    this.increaseWeight = function (howMuch) {
        this.weight += howMuch;
    }
}

const cat1 = new Mammal("Kot", 3);
const fish1 = new Fish("Ryba", 1);
console.log(cat1)
console.log(fish1)