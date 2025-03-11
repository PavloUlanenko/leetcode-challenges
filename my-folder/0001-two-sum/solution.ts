function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();
    for (let i=0; i<nums.length; i++) {
        const reminder = target - nums[i];
        if (map.has(reminder)) {
            return [map.get(reminder), i];
        }
        map.set(nums[i], i);
    }

    return [];
};
