function isStrictlyPalindromic(n: number): boolean {
    for (let i=2; i<Math.max(n-1, 3); i++) {
        const binaryStr = (n).toString(i);
        let start = 0;
        let end = binaryStr.length-1;

        while (start < end) {
            if (binaryStr[start] !== binaryStr[end]) return false;
            start++;
            end--;
        }
    }
    

    return true;
};
