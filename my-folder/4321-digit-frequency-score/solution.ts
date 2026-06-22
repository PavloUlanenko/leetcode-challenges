function digitFrequencyScore(n: number): number {
    const nums = n.toString().split('');
    const map: Record<string, number> = {};

    while(true) {
        if (nums.length === 0) break;
        const letter = nums.pop();
        if (map[letter]) {
            map[letter] = map[letter] + 1;
        } else {
            map[letter] = 1;
        }
    }

    const res = Object.entries(map).reduce((acc, [k, v]) => {
        return acc + (+k * v) as number;
    }, 0);

    return res;
};
