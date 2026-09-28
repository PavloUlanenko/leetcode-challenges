function mostWordsFound(sentences: string[]): number {
    return sentences.reduce((acc, el) => Math.max(acc, [...el.matchAll(/\s/g)].length), 0) + 1;
};
