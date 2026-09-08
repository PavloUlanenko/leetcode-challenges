function sortSentence(s: string): string {
    const arr = s.split(' ');
    const res: string[] = [];

    for (let i=0; i<arr.length; i++) {
        const word = arr[i];
        res[parseInt(word[word.length-1]) - 1] = word.slice(0, word.length-1);
    }

    return res.join(' ');
};
