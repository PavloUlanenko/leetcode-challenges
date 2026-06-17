function concatWithReverse(nums: number[]): number[] {
    const ans = nums.concat();

    for (let i=nums.length-1; i>=0; i--) {
        ans.push(nums[i])
    }

    return ans;
};
