function reversePrefix(s: string, k: number): string {
    const arr = s.split('');;
    let i = 0;
    let j = k - 1;
    
    while (i<j) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
        
        i++;
        j--;
    }

    return arr.join('');
};
