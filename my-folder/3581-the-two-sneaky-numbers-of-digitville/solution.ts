function getSneakyNumbers(nums: number[]): number[] {
    const arr: number[] = [];
    const map = {};

    for (let i=0; i<nums.length; i++) {
        if (nums[i] in map) {
            arr.push(nums[i]);
        }
        map[nums[i]] = nums[i];
    }

    return arr;
};
