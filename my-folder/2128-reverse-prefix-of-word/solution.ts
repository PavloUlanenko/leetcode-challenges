function reverseSubstring(s: string): string {
    const arr = s.split('');
    let start = 0;
    let end = s.length - 1;

    while (start < end) {
        [arr[end], arr[start]] = [arr[start], arr[end]];

        start++;
        end--;
    }

    return arr.join('');
}

function findPrefixIndex(s: string, prefix: string): number {
    let res = -1;
    for (let i=0; i<s.length; i++) {
        if (s.slice(i, prefix.length + i) === prefix) {
            res = i;
            break;
        }
    }

    return res;
}

function reversePrefix(word: string, ch: string): string {
    const matchInd = findPrefixIndex(word, ch);

    return matchInd === -1 ? word : reverseSubstring(word.slice(0, matchInd + ch.length)) + word.slice(matchInd + ch.length);
};
