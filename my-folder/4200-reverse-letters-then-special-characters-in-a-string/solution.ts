function isLetter(l: string): boolean {
    const aCode = 97;
    const zCode = 122;

    return l.charCodeAt(0) >= aCode && l.charCodeAt(0)<= zCode;
}

function reverseByType(s: string): string {
    let startLetter = 0;
    let endLetter = s.length - 1;
    let startSpecial = 0;
    let endSpecial = s.length - 1;
    const res = s.split('');

    while (startLetter < endLetter) {
        const isStartLetter = isLetter(res[startLetter]);
        const isEndLetter = isLetter(res[endLetter]);
        if (isStartLetter && isEndLetter) {
            [res[endLetter], res[startLetter]] = [res[startLetter], res[endLetter]];
            startLetter++;
            endLetter--;
        } else if (isStartLetter) {
            endLetter--;
        } else if (isEndLetter) {
            startLetter++;
        } else {
            startLetter++;
            endLetter--;
        }
    }

    while (startSpecial < endSpecial) {
        const isStartLetter = isLetter(res[startSpecial]);
        const isEndLetter = isLetter(res[endSpecial]);
        if (!isStartLetter && !isEndLetter) {
            [res[endSpecial], res[startSpecial]] = [res[startSpecial], res[endSpecial]];
            startSpecial++;
            endSpecial--;
        } else if (!isEndLetter) {
            startSpecial++;
        } else if (!isStartLetter) {
            endSpecial--;
        } else {
            startSpecial++;
            endSpecial--;
        }
    }

    return res.join('');
};
