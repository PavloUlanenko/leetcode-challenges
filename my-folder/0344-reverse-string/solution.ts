/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let i = 0;
    let j = s.length-1;

    while (i<j) {
        let l1 = s[i];
        let l2 = s[j];
        s[i] = l2;
        s[j] = l1;
        i++;
        j--;
    }
};
