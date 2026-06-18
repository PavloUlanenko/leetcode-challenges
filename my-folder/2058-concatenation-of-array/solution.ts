function getConcatenation(nums: number[]): number[] {
    const res: number[] = [];

    for (let i=0; i<nums.length * 2; i++) {
        if (i >= nums.length) {
            res.push(nums[i - nums.length]);
        } else {
            res.push(nums[i])
        }
    }

    return res;
};
