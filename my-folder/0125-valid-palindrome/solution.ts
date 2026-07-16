function isPalindrome(s: string): boolean {
    const convertedString = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let i = 0;
    let j = convertedString.length - 1;
    let isPalindrome = true;

    while (i<j) {
        if (convertedString[i] !== convertedString[j]) {
            isPalindrome = false;
            break;
        }
        i++;
        j--;
    }

    return isPalindrome;
};
