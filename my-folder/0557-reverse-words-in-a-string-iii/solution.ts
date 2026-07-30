function reverseArray(arr: string[]): string[] {
    let start = 0;
    let end = arr.length - 1;
    while (start<end) {
        [arr[end], arr[start]] = [arr[start], arr[end]];
        start++;
        end--;
    }

    return arr;
}
function reverseWords(s: string): string {
    let arr = s.split(/\s/);

    for (let i=0; i<arr.length; i++) {
        arr[i] = reverseArray(arr[i].split('')).join('');
    }

    return arr.join(' ');
};
