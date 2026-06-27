function findPermutationDifference(s: string, t: string): number {
    const map = {};
    let res = 0;

    for (let i=0; i<t.length; i++) {
        map[t[i]] = i;
    }

    for (let i=0; i<s.length; i++) {
        res += Math.abs(i - map[s[i]]);
    }

    return res;
};
