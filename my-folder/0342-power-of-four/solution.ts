function isPowerOfFour(n: number): boolean {
    if (n < 1) return false;
    if (n === 1) return true;
    return n === 4 ? true : isPowerOfFour(n / 4);
};
