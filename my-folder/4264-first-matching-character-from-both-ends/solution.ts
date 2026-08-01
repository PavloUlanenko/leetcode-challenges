function firstMatchingIndex(s: string): number {
    let start = 0;
    let end = s.length - 1;
    
    while (start<=end) {
        if (s[start] === s[end]) {
            return start;
        }
        start++;
        end--;
    }

    return -1;
};
