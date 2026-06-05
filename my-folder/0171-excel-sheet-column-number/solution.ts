function titleToNumber(columnTitle: string): number {
    const englishLettersNumber = 26;
    const firstLetterCharCode = 64;
    let res = 0;
    for (let i=0; i<=columnTitle.length - 1; i++) {
        const current = columnTitle[i];
        const code = current.charCodeAt(0) - firstLetterCharCode;
        res += code * Math.pow(englishLettersNumber, columnTitle.length - i - 1);
    }

    return res;
};
