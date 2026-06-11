function isPalindrome(x: number): boolean {
    if (x < 0) return false;
    if (x < 10) return true;

    let num = 0;
    let original = x;
    let reversed = 0;
    
    while (x > 0) {
        const lastDigit = x % 10;
        reversed = reversed * 10 + lastDigit;
        x = Math.floor(x / 10);
    }
    
    return original === reversed;
};
