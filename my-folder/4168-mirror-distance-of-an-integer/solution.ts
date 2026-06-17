function reverse(num: number): number {
    let res = 0;
    while (num > 0) {
        const lastDigit = num % 10;
        res = lastDigit + res * 10;
        num = Math.floor(num / 10);
    }

    return res;
}

function mirrorDistance(n: number): number {
    return Math.abs(n - reverse(n))
};
