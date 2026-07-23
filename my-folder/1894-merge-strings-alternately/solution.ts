function mergeAlternately(word1: string, word2: string): string {
    const mergedArr = [];
    let i = 0;
    let j = 0;

    while (i<word1.length || j<word2.length) {
        if (word1[i]) {
            mergedArr.push(word1[i]);
            i++
        }
        if (word2[j]) {
            mergedArr.push(word2[j]);
            j++;
        }
    }

    return mergedArr.join('');
};
