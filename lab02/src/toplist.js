const lp3 = [
    {
        author: 'Queen',
        song: 'Bohemian Rhapsody',
        place: 1,
        change: 0
    },
    {
        author: 'Deep Purple',
        song: 'Child in time',
        place: 2,
        change: 2
    },
    {
        author: 'The Doors',
        song: 'Riders on the storm',
        place: 3,
        change: 2
    },
    {
        author: 'King Crimson',
        song: 'Epitaph',
        place: 4,
        change: 5
    },
    {
        author: 'Led Zeppelin',
        song: 'Stairway to heaven',
        place: 5,
        change: -2
    },
    {
        author: 'Pink Floyd',
        song: 'Wish you were here',
        place: 6,
        change: 0
    },
    {
        author: 'John Lennon',
        song: 'Imagine',
        place: 7,
        change: 1
    },
    {
        author: 'Metallica',
        song: 'Nothing else matters',
        place: 8,
        change: 2
    },
    {
        author: 'Eagles',
        song: 'Hotel California',
        place: 9,
        change: 5
    },
    {
        author: 'Marillion',
        song: 'Kayleigh',
        place: 10,
        change: 13
    },
    {
        author: 'Black Sabbath',
        song: 'Paranoid',
        place: 11,
        change: 9
    },
    {
        author: 'Pink Floyd',
        song: 'Shine on you crazy diamond',
        place: 12,
        change: 4
    },
    {
        author: 'Czesław Niemen',
        song: 'Dziwny jest ten świat',
        place: 13,
        change: 5
    },
    {
        author: 'Dire Straits',
        song: 'Brothers in arms',
        place: 14,
        change: -12
    },
    {
        author: 'Pink Floyd',
        song: 'Comfortably numb',
        place: 15,
        change: 7
    },
    {
        author: 'Omega',
        song: 'Gyongyhaju lany',
        place: 16,
        change: 14
    },
    {
        author: 'Queen',
        song: 'Show must go on',
        place: 17,
        change: 7
    },
    {
        author: 'Pink Floyd',
        song: 'Hey you',
        place: 18,
        change: 11
    },
    {
        author: 'The Animals',
        song: 'The house of rising sun',
        place: 19,
        change: 15
    },
    {
        author: 'Deep Purple',
        song: 'Smoke on the water',
        place: 20,
        change: 15
    },
    {
        author: 'Pink Floyd',
        song: 'Another brick in the wall part II',
        place: 21,
        change: 10
    },
    {
        author: 'Dżem',
        song: 'List do M.',
        place: 22,
        change: 17
    },
    {
        author: 'The Beatles',
        song: 'Hey Jude',
        place: 23,
        change: 20
    },
    {
        author: 'Deep Purple',
        song: 'Perfect strangers',
        place: 24,
        change: 27
    },
    {
        author: 'AC/DC',
        song: 'Highway to hell',
        place: 25,
        change: 20
    },
    {
        author: 'Led Zeppelin',
        song: 'Whole lotta love',
        place: 27,
        change: 21
    },
    {
        author: 'The Rolling Stones',
        song: 'Ange',
        place: 28,
        change: 30
    },
    {
        author: 'The Moody Blues',
        song: 'Nights in white satin',
        place: 29,
        change: 43
    },
    {
        author: 'Procol Harum',
        song: 'A whiter shade of pale',
        place: 30,
        change: 44
    },
    {
        author: 'Jimi Hendrix Experience',
        song: 'Hey Joe',
        place: 31,
        change: 23
    },
    {
        author: 'Myslovitz',
        song: 'Długość dźwięku samotności',
        place: 32,
        change: 46
    },
]

// Zadanie 3.1
console.log("Zadanie 3.1: ");
const findQueen = (arr1, arr2) => arr1.reduce( (prev, curr) => {
    if(curr.author === 'Queen'){
        arr2.push(curr);
    }
}, []);
const queenSongs = [];
findQueen(lp3, queenSongs);
console.log(queenSongs);

