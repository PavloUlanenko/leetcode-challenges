function plusOne(digits: number[]): number[] {
    let carry = 0;
    for (let i=digits.length - 1; i>=0; i--) {
        if (digits[i] !== 9) {
            digits[i] += 1;
            carry = 0;
            break;
        } else {
            digits[i] = 0;
            carry += 1;
        }
    }

    if (carry) digits.unshift(1);

    return digits;
};
