function toLowerCase(s: string): string {
    const asciiCaseDifference = 32;
    const res = s.split('');

    for (let i=0; i<res.length; i++) {
        const asciiChar = res[i].charCodeAt(0);
        if (asciiChar < 91 && asciiChar > 64) {
            res[i] = String.fromCharCode(asciiChar + asciiCaseDifference);
        }
    }

    return res.join('');
};
