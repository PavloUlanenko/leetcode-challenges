function maxFreqSum(s: string): number {
    const consonants = new Set("b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, w, x, y, z".split(', '));
    const consonantsMap: Record<string, number> = {};
    const vowelsMap: Record<string, number> = {};

    for (let i=0; i<s.length; i++) {
        if (consonants.has(s[i])) {
            if (consonantsMap[s[i]]) {
                consonantsMap[s[i]] += 1;
            } else {
                consonantsMap[s[i]] = 1;
            }
        } else {
            if (vowelsMap[s[i]]) {
                vowelsMap[s[i]] += 1;
            } else {
                vowelsMap[s[i]] = 1;
            }
        }
    }

    const maxConsonant = Math.max(...Object.values(consonantsMap).concat([0])) ?? 0;
    const maxVowel = Math.max(...Object.values(vowelsMap).concat([0])) ?? 0;

    return maxConsonant + maxVowel;
};
