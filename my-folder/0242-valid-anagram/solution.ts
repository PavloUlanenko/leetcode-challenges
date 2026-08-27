function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    const map = new Map();

    for (const letter of s) {
        if (map.has(letter)) {
            map.set(letter, map.get(letter) + 1);
        } else {
            map.set(letter, 1);
        }
    }
console.log(map)
    for (const letter2 of t) {
        if (!map.has(letter2) || map.get(letter2) === 0) {
            return false;
        } else {
            map.set(letter2, map.get(letter2) - 1);
        }
    }

    return true;
};
