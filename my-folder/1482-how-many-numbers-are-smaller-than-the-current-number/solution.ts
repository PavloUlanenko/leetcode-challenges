function smallerNumbersThanCurrent(nums: number[]): number[] {
    const numsSorted = nums.toSorted((a, b) => a - b);
    const res = [];

    for (let i=0; i<nums.length; i++) {
        for (let j=0; j<numsSorted.length; j++) {
            if (nums[i] === numsSorted[j]) {
                res.push(j);
                break;
            }
        }
    }

    return res;
};
