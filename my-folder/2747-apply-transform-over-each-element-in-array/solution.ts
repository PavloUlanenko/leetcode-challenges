function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    const arr2 = [];

    for (let i=0; i<arr.length; i++) {
        arr2.push(fn(arr[i], i));
    }

    return arr2;
};
