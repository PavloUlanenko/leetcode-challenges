function sum(num1: number, num2: number): number {
    let sum = 0;
    let carryOut = 0;

    do {
        carryOut = num1 & num2;
        sum = num1 ^ num2;
        num1 = carryOut << 1;
        num2 = sum;
    } while (carryOut);

    return sum;
};
