function removeDuplicates(nums: number[]): number {
    let k = 0;
    for (let i=0; i<nums.length; i++) {
        if (i && (nums[i] === nums[i - 1])) {
            continue;
        } else {
            nums[k] = nums[i];
            k++;
        }
    }

    nums.length = k;

    return nums.length;
};
