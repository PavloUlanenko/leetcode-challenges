function lengthOfLastWord(s: string): number {
    const wordRegexp = /\b\S+\b$/;

    return s.trim().match(wordRegexp)?.[0]?.length;
};
