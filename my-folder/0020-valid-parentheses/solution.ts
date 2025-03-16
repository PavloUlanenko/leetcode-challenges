function isValid(s: string): boolean {
    const dictionary: Record<string, string> = {
        ')': '(',
        ']': '[',
        '}': '{',
    };
    const openingBrackets = Object.values(dictionary);
    const stack: string[] = [];

    for (let i=0; i<=s.length; i++) {
        if (s.length % 2 !== 0) {
            return false;
        }

        if (openingBrackets.includes(s[i])) {
            stack.push(s[i]);
        } else if (stack[stack.length - 1] === dictionary[s[i]]) {
            stack.pop();
        } else {
            return false;
        }
    }

    return true;
};
