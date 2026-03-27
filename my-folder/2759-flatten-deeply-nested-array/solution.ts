type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr:  MultiDimensionalArray, n: number):  MultiDimensionalArray {
    if (n === 0) return arr;
    const res = [];
    
    for (let i=0; i<arr.length; i++) {
        const isArray = Array.isArray(arr[i]);
        if (isArray) {
            res.push(...flat(arr[i] as MultiDimensionalArray, n - 1));
        } else {
            res.push(arr[i]);
        }
    }

    return res;
};