// Zadanie 3.2
console.log("\nZadanie 3.2: ");
const findChange10 = (arr1, arr2) => arr1.reduce( (prev, curr) => {
   if (curr.change >= 10){
       arr2.push(curr)
   }
}, []);
const change10Songs = [];
findChange10(lp3, change10Songs);
console.log(change10Songs);

// Zadanie 3.3
console.log("\nZadanie 3.3: ");
const sortFunction = (x,y) => x.change - y.change;
const n = 5;
const lp3sorted = [...lp3]
const sortAndDelete = (arr1) => arr1.sort(sortFunction).splice(arr1.length - n, n);
sortAndDelete(lp3sorted);
console.log(lp3sorted);

// Zadanie 3.4
console.log("\nZadanie 3.4: ");
const firstPlace = {}
const get1stPlace = (arr1, arr2) => arr1.map(n => {
    if (n.place === 1){
        arr2['author'] = n.author;
        arr2['song'] = n.song;
    }
});
get1stPlace(lp3sorted, firstPlace);
console.log(firstPlace);
// console.log(lp3sorted);

// Zadanie 3.5
console.log("\nZadanie 3.5: ");
const liczby = ["a",2,3,5,6,8,9]
const wyswietlUtwory = (arr1, arr2) => {

    arr2.forEach(_ =>{
            if (isFinite(_)){
                const song = arr1.find(x => x.place === _)
                console.log(song)
            }
    })
}
wyswietlUtwory(lp3, liczby)

// Zadanie 3.6
console.log("\nZadanie 3.6: ");
const wypiszNRazy = (n, min, max) => {


    const randomInt = (min, max) => {
        return min + Math.floor((max - min) * Math.random());
    }
    const random = randomInt(min, max);
    console.log("Utwór nr: " + random)

    for (let i = 0; i < n; i++){
        console.log(lp3.find(n => n.place === random));
    }
};
wypiszNRazy(3, 1, 10);

// Zadanie 3.7
console.log("\nZadanie 3.7: ");
const wypisz = (arr1, number = 1) => {

    if (number > 10)
        return 0;
    else if (number === 1)
        console.log(arr1.find(n => n.place === number))
    else
        setTimeout(() => console.log(arr1.find(n => n.place === number)), 5000 * number)

    wypisz(arr1, number + 1)
}
// wypisz(lp3)

// Zadanie 3.8
console.log("\nZadanie 3.8: ");
const spadekNaLiscie = [];
const spadek = (arr1, arr2) => arr1.map(n => {
    if (n.change < 0)
        arr2.push(n)
});
spadek(lp3, spadekNaLiscie);
console.log(spadekNaLiscie);

// Zadanie 3.9
console.log("\nZadanie 3.9: ");
const lista = {}
const nazwaKlucz = (arr1, arr2) => {
    arr1.forEach(n => {
        arr2[n.song] = n;
    })
};
nazwaKlucz(lp3, lista);
console.log(lista);


// Zadanie 3.10
console.log("\nZadanie 3.10: ");
const lista2 = {}
const zespolKlucz = (arr1, arr2) => {
    arr1.forEach(n => {
        if (!arr2.hasOwnProperty(n.author)){
            arr2[n.author] = [{ song: n.song, place: n.place }]
        } else {
            arr2[n.author].push({ song: n.song, place: n.place })
        }
    })
};
zespolKlucz(lp3, lista2);
console.log(lista2);

// Zadanie 3.11
console.log("\nZadanie 3.11: ");
const count = (arr1, arr2) => arr1.forEach(n => {
    if (!arr2.hasOwnProperty(n.author)){
        arr2[n.author] = 1;
    } else {
        arr2[n.author] += 1;
    }
})
const czestosc = {};
count(lp3, czestosc);
console.log(czestosc);
