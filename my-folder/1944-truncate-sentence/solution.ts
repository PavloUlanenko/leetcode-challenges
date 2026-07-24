function truncateSentence(s: string, k: number): string {
    let counter = 0;
    for (let i=0; i<s.length; i++) {
        if (counter === k) return s.slice(0, i-1);
        if (s[i] === ' ') counter++;
    }

    return s;
};
