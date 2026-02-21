function firstUniqChar(s: string): number {
    const letters = new Map();
    for (let i=0;i<s.length;i++) {
        if (letters.has(s[i])) {
            letters.set(s[i], letters.get(s[i]) + 1);
        } else {
            letters.set(s[i], 1);
        }
    }
    let letter = -1;
    for (let i=0;i<s.length;i++) {
        if (letters.get(s[i]) === 1) {
            letter = i;
            break;
        }
    }
    return letter;
};
