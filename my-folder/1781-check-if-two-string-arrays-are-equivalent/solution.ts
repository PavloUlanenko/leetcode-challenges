function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
    let str1 = '';
    let str2 = '';

    while (word1.length || word2.length) {
        if (word1.length) str1 += word1.shift();
        if (word2.length) str2 += word2.shift();
        const min = Math.min(str1.length, str2.length);
        if (str1.slice(0, min) !== str2.slice(0, min)) return false;
    }

console.log(str1, str2)
    return str1 === str2;
};
