function reverseDegree(s: string): number {
    let res = 0;

    for (let i=0; i<s.length; i++) {
        res += (123 - s.charCodeAt(i)) * (i + 1);
    }

    return res;
};
