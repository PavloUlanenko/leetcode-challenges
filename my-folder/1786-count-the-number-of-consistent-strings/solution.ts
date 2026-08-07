function countConsistentStrings(allowed: string, words: string[]): number {
    const set = new Set(allowed.split(''));
    let counter = 0;
    console.log(set);

    for (let i=0; i<words.length; i++) {
        for (let j=0; j<words[i].length; j++) {
            if (!set.has(words[i][j])) {
                break;
            } else if (j === words[i].length-1) {
                counter++;
            }
        }
    }

    return counter;
};
