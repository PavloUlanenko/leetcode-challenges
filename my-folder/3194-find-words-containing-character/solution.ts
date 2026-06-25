function findWordsContaining(words: string[], x: string): number[] {
    const indices = [];

    for (let i=0; i<words.length; i++) {
        for (let j=0; j<words[i].length; j++) {
            if (words[i][j] === x) {
                indices.push(i);
                break;
            }
        }
    }

    return indices;
};
