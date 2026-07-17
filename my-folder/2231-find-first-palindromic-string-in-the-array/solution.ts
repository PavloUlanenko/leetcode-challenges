function firstPalindrome(words: string[]): string {
    let k = 0;
    let match = false;

    while (k<words.length) {
        if (words[k].length === 1) return words[k];
        let i = 0;
        let j = words[k].length - 1;
        match = false;

        while (i<j) {
            if (words[k][i] !== words[k][j]) {
                match = false;
                break;
            } else {
                match = true;
            }

            i++;
            j--;
        }

        if (match) {
            return words[k]
        }

        k++;
    }

    return '';
};
