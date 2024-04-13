function power(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

let base = 2;
let exponent = 3;

let result = power(base, exponent);
console.log(result);
