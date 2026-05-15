function searchInsert(nums: number[], target: number): number {
    function recursive(left, right) {
        if (left > right) return left;
        
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) return mid;
        if (nums[mid] < target) {
            return recursive(mid + 1, right);
        } else {
            return recursive(left, mid - 1);
        }
    }
    
    return recursive(0, nums.length - 1);
};
