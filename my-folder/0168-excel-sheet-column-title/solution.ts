function convertToTitle(columnNumber: number): string {
    const map = new Map();
    let str = '';
    const firstCapitalACharCode = 65;
    const totalEnglishLetters = 26;
    for (let i=0; i<totalEnglishLetters; i++) {
        map.set(i+1, String.fromCharCode(firstCapitalACharCode + i));
    }

    while (columnNumber > 0) {
        columnNumber--;
        let remainder = columnNumber % totalEnglishLetters;
        str = map.get(remainder + 1) + str;
        columnNumber = Math.floor(columnNumber / totalEnglishLetters);
    }

    return str;
};
