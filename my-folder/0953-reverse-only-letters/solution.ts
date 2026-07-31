function isLetter(char: string): boolean {
    return char.match(/[a-zA-Z]/) !== null;
}

function reverseOnlyLetters(s: string): string {
    let start = 0;
    let end = s.length - 1;
    const res = s.split('');

    while (start < end) {
        if (isLetter(res[start]) && isLetter(res[end])) {
            [res[end], res[start]] = [res[start], res[end]];
            start++;
            end--;
            continue;
        }
        if (isLetter(res[start])) {
            end--;
            continue;
        }
        if (isLetter(res[end])) {
            start++;
            continue;
        } else {
            start++;
            end--;
        }
    }

    return res.join('');
};
