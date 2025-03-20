function addBinary(a: string, b: string): string {
    const maxLength = Math.max(a.length, b.length);
    
    a = a.padStart(maxLength, '0');
    b = b.padStart(maxLength, '0');

    let temp = 0;
    let result = '';

    for (let i = maxLength - 1; i >= 0; i--) {
        const sum = temp + parseInt(a[i]) + parseInt(b[i]);

        result = (sum % 2) + result;
        temp = Math.floor(sum / 2);
    }

    if (temp) {
        result = '1' + result;
    }

    return result;
};
