function isPowerOfTwo(n: number): boolean {
    return n === 0 ? false : Math.log2(n) === Math.trunc(Math.log2(n));
};
