function shuffle(nums: number[], n: number): number[] {
    const res = [];

    for (let i=0,j=n; i<nums.length - n; i++,j++) {
        res.push(nums[i], nums[j]);
    }

    return res;
};
