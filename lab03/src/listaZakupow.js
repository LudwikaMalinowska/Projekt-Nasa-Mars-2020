const _ = require("lodash");
const listaZakupow = [
    {
        produkt: "chleb",
        typ: "pieczywo",
        ilosc: 2,
        cena: 3.6,
        jednostka: "sztuk"
    },
    {
        produkt: "jabłka",
        typ: "owoce",
        ilosc: 6,
        cena: 2.5,
        jednostka: "kg"
    },
    {
        produkt: "mleko",
        typ: "nabiał",
        ilosc: 3,
        cena: 2.9,
        jednostka: "litry"
    },
    {
        produkt: "kawa",
        typ: "napoje",
        ilosc: 1,
        cena: 24,
        jednostka: "sztuk"
    },
    {
        produkt: "kefir",
        typ: "nabiał",
        ilosc: 2,
        cena: 2.4,
        jednostka: "sztuk"
    },
    {
        produkt: "woda",
        typ: "napoje",
        ilosc: 6,
        cena: 1.9,
        jednostka: "sztuk"
    },
    {
        produkt: "marchewka",
        typ: "warzywa",
        ilosc: 2,
        cena: 4,
        jednostka: "kg"
    },
    {
        produkt: "banan",
        typ: "owoce",
        ilosc: 1,
        cena: 4.6,
        jednostka: "kg"
    },
    {
        produkt: "herbata",
        typ: "napoje",
        ilosc: 2,
        cena: 8,
        jednostka: "sztuk"
    },
    {
        produkt: "ziemniaki",
        typ: "warzywa",
        ilosc: 5,
        cena: 3.5,
        jednostka: "kg"
    },
    {
        produkt: "jogurt",
        typ: "nabiał",
        ilosc: 8,
        cena: 1.4,
        jednostka: "sztuk"
    }
]

//3.1
console.log("3.1:")
const lista2 = listaZakupow.reduce( (acc, curr, index) => {

    acc.push({
        produkt: curr["produkt"],
        typ: curr["typ"],
        cena: (curr["ilosc"] * curr["cena"]).toFixed(2),
        jednostka: curr["jednostka"]
    });
    return acc
}, []);
console.log(lista2);


console.log("3.2:")
const cenaNabial = listaZakupow.reduce((acc = 0, curr, index, arr) => {

    if (curr.typ === "nabiał"){
        acc += curr.cena
    }
    return acc
}, 0)
console.log(cenaNabial)

console.log("3.3:")
const produktyNaKg = listaZakupow.filter(n => n.jednostka === "kg")

console.log(_.sortBy(produktyNaKg, 'produkt'));

//zadanie 3.4
console.log("3.4:")
const znajdzProduktyTypu = (typ) => listaZakupow.filter(n => n.typ === typ)
const owoceTansze10 = znajdzProduktyTypu("owoce")
    .filter(n => n.cena < 10.0)
// console.log(owoceTansze10)
console.log(owoceTansze10.sort((a,b) => a.cena - b.cena))


//zadanie 3.5
console.log("3.5:")
const prodNaSztuki = listaZakupow.filter(n => n.jednostka === "sztuk").map(n => n.produkt)
console.log(prodNaSztuki)

//zadanie 3.6
console.log("3.6:");

const printGrouped = (list) => {
    const grouped = _.groupBy(list, 'typ');

    // console.log("obj entries:")
    // console.log(Object.entries(grouped))
    const x = Object.entries(grouped)

    const reduced = x.map(n => [n[0], n[1].reduce( (acc, curr, index) => {
        console.log(curr)
        return [...acc, `${index + 1}. ${curr.produkt} - ${curr.ilosc} ${curr.jednostka}`]
    }, []) ]);

    reduced.map(n => {
        console.log(n[0]);
        n[1].forEach(m => {
            console.log(m)
        })
    })
};
printGrouped(listaZakupow);

