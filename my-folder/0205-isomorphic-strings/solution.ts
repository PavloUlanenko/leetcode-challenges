function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const obj1 = {};
    const obj2 = {};

    for (let i=0; i<s.length; i++) {
        if (!(s[i] in obj1)) obj1[s[i]] = i;
        if (!(t[i] in obj2)) obj2[t[i]] = i;

        if (obj1[s[i]] !== obj2[t[i]]) return false;
    }

    return true;
};
