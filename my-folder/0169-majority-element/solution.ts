function majorityElement(nums: number[]): number {
    if (nums.length === 1) return nums[0];
    const map = new Map();

    for (let i=0; i<nums.length; i++) {
        if (map.has(nums[i])) {
            const res = map.get(nums[i]) + 1;
            if (res > nums.length / 2) return nums[i];
            map.set(nums[i], res);
        } else {
            map.set(nums[i], 1);
        }
    }
};
