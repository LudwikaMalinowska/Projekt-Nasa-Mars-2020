const wishlist = [
    {
        name: 'Czajnik',
        netto: 100
    },
    {
        name: 'Lodówka',
        netto: 1300
    },
    {
        name: 'Mikrofalówka',
        netto: 340
    },
    {
        name: 'Mikser',
        netto: 120
    },
    {
        name: 'Piekarnik',
        netto: 2100
    }
]

//zadanie 2.1
console.log("Zadanie 2.1: ");
const countList = (arr1) => arr1.reduce( (prev, curr) => {
    return prev + (curr.netto * 1.23);
}, 0);
const listPrice = countList(wishlist);
console.log(listPrice.toFixed(2));

//Zadanie 2.2
console.log("Zadanie 2.2: ");
const objectToPrices = (arr1, arr2) => arr1.reduce( (prev, curr) => {
    arr2.push(curr.netto);
}, []);
const ceny = [];
objectToPrices(wishlist, ceny);
console.log(ceny);