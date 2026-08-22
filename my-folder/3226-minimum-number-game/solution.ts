function numberGame(nums: number[]): number[] {
    nums.sort((a, b) => a - b);

    for (let i=0; i<nums.length-1; i+=2) {
        [nums[i+1], nums[i]] = [nums[i], nums[i+1]];
    }


    return nums;
};
