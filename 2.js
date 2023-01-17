function isPrime(num) {
    num=Number(prompt('Введите первое число'));
    if (num == 1) {
        console.log(false);
    } else {
        for (let i = 2; i <= num / 2; i++) {
            if (!(num % i)) {
                console.log(false);
            }
        };
        console.log(true);
    }
};
isPrime("rez");