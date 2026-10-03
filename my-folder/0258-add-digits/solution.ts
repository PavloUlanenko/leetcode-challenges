function addDigits(num: number): number {
    while (num > 9) {
        num = Math.floor(num/10) + num % 10;
    }

    return num;
};
