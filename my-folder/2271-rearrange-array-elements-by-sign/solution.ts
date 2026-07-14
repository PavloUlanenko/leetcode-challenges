function rearrangeArray(nums: number[]): number[] {
     const res: number[] = [];
    let i = 0;
    let j = 0;

    while (i < nums.length && nums[i] < 0) i++;
    while (j < nums.length && nums[j] > 0) j++;
    
    while (i < nums.length && j < nums.length) {
        res.push(nums[i]);
        i++;
        while (i < nums.length && nums[i] < 0) i++;
        res.push(nums[j]);
        j++;
        while (j < nums.length && nums[j] > 0) j++;
    }
    
    return res;
};
