function search(nums: number[], target: number): number {
    let a = 0, b = nums.length - 1;
    while (a <= b) {
        const middle = Math.ceil((a + b) / 2);
        if (nums[middle] === target) {
            return middle;
        }
        if (nums[middle] < target) {
            a = middle + 1;
        } else {
            b = middle - 1;
        }
    }

    return -1;
};
