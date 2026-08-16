function decodeMessage(key: string, message: string): string {
    const map: { [key: string]: string } = {};
    key = key.replaceAll(' ', '');
    
    let alphabetIndex = 0;
    for (let i = 0; i < key.length && alphabetIndex < 26; i++) {
        if (!map[key[i]]) {
            map[key[i]] = String.fromCharCode(97 + alphabetIndex);
            alphabetIndex++;
        }
    }
    
    let res = '';
    for (const letter of message) {
        if (letter === ' ') {
            res += ' ';
        } else {
            res += map[letter] || letter;
        }
    }
    
    return res;
};
