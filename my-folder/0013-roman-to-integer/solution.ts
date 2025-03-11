function romanToInt(s: string): number {
    const pairs = new Map([
        ['IV', 4],
        ['IX', 9],
        ['XL', 40],
        ['XC', 90],
        ['CD', 400],
        ['CM', 900],
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ]);
    let res = 0;
    for (let i=0; i<s.length;) {
        const set = s[i]+s[i+1]
        if (pairs.has(set)) {
            res += pairs.get(set);
            i+=2;
        } else {
            res += pairs.get(s[i]);
            i++;
        }
    }
    return res;
};
