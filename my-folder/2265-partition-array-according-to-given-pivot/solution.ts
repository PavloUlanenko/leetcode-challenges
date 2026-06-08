function pivotArray(nums: number[], pivot: number): number[] {
    const less = [];
    const equal = [];
    const greater = [];
    nums.forEach((el) => {
        if (el === pivot) equal.push(el);
        else if (el < pivot) less.push(el);
        else greater.push(el);
    });
    return [...less, ...equal, ...greater];
};
