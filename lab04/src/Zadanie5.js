
const f1 = (...args) => {
    console.log(args)

    let [a = "-", b = "-"] = args;

    if (b === "-"){
        [a = "-", b = "-"] = a;
    }

    const dict = {};
    dict[a] = b;
    return dict;
};
const val1 = f1("klucz", "wartość");
console.log(val1);
const val2 = f1(["klucz", "wartość"]);
console.log(val2);