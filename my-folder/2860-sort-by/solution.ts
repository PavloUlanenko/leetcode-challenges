type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (value: JSONValue) => number

function sortBy(arr: JSONValue[], fn: Fn): JSONValue[] {
    if (arr.length < 2) return [...arr];
    
    const pivot = arr[Math.floor(arr.length / 2)];
    const pivotVal = fn(pivot);
    
    const left = [];
    const right = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (i === Math.floor(arr.length / 2)) continue;
        
        if (fn(arr[i]) < pivotVal) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    
    return [...sortBy(left, fn), pivot, ...sortBy(right, fn)];
};
