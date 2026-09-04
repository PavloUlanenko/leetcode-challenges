function findMissingElements(nums: number[]): number[] {
    const sorted = [...nums].sort((a, b) => a - b);
    const res: number[] = [];
    let i = 0;
    let expected = sorted[0];

    while (i < sorted.length && expected <= sorted[sorted.length - 1]) {
        if (sorted[i] === expected) {
            i++;
            expected++;
        } else if (sorted[i] > expected) {
            res.push(expected);
            expected++;
        } else {
            i++;
        }
    }

    return res;
};
