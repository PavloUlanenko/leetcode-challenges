function countPairs(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);
    let res = 0;
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        if (nums[left] + nums[right] < target) {
            res += right - left;
            left++;
        } else {
            right--;
        }
    }

    return res;
};
