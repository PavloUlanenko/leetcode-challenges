function countDigits(num: number): number {
    const originalNum = num;
    let res = 0;

    while (num > 0) {
        const lastDigit = num % 10;

        if (originalNum % lastDigit === 0) {
            res++;
        }

        num = Math.floor(num / 10);
    }

    return res;
};
