type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    const res = [];

    for (let i=0; i<arr.length; i++) {
        const passes = fn(arr[i], i);
        if (passes) {
            res.push(arr[i]);
        }
    }

    return res;
};
