
const czyPierwsza = function (liczba) {

    // console.log(typeof liczba);
    if (typeof liczba !== 'number'){
        console.log('Błędny argument');
        return false
    } else {

        const pierwiastek = (Math.floor(Math.sqrt(liczba)));
        // console.log(pierwiastek)
        for(let i = 2; i <= pierwiastek; i++){
            // console.log(liczba/i)
            if (liczba % i === 0) {
                return false

            }
        }
        return true

    }
}

const czy1 = czyPierwsza(25)
console.log(czy1)