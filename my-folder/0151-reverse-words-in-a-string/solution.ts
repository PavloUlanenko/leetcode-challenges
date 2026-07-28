function reverseWords(s: string): string {
    const arr = s.trim().split(/\s+/);
    let start = 0;
    let end = arr.length - 1;

    while (start<end) {
        const temp = arr[start]
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }

    return arr.join(' ');
};
