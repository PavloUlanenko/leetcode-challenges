function convertToBinary(num: number): string {
    if (num === 0) return '0';
    let res = '';

    while (num > 0) {
        if (num % 2 === 1) {
            res += '1';
        } else {
            res += '0';
        }
        num = Math.floor(num / 2);
    }
    return [...res].reverse().join('');
}

function convertDateToBinary(date: string): string {
    const parts = date.split('-');
    const res = [];

    for (let i=0; i<parts.length; i++) {
        const num = parseInt(parts[i], 10);
        res.push(convertToBinary(num));
    }

    return res.join('-');
};
