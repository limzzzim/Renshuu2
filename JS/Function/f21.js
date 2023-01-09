function isPrime(number) {
    let start = 2;
    if (number <= 1) {
        console.log(`${number} Không phải là số nguyên tố`);
    }
    if (start <= number - 1) {
        if (number % start == 0) {
            console.log(`${number} Không phải là số nguyên tố`);
        } else {
            console.log(`${number} Là số nguyên tố`);
        }
    }
}
isPrime(89);