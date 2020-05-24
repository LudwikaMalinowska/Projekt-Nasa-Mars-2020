class Ulamek {
    constructor(numerator, denumerator) {
        this.numerator = numerator;
        this.denumerator = denumerator;
    }

    multiplyBy(v) {
        if (typeof v === "number")
            this.numerator *= v;
        else if (v instanceof Ulamek){
            this.numerator *= v.numerator;
            this.denumerator *= v.denumerator;
        }

    }

    static multiply(x, y){
        this.numerator = x.numerator * y.numerator;
        this.denumerator = x.denumerator * y.denumerator;
        return new Ulamek(this.numerator, this.denumerator);
    }

    print(){
        console.log(this.numerator +"\n__\n" + this.denumerator + "\n");
    }
}

const u1 = new Ulamek(1,2);
const u2 = new Ulamek(3,4);
u1.multiplyBy(u2); // 1/2 * 3/4 = 3/8
u1.print()
u1.multiplyBy(2); // 6/8
u1.print()
const u3 = Ulamek.multiply(u1, u2); // 6/8 * 3/4 = 18/32
u3.print()

