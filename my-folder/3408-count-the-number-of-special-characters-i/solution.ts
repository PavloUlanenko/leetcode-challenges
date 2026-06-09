function numberOfSpecialChars(word: string): number {
    const unique = new Set(word);
    const uniqueCase = new Set(word.toLowerCase());

    return unique.size - uniqueCase.size;
};
