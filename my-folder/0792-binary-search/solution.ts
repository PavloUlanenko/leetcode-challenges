function search(nums: number[], target: number): number {
    const median = Math.floor(nums.length / 2);

    if (nums[median] === target) return median;
    if (nums.length === 0 || nums.length === 1) return -1;
    if (nums[median] > target) {
        return search(nums.slice(0, median), target);
    } else {
        const res = search(nums.slice(median), target);
        return res === -1 ? res : res + median;
    }
};
