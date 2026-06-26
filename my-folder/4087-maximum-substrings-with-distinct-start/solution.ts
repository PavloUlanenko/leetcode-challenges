function maxDistinct(s: string): number {
    const set = new Set(s);

    return set.size;
};
