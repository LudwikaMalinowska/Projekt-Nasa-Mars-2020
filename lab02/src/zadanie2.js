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

//Zadanie 2.3
console.log("Zadanie 2.3: ");
const nazwaCena = (arr1, arr2) => arr1.reduce( (prev, curr) => {
   arr2[curr.name] = curr.netto;
}, []);
const arr1 = [];
nazwaCena(wishlist, arr1);
console.log(arr1);

//Zadanie 2.4
console.log("\nZadanie 2.4: ");
const arr2 = [];
wishlist.map( n => arr2[n.name] = n.netto);
console.log(arr2);

//Zadanie 2.5
console.log("\nZadanie 2.5: ");
const findLess500 = (arr1, arr2) => arr1.reduce( (prev, curr) => {
    if (curr.netto < 500){
        arr2.push(curr);
    }
}, []);
const arr3 = [];
findLess500(wishlist, arr3);
console.log(arr3);

//Zadanie 2.6
console.log("\nZadanie 2.6: ");
const findEl = (arr1, el) => arr1.reduce( (prev, curr) => {
    if (curr.name === el) {
        return curr;
    }
    else if (prev !== undefined && prev.name === el){
        return prev;
    }
});
console.log(findEl(wishlist, 'Piekarnik'));
console.log(findEl(wishlist, 'Czajnik'));
console.log(findEl(wishlist, 'abc'));
